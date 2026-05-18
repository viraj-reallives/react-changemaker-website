import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import foundationLogo from "../../assets/Home-image/Changemaker-Foundation-logo.svg";
import styles from "./GetRcmiReport.module.css";

gsap.registerPlugin(ScrollTrigger);

const REGISTER_URL = "https://reallivesworld.com/register-gamer";

const SAMPLE_REPORT_URL =
  "https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/bilime5710-changemaker-report.pdf";

const REPORT_PREVIEW_IMAGES = [
  {
    src: "/report-pages/page-01.png",
    alt: "Report cover with ChangeMaker stage and strongest competencies",
    caption: "Your personalised report cover",
  },
  {
    src: "/report-pages/page-05.png",
    alt: "ChangeMaker overview with score and cluster breakdown",
    caption: "ChangeMaker overview & cluster scores",
  },
  {
    src: "/report-pages/page-07.png",
    alt: "Radar graph of 18 competencies",
    caption: "18-competency radar graph",
  },
  {
    src: "/report-pages/page-08.png",
    alt: "ChangeMaker stage progression",
    caption: "Your ChangeMaker stage",
  },
];

const TIMELINE_STEPS = [
  {
    id: 1,
    icon: PersonAddOutlinedIcon,
    title: "Register on the RealLives Platform",
    description:
      "Create your account on the RealLives simulation platform. Your registration stays active so you can return anytime to continue your journey.",
    tag: "Step 1",
  },
  {
    id: 2,
    icon: SportsEsportsOutlinedIcon,
    title: "Play 3 Full Lives in the Simulation",
    description:
      "Experience three complete life journeys across different countries, genders, and economic strata — building the empathy and contextual awareness that power your report.",
    tag: "Step 2",
  },
  {
    id: 3,
    icon: PsychologyOutlinedIcon,
    title: "Your Choices Shape 18 Competencies",
    description:
      "Unlike surveys that ask what you think you'd do, RealLives observes what you actually choose. Every decision is analysed and mapped to 18 ChangeMaker competencies in real time.",
    tag: "Step 3",
    highlight: true,
  },
  {
    id: 4,
    icon: AssessmentOutlinedIcon,
    title: "Receive Your Personalised RCMI Report",
    description:
      "Your RealLives ChangeMaker Index report is generated — a clear, data-driven breakdown of your score, stage, strengths, growth areas, and personalised path forward.",
    tag: "Step 4",
  },
];

const REPORT_JOURNEY = [
  {
    id: "profile",
    part: "01",
    title: "Your Profile",
    color: "#f06292",
    colorSoft: "#fce4ec",
    items: [
      "ChangeMaker Overview",
      "Competency Framework",
      "Radar Graph & Scores",
      "Your ChangeMaker Stage",
    ],
  },
  {
    id: "context",
    part: "02",
    title: "Your Context",
    color: "#ffb74d",
    colorSoft: "#fff3e0",
    items: [
      "Country Landscape & Challenges",
      "Severity & Risk Considerations",
    ],
  },
  {
    id: "strengths",
    part: "03",
    title: "Strengths & Gaps",
    color: "#4fc3f7",
    colorSoft: "#e1f5fe",
    items: ["SWOT Analysis", "Next Steps for Growth"],
  },
  {
    id: "path",
    part: "04",
    title: "Your Path",
    color: "#ba68c8",
    colorSoft: "#f3e5f5",
    items: [
      "Comprehensive ChangeMaking Path",
      "Country-Specific Path",
      "Personalised Path",
    ],
  },
  {
    id: "forward",
    part: "05",
    title: "Journey Forward",
    color: "#4db6ac",
    colorSoft: "#e0f2f1",
    items: ["Final Summary & Recommendations", "Your Journey Forward"],
  },
];

const CHANGEMAKER_STAGES = [
  {
    name: "Seed",
    range: "0 – 20",
    description: "Exploring your potential",
  },
  {
    name: "Sprout",
    range: "21 – 40",
    description: "Developing foundation skills",
  },
  {
    name: "Sapling",
    range: "41 – 60",
    description: "Growing with mix of strengths",
  },
  {
    name: "Plant",
    range: "61 – 80",
    description: "Solid and balanced profile",
  },
  {
    name: "Fruit",
    range: "81 – 100",
    description: "Thriving and creating impact",
  },
];

