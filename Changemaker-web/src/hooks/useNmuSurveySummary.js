import { useEffect, useState } from "react";

const FROZEN_SUMMARY_URL = "/data/nmu-workshop-2026.json";
const LIVE_URL = import.meta.env.VITE_NMU_SURVEY_API_URL || "";
const REFRESH_MS = 5 * 60 * 1000;

async function fetchNmuSurveySummary() {
  const url = LIVE_URL || FROZEN_SUMMARY_URL;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!data?.surveys?.pre || !data?.surveys?.post) {
    throw new Error("Unexpected survey summary shape");
  }
  return data;
}

export function useNmuSurveySummary() {
  const [state, setState] = useState({ data: null, error: null, isLoading: true });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchNmuSurveySummary();
        if (!cancelled) setState({ data, error: null, isLoading: false });
      } catch (error) {
        if (!cancelled) setState((prev) => ({ ...prev, error, isLoading: false }));
      }
    }

    load();
    const intervalId = LIVE_URL ? setInterval(load, REFRESH_MS) : null;

    return () => {
      cancelled = true;
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return { ...state, isLive: Boolean(LIVE_URL) };
}
