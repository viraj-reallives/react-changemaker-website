import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { useMarketingTranslation } from "./context/MarketingLocaleContext";
import {
  PortalLanguageMobile,
  PortalLanguageSidebar,
} from "./components/portal/PortalLanguageBar";
import portalCustom from "./components/costom_css/portal_custom.module.css";
import styles from "./Portal.module.css";
import reallivesLogo from "./assets/logo-white.svg";
import backgroundImg from "./assets/landing page/starting-background-img.png";

const rcmiLogo = "/rcmi-logo.png";
const REAL_LIVES_URL = "https://reallivesworld.com/";

function PortalContent() {
  const { t } = useMarketingTranslation();

  return (
    <>
      <PortalLanguageSidebar />

      <div className={`${styles.content} ${portalCustom.content_overwrite_style}`}>
        <div className={styles.heading}>
          <p
            className={`${styles.chooseTitle} ${portalCustom.choose_title_starter}`}
          >
            {t("portal.hero.title")}
          </p>
          <p
            className={`${styles.exploreTitle} ${portalCustom.explore_title_starter}`}
          >
            {t("portal.hero.subtitle")}
          </p>
        </div>

        <PortalLanguageMobile />

        <div className={`${styles.cards} ${portalCustom.card_style_container}`}>
          {/* RCMI — primary, left */}
          <Link
            to="/home"
            className={styles.cardLink}
            aria-label={t("portal.changeMaker.ariaLabel")}
          >
            <div
              className={`${styles.card} ${styles.cardChangeMaker} ${portalCustom.grid_cards_style}`}
            >
              <div
                className={`${styles.cardTop} ${portalCustom.head_starter_box} ${portalCustom.head_color_changemaker}`}
              >
                <div className={portalCustom.head_logo_reallives}>
                  <img
                    className={portalCustom.image_fit_contain}
                    src={rcmiLogo}
                    alt="ChangeMaker Index Logo"
                  />
                </div>
              </div>

              <div className={styles.cardFeatures} aria-hidden="true">
                <span
                  className={`${styles.featurePill} ${portalCustom.change_text_changemaker}`}
                >
                  {t("portal.changeMaker.features.skills")}
                </span>
                <span
                  className={`${styles.featurePill} ${portalCustom.change_text_changemaker}`}
                >
                  {t("portal.changeMaker.features.empathy")}
                </span>
                <span
                  className={`${styles.featurePill} ${portalCustom.change_text_changemaker}`}
                >
                  {t("portal.changeMaker.features.sdg")}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h2
                  className={`${styles.cardHeading} ${portalCustom.simulation_title_text}`}
                >
                  {t("portal.changeMaker.title")}
                </h2>
                <p
                  className={`${styles.cardDescription} ${styles.cardDescriptionAlt} ${portalCustom.title_changemaker_color}`}
                >
                  {t("portal.changeMaker.subtitle")}
                </p>
                <p
                  className={`${styles.cardLongDescription} ${portalCustom.starter_mid_desc}`}
                >
                  {t("portal.changeMaker.description")}
                </p>
              </div>

              <div
                className={`${styles.cardCta} ${portalCustom.button_continue_card_changemaker}`}
                aria-hidden="true"
              >
                {t("portal.changeMaker.cta")} <MdArrowForward />
              </div>
            </div>
          </Link>

          {/* RealLives — right */}
          <a
            href={REAL_LIVES_URL}
            className={styles.cardLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("portal.realLives.ariaLabel")}
          >
            <div
              className={`${styles.card} ${styles.cardRealLives} ${portalCustom.grid_cards_style}`}
            >
              <div
                className={`${styles.cardTop} ${portalCustom.head_starter_box}`}
              >
                <div className={portalCustom.head_logo_reallives}>
                  <img
                    className={portalCustom.image_fit_contain}
                    src={reallivesLogo}
                    alt="RealLives Logo"
                  />
                </div>
              </div>

              <div className={styles.cardFeatures} aria-hidden="true">
                <span
                  className={`${styles.featurePill} ${portalCustom.fetures_inner_box}`}
                >
                  {t("portal.realLives.features.liveALife")}
                </span>
                <span
                  className={`${styles.featurePill} ${portalCustom.fetures_inner_box}`}
                >
                  {t("portal.realLives.features.realWorldData")}
                </span>
                <span
                  className={`${styles.featurePill} ${portalCustom.fetures_inner_box}`}
                >
                  {t("portal.realLives.features.empathySimulation")}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h2
                  className={`${styles.cardHeading} ${portalCustom.simulation_title_text}`}
                >
                  {t("portal.realLives.title")}
                </h2>
                <p
                  className={`${styles.cardDescription} ${portalCustom.simulation_desc_text}`}
                >
                  {t("portal.realLives.subtitle")}
                </p>
                <p
                  className={`${styles.cardLongDescription} ${portalCustom.starter_mid_desc}`}
                >
                  {t("portal.realLives.description")}
                  <span className={styles.desktopOnly}>
                    {" "}
                    {t("portal.realLives.descriptionExtended")}
                  </span>
                </p>
              </div>

              <div
                className={`${styles.cardCta} ${portalCustom.button_continue_card}`}
                aria-hidden="true"
              >
                {t("portal.realLives.cta")} <MdArrowForward />
              </div>
            </div>
          </a>
        </div>

        <p className={`${styles.copyright} ${portalCustom.no_copy_write_title}`}>
          {t("portal.copyright")}
        </p>
      </div>
    </>
  );
}

export default function Starter() {
  return (
    <main className={`${styles.page} ${portalCustom.background_black}`}>
      <img
        className={`${styles.bgImage} ${portalCustom.portalPage}`}
        src={backgroundImg}
        alt=""
        fetchPriority="high"
      />

      <div className={styles.pageInner}>
        <PortalContent />
      </div>
    </main>
  );
}
