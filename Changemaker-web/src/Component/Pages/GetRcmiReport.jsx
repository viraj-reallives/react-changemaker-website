import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MdArrowBack,
  MdPersonAdd,
  MdSportsEsports,
  MdPsychology,
  MdAssessment,
  MdPictureAsPdf,
  MdOpenInNew,
  MdGroups,
  MdLightbulb,
  MdPublic,
} from "react-icons/md";
import foundationLogo from "../../assets/Home-image/Changemaker-Foundation-logo.svg";
import styles from "./GetRcmiReport.module.css";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";

gsap.registerPlugin(ScrollTrigger);

const REGISTER_URL = "https://reallivesworld.com/signup/gamer";

const SAMPLE_REPORT_URL =
  "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/bilime5710-changemaker-report.pdf";

const REPORT_PREVIEW_SRCS = [
  "/report-pages/page-01.png",
  "/report-pages/page-05.png",
  "/report-pages/page-07.png",
  "/report-pages/page-08.png",
];

const TIMELINE_ICONS = [MdPersonAdd, MdSportsEsports, MdPsychology, MdAssessment];

const JOURNEY_COLORS = [
  { color: "#f06292", colorSoft: "#fce4ec" },
  { color: "#ffb74d", colorSoft: "#fff3e0" },
  { color: "#4fc3f7", colorSoft: "#e1f5fe" },
  { color: "#ba68c8", colorSoft: "#f3e5f5" },
  { color: "#4db6ac", colorSoft: "#e0f2f1" },
];

const CLUSTER_META = {
  personal: { icon: MdPsychology, accent: "#f06292", accentSoft: "#fce4ec" },
  strategic: { icon: MdLightbulb, accent: "#42a5f5", accentSoft: "#e3f2fd" },
  interpersonal: { icon: MdGroups, accent: "#ab47bc", accentSoft: "#f3e5f5" },
  contextual: { icon: MdPublic, accent: "#66bb6a", accentSoft: "#e8f5e9" },
};

