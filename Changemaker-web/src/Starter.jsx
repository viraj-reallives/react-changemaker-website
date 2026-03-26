import React, { useEffect, useRef } from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import reallives_icon from "../src/assets/logo-white.svg";
import rcmi_logo from "../public/rcmi-logo.png";
import "../src/Starter.css"

const Starter = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      contentRef.current?.classList.add("show-now-11");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-cards-starter">
      <img
        className="image-backgrounnd-starter"
        src="https://reallivesfrontend.s3.us-east-1.amazonaws.com/starting-background-img.png"
        alt="Background"
      />

      <div
        className="starter-outer-container"
        id="content-wrapper-11"
        ref={contentRef}
      >
        <div className="container-top-head-starter">
          <p className="choose-title-starter">Choose Your Experience</p>
          <p className="explore-title-starter">Explore Lives. Create Impact.</p>
        </div>

        <div className="card-starter-section">
          <div className="starter-innner-card">
            <div className="top-starter-container">
              <div className="head-starter-box">
                <div className="head-logo-reallives">
                  <img
                    className="head-logo-reallives"
                    src={reallives_icon}
                    alt="Logo"
                  />
                </div>
              </div>

              <div className="fetures-mini-box">
                <div className="fetures-inner-box">live a life</div>
                <div className="fetures-inner-box">real world data</div>
                <div className="fetures-inner-box">Empathy simulation</div>
              </div>
            </div>

            <div className="bottom-starter-container">
              <div className="bottom-title-desc">
                <p className="simulation-title-text">
                  RealLives Simulation Platform
                </p>
                <p className="simulation-desc-text">
                  Experience lives across the world
                </p>
              </div>

              <p className="starter-mid-desc">
                Step into the lives of people from different countries and
                backgrounds.
                <span className="none-mobile-style">
                  {" "}
                  Build empathy, understand global systems, and make life
                  decisions through immersive simulation.
                </span>
              </p>

              <button
                className="button-continue-card"
                onClick={() => {
                  const newTab = window.open(
                    "https://reallivesworld.com/reallives-website-main/",
                    "_blank",
                  );
                  if (newTab) {
                    newTab.opener = null;
                  }
                }}
              >
                Go to RealLives
                <ArrowRightAltIcon className="arrow-move-11" />
              </button>
            </div>
          </div>

          <div className="starter-innner-card">
            <div className="top-starter-container">
              <div className="head-starter-box bg-changemaker">
                <div className="head-logo-reallives">
                  <img
                    className="head-logo-reallives"
                    src={rcmi_logo}
                    alt="Logo"
                  />
                </div>
              </div>

              <div className="fetures-mini-box">
                <div className="fetures-inner-box channgemaker-color-top">
                  21ST CENTURY SKILLS
                </div>
                <div className="fetures-inner-box channgemaker-color-top">
                  EMPATHY
                </div>
                <div className="fetures-inner-box channgemaker-color-top">
                  sdg lived experience
                </div>
              </div>
            </div>

            <div className="bottom-starter-container">
              <div className="bottom-title-desc">
                <p className="simulation-title-text">
                  RealLives ChangeMaker Index (RCMI)
                </p>
                <p className="simulation-desc-text title-changemaker-color">
                  Turn insight into real-world impact
                </p>
              </div>

              <p className="starter-mid-desc">
                Measure and grow across 18 changemaking competencies. Reflect on
                your decisions, understand your impact, and build skills that
                prepare you for future careers and responsible leadership.
              </p>

              <NavLink to="home-page" className="decoration-style-none">
                <button className="button-continue-card btn-bg-color-white">
                  Continue to RealLives ChangeMaker Index
                  <AnalyticsIcon className="arrow-move-11" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <p className="no-copy-write-title">
          © 2025 RealLives World. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Starter;
