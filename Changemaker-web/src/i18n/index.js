import en from "./en.json";
import { createTranslator } from "./utils";

export const SUPPORTED_LOCALES = ["en", "ko", "ja", "de", "sv", "es"];
export const DEFAULT_LOCALE = "en";

const LOCALE_LOADERS = {
  en: () => Promise.resolve(en),
  ko: () => import("./locales/ko.json").then((m) => m.default || m),
  ja: () => import("./locales/ja.json").then((m) => m.default || m),
  de: () => import("./locales/de.json").then((m) => m.default || m),
  sv: () => import("./locales/sv.json").then((m) => m.default || m),
  es: () => import("./locales/es.json").then((m) => m.default || m),
};

function mergeDeep(target, source) {
  if (!source || typeof source !== "object") return target;
  const result = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      typeof result[key] === "object" &&
      !Array.isArray(result[key])
    ) {
      result[key] = mergeDeep(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export async function loadLocale(locale = DEFAULT_LOCALE) {
  const code = String(locale || DEFAULT_LOCALE).toLowerCase();
  if (code === DEFAULT_LOCALE) return en;

  const loader = LOCALE_LOADERS[code];
  if (!loader) return en;

  try {
    const messages = await loader();
    return mergeDeep(en, messages);
  } catch {
    return en;
  }
}

export function createI18n(locale = DEFAULT_LOCALE, messages = en) {
  return {
    locale,
    messages,
    t: createTranslator(messages),
  };
}

export { en as defaultMessages };
