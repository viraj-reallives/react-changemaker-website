export function interpolateMessage(str, vars = {}) {
  if (typeof str !== "string") return str;
  if (!vars || typeof vars !== "object") return str;

  const byLower = {};
  for (const key of Object.keys(vars)) {
    byLower[String(key).toLowerCase()] = vars[key];
  }

  return str.replace(/\{\{(\w+)\}\}/g, (_, rawKey) => {
    const key = String(rawKey);
    let value = vars[key];
    if (value == null) value = byLower[key.toLowerCase()];
    if (value == null) return `{{${key}}}`;
    return String(value);
  });
}

export function getNested(obj, path) {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = current[key];
  }
  return current;
}

export function createTranslator(messages) {
  return function t(key, vars) {
    const value = getNested(messages, key);
    if (typeof value === "string") {
      return vars ? interpolateMessage(value, vars) : value;
    }
    if (vars && typeof vars.defaultValue === "string") {
      return vars.defaultValue;
    }
    return key;
  };
}
