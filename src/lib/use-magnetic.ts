"use client";

import { useCallback, useRef } from "react";

/** Lässt ein Element dem Mauszeiger leicht entgegenkommen. */
export function useMagnetic(strength = 0.28, max = 10) {
  const raf = useRef(0);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia("(hover: hover)").matches) return;

      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const x = Math.max(-max, Math.min(max, dx * strength));
      const y = Math.max(-max, Math.min(max, dy * strength));

      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        target.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    },
    [strength, max],
  );

  const onMouseLeave = useCallback((event: React.MouseEvent<HTMLElement>) => {
    cancelAnimationFrame(raf.current);
    event.currentTarget.style.transform = "";
  }, []);

  return { onMouseMove, onMouseLeave };
}
