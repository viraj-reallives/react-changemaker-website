import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import logoreallives from "../../assets/logo-white.svg";

const Footer = ({ theme }) => {
  return (
    <div className={`footer ${theme}`}>
      <div className="footer-section-1">
        <div className="left-side-bar">
          <Link className="flex-style" to="/">
            <div className="logo-change">
              <img className="image-fit-cover" src={logoreallives} alt="logo" />
            </div>
          </Link>

          <span className="border-right-index">
            <p className="changemaker-text">ChangeMaker Index</p>
          </span>
        </div>

        <div className="footer-descritpion-text">
          RCMI empowers students worldwide to build empathy, ethical thinking,
          and social responsibility through immersive life simulations. By
          navigating realistic scenarios and reflecting on their decisions,
          students develop the skills and mindset to create meaningful, positive
          impact in their communities and beyond.
        </div>
      </div>

      <div className="footer-section-2">
        <div className="label-footer-button-box">
          <p className="text-footer-label">Get to Know</p>
          <span className="footer-child-container">
            <Link className="footer-ankar-style" to="How-RCMI-Works">
              About RCMI
            </Link>

            <Link className="footer-ankar-style" to="Certified-Institutes">
              Certified institutes
            </Link>

            <Link className="footer-ankar-style" to="our-impact">
              Our Impact
            </Link>
          </span>
        </div>

        <div className="label-footer-button-box">
          <p className="text-footer-label">Support</p>
          <span className="footer-child-container">
            <Link className="footer-ankar-style" to="Contact">
              Contact Us
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
