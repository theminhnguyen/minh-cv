"use client";

import { useEffect, useRef, useState } from "react";
import { clamp01, subscribeScroll } from "./scroll";

type Options = {
  /** Start, gemessen als Anteil der Viewport-Höhe von oben (0.9 = Element tritt unten ein). */
  start?: number;
  /** Länge des Fortschritts in Viewport-Höhen. */
  distance?: number;
};

/** Fortschritt 0..1, während ein Element durch den Viewport wandert. Reversibel beim Hochscrollen. */
export function useScrollProgress<T extends HTMLElement>({
  start = 0.85,
  distance = 0.5,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    return subscribeScroll(() => {
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      const travelled = viewport * start - rect.top;
      setProgress(clamp01(travelled / (viewport * distance)));
    });
  }, [start, distance]);

  return { ref, progress };
}

/** Fortschritt 0..1 über die gesamte Scroll-Strecke eines hohen Wrappers mit `position: sticky`-Inhalt. */
export function usePinProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    return subscribeScroll(() => {
      const rect = node.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(clamp01(-rect.top / scrollable));
    });
  }, []);

  return { ref, progress };
}

/** Vertikale Scroll-Position des Fensters. */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => subscribeScroll(() => setScrollY(window.scrollY)), []);

  return scrollY;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
