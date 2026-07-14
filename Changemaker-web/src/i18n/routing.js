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

/** Removes a locale code from either the start (legacy) or end (current) of a path. */
export function stripLocaleFromPath(pathname) {
  const segments = String(pathname || "")
    .split("/")
    .filter(Boolean);

  if (segments.length === 0) return "/";

  // Current format: /page/.../locale
  if (isSupportedLocale(segments[segments.length - 1])) {
    const rest = segments.slice(0, -1).join("/");
    return rest ? `/${rest}` : "/";
  }

  // Legacy format: /locale/page/...
  if (isSupportedLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized || "/";
}

/** @deprecated Use stripLocaleFromPath */
export function stripLocalePrefix(pathname) {
  return stripLocaleFromPath(pathname);
}

export function getLocaleFromPath(pathname) {
  const segments = String(pathname || "")
    .split("/")
    .filter(Boolean);

  if (segments.length === 0) return null;

  // Prefer suffix (current format)
  if (isSupportedLocale(segments[segments.length - 1])) {
    return segments[segments.length - 1];
  }

  // Fall back to prefix (legacy share links)
  if (isSupportedLocale(segments[0])) {
    return segments[0];
  }

  return null;
}

/** Builds a path with the language code at the end, e.g. /certified-institutes/en */
export function localizePath(path, locale = DEFAULT_LOCALE) {
  const code = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const stripped = stripLocaleFromPath(path || "/");

  if (stripped === "/") return `/${code}`;

  const normalized = stripped.startsWith("/") ? stripped : `/${stripped}`;
  return `${normalized}/${code}`;
}
