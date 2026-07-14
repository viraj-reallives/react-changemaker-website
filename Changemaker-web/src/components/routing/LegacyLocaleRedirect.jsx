import { Navigate, useLocation } from "react-router-dom";
import {
  getLocaleFromPath,
  getStoredLocale,
  localizePath,
} from "../../i18n/routing";

export default function LegacyLocaleRedirect() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname) || getStoredLocale();
  const target = localizePath(location.pathname, locale);

  if (target === location.pathname) {
    return null;
  }

  return (
    <Navigate
      to={`${target}${location.search}${location.hash}`}
      replace
    />
  );
}
