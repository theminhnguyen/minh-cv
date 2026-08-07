"use client";

import { Brain, Compass, Gauge, Users } from "lucide-react";
import { skillClusters } from "@/content/profile";
import { useLang } from "@/lib/language";
import { useSpotlight } from "@/lib/use-spotlight";
import { Reveal } from "./reveal";

const icons = { brain: Brain, users: Users, compass: Compass, gauge: Gauge, briefcase: Gauge };

export function Skills() {
  const { t } = useLang();
  const onMouseMove = useSpotlight();

  return (
    <div className="perspective grid grid-cols-1 gap-4 lg:grid-cols-2">
      {skillClusters.map((cluster, index) => {
        const Icon = icons[cluster.icon];
        return (
          <Reveal key={cluster.id} delay={index * 70} className="h-full" variant="card">
            <article className="spotlight h-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[color-mix(in_oklab,var(--color-accent)_45%,var(--color-line))]" onMouseMove={onMouseMove}>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-medium">{t(cluster.title)}</h3>
              </div>

              <dl className="mt-5 space-y-4">
                {cluster.items.map((item) => (
                  <div key={item.name.de}>
                    <dt className="text-sm font-medium">{t(item.name)}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-[var(--color-muted)] text-pretty">
                      {t(item.proof)}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
