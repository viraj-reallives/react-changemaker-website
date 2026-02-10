import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Material Icons Import
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Dropdown from "./Dropdown";
import Path from "./Path";
import Logo from "./Logo";

const Navbar = ({ theme, settheme }) => {
  console.log(theme);

  const togglebtn = () => {
    theme === "light" ? settheme("dark") : settheme("light");
  };

  return (
    <div className="header-fixed">
      <Logo />

      <div className="content-tap-impact">
        <Path />

        <div
          className="light-dark-box"
          onClick={togglebtn}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {theme === "light" ? (
            <DarkModeIcon sx={{ color: "#333", fontSize: 35 }} />
          ) : (
            <LightModeIcon sx={{ color: "#ffdb58", fontSize: 35 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
