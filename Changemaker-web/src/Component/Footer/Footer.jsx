import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";
import { useSignupModal } from "../../context/SignupModalContext";
import logoreallives from "../../assets/logo-white.svg";

const Footer = () => {
  const { t } = useMarketingTranslation();
  const localePath = useLocalePath();
  const { openSignupModal } = useSignupModal();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <Link className="site-footer-logo" to={localePath("/")}>
              <img
                className="site-footer-mark"
                src={logoreallives}
                alt=""
              />
              <span className="site-footer-name">
                {t("common.logo.title")}
              </span>
            </Link>
            <p className="site-footer-lede">{t("common.footer.description")}</p>
          </div>

          <nav className="site-footer-nav" aria-label="Footer">
            <div className="site-footer-col">
              <p className="site-footer-kicker">{t("common.footer.getToKnow")}</p>
              <Link className="site-footer-link" to={localePath("/how-rcmi-works")}>
                {t("common.footer.aboutRcmi")}
              </Link>
              <Link
                className="site-footer-link"
                to={localePath("/certified-institutes")}
              >
                {t("common.footer.certifiedInstitutes")}
              </Link>
              <Link className="site-footer-link" to={localePath("/our-impact")}>
                {t("common.footer.ourImpact")}
              </Link>
              <Link
                className="site-footer-link"
                to={localePath("/get-rcmi-report")}
              >
                {t("common.nav.viewRcmiReport")}
              </Link>
            </div>

            <div className="site-footer-col">
              <p className="site-footer-kicker">{t("common.footer.support")}</p>
              <Link className="site-footer-link" to={localePath("/contact")}>
                {t("common.footer.contactUs")}
              </Link>
              <Link className="site-footer-link" to={localePath("/home")}>
                {t("common.nav.home")}
              </Link>
            </div>
          </nav>
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copy">{t("portal.copyright")}</p>
          <button
            type="button"
            className="site-footer-cta"
            onClick={openSignupModal}
          >
            {t("common.nav.getRcmiReport")}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
