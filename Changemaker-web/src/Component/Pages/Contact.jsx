import { useRef, useState } from "react";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import {
  FormSubmissionError,
  submitFormSubmission,
} from "../../api/formSubmissions";
import GoogleRecaptcha from "../../components/auth/GoogleRecaptcha";
import "./Contact.css";

const FORM_TYPE = "changemaker_contact";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY || "";

const Contact = () => {
  const { t, locale } = useMarketingTranslation();
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const resetRecaptcha = () => {
    recaptchaRef.current?.reset();
    setRecaptchaToken("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "" &&
    Boolean(recaptchaToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSending) return;

    if (!recaptchaToken) {
      setFormError(
        t("pages.contact.errors.securityCheckRequired") ||
          "Please complete the security check.",
      );
      return;
    }

    setIsSending(true);
    setFormError("");

    try {
      await submitFormSubmission({
        formType: FORM_TYPE,
        email: formData.email.trim(),
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        locale: locale || "en",
        source: "website",
        payload: {
          message: formData.message.trim(),
        },
        recaptchaToken,
      });

      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      resetRecaptcha();
    } catch (err) {
      setFormError(
        (err instanceof FormSubmissionError && err.message) ||
          err?.message ||
          t("pages.contact.errors.networkError"),
      );
      resetRecaptcha();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>{t("pages.contact.title")}</h2>

        {submitted ? (
          <div className="success-message">
            <h3 style={{ color: "#28a745" }}>
              {t("pages.contact.success.title")}
            </h3>
            <p>{t("pages.contact.success.message")}</p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormError("");
              }}
              className="submit-btn"
              style={{
                marginTop: "15px",
                backgroundColor: "rgb(255, 192, 103)",
                color: "black",
              }}
            >
              {t("pages.contact.success.sendAnother")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="firstName">{t("pages.contact.form.firstName")}</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">{t("pages.contact.form.lastName")}</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("pages.contact.form.email")}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("pages.contact.form.message")}</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <div className="form-group">
              <label>{t("pages.contact.form.securityCheck")}</label>
              <GoogleRecaptcha
                ref={recaptchaRef}
                siteKey={RECAPTCHA_SITE_KEY}
                onChange={setRecaptchaToken}
                onExpired={() => setRecaptchaToken("")}
              />
              {formError && (
                <p className="error-text" style={{ color: "red" }}>
                  {formError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={!isFormValid || isSending}
              style={{
                backgroundColor:
                  isFormValid && !isSending
                    ? "rgb(255, 192, 103)"
                    : "#ffc06785",
                color: "black",
                cursor: isFormValid && !isSending ? "pointer" : "not-allowed",
              }}
            >
              {isSending
                ? t("pages.contact.form.sending")
                : t("pages.contact.form.sendMessage")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
