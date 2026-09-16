import Styles from "./Home.module.css";
import Featuresindex from "../HomeComponentParts/Featuresindex";
import ethStudentsPhoto from "../../assets/ETH-Sudents2.png";
import ChangeMakeraction from "../HomeComponentParts/ChangeMakeraction";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useSignupModal } from "../../context/SignupModalContext";
import { useLocalePath } from "../../hooks/useLocalePath";

const Home = ({ theme, settheme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const { openSignupModal } = useSignupModal();
  const localePath = useLocalePath();
  const stats = getMessage("home.hero.stats") ?? [];

  return (
    <div className={`${Styles.page} ${Styles[theme]}`}>
      <section className={Styles.hero}>
        <div className={Styles.heroCopy}>
          <p className={Styles.kicker}>{t("home.hero.kicker")}</p>

          <h1 className={Styles.title}>
            <span className={Styles.titleLead}>{t("home.hero.titleLine1")}</span>
            <span className={Styles.titlePunch}>{t("home.hero.titleLine2")}</span>
          </h1>

          <p className={Styles.lede}>{t("home.hero.description")}</p>

          {stats.length > 0 && (
            <ul className={Styles.stats}>
              {stats.map((stat) => (
                <li key={`${stat.value}-${stat.label}`} className={Styles.stat}>
                  <span className={Styles.statValue}>{stat.value}</span>
                  <span className={Styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          )}

          <div className={Styles.actions}>
            <button
              type="button"
              className={Styles.btnPrimary}
              onClick={openSignupModal}
            >
              {t("home.hero.beginJourney")}
            </button>

            <Link className={Styles.btnSecondary} to={localePath("/how-rcmi-works")}>
              {t("home.hero.howThisWorks")}
            </Link>
          </div>
        </div>

        <figure className={Styles.heroMedia}>
          <img
            loading="eager"
            decoding="async"
            src={ethStudentsPhoto}
            alt={t("home.hero.ethCaption")}
          />
          <figcaption className={Styles.photoChip}>
            {t("home.hero.ethCaption")}
          </figcaption>
        </figure>
      </section>

      <Featuresindex theme={theme} settheme={settheme} />

      <ChangeMakeraction theme={theme} settheme={settheme} />
    </div>
  );
};

export default Home;
