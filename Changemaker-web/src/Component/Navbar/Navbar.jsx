import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";
// Material Icons Import
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Dropdown from "./Dropdown";
import Path from "./Path";
import Logo from "./Logo";

const Navbar = ({ theme, settheme }) => {
  useEffect(() => {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute(
      "content",
      theme === "light" ? "#FFD700" : "#1a1a1a",
    );
  }, [theme]);

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
            <DarkModeIcon
              className="theme-toggle-icon"
              sx={{ color: "#333" }}
            />
          ) : (
            <LightModeIcon
              className="theme-toggle-icon"
              sx={{ color: "#ffdb58" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
