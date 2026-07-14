import { Navigate, useLocation, useParams } from "react-router-dom";
import { DEFAULT_LOCALE } from "../../i18n";
import {
  getStoredLocale,
  isSupportedLocale,
  localizePath,
} from "../../i18n/routing";

/**
 * Converts legacy prefix URLs (/en/home) to suffix URLs (/home/en).
 */
export default function LegacyPrefixRedirect() {
  const { locale, "*": rest } = useParams();
  const location = useLocation();

  if (!isSupportedLocale(locale)) {
    return (
      <Navigate
        to={localizePath(location.pathname, getStoredLocale() || DEFAULT_LOCALE)}
        replace
      />
    );
  }

  const pagePath = rest ? `/${rest}` : "/";
  const target = localizePath(pagePath, locale);

  return (
    <Navigate
      to={`${target}${location.search}${location.hash}`}
      replace
    />
  );
}
