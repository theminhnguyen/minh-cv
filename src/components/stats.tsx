"use client";

import { useEffect, useState } from "react";
import { stats } from "@/content/site";
import { useLang } from "@/lib/language";
import { useInView } from "@/lib/use-in-view";

const DURATION = 1100;

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Reduced-Motion: Endwert direkt anzeigen statt hochzuzählen.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return value;
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const { t } = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();
  const value = useCountUp(stat.value, inView);

  return (
    <div
      ref={ref}
      data-visible={inView}
      className="reveal rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <p className="font-mono text-4xl font-medium tracking-tight text-[var(--color-text)] tabular-nums sm:text-5xl">
        {stat.prefix}
        {value}
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.label.de} stat={stat} index={index} />
      ))}
    </div>
  );
}
