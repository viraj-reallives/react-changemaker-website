import Styles from "../HomeComponentParts/Featuresindex.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";

const IMPACT_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653482/Final_Business_with_Purpose_1_qhhlwu.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/second-workshop-4_ew4261.png",
];

const FEATURE_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/Student-Simulate_d4rryd.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/Decisions_Tracked_tvsg2f.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/Insights_Delivered_teervk.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/AI_Guidance_hztqmt.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/Actionable_Reports_v0mwoe.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/Personal_Growth_lele2n.png",
];

const Featuresindex = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const localePath = useLocalePath();
  const impactCards = getMessage("features.impactCards") ?? [];
  const featureCards = getMessage("features.featureCards") ?? [];

  return (
    <div className={`${Styles.root} ${Styles[theme]}`}>
      <section className={Styles.band}>
        <div className={Styles.inner}>
          <header className={Styles.head}>
            <h2 className={Styles.title}>{t("features.ourImpact.title")}</h2>
            <p className={Styles.subtitle}>{t("features.ourImpact.description")}</p>
          </header>

          <div className={Styles.impactGrid}>
            {impactCards.map((card, idx) => (
              <Link
                key={card.link ?? idx}
                to={localePath(card.link)}
                className={Styles.impactCard}
              >
                <div className={Styles.impactImage}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={IMPACT_IMAGES[idx]}
                    alt={t("common.alt.changemakerIndexImage")}
                  />
                </div>

                <div className={Styles.impactBody}>
                  <h3 className={Styles.cardTitle}>{card.title}</h3>
                  <p className={Styles.cardCopy}>{card.description}</p>
                  <span className={Styles.cardLink}>
                    {t("common.learnMore")} <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className={Styles.ctaRow}>
            <Link className={Styles.ghostBtn} to={localePath("/our-impact")}>
              {t("features.ourImpact.exploreMore")} <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${Styles.band} ${Styles.bandMuted}`}>
        <div className={Styles.inner}>
          <header className={Styles.head}>
            <h2 className={Styles.title}>
              {t("features.changemakerFeatures.title")}
            </h2>
            <p className={Styles.subtitle}>
              {t("features.changemakerFeatures.description")}
            </p>
          </header>

          <div className={Styles.featureGrid}>
            {featureCards.map((card, idx) => (
              <article key={card.title ?? idx} className={Styles.featureCard}>
                <div className={Styles.featureBody}>
                  <h3 className={Styles.featureTitle}>{card.title}</h3>
                  <p className={Styles.cardCopy}>{card.description}</p>
                </div>

                <div className={Styles.featureImage}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={FEATURE_IMAGES[idx]}
                    alt={t("common.alt.changemakerIndexImage")}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuresindex;
