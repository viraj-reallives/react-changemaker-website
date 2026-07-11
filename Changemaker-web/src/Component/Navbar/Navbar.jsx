import "./Navbar.css";
import { useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import Path from "./Path";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = ({ theme, settheme }) => {
  const { t } = useMarketingTranslation();
  useEffect(() => {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute(
      "content",
      theme === "light" ? "#FFD700" : "#050505",
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

        <div className="navbar-utilities">
          <LanguageSwitcher />

          <span className="navbar-utilities-divider" aria-hidden="true" />

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={togglebtn}
            aria-label={
              theme === "light"
                ? t("common.theme.switchToDark")
                : t("common.theme.switchToLight")
            }
          >
            {theme === "light" ? (
              <MdDarkMode className="theme-toggle-icon" />
            ) : (
              <MdLightMode className="theme-toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
