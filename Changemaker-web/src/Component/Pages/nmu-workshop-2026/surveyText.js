const THAI = /[\u0E00-\u0E7F]/;
const SEPARATOR = " / ";

export const OTHER_OPTION = "__other__";

/**
 * Form text is written as "English / ไทย". Both halves may contain " / " themselves
 * (e.g. "Organiser / timekeeper / ผู้จัดการ / คุมเวลา"), so split at the last
 * separator whose left side is still free of Thai and whose right side has Thai.
 */
export function splitBilingual(text) {
  const value = String(text ?? "");
  let splitAt = -1;
  let from = 0;

  for (;;) {
    const index = value.indexOf(SEPARATOR, from);
    if (index === -1 || THAI.test(value.slice(0, index))) break;
    if (THAI.test(value.slice(index + SEPARATOR.length))) splitAt = index;
    from = index + 1;
  }

  if (splitAt === -1) return { en: value, th: value };
  return {
    en: value.slice(0, splitAt).trim(),
    th: value.slice(splitAt + SEPARATOR.length).trim(),
  };
}

export function localizeFormText(text, locale) {
  const parts = splitBilingual(text);
  return locale === "th" ? parts.th : parts.en;
}

/** Section titles arrive as "3 · How you see the world"; the page numbers sections itself. */
export function stripSectionNumber(title) {
  return String(title ?? "").replace(/^\d+\s*·\s*/, "");
}

/** Grid help text: "1 = Very little / น้อยมาก · 5 = A lot / มาก". */
export function localizeScaleHelp(help, locale) {
  if (!help) return "";
  return help
    .split(" · ")
    .map((part) => {
      const [, prefix = "", label = part] = part.match(/^(\d+\s*=\s*)(.*)$/) || [];
      return prefix + localizeFormText(label, locale);
    })
    .join(" · ");
}

export function padNumber(n) {
  return String(n).padStart(2, "0");
}

export function fill(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

export function percent(count, total) {
  return total ? Math.round((count / total) * 100) : 0;
}

export function intlLocale(locale) {
  return locale === "th" ? "th-TH" : locale;
}

/** Shared by the page and the PDF report: localized copy, number formatting and form-text translation. */
export function createSurveyCtx(content, locale) {
  const numberFormat = new Intl.NumberFormat(intlLocale(locale));
  return {
    content,
    locale,
    format: (value) => (value == null ? "—" : numberFormat.format(value)),
    t: (text) => localizeFormText(text, locale),
  };
}

export function formatDateTime(iso, locale) {
  if (!iso) return null;
  return new Intl.DateTimeFormat(intlLocale(locale), { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(iso),
  );
}

export function formatDecimal(value, digits = 1) {
  return value == null ? "—" : Number(value).toFixed(digits);
}

export function formatDelta(pre, post, digits = 1) {
  if (pre == null || post == null) return null;
  const delta = post - pre;
  const sign = delta > 0 ? "+" : delta < 0 ? "−" : "±";
  return `${sign}${Math.abs(delta).toFixed(digits)}`;
}
