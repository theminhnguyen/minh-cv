"use client";

import { ArrowUpRight } from "lucide-react";
import { aiStory, site } from "@/content/site";
import { useLang } from "@/lib/language";
import { usePinProgress, useReducedMotion } from "@/lib/use-scroll-progress";
import { Reveal } from "./reveal";

const STEPS = aiStory.length;

function StudioLink() {
  const { tk } = useLang();

  return (
    <a
      href={site.studio}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
    >
      {tk("aiOutro")}
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

/** Statische Liste — für kleine Viewports, Reduced Motion und den Druck. */
function StackedStory() {
  const { t } = useLang();

  return (
    <div>
      <ol className="perspective grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
        {aiStory.map((item, index) => (
          <li key={item.step} className="bg-[var(--color-surface)]">
            <Reveal delay={index * 80} className="h-full" variant="card">
              <div className="flex h-full flex-col p-6">
                <span className="font-mono text-xs text-[var(--color-accent)]">{item.step}</span>
                <h3 className="mt-4 text-lg font-medium">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] text-pretty">
                  {t(item.text)}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal>
        <div className="mt-6">
          <StudioLink />
        </div>
      </Reveal>
    </div>
  );
}

/** Gepinnte Variante: die Sektion bleibt stehen, während die vier Stufen durchlaufen. */
function PinnedStory() {
  const { t, tk } = useLang();
  const { ref, progress } = usePinProgress<HTMLDivElement>();

  // Stufe 04 bekommt etwas Auslauf, damit sie nicht sofort weggescrollt wird.
  const active = Math.min(STEPS - 1, Math.floor(progress * (STEPS + 0.4)));

  return (
    <div ref={ref} className="pin-wrapper relative h-[380vh]">
      <div className="pin-sticky sticky top-0 flex h-screen flex-col justify-center">
        {/* Überschrift bleibt sichtbar, weil die eigentliche Sektionsüberschrift wegscrollt. */}
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-faint)] uppercase">
          {tk("sectionAi")}
        </p>

        <div className="mt-10 grid grid-cols-[minmax(0,15rem)_1fr] items-start gap-12">
          <ol className="space-y-1" aria-hidden="true">
            {aiStory.map((item, index) => (
              <li key={item.step}>
                <div
                  className={`flex items-center gap-3 border-l-2 py-2.5 pl-4 transition-all duration-500 ${
                    index === active
                      ? "border-[var(--color-accent)] text-[var(--color-text)]"
                      : "border-[var(--color-line)] text-[var(--color-faint)]"
                  }`}
                >
                  <span className="font-mono text-xs">{item.step}</span>
                  <span className="text-sm font-medium">{t(item.title)}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative min-h-[21rem]">
            {aiStory.map((item, index) => (
              <div
                key={item.step}
                aria-hidden={index !== active}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <span className="font-mono text-7xl leading-none font-medium text-[var(--color-accent)] opacity-25">
                  {item.step}
                </span>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">{t(item.title)}</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] text-pretty">
                  {t(item.text)}
                </p>
                {index === STEPS - 1 ? (
                  <div className="mt-8">
                    <StudioLink />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-[var(--color-line)]">
          <div
            className="h-px origin-left bg-[var(--color-accent)]"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>

      {/* Alle Stufen zusätzlich als normaler Text für Screenreader und Suchmaschinen. */}
      <ol className="sr-only">
        {aiStory.map((item) => (
          <li key={item.step}>
            <h3>{t(item.title)}</h3>
            <p>{t(item.text)}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AiStory() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <div className={reducedMotion ? "" : "lg:hidden"}>
        <StackedStory />
      </div>
      {reducedMotion ? null : (
        <div className="hidden lg:block">
          <PinnedStory />
        </div>
      )}
    </>
  );
}
