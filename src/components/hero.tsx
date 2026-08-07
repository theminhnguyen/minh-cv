"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { hero, site } from "@/content/site";
import { useLang } from "@/lib/language";
import { NeuralBackdrop } from "./neural-backdrop";
import { LinkedinIcon } from "./linkedin-icon";
import { withBase } from "@/lib/paths";

export function Hero() {
  const { lang, t, tk } = useLang();
  const [before, accent, after] = hero.headline[lang];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10">
        <NeuralBackdrop />
      </div>

      <div className="mx-auto grid w-full max-w-[68rem] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            {before}
            <span className="text-gradient">{accent}</span>
            {after}
          </h1>

          <p className="mt-4 font-mono text-sm text-[var(--color-accent)]">{t(hero.eyebrow)}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] text-pretty sm:text-lg">
            {t(hero.lead)}
          </p>

          <div className="no-print mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:-translate-y-0.5"
            >
              {tk("ctaContact")}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={site.studio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
            >
              {tk("ctaProducts")}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[var(--color-line)] p-2.5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
            >
              <Download size={16} aria-hidden="true" />
              {tk("ctaCv")}
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-3xl bg-[var(--color-accent)] opacity-[0.07] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <Image
              src={withBase("/portrait.jpg")}
              alt={`Portrait von ${site.name}`}
              width={701}
              height={880}
              priority
              sizes="(max-width: 1024px) 304px, 340px"
              className="h-auto w-full object-cover"
            />
            <div className="flex items-center justify-between border-t border-[var(--color-line)] px-4 py-3 font-mono text-[11px] text-[var(--color-faint)]">
              <span>{site.name}</span>
              <span>{t(site.location)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
