import { Navigate } from "react-router-dom";
import { getStoredLocale } from "../../i18n/routing";

export default function RootLocaleRedirect() {
  return <Navigate to={`/${getStoredLocale()}`} replace />;
}
