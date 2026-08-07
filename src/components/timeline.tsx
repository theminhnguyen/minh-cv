"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { companies, earlyRoles } from "@/content/experience";
import type { Role, Track } from "@/content/types";
import { useLang } from "@/lib/language";
import { Reveal } from "./reveal";

const filters = [
  { id: "all", key: "filterAll" },
  { id: "ai", key: "filterAi" },
  { id: "product", key: "filterProduct" },
  { id: "leadership", key: "filterLeadership" },
  { id: "delivery", key: "filterDelivery" },
] as const;

type Filter = (typeof filters)[number]["id"];

function matches(role: Role, filter: Filter) {
  return filter === "all" || role.tracks.includes(filter as Track);
}

function RoleEntry({ role, dimmed }: { role: Role; dimmed: boolean }) {
  const { t, tk } = useLang();
  const [open, setOpen] = useState(false);
  const panelId = `role-${role.id}`;

  return (
    <li
      className={`relative pl-9 transition-opacity duration-300 ${dimmed ? "opacity-35" : "opacity-100"}`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-2 left-[11px] h-2.5 w-2.5 rounded-full ring-4 ring-[var(--color-bg)] ${
          role.current ? "bg-[var(--color-accent)]" : "bg-[var(--color-line)]"
        }`}
      />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="text-base font-medium">{t(role.title)}</h4>
        {role.current ? (
          <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 font-mono text-[10px] tracking-wide text-[var(--color-accent)] uppercase">
            {tk("current")}
          </span>
        ) : null}
      </div>

      <p className="mt-1 font-mono text-xs text-[var(--color-faint)]">{t(role.period)}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)] text-pretty">
        {t(role.summary)}
      </p>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        className="no-print mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-accent)] transition-opacity hover:opacity-75"
      >
        {open ? tk("hideDetails") : tk("showDetails")}
        <ChevronDown
          size={13}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="mt-4 space-y-3 border-l border-[var(--color-line)] pl-4 print:!block"
      >
        {role.highlights.map((highlight) => (
          <div key={highlight.label.de}>
            <p className="font-mono text-[11px] tracking-wide text-[var(--color-faint)] uppercase">
              {t(highlight.label)}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)] text-pretty">
              {t(highlight.text)}
            </p>
          </div>
        ))}
      </div>
    </li>
  );
}

export function Timeline() {
  const { t, tk } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [showEarly, setShowEarly] = useState(false);

  return (
    <div>
      <div className="no-print flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
              filter === item.id
                ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-faint)]"
            }`}
          >
            {tk(item.key)}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-12">
        {companies.map((company, index) => (
          <Reveal key={company.id} delay={index * 60}>
            <article>
              <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{company.name}</h3>
                <p className="font-mono text-xs text-[var(--color-faint)]">
                  {t(company.location)} · {t(company.period)}
                </p>
              </header>

              <ol className="relative mt-6 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-px before:bg-[var(--color-line)]">
                {company.roles.map((role) => (
                  <RoleEntry key={role.id} role={role} dimmed={!matches(role, filter)} />
                ))}
              </ol>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <button
          type="button"
          onClick={() => setShowEarly((prev) => !prev)}
          aria-expanded={showEarly}
          aria-controls="early-roles"
          className="no-print flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-left transition-colors hover:border-[var(--color-faint)]"
        >
          <span>
            <span className="block text-sm font-medium">{tk("earlyRoles")}</span>
            <span className="mt-0.5 block text-xs text-[var(--color-faint)]">
              {tk("earlyRolesHint")}
            </span>
          </span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`shrink-0 text-[var(--color-muted)] transition-transform duration-200 ${
              showEarly ? "rotate-180" : ""
            }`}
          />
        </button>

        <ul id="early-roles" hidden={!showEarly} className="mt-4 divide-y divide-[var(--color-line)]">
          {earlyRoles.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
            >
              <span className="text-sm">
                {t(item.role)}
                <span className="text-[var(--color-faint)]"> · {item.company}</span>
              </span>
              <span className="font-mono text-xs text-[var(--color-faint)]">
                {t(item.location)} · {item.period}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
