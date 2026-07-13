import { useCallback } from "react";
import { localizePath } from "../i18n/routing";
import { useMarketingTranslation } from "../context/MarketingLocaleContext";

export function useLocalePath() {
  const { locale } = useMarketingTranslation();

  return useCallback((path) => localizePath(path, locale), [locale]);
}
