import { useState, useEffect } from "react";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import "./Contact.css";

const Contact = () => {
  const { t } = useMarketingTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaAnswer(num1 + num2);
    setUserCaptchaInput("");
    setCaptchaError("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(userCaptchaInput, 10) !== captchaAnswer) {
      setCaptchaError(t("pages.contact.errors.captchaIncorrect"));
      generateCaptcha();
      return;
    }

    setIsSending(true);

    const submissionData = new FormData();
    submissionData.append("access_key", "66469d30-3566-42fe-a853-2d5a0404a9b5");
    submissionData.append("name", `${formData.firstName} ${formData.lastName}`);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("subject", t("pages.contact.emailSubject"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setCaptchaError(t("pages.contact.errors.submissionFailed"));
      }
    } catch {
      setCaptchaError(t("pages.contact.errors.networkError"));
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "" &&
    userCaptchaInput !== "";

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
              onClick={() => {
                setSubmitted(false);
                generateCaptcha();
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
          <form onSubmit={handleSubmit}>
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
              ></textarea>
            </div>

            <div className="form-group">
              <label>
                {t("pages.contact.form.securityCheck")}{" "}
                <strong>{captchaQuestion}</strong>
              </label>
              <div className="captcha-input-container">
                <input
                  type="number"
                  value={userCaptchaInput}
                  onChange={(e) => setUserCaptchaInput(e.target.value)}
                  placeholder={t("pages.contact.form.answerPlaceholder")}
                  required
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="refresh-btn"
                >
                  ↻
                </button>
              </div>
              {captchaError && (
                <p className="error-text" style={{ color: "red" }}>
                  {captchaError}
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
