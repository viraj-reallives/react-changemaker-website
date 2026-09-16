import Styles from "./Certifiedinstitutes.module.css";
import goal1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import goal2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import goal3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import sustinablegoal from "../../assets/Home-image/Sustinable-goal-img.svg";
import national_image from "../../assets/Home-image/National-education.svg";
import orchid_school_logo from "../../assets/Home-image/orchid-reallives-logo.svg";
import changemaker_certificate from "../../assets/Home-image/changemaker-certificate.png";
import logowhite from "../../assets/logo-white.svg";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const WORKSHOP_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-5_kwmesy.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-2_hgvd1d.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/orchid-3_zmamzk.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/orchid-4_tnp54i.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/orchid-1_ipbgc7.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/orchid-6_filvzp.jpg",
];

const SDG_ICONS = [goal1, goal2, goal3];

const Certifiedinstitutes = () => {
  const { t, getMessage } = useMarketingTranslation();
  const page = getMessage("pages.certifiedInstitutes") ?? {};
  const hero = page.hero ?? {};
  const dashboard = page.dashboard ?? {};
  const workshop = page.workshop ?? {};
  const praise = page.praise ?? {};
  const certificate = page.certificate ?? {};
  const testimonials = praise.testimonials ?? [];

  return (
    <div className={Styles.page}>
      <section className={Styles.hero}>
        <div className={Styles.heroCopy}>
          <p className={Styles.kicker}>{t("common.nav.certifiedInstitutes")}</p>
          <h1 className={Styles.heroTitle}>
            <span className={Styles.heroLead}>{hero.titleLine1}</span>
            <span className={Styles.heroPunch}>{hero.titleLine2}</span>
          </h1>
          <div className={Styles.schoolMark}>
            <img src={orchid_school_logo} alt="" />
          </div>
        </div>

        <figure className={Styles.heroMedia}>
          <img
            loading="eager"
            decoding="async"
            src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-background-img-2.jpeg_off002.png"
            alt={t("common.alt.changemakerIndexImage")}
          />
        </figure>
      </section>

      <section className={`${Styles.band} ${Styles.bandMuted}`}>
        <div className={Styles.inner}>
          <header className={Styles.sectionHead}>
            <h2 className={Styles.sectionTitle}>{dashboard.title}</h2>
            <p className={Styles.sectionCopy}>{dashboard.description}</p>
          </header>

          <div className={Styles.statGrid}>
            <article className={Styles.card}>
              <h3 className={Styles.cardTitle}>{dashboard.overallScore?.title}</h3>
              <p className={Styles.bodyText}>{dashboard.overallScore?.description}</p>
              <p className={Styles.statValue}>
                {dashboard.overallScore?.value}
                <span className={Styles.statSuffix}>
                  {dashboard.overallScore?.suffix}
                </span>
              </p>
            </article>

            <article className={Styles.card}>
              <h3 className={Styles.cardTitle}>
                {dashboard.certifiedStudents?.title}
              </h3>
              <p className={Styles.bodyText}>
                {dashboard.certifiedStudents?.description}
              </p>
              <p className={Styles.statValue}>
                {dashboard.certifiedStudents?.value}
                <span className={Styles.statSuffix}>
                  {dashboard.certifiedStudents?.suffix}
                </span>
              </p>
            </article>

            <article className={`${Styles.card} ${Styles.drivenCard}`}>
              <span className={Styles.iconWell}>
                <img src={logowhite} alt="" />
              </span>
              <h3 className={Styles.cardTitle}>{dashboard.drivenBy?.title}</h3>
              <p className={Styles.bodyText}>{dashboard.drivenBy?.description}</p>
            </article>
          </div>

          <div className={Styles.programGrid}>
            <article className={Styles.card}>
              <h3 className={Styles.cardTitle}>{dashboard.sdg?.title}</h3>
              <p className={Styles.bodyText}>{dashboard.sdg?.description}</p>
              <div className={Styles.sdgRow}>
                {SDG_ICONS.map((icon) => (
                  <img
                    key={icon}
                    loading="lazy"
                    decoding="async"
                    src={icon}
                    alt=""
                  />
                ))}
              </div>
              <img
                className={Styles.sdgBanner}
                src={sustinablegoal}
                alt=""
              />
            </article>

            <article className={Styles.card}>
              <img
                className={Styles.nepMark}
                src={national_image}
                alt=""
              />
              <p className={Styles.bodyText}>
                {dashboard.nep?.textLineBreak ?? dashboard.nep?.text}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={Styles.band}>
        <div className={Styles.inner}>
          <header className={Styles.sectionHead}>
            <h2 className={Styles.sectionTitle}>{workshop.button}</h2>
            {(workshop.paragraphs ?? []).map((paragraph) => (
              <p key={paragraph} className={Styles.sectionCopy}>
                {paragraph}
              </p>
            ))}
          </header>

          <div className={Styles.photoGrid}>
            {WORKSHOP_IMAGES.map((img) => (
              <figure key={img} className={Styles.photoCard}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={img}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${Styles.band} ${Styles.bandMuted}`}>
        <div className={Styles.inner}>
          <header className={Styles.sectionHead}>
            <h2 className={Styles.sectionTitle}>{praise.button}</h2>
          </header>

          <div className={Styles.quoteGrid}>
            {testimonials.map((item) => (
              <article key={item.quote} className={Styles.quoteCard}>
                <p className={Styles.quoteMark} aria-hidden="true">
                  “
                </p>
                <p className={Styles.quoteText}>{item.quote}</p>
                <p className={Styles.quoteAuthor}>{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={Styles.band}>
        <div className={Styles.inner}>
          <header className={Styles.sectionHead}>
            <h2 className={Styles.sectionTitle}>{certificate.title}</h2>
          </header>

          <figure className={Styles.certificateFrame}>
            <img
              loading="lazy"
              decoding="async"
              src={changemaker_certificate}
              alt={t("common.alt.changemakerIndexImage")}
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Certifiedinstitutes;
