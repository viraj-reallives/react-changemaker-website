import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";
import logowhite from "../../assets/logo-white.svg";
import "./Navbar.css";

const Logo = () => {
  const { t } = useMarketingTranslation();
  const localePath = useLocalePath();

  return (
    <span className="logo-and-title-container">
      <Link className="logo-and-title-container listed-style " to={localePath("/")}>
        <img className="image-icon-changemaker" src={logowhite} alt="" />

        <div className="line-style"></div>

        <p className="title-website-logo">{t("common.logo.title")}</p>
      </Link>
    </span>
  );
};

export default Logo;
