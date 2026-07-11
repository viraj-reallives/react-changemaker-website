import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = path.join(__dirname, "../src/i18n/locales");
const SOURCE = path.join(LOCALES_DIR, "en.json");

const TARGETS = {
  de: "de",
  ja: "ja",
  ko: "ko",
  sv: "sv",
  es: "es",
};

const SKIP_VALUES = new Set([
  "RCMI",
  "RealLives",
  "RealLives Foundation",
  "RealLives World",
  "ChangeMaker Index",
  "logo",
  "img",
  "Arcade Demo",
  "USA",
  "SDG",
  "SDGs",
  "NEP 2020",
  "UNESCO APCEIU",
  "India HCI 2024",
  "Empathy Canvas",
  "Social Business Canvas",
  "TikTok",
  "Instagram",
  "YouTube",
  "Skype",
  "FLAME University",
  "ETH Zurich",
  "IIT Bombay",
  "Kyung Hee University",
  "Kyunghee University",
  "Navamindradhiraj University",
  "The Orchid School Pune",
  "Korea University",
  "ETH University Zurich, Switzerland",
  "Navamindradhiraj University, Bangkok",
  "Kyunghee University, Korea",
  "IIT Bombay, India",
]);

function shouldSkip(value) {
  if (typeof value !== "string") return true;
  if (value.startsWith("/")) return true;
  if (/^[\d\s/–\-—]+$/.test(value)) return true;
  if (SKIP_VALUES.has(value.trim())) return true;
  if (value.startsWith("©")) return false;
  return false;
}

async function translateText(text, targetLang) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", targetLang);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Translate failed (${res.status}): ${text.slice(0, 80)}`);
  const data = await res.json();
  return data[0].map((part) => part[0]).join("");
}

const cache = new Map();

async function translateValue(value, targetLang) {
  if (shouldSkip(value)) return value;

  const cacheKey = `${targetLang}::${value}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  // Preserve placeholders and line breaks while translating in chunks if needed
  let translated;
  if (value.length > 4500) {
    const chunks = value.match(/[\s\S]{1,4000}/g) || [value];
    const parts = [];
    for (const chunk of chunks) {
      parts.push(await translateText(chunk, targetLang));
      await sleep(120);
    }
    translated = parts.join("");
  } else {
    translated = await translateText(value, targetLang);
  }

  cache.set(cacheKey, translated);
  await sleep(80);
  return translated;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function translateNode(node, targetLang) {
  if (typeof node === "string") {
    return translateValue(node, targetLang);
  }
  if (Array.isArray(node)) {
    const out = [];
    for (const item of node) {
      out.push(await translateNode(item, targetLang));
    }
    return out;
  }
  if (node && typeof node === "object") {
    const out = {};
    for (const [key, value] of Object.entries(node)) {
      out[key] = await translateNode(value, targetLang);
    }
    return out;
  }
  return node;
}

async function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE, "utf8"));

  for (const [code, lang] of Object.entries(TARGETS)) {
    const outPath = path.join(LOCALES_DIR, `${code}.json`);
    console.log(`Translating to ${code}...`);
    const translated = await translateNode(source, lang);
    fs.writeFileSync(outPath, `${JSON.stringify(translated, null, 2)}\n`, "utf8");
    console.log(`Wrote ${outPath}`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
