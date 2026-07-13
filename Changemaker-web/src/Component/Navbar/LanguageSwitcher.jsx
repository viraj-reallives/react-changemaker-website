import { useEffect, useRef, useState } from "react";
import { MdCheck, MdExpandMore, MdLanguage } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { SUPPORTED_LOCALES } from "../../i18n";
import { localizePath } from "../../i18n/routing";
import { getLanguageNativeLabel } from "../../i18n/languages";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const LanguageSwitcher = () => {
  const { locale } = useMarketingTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (code) => {
    setIsOpen(false);
    navigate(
      `${localizePath(location.pathname, code)}${location.search}${location.hash}`,
    );
  };

  return (
    <div className="lang-switcher" ref={containerRef}>
      <button
        type="button"
        className={`lang-switcher-trigger ${isOpen ? "lang-switcher-trigger-open" : ""}`}
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <MdLanguage className="lang-switcher-icon" aria-hidden="true" />
        <span className="lang-switcher-label">
          {getLanguageNativeLabel(locale)}
        </span>
        <span className="lang-switcher-code">{locale.toUpperCase()}</span>
        <MdExpandMore
          className={`lang-switcher-chevron ${isOpen ? "lang-switcher-chevron-open" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul className="lang-switcher-menu" role="listbox" aria-label="Languages">
          {SUPPORTED_LOCALES.map((code) => {
            const isSelected = locale === code;
            const label = getLanguageNativeLabel(code);

            return (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`lang-switcher-option ${isSelected ? "lang-switcher-option-active" : ""}`}
                  onClick={() => handleSelect(code)}
                >
                  <span className="lang-switcher-option-label">{label}</span>
                  <span className="lang-switcher-option-code">{code.toUpperCase()}</span>
                  {isSelected && (
                    <MdCheck className="lang-switcher-option-check" aria-hidden="true" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
