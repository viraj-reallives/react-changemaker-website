import styles from "./PortalLanguageBar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { SUPPORTED_LOCALES } from "../../i18n";
import { localizePath } from "../../i18n/routing";
import { getLanguageNativeLabel } from "../../i18n/languages";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import enIcon from "../../assets/landing page/en.svg";
import koIcon from "../../assets/landing page/ko.svg";
import jaIcon from "../../assets/landing page/ja.svg";
import deIcon from "../../assets/landing page/de.svg";
import svIcon from "../../assets/landing page/sv.svg";

const PORTAL_SUPPORTED_LOCALES = SUPPORTED_LOCALES.filter((code) => code !== "es");

const LANGUAGE_ICONS = {
  en: enIcon,
  ko: koIcon,
  ja: jaIcon,
  de: deIcon,
  sv: svIcon,
};

function LanguageIcons({ layout }) {
  const { locale } = useMarketingTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (code) => {
    navigate(
      `${localizePath(location.pathname, code)}${location.search}${location.hash}`,
    );
  };

  return (
    <ul
      className={
        layout === "vertical" ? styles.iconList : styles.iconListHorizontal
      }
    >
      {PORTAL_SUPPORTED_LOCALES.map((code) => {
        const isSelected = locale === code;
        const nativeLabel = getLanguageNativeLabel(code);

        return (
          <li key={code} className={styles.languageItem}>
            <button
              type="button"
              className={`${styles.languageButton} ${isSelected ? styles.languageButtonActive : ""}`}
              aria-label={`Select ${nativeLabel}`}
              aria-pressed={isSelected}
              onClick={() => handleSelect(code)}
            >
              <span className={styles.iconFrame} aria-hidden="true">
                <img
                  className={styles.iconImage}
                  src={LANGUAGE_ICONS[code]}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className={styles.languageLabel}>{nativeLabel}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function PortalLanguageSidebar({ className }) {
  const { t } = useMarketingTranslation();

  return (
    <aside
      className={[styles.sidebar, className].filter(Boolean).join(" ")}
      aria-label="Language selection"
    >
      <p className={styles.title}>{t("portal.languages.title")}</p>
      <p className={styles.hint}>{t("portal.languages.hint")}</p>
      <LanguageIcons layout="vertical" />
    </aside>
  );
}

export function PortalLanguageMobile() {
  const { t } = useMarketingTranslation();

  return (
    <section className={styles.mobileBar} aria-label="Language selection">
      <div className={styles.mobileCopy}>
        <p className={styles.mobileTitle}>{t("portal.languages.title")}</p>
        <p className={styles.hint}>{t("portal.languages.hint")}</p>
      </div>
      <LanguageIcons layout="horizontal" />
    </section>
  );
}
