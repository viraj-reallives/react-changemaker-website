const ITEM_TYPES = new Set(["choice", "multi", "scale", "nps", "grid", "quiz", "number", "words", "text"]);
const WIDE_TYPES = new Set(["grid", "quiz", "text", "words"]);
/** Flip to true when the recommend-to-a-friend (NPS) card should show again. */
const SHOW_NPS = false;
/** Flip to true when reviewed quotes should show again. */
const SHOW_QUOTES = true;

export function isItemShown(item) {
  if (item.type === "nps" && !SHOW_NPS) return false;
  if (item.type === "text" && !SHOW_QUOTES) return false;
  return ITEM_TYPES.has(item.type);
}

export function isWideItem(item) {
  return WIDE_TYPES.has(item.type) || (item.type === "multi" && item.options.length > 8);
}

/** Items are matched by the start of their bilingual title, i.e. the English part. */
export function findItem(survey, prefix) {
  for (const section of survey?.sections ?? []) {
    const item = section.items.find((i) => String(i.title ?? "").startsWith(prefix));
    if (item) return item;
  }
  return null;
}
