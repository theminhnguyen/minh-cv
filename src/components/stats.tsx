"use client";

import { useEffect, useState } from "react";
import { stats } from "@/content/site";
import { useLang } from "@/lib/language";
import { useScrollProgress } from "@/lib/use-scroll-progress";
import { useSpotlight } from "@/lib/use-spotlight";

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const { t } = useLang();
  const onMouseMove = useSpotlight();
  // Leicht versetzte Startpunkte, damit die Zahlen nacheinander hochlaufen.
  const { ref, progress } = useScrollProgress<HTMLDivElement>({
    start: 0.88 - index * 0.03,
    distance: 0.42,
  });

  // Der Endwert steht immer im HTML. Hochgezählt wird nur, wenn die Karte beim Laden
  // noch unter dem Viewport liegt — sonst sähen Suchmaschinen und Besucher ohne
  // JavaScript nur Nullen.
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (node.getBoundingClientRect().top > window.innerHeight * 0.9) setAnimated(true);
  }, [ref]);

  const eased = 1 - Math.pow(1 - progress, 3);
  const shown = animated ? Math.round(stat.value * eased) : stat.value;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      data-visible={progress > 0}
      className="reveal-card spotlight rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[color-mix(in_oklab,var(--color-accent)_45%,var(--color-line))]"
    >
      <p className="font-mono text-4xl font-medium tracking-tight text-[var(--color-text)] tabular-nums sm:text-5xl">
        {stat.prefix}
        {shown}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm leading-snug text-[var(--color-muted)] text-pretty">
        {t(stat.label)}
      </p>
      {stat.period ? (
        <p className="mt-1 font-mono text-[11px] text-[var(--color-faint)]">{t(stat.period)}</p>
      ) : null}
    </div>
  );
}

export function Stats() {
  return (
    <div className="perspective grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.label.de} stat={stat} index={index} />
      ))}
    </div>
  );
}
