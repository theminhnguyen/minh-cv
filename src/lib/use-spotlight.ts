"use client";

import { useCallback } from "react";

/**
 * Setzt die Cursorposition als CSS-Variablen auf dem Element.
 * Die Klasse `spotlight` zeichnet daraus einen weichen Lichtschein.
 */
export function useSpotlight() {
  return useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }, []);
}
