import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { DEFAULT_LOCALE } from "../../i18n";
import {
  getStoredLocale,
  isSupportedLocale,
  localizePath,
} from "../../i18n/routing";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

export default function LocaleGate() {
  const { locale: localeParam } = useParams();
  const location = useLocation();
  const { locale, setLocale } = useMarketingTranslation();

  useEffect(() => {
    if (!isSupportedLocale(localeParam)) return;
    if (locale !== localeParam) {
      setLocale(localeParam);
    }
  }, [localeParam, locale, setLocale]);

  if (!isSupportedLocale(localeParam)) {
    const fallbackLocale = getStoredLocale() || DEFAULT_LOCALE;
    return (
      <Navigate
        to={`${localizePath(location.pathname, fallbackLocale)}${location.search}${location.hash}`}
        replace
      />
    );
  }

  return <Outlet />;
}
