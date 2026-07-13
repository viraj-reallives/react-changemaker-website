import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";
import logoreallives from "../../assets/logo-white.svg";

const Footer = ({ theme }) => {
  const { t } = useMarketingTranslation();
  const localePath = useLocalePath();

  return (
    <div className={`footer ${theme}`}>
      <div className="footer-section-1">
        <div className="left-side-bar">
          <Link className="flex-style" to={localePath("/")}>
            <div className="logo-change">
              <img
                className="image-fit-cover"
                src={logoreallives}
                alt={t("common.alt.logo")}
              />
            </div>
          </Link>

          <span className="border-right-index">
            <p className="changemaker-text">
              {t("common.footer.changeMakerIndex")}
            </p>
          </span>
        </div>

        <div className="footer-descritpion-text">
          {t("common.footer.description")}
        </div>
      </div>

      <div className="footer-section-2">
        <div className="label-footer-button-box">
          <p className="text-footer-label">{t("common.footer.getToKnow")}</p>
          <span className="footer-child-container">
            <Link className="footer-ankar-style" to={localePath("/how-rcmi-works")}>
              {t("common.footer.aboutRcmi")}
            </Link>

            <Link
              className="footer-ankar-style"
              to={localePath("/certified-institutes")}
            >
              {t("common.footer.certifiedInstitutes")}
            </Link>

            <Link className="footer-ankar-style" to={localePath("/our-impact")}>
              {t("common.footer.ourImpact")}
            </Link>
          </span>
        </div>

        <div className="label-footer-button-box">
          <p className="text-footer-label">{t("common.footer.support")}</p>
          <span className="footer-child-container">
            <Link className="footer-ankar-style" to={localePath("/contact")}>
              {t("common.footer.contactUs")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
