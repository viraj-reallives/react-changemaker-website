import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import logowhite from "../../assets/logo-white.svg";
import "./Navbar.css";

const Logo = () => {
  const { t } = useMarketingTranslation();

  return (
    <span className="logo-and-title-container">
      <Link className="logo-and-title-container listed-style " to="/">
        <img className="image-icon-changemaker" src={logowhite} alt="" />

        <div className="line-style"></div>

        <p className="title-website-logo">{t("common.logo.title")}</p>
      </Link>
    </span>
  );
};

export default Logo;
