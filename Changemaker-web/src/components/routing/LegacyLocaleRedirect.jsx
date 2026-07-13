import { Navigate, useLocation } from "react-router-dom";
import { getStoredLocale, localizePath } from "../../i18n/routing";

export default function LegacyLocaleRedirect() {
  const location = useLocation();
  const target = localizePath(location.pathname, getStoredLocale());

  return (
    <Navigate
      to={`${target}${location.search}${location.hash}`}
      replace
    />
  );
}
