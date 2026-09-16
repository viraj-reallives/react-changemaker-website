import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../i18n";

export const SIGNUP_USER_TYPES = [
  "school",
  "university",
  "homeschooler",
  "gamer",
];

const SIGNUP_LOCALE_FALLBACKS = {
  es: "en",
};

export function getSignupLang(locale) {
  const requested = String(locale || DEFAULT_LOCALE).toLowerCase();
  const mapped = SIGNUP_LOCALE_FALLBACKS[requested] || requested;
  if (SUPPORTED_LOCALES.includes(mapped)) return mapped;
  return DEFAULT_LOCALE;
}

export function getSignupUrl(userType, locale) {
  const type = SIGNUP_USER_TYPES.includes(userType) ? userType : "gamer";
  return `https://reallivesworld.com/signup/${type}/${getSignupLang(locale)}`;
}

