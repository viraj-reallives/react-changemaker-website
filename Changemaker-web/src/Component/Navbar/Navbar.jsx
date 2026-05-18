import React from "react";
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

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={togglebtn}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? (
            <DarkModeIcon className="theme-toggle-icon" />
          ) : (
            <LightModeIcon className="theme-toggle-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