const COMPETENCY_CLUSTERS = [
  {
    id: "personal",
    title: "Personal",
    icon: PsychologyOutlinedIcon,
    accent: "#f06292",
    accentSoft: "#fce4ec",
    items: [
      { name: "Self-Awareness", desc: "Know your strengths and weaknesses" },
      { name: "Resilience", desc: "Bounce back from setbacks" },
      { name: "Adaptability", desc: "Adjust to change effectively" },
      { name: "Persistence", desc: "Keep going despite challenges" },
      {
        name: "Emotional Intelligence",
        desc: "Manage emotions effectively",
      },
    ],
  },
  {
    id: "strategic",
    title: "Strategic Thinking",
    icon: LightbulbOutlinedIcon,
    accent: "#42a5f5",
    accentSoft: "#e3f2fd",
    items: [
      { name: "Visionary Thinking", desc: "Imagine better futures" },
      { name: "Creativity & Innovation", desc: "Generate new ideas" },
      { name: "Problem-Solving", desc: "Find effective solutions" },
      { name: "Initiative", desc: "Act without being asked" },
      { name: "Risk-Taking", desc: "Try new things willingly" },
      { name: "Critical Thinking", desc: "Analyse situations carefully" },
    ],
  },
  {
    id: "interpersonal",
    title: "Interpersonal",
    icon: GroupsOutlinedIcon,
    accent: "#ab47bc",
    accentSoft: "#f3e5f5",
    items: [
      { name: "Empathy", desc: "Understand how others feel" },
      { name: "Communication Skills", desc: "Share ideas clearly" },
      { name: "Collaboration", desc: "Work well with others" },
      { name: "Leadership", desc: "Guide and inspire people" },
      { name: "Social Awareness", desc: "Read social situations" },
    ],
  },
  {
    id: "contextual",
    title: "Contextual Awareness",
    icon: PublicOutlinedIcon,
    accent: "#66bb6a",
    accentSoft: "#e8f5e9",
    items: [
      { name: "Global Awareness", desc: "Understand world issues" },
      {
        name: "Ethical Responsibility",
        desc: "Do what's right for society",
      },
    ],
  },
];

