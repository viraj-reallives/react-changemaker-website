import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";
import "./Navbar.css";

const Navbar = () => {
  const { t } = useMarketingTranslation();
  const localePath = useLocalePath();
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
          to={localePath("/home")}
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
          to={localePath("/certified-institutes")}
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.certifiedInstitutes")}
        </NavLink>

        <NavLink
          className="listed-style"
          to={localePath("/our-impact")}
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.ourImpact")}
        </NavLink>

        <NavLink
          className="listed-style"
          to={localePath("/how-rcmi-works")}
          onClick={() => setShowMenu(false)}
        >
          {t("common.nav.howRcmiWorks")}
        </NavLink>

        <NavLink
          to={localePath("/get-rcmi-report")}
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