const GetRcmiReport = ({ theme }) => {
  const navigate = useNavigate();
  const localePath = useLocalePath();
  const { t, getMessage } = useMarketingTranslation();
  const page = getMessage("pages.getRcmiReport") ?? {};
  const timelineSteps = page.timeline?.steps ?? [];
  const journeyParts = page.journey?.parts ?? [];
  const previewImages = page.preview?.images ?? [];
  const competencyClusters = page.competency?.clusters ?? [];
  const changemakerStages = page.competency?.stages?.items ?? [];
  const stageQuote = page.competency?.stages?.quote;
  const heroPills = page.heroPills ?? [];
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const sampleReportRef = useRef(null);
  const journeyRef = useRef(null);
  const previewRef = useRef(null);
  const competencyRef = useRef(null);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(localePath("/home"));
    }
  };

  const handleGetReport = () => {
    window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
  };

  const handleViewSampleReport = () => {
    window.open(SAMPLE_REPORT_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.children || [], {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.from(`.${styles.timelineItem}`, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 82%",
        },
        opacity: 0,
        x: -24,
        duration: 0.65,
        stagger: 0.14,
        ease: "power2.out",
      });

      gsap.from(`.${styles.sampleReportSection}`, {
        scrollTrigger: {
          trigger: sampleReportRef.current,
          start: "top 88%",
        },
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(`.${styles.journeyBlock}`, {
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from(`.${styles.previewCard}`, {
        scrollTrigger: {
          trigger: previewRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.from(`.${styles.aboutCard}`, {
        scrollTrigger: {
          trigger: previewRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(`.${styles.competencyCard}`, {
        scrollTrigger: {
          trigger: competencyRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.from(`.${styles.stageCard}`, {
        scrollTrigger: {
          trigger: competencyRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className={`${styles.page} ${styles[theme]}`}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={handleBack}
        aria-label={t("common.goBack")}
      >
        <MdArrowBack className={styles.inlineIcon} />
        <span>{t("common.back")}</span>
      </button>

      <header ref={heroRef} className={styles.hero}>
        <p className={styles.eyebrow}>{page.eyebrow}</p>
        <h1 className={styles.heroTitle}>{page.heroTitle}</h1>
        <p className={styles.heroSubtitle}>{page.heroSubtitle}</p>
        <div className={styles.heroPills}>
          {heroPills.map((pill) => (
            <span key={pill} className={styles.heroPill}>
              {pill}
            </span>
          ))}
        </div>
      </header>

      <section className={styles.timelineSection}>
        <h2 className={styles.sectionHeading}>{page.timeline?.heading}</h2>
        <p className={styles.sectionLead}>{page.timeline?.lead}</p>
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {timelineSteps.map((step, idx) => {
            const Icon = TIMELINE_ICONS[idx] ?? MdAssessment;
            return (
              <article
                key={step.title}
                className={`${styles.timelineItem} ${step.highlight ? styles.timelineItemHighlight : ""}`}
              >
                <div className={styles.timelineMarker}>
                  <span className={styles.timelineDot} />
                  <span className={styles.timelineIconWrap}>
                    <Icon className={styles.timelineIcon} />
                  </span>
                </div>

                <div className={styles.timelineContent}>
                  <span className={styles.stepTag}>{step.tag}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div
        ref={sampleReportRef}
        className={`${styles.sampleReportSection} ${styles.sampleReportDivider}`}
      >
        <span className={styles.dividerLine} aria-hidden="true" />
        <button
          type="button"
          className={styles.sampleReportCta}
          onClick={handleViewSampleReport}
        >
          <MdPictureAsPdf className={styles.sampleReportIcon} />
          {page.sampleReport?.cta}
          <MdOpenInNew className={styles.sampleReportArrow} />
        </button>
        <span className={styles.dividerLine} aria-hidden="true" />
      </div>

      <section ref={journeyRef} className={styles.reportJourneySection}>
        <p className={styles.sectionLabel}>{page.journey?.label}</p>
        <h2 className={styles.sectionHeading}>{page.journey?.heading}</h2>
        <p className={styles.sectionLead}>{page.journey?.lead}</p>

        <div className={styles.journeyRoadmap}>
          {journeyParts.map((part, idx) => {
            const colors = JOURNEY_COLORS[idx] ?? JOURNEY_COLORS[0];
            return (
              <div
                key={part.id}
                className={styles.journeyBlock}
                style={{
                  "--journey-color": colors.color,
                  "--journey-soft": colors.colorSoft,
                }}
              >
                <span className={styles.journeyPart}>{part.part}</span>
                <span className={styles.journeyTitle}>{part.title}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.journeyDetails}>
          {journeyParts.map((part, idx) => {
            const colors = JOURNEY_COLORS[idx] ?? JOURNEY_COLORS[0];
            return (
              <article
                key={part.id}
                className={styles.journeyDetailCard}
                style={{
                  "--journey-color": colors.color,
                  "--journey-soft": colors.colorSoft,
                }}
              >
                <h3 className={styles.journeyDetailTitle}>
                  {page.journey?.partPrefix} {part.part} — {part.title}
                </h3>
                <ul className={styles.journeyDetailList}>
                  {(part.items ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section ref={previewRef} className={styles.previewSection}>
        <p className={styles.sectionLabel}>{page.preview?.label}</p>
        <h2 className={styles.sectionHeading}>{page.preview?.heading}</h2>
        <p className={styles.sectionLead}>{page.preview?.lead}</p>

        <div className={styles.previewGrid}>
          {previewImages.map((img, idx) => (
            <figure key={img.caption} className={styles.previewCard}>
              <div className={styles.previewImageWrap}>
                <img
                  src={REPORT_PREVIEW_SRCS[idx]}
                  alt={img.alt}
                  loading="lazy"
                  className={styles.previewImage}
                />
              </div>
              <figcaption className={styles.previewCaption}>
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.aboutGrid}>
          <article className={`${styles.aboutCard} ${styles.aboutRcmi}`}>
            <img
              src="/rcmi-logo.png"
              alt={t("common.alt.rcmi")}
              className={styles.aboutLogo}
            />
            <h3 className={styles.aboutTitle}>{page.about?.rcmiTitle}</h3>
            <p className={styles.aboutText}>{page.about?.rcmiText}</p>
          </article>
          <article className={`${styles.aboutCard} ${styles.aboutFoundation}`}>
            <div className={styles.foundationLogoWrap}>
              <img
                src={foundationLogo}
                alt={t("common.alt.realLivesFoundation")}
                className={styles.foundationLogo}
              />
            </div>
            <h3 className={styles.aboutTitle}>{page.about?.foundationTitle}</h3>
            <p className={styles.aboutText}>{page.about?.foundationText}</p>
          </article>
        </div>
      </section>

      <section ref={competencyRef} className={styles.competencySection}>
        <p className={styles.sectionLabel}>{page.competency?.label}</p>
        <h2 className={styles.sectionHeading}>{page.competency?.heading}</h2>
        <p className={styles.sectionLead}>{page.competency?.lead}</p>

        <div className={styles.competencyGrid}>
          {competencyClusters.map((cluster) => {
            const meta = CLUSTER_META[cluster.id] ?? CLUSTER_META.personal;
            const Icon = meta.icon;
            return (
              <article
                key={cluster.id}
                className={styles.competencyCard}
                style={{
                  "--cluster-accent": meta.accent,
                  "--cluster-accent-soft": meta.accentSoft,
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.clusterIconWrap}>
                    <Icon className={styles.clusterIcon} />
                  </span>
                  <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                </div>

                <ul className={styles.clusterList}>
                  {(cluster.items ?? []).map((item) => (
                    <li key={item.name} className={styles.clusterItem}>
                      <span className={styles.compName}>{item.name}</span>
                      <span className={styles.compDesc}>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className={styles.stagesSection}>
          <h3 className={styles.stagesHeading}>
            {page.competency?.stages?.heading}
          </h3>
          <p className={styles.stagesLead}>{page.competency?.stages?.lead}</p>
          <div className={styles.stagesRow}>
            {changemakerStages.map((stage) => (
              <div key={stage.name} className={styles.stageCard}>
                <span className={styles.stageName}>{stage.name}</span>
                <span className={styles.stageRange}>{stage.range}</span>
                <span className={styles.stageDesc}>{stage.description}</span>
              </div>
            ))}
          </div>
          {stageQuote && (
            <p className={styles.stageQuote}>&ldquo;{stageQuote}&rdquo;</p>
          )}
        </div>
      </section>

      <div className={styles.pageSpacer} aria-hidden="true" />

      <footer className={styles.fixedFooter}>
        <div className={styles.footerInner}>
          <div className={styles.footerText}>
            <p className={styles.footerTitle}>{page.footer?.title}</p>
            <p className={styles.footerSubtitle}>{page.footer?.subtitle}</p>
          </div>
          <button
            type="button"
            className={styles.footerCta}
            onClick={handleGetReport}
          >
            {page.footer?.cta}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default GetRcmiReport;