const GetRcmiReport = ({ theme }) => {
  const navigate = useNavigate();
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
      navigate("/home");
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
        aria-label="Go back"
      >
        <ArrowBackIcon fontSize="small" />
        <span>Back</span>
      </button>

      <header ref={heroRef} className={styles.hero}>
        <p className={styles.eyebrow}>RealLives ChangeMaker Index</p>
        <h1 className={styles.heroTitle}>Your Personalised RCMI Report</h1>
        <p className={styles.heroSubtitle}>
          The RealLives ChangeMaker Index (RCMI) measures how you develop
          empathy, global awareness, and decision-making through immersive life
          simulations — translating your gameplay into a structured assessment of
          changemaking potential.
        </p>
        <div className={styles.heroPills}>
          <span className={styles.heroPill}>18 Competencies</span>
          <span className={styles.heroPill}>5-Part Report</span>
          <span className={styles.heroPill}>Data-Driven Insights</span>
        </div>
      </header>

      <section className={styles.timelineSection}>
        <h2 className={styles.sectionHeading}>How to Get Your Report</h2>
        <p className={styles.sectionLead}>
          Register, play three lives, and unlock your full ChangeMaker profile.
        </p>
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {TIMELINE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.id}
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
          <PictureAsPdfOutlinedIcon className={styles.sampleReportIcon} />
          View Sample Report
          <OpenInNewOutlinedIcon className={styles.sampleReportArrow} />
        </button>
        <span className={styles.dividerLine} aria-hidden="true" />
      </div>

      <section ref={journeyRef} className={styles.reportJourneySection}>
        <p className={styles.sectionLabel}>What you&apos;ll receive</p>
        <h2 className={styles.sectionHeading}>How Your Report Works</h2>
        <p className={styles.sectionLead}>
          Your report is a five-part journey from understanding your profile to
          charting your path forward.
        </p>

        <div className={styles.journeyRoadmap}>
          {REPORT_JOURNEY.map((part) => (
            <div
              key={part.id}
              className={styles.journeyBlock}
              style={{
                "--journey-color": part.color,
                "--journey-soft": part.colorSoft,
              }}
            >
              <span className={styles.journeyPart}>{part.part}</span>
              <span className={styles.journeyTitle}>{part.title}</span>
            </div>
          ))}
        </div>

        <div className={styles.journeyDetails}>
          {REPORT_JOURNEY.map((part) => (
            <article
              key={part.id}
              className={styles.journeyDetailCard}
              style={{
                "--journey-color": part.color,
                "--journey-soft": part.colorSoft,
              }}
            >
              <h3 className={styles.journeyDetailTitle}>
                Part {part.part} — {part.title}
              </h3>
              <ul className={styles.journeyDetailList}>
                {part.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section ref={previewRef} className={styles.previewSection}>
        <p className={styles.sectionLabel}>Report preview</p>
        <h2 className={styles.sectionHeading}>See What&apos;s Inside</h2>
        <p className={styles.sectionLead}>
          A rich, visual report built from your simulation data — scores,
          graphs, stages, and personalised recommendations.
        </p>

        <div className={styles.previewGrid}>
          {REPORT_PREVIEW_IMAGES.map((img) => (
            <figure key={img.src} className={styles.previewCard}>
              <div className={styles.previewImageWrap}>
                <img
                  src={img.src}
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
              alt="RCMI"
              className={styles.aboutLogo}
            />
            <h3 className={styles.aboutTitle}>
              About RealLives ChangeMaker Index
            </h3>
            <p className={styles.aboutText}>
              RCMI analyses players&apos; experiences across diverse
              socioeconomic and cultural contexts to generate meaningful
              insights, translating gameplay into a structured assessment of
              changemaking potential and social impact orientation.
            </p>
          </article>
          <article className={`${styles.aboutCard} ${styles.aboutFoundation}`}>
            <div className={styles.foundationLogoWrap}>
              <img
                src={foundationLogo}
                alt="RealLives Foundation"
                className={styles.foundationLogo}
              />
            </div>
            <h3 className={styles.aboutTitle}>About RealLives Foundation</h3>
            <p className={styles.aboutText}>
              RealLives Foundation fosters empathy, global awareness, and
              changemaking skills through experiential learning — helping
              individuals explore diverse human experiences and inspire action
              toward a more inclusive world.
            </p>
          </article>
        </div>
      </section>

      <section ref={competencyRef} className={styles.competencySection}>
        <p className={styles.sectionLabel}>Competency framework</p>
        <h2 className={styles.sectionHeading}>
          18 Competencies Across 4 Clusters
        </h2>
        <p className={styles.sectionLead}>
          Each cluster reflects a distinct dimension of changemaking, measured
          through the choices you make in simulation.
        </p>

        <div className={styles.competencyGrid}>
          {COMPETENCY_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article
                key={cluster.id}
                className={styles.competencyCard}
                style={{
                  "--cluster-accent": cluster.accent,
                  "--cluster-accent-soft": cluster.accentSoft,
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.clusterIconWrap}>
                    <Icon className={styles.clusterIcon} />
                  </span>
                  <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                </div>

                <ul className={styles.clusterList}>
                  {cluster.items.map((item) => (
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
          <h3 className={styles.stagesHeading}>Your ChangeMaker Stage</h3>
          <p className={styles.stagesLead}>
            Progress through five stages as your competency profile develops.
          </p>
          <div className={styles.stagesRow}>
            {CHANGEMAKER_STAGES.map((stage) => (
              <div key={stage.name} className={styles.stageCard}>
                <span className={styles.stageName}>{stage.name}</span>
                <span className={styles.stageRange}>{stage.range}</span>
                <span className={styles.stageDesc}>{stage.description}</span>
              </div>
            ))}
          </div>
          <p className={styles.stageQuote}>
            &ldquo;Growth is the proof of persistence.&rdquo;
          </p>
        </div>
      </section>

      <div className={styles.pageSpacer} aria-hidden="true" />

      <footer className={styles.fixedFooter}>
        <div className={styles.footerInner}>
          <div className={styles.footerText}>
            <p className={styles.footerTitle}>Ready for your RCMI Report?</p>
            <p className={styles.footerSubtitle}>
              Register, play three lives, and discover your ChangeMaker score,
              stage, and personalised path.
            </p>
          </div>
          <button
            type="button"
            className={styles.footerCta}
            onClick={handleGetReport}
          >
            Get RCMI Report
          </button>
        </div>
      </footer>
    </div>
  );
};

export default GetRcmiReport;
