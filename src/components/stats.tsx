"use client";

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

  const eased = 1 - Math.pow(1 - progress, 3);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      data-visible={progress > 0}
      className="reveal-card spotlight rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[color-mix(in_oklab,var(--color-accent)_45%,var(--color-line))]"
    >
      <p className="font-mono text-4xl font-medium tracking-tight text-[var(--color-text)] tabular-nums sm:text-5xl">
        {stat.prefix}
        {Math.round(stat.value * eased)}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm leading-snug text-[var(--color-muted)] text-pretty">
        {t(stat.label)}
      </p>
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
