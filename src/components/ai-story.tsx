"use client";

import { ArrowUpRight } from "lucide-react";
import { aiStory, site } from "@/content/site";
import { useLang } from "@/lib/language";
import { Reveal } from "./reveal";

export function AiStory() {
  const { t, tk } = useLang();

  return (
    <div>
      <ol className="relative grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
        {aiStory.map((item, index) => (
          <li key={item.step} className="bg-[var(--color-surface)]">
            <Reveal delay={index * 80} className="h-full">
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
        <a
          href={site.studio}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          {tk("aiOutro")}
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>
    </div>
  );
}
