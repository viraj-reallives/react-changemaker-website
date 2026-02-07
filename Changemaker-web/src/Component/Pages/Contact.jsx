import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
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

  // Generate math captcha logic (Same as before)
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

  // Naya API Submission Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Captcha validation
    if (parseInt(userCaptchaInput) !== captchaAnswer) {
      setCaptchaError("Incorrect CAPTCHA, please try again.");
      generateCaptcha();
      return;
    }

    setIsSending(true);

    // 2. Prepare Data for Web3Forms
    const submissionData = new FormData();
    submissionData.append("access_key", "d7368073-5c61-41f3-bb6d-1ef9cb4ee062"); // Aapki Key
    submissionData.append("name", `${formData.firstName} ${formData.lastName}`);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("subject", "New Contact Form Submission");

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
        setCaptchaError("Submission failed. Please try again.");
      }
    } catch (error) {
      setCaptchaError("Network error. Check your connection.");
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
        <h2>Get in Touch</h2>

        {/* Success Message UI (Same) */}
        {submitted ? (
          <div className="success-message">
            <h3 style={{ color: "#28a745" }}>
              ✅ Response submitted successfully!
            </h3>
            <p>Thank you for reaching out. We will contact you soon.</p>
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
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
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
                Security Check: <strong>{captchaQuestion}</strong>
              </label>
              <div className="captcha-input-container">
                <input
                  type="number"
                  value={userCaptchaInput}
                  onChange={(e) => setUserCaptchaInput(e.target.value)}
                  placeholder="Answer"
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
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
