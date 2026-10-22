"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ui } from "@/content/ui";
import type { L, Lang } from "@/content/types";

const STORAGE_KEY = "minh-cv-lang";

/**
 * Produktzahl kommt von der Showcase-Seite (stats.json, dort aus den Produktdaten
 * erzeugt). Der Fallback steht im statisch exportierten HTML, bis die Datei geladen ist.
 */
const STATS_URL = "https://theminhnguyen.github.io/stats.json";
type ProductWords = Record<Lang, string>;
const FALLBACK_WORDS: ProductWords = { de: "Achtzehn", en: "Eighteen" };

function withCounts(text: string, words: ProductWords, lang: Lang) {
  const word = words[lang];
  return text.replaceAll("{Products}", word).replaceAll("{products}", word.toLowerCase());
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Übersetzt ein zweisprachiges Feld. */
  t: (value: L) => string;
  /** Übersetzt einen UI-Schlüssel aus `content/ui.ts`. */
  tk: (key: keyof typeof ui) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === "de" || value === "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");
  const [words, setWords] = useState<ProductWords>(FALLBACK_WORDS);

  useEffect(() => {
    let alive = true;
    fetch(STATS_URL, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : null))
      .then((stats) => {
        const w = stats?.words;
        if (alive && typeof w?.de === "string" && typeof w?.en === "string") setWords({ de: w.de, en: w.en });
      })
      .catch(() => {
        // offline oder blockiert: Fallback bleibt stehen
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // Einmalige Initialisierung nach dem Mount, um SSR/Client-Hydration-Mismatches zu vermeiden.
    if (isLang(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
      return;
    }
    if (!navigator.language.toLowerCase().startsWith("de")) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "de" ? "en" : "de";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = useCallback((value: L) => withCounts(value[lang], words, lang), [lang, words]);
  const tk = useCallback((key: keyof typeof ui) => withCounts(ui[key][lang], words, lang), [lang, words]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, tk }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang muss innerhalb von LanguageProvider verwendet werden");
  return context;
}
