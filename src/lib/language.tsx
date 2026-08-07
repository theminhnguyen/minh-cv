"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ui } from "@/content/ui";
import type { L, Lang } from "@/content/types";

const STORAGE_KEY = "minh-cv-lang";

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

  const t = useCallback((value: L) => value[lang], [lang]);
  const tk = useCallback((key: keyof typeof ui) => ui[key][lang], [lang]);

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
