import { FaArrowRight } from "react-icons/fa6";
import Styles from "./Rcmiworks.module.css";
import chartpolar from "../../assets/Home-image/chart-polar-duotone 1.svg";
import key_icon from "../../assets/Home-image/key-duotone 2.svg";
import image_behind_rcmi from "../../assets/Home-image/atom-duotone 2.svg";
import howRcmiWorksImage from "../../assets/how-rcmi-works.png";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useSignupModal } from "../../context/SignupModalContext";

const STAGE_ACCENTS = ["#b7d48a", "#9ec96e", "#86be55", "#6eaa3f", "#5a9332"];

const HOW_IT_WORKS_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/RealLives_ChangeMaker_Index-1_by1edh.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/RealLives_ChangeMaker_Index-2_kw32ir.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653474/make-a-changemaker-journey_fofepi.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/graph-rcmi-image_nuyons.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/Comptencies-ss-image_xktwdl.svg",
];

function renderParagraphs(paragraphs, className, labelClassName) {
  if (!Array.isArray(paragraphs)) return null;

  return paragraphs.map((para, idx) => {
    if (typeof para === "string") {
      return (
        <p key={idx} className={className}>
          {para}
        </p>
      );
    }

    if (para && typeof para === "object") {
      return (
        <p key={idx} className={className}>
          <span className={labelClassName}>{para.label} </span>
          {para.text}
        </p>
      );
    }

    return null;
  });
}

const Rcmiworks = () => {
  const { t, getMessage } = useMarketingTranslation();
  const { openSignupModal } = useSignupModal();
  const hero = getMessage("pages.rcmiWorks.hero") ?? {};
  const whatIsRcmi = getMessage("pages.rcmiWorks.whatIsRcmi") ?? {};
  const keyFeatures = getMessage("pages.rcmiWorks.keyFeatures") ?? {};
  const science = getMessage("pages.rcmiWorks.science") ?? {};
  const howItWorks = getMessage("pages.rcmiWorks.howItWorks") ?? {};
  const journey = getMessage("pages.rcmiWorks.journey") ?? {};
  const stages = journey.stages ?? [];
  const howSteps = howItWorks.steps ?? [];

  return (
    <div className={Styles.page}>
      <section className={Styles.hero}>
        <div className={Styles.heroCopy}>
          <p className={Styles.kicker}>
            {hero.kicker ?? t("common.nav.howRcmiWorks")}
          </p>
          <h1 className={Styles.heroTitle}>
            {hero.title ?? t("common.nav.howRcmiWorks")}
          </h1>
          <p className={Styles.lede}>
            {hero.subtitle ?? whatIsRcmi.paragraphs?.[0]}
          </p>
        </div>

        <figure className={Styles.heroMedia}>
          <img
            loading="eager"
            decoding="async"
            src={howRcmiWorksImage}
            alt={t("common.alt.changemakerIndexImage")}
          />
        </figure>
      </section>

      <section className={`${Styles.band} ${Styles.bandMuted}`}>
        <div className={Styles.inner}>
          <div className={Styles.overviewGrid}>
            <article className={Styles.infoCard}>
              <header className={Styles.cardHead}>
                <span className={Styles.iconWell}>
                  <img src={chartpolar} alt="" />
                </span>
                <h2 className={Styles.cardTitle}>{whatIsRcmi.title}</h2>
              </header>
              <div className={Styles.cardBody}>
                {(whatIsRcmi.paragraphs ?? []).map((paragraph) => (
                  <p key={paragraph} className={Styles.bodyText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <article className={Styles.infoCard}>
              <header className={Styles.cardHead}>
                <span className={Styles.iconWell}>
                  <img loading="lazy" decoding="async" src={key_icon} alt="" />
                </span>
                <h2 className={Styles.cardTitle}>{keyFeatures.title}</h2>
              </header>
              <ul className={Styles.featureList}>
                {(keyFeatures.items ?? []).map((item) => (
                  <li key={item.label} className={Styles.featureItem}>
                    <p className={Styles.itemLabel}>{item.label}</p>
                    <p className={Styles.bodyText}>{item.text}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className={`${Styles.infoCard} ${Styles.scienceCard}`}>
              <header className={Styles.cardHead}>
                <span className={Styles.iconWell}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={image_behind_rcmi}
                    alt=""
                  />
                </span>
                <h2 className={Styles.cardTitle}>{science.title}</h2>
              </header>
              <div className={Styles.cardBody}>
                <p className={Styles.bodyText}>{science.intro}</p>
                <div className={Styles.scienceGrid}>
                  {(science.items ?? []).map((item) => (
                    <div key={`${item.label}-${item.text}`} className={Styles.scienceItem}>
                      <p className={Styles.itemLabel}>{item.label}</p>
                      <p className={Styles.bodyText}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className={Styles.bodyText}>{science.closing}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={Styles.band}>
        <div className={Styles.inner}>
          <header className={Styles.sectionHead}>
            <h2 className={Styles.sectionTitle}>{howItWorks.title}</h2>
          </header>

          <ol className={Styles.steps}>
            {howSteps.map((step, idx) => (
              <li
                key={step.title}
                className={`${Styles.step} ${idx % 2 === 1 ? Styles.stepReverse : ""}`}
              >
                <div className={Styles.stepCopy}>
                  <span className={Styles.stepIndex}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className={Styles.stepTitle}>{step.title}</h3>
                  {renderParagraphs(
                    step.paragraphs,
                    Styles.bodyText,
                    Styles.itemLabel,
                  )}
                </div>

                <div className={Styles.stepMedia}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={HOW_IT_WORKS_IMAGES[idx]}
                    alt=""
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${Styles.band} ${Styles.bandMuted}`}>
        <div className={Styles.inner}>
          <header className={Styles.sectionHead}>
            <h2 className={Styles.sectionTitle}>{journey.title}</h2>
            <p className={Styles.sectionLead}>{journey.subtitle}</p>
            <p className={Styles.sectionCopy}>{journey.description}</p>
          </header>

          <figure className={Styles.journeyFigure}>
            <img
              loading="lazy"
              decoding="async"
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653478/changemaker-journey-image_bdfof9.svg"
              alt=""
            />
          </figure>

          <div className={Styles.stagesGrid}>
            <div className={Styles.stagesRow}>
              {stages.slice(0, 3).map((stage, idx) => (
                <article
                  key={stage.head}
                  className={Styles.stageCard}
                  style={{ "--stage-accent": STAGE_ACCENTS[idx] }}
                >
                  <p className={Styles.stageKicker}>{stage.head}</p>
                  <p className={Styles.stageQuote}>{stage.quote}</p>
                  <p className={Styles.stageCopy}>{stage.description}</p>
                </article>
              ))}
            </div>

            <div className={`${Styles.stagesRow} ${Styles.stagesRowCenter}`}>
              {stages.slice(3).map((stage, idx) => (
                <article
                  key={stage.head}
                  className={Styles.stageCard}
                  style={{ "--stage-accent": STAGE_ACCENTS[idx + 3] }}
                >
                  <p className={Styles.stageKicker}>{stage.head}</p>
                  <p className={Styles.stageQuote}>{stage.quote}</p>
                  <p className={Styles.stageCopy}>{stage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.band}>
        <div className={Styles.inner}>
          <div className={Styles.ctaBox}>
            <p className={Styles.ctaText}>{t("pages.rcmiWorks.cta.text")}</p>
            <button
              type="button"
              className={Styles.ctaBtn}
              onClick={openSignupModal}
            >
              {t("pages.rcmiWorks.cta.button")} <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rcmiworks;
