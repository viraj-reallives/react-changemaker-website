import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./index";

const STORAGE_KEY = "cm-marketing-locale";

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(String(locale || "").toLowerCase());
}

export function getStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isSupportedLocale(stored)) return stored;
  } catch {
    // Ignore storage failures in private browsing.
  }
  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname) {
  const segments = String(pathname || "")
    .split("/")
    .filter(Boolean);

  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname || "/";
}

export function getLocaleFromPath(pathname) {
  const segments = String(pathname || "")
    .split("/")
    .filter(Boolean);

  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    return segments[0];
  }

  return null;
}

export function localizePath(path, locale = DEFAULT_LOCALE) {
  const code = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const stripped = stripLocalePrefix(path || "/");
  const normalized =
    stripped === "/" ? "" : stripped.startsWith("/") ? stripped : `/${stripped}`;

  return normalized ? `/${code}${normalized}` : `/${code}`;
}
