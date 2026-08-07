"use client";

import { useEffect, useRef } from "react";
import { clamp01, subscribeScroll } from "@/lib/scroll";

/**
 * Fortschrittsbalken am oberen Rand.
 * Nutzt die native Scroll-Timeline, wo verfügbar, sonst einen rAF-Fallback.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    if (CSS.supports("animation-timeline: scroll()")) return;

    return subscribeScroll(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp01(window.scrollY / scrollable) : 0;
      bar.style.transform = `scaleX(${progress})`;
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="no-print fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div ref={barRef} className="scroll-progress h-full origin-left bg-[var(--color-accent)]" />
    </div>
  );
}
