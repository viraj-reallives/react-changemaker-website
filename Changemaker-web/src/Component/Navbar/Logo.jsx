import React from "react";
import { Link } from "react-router-dom";
import logowhite from "../../assets/logo-white.svg";
import "./Navbar";

const Logo = () => {
  return (
    <span className="logo-and-title-container">
      <Link className="logo-and-title-container listed-style " to="/Home">
        <img className="image-icon-changemaker" src={logowhite} alt="" />

        <div className="line-style"></div>

        <p>ChangeMaker Index</p>
      </Link>
    </span>
  );
};

export default Logo;
