import React from "react";
import { Link } from "react-router-dom";
import logowhite from "../../assets/logo-white.svg";
import "./Navbar";
import "./Navbar.css";

const Logo = () => {
  return (
    <span className="logo-and-title-container">
      <Link className="logo-and-title-container listed-style " to="/Home">
        <img className="image-icon-changemaker" src={logowhite} alt="" />

        <div className="line-style"></div>

        <p className="title-website-logo">Reallives ChangeMaker Index</p>
      </Link>
    </span>
  );
};

export default Logo;
