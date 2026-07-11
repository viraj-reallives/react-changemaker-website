import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import "./Navbar.css";

const Navbar = () => {
  const { t } = useMarketingTranslation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navigation-path-container">
      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <span className={showMenu ? "bar active" : "bar"}></span>
        <span className={showMenu ? "bar active" : "bar"}></span>
        <span className={showMenu ? "bar active" : "bar"}></span>
      </div>

      <div
        className={showMenu ? "navigation-path mobile-open" : "navigation-path"}
      >
        <NavLink
          to="/Home"
          end
          className={({ isActive }) =>
            isActive ? "listed-style active" : "listed-style"
          }
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.home")}
        </NavLink>

        <NavLink
          className="listed-style"
          to="/certified-institutes"
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.certifiedInstitutes")}
        </NavLink>

        <NavLink
          className="listed-style"
          to="/our-impact"
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.ourImpact")}
        </NavLink>

        <NavLink
          className="listed-style"
          to="/how-rcmi-works"
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.howRcmiWorks")}
        </NavLink>

        <NavLink
          to="/get-rcmi-report"
          className="button-rcmi-report"
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.getRcmiReport")}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
