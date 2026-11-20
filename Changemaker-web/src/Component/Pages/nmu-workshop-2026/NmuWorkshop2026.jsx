import { useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaImages, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import LanguageSwitcher from "../../Navbar/LanguageSwitcher";
import { useMarketingTranslation } from "../../../context/MarketingLocaleContext";
import { useLocalePath } from "../../../hooks/useLocalePath";
import { useNmuWorkshop2026Content } from "../../../hooks/useNmuWorkshop2026Content";
import { useNmuSurveySummary } from "../../../hooks/useNmuSurveySummary";
import ComparisonView from "./ComparisonView";
import SurveyView from "./SurveyView";
import WorkshopMedia from "./WorkshopMedia.jsx";
import { createSurveyCtx, fill, formatDateTime, percent } from "./surveyText";
import logo from "../../../assets/logo-white.svg";
import nmuLogo from "../../../assets/Home-image/second-logo-tab.svg";
import clsx from "./clsx";
import styles from "./NmuWorkshop2026.module.css";

const HERO_IMAGE = "/assets/nmu-workshop-2026/session-classroom.jpg";
const VIEWS = ["pre", "post", "compare", "media"];
const FACT_ICONS = {
  dates: FaCalendarAlt,
  place: FaMapMarkerAlt,
  students: FaUsers,
  sessions: FaClock,
};

function ProgressRow({ value, label, total, content, format, tone }) {
  const pct = value == null ? 0 : percent(value, total);
  const width = value ? Math.max(Math.min((value / total) * 100, 100), 1.5) : 0;
  return (
    <div className={styles.progressRow}>
      <div className={clsx(styles.progressHead, !label && styles.progressHeadSolo)}>
        {label ? <span>{label}</span> : null}
        <strong>{format(value)}</strong>
      </div>
      <div className={styles.progressTrack}>
        <span className={clsx(styles.progressFill, styles[tone])} style={{ width: `${width}%` }} />
      </div>
      <span className={styles.progressSub}>
        {fill(content.stats.ofParticipants, { pct, total: format(total) })}
      </span>
    </div>
  );
}

export default function NmuWorkshop2026() {
  const { locale } = useMarketingTranslation();
  const localePath = useLocalePath();
  const content = useNmuWorkshop2026Content();
  const { data, error, isLoading, isLive } = useNmuSurveySummary();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultView = data && !data.surveys.post.responses ? "pre" : "compare";
  const view = VIEWS.includes(searchParams.get("view")) ? searchParams.get("view") : defaultView;

  useEffect(() => {
    document.title = content.metaTitle;
  }, [content.metaTitle]);

  const ctx = useMemo(
    () => createSurveyCtx(content, locale === "th" ? "th" : "en"),
    [content, locale],
  );

  function selectView(next) {
    const params = new URLSearchParams(searchParams);
    if (next === defaultView) params.delete("view");
    else params.set("view", next);
    setSearchParams(params, { replace: true });
  }

  let badge = null;
  if (data?.sample) badge = content.hero.sampleBadge;
  else if (data) badge = isLive ? content.hero.liveBadge : content.hero.finalBadge;

  const updated = formatDateTime(data?.updatedAt, ctx.locale);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to={localePath("/")} className={styles.logoLink} aria-label={content.homeAriaLabel}>
            <img src={logo} alt="RealLives ChangeMaker Index" className={styles.logoImg} />
          </Link>
          <div className={styles.headerActions}>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <img src={HERO_IMAGE} alt={content.hero.imageAlt} className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={clsx(styles.inner, styles.heroGrid)}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <div className={styles.heroLogos} aria-label={content.hero.partnerLogosAria}>
              <img src={logo} alt={content.hero.rlLogoAlt} className={styles.heroLogoRl} />
              <span className={styles.heroLogoDivider} aria-hidden="true" />
              <div className={styles.heroLogoNmuCrop}>
                <img src={nmuLogo} alt={content.hero.nmuLogoAlt} />
              </div>
            </div>
            <h1 className={styles.heroHeading}>{content.hero.title}</h1>
            <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
            <p className={styles.heroBody}>{content.hero.body}</p>
            <ul className={styles.facts}>
              {Object.keys(FACT_ICONS).map((key) => {
                const Icon = FACT_ICONS[key];
                return (
                  <li key={key} className={styles.fact}>
                    <Icon aria-hidden="true" />
                    {content.hero.facts[key]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <main className={styles.inner}>
        {isLoading && <p className={styles.state}>{content.states.loading}</p>}
        {!isLoading && !data && error && <p className={styles.state}>{content.states.error}</p>}

        {data && (
          <>
            <div className={styles.viewBar}>
              <div className={styles.switcher} role="tablist" aria-label={content.views.ariaLabel}>
                {VIEWS.filter((key) => key !== "media").map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={view === key}
                    className={clsx(styles.switcherButton, view === key && styles.switcherButtonActive)}
                    onClick={() => selectView(key)}
                  >
                    {content.views[key]}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className={clsx(styles.mediaButton, view === "media" && styles.mediaButtonActive)}
                aria-pressed={view === "media"}
                onClick={() => selectView("media")}
              >
                <FaImages aria-hidden="true" />
                {content.media.button}
              </button>
            </div>

            {view !== "compare" && view !== "media" && (
              <aside className={styles.progressCard} aria-live="polite">
                <div className={styles.progressCardHead}>
                  <h2>
                    {view === "post" ? content.stats.postResponses : content.stats.preResponses}
                  </h2>
                  {badge && (
                    <span className={clsx(styles.badge, data.sample && styles.badgeSample)}>
                      {isLive && !data.sample && <span className={styles.liveDot} />}
                      {badge}
                    </span>
                  )}
                </div>
                <div className={clsx(styles.progressRows, styles.progressRowsSingle)}>
                  <ProgressRow
                    value={view === "post" ? data.surveys.post.responses : data.surveys.pre.responses}
                    label={null}
                    total={data.expectedParticipants ?? 800}
                    content={content}
                    format={ctx.format}
                    tone={view === "post" ? "tonePost" : "tonePre"}
                  />
                </div>
                <div className={clsx(styles.progressFoot, styles.progressFootSingle)}>
                  <div>
                    <strong>{updated ?? "—"}</strong>
                    <span>{content.stats.updated}</span>
                  </div>
                </div>
              </aside>
            )}

            {view === "media" ? (
              <WorkshopMedia content={content.media} />
            ) : (
              <div role="tabpanel" key={view}>
                {view === "compare" && <ComparisonView comparison={data.comparison} ctx={ctx} />}
                {view === "pre" && <SurveyView survey={data.surveys.pre} ctx={ctx} />}
                {view === "post" && <SurveyView survey={data.surveys.post} ctx={ctx} />}
              </div>
            )}

            <p className={styles.privacy}>{content.privacyNote}</p>
          </>
        )}
      </main>
    </div>
  );
}
