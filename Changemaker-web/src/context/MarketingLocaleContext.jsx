import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  createI18n,
  defaultMessages,
  loadLocale,
} from "../i18n";
import { getLocaleFromPath, getStoredLocale } from "../i18n/routing";
import { getNested } from "../i18n/utils";

const STORAGE_KEY = "cm-marketing-locale";

const MarketingLocaleContext = createContext(null);

function readInitialLocale() {
  const fromUrl = getLocaleFromPath(window.location.pathname);
  if (fromUrl) return fromUrl;
  return getStoredLocale();
}

export function MarketingLocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readInitialLocale);
  const [messages, setMessages] = useState(defaultMessages);
  const [isLoading, setIsLoading] = useState(locale !== DEFAULT_LOCALE);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    loadLocale(locale)
      .then((data) => {
        if (!cancelled) {
          setMessages(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLocaleState(DEFAULT_LOCALE);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = (nextLocale) => {
    const code = String(nextLocale || DEFAULT_LOCALE).toLowerCase();
    if (!SUPPORTED_LOCALES.includes(code)) return;

    setLocaleState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Ignore storage failures in private browsing.
    }
  };

  const i18n = useMemo(() => createI18n(locale, messages), [locale, messages]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: i18n.t,
      getMessage: (key) => getNested(messages, key),
      messages,
      isLoading,
    }),
    [locale, i18n.t, messages, isLoading],
  );

  return (
    <MarketingLocaleContext.Provider value={value}>
      {children}
    </MarketingLocaleContext.Provider>
  );
}

export function useMarketingTranslation() {
  const context = useContext(MarketingLocaleContext);
  if (!context) {
    throw new Error(
      "useMarketingTranslation must be used within MarketingLocaleProvider",
    );
  }
  return context;
}
