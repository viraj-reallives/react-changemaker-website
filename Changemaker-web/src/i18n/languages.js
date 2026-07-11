export const LANGUAGE_NATIVE_LABELS = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  de: "Deutsch",
  sv: "Svenska",
  es: "Español",
};

export function getLanguageNativeLabel(code) {
  return LANGUAGE_NATIVE_LABELS[code] ?? code;
}
