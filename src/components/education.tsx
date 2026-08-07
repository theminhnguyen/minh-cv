"use client";

import { certifications, degrees } from "@/content/profile";
import { useLang } from "@/lib/language";
import { Reveal } from "./reveal";

export function Education() {
  const { t, tk } = useLang();
  const groups = [
    { id: "ai", label: tk("certsAi"), items: certifications.filter((c) => c.group === "ai") },
    {
      id: "delivery",
      label: tk("certsDelivery"),
      items: certifications.filter((c) => c.group === "delivery"),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
      <div>
        <ol className="space-y-8">
          {degrees.map((degree, index) => (
            <li key={degree.school + degree.period}>
              <Reveal delay={index * 60}>
                <p className="font-mono text-xs text-[var(--color-faint)]">{degree.period}</p>
                <h3 className="mt-1.5 text-base font-medium text-pretty">{t(degree.degree)}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {degree.school} · {t(degree.location)}
                  {degree.grade ? (
                    <span className="text-[var(--color-faint)]">
                      {" "}
                      · {tk("grade")} {degree.grade}
                    </span>
                  ) : null}
                </p>
                {degree.thesis ? (
                  <p className="mt-3 border-l border-[var(--color-line)] pl-4 text-sm leading-relaxed text-[var(--color-muted)] text-pretty">
                    <span className="font-mono text-[11px] tracking-wide text-[var(--color-faint)] uppercase">
                      {tk("thesis")}
                      {degree.thesis.partner
                        ? ` — ${tk("inCooperationWith")} ${degree.thesis.partner}`
                        : ""}
                    </span>
                    <br />
                    {t(degree.thesis.title)}
                  </p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-8">
        {groups.map((group, groupIndex) => (
          <Reveal key={group.id} delay={groupIndex * 80}>
            <h3 className="font-mono text-xs tracking-[0.15em] text-[var(--color-faint)] uppercase">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((cert) => (
                <li
                  key={cert.name}
                  className={`rounded-lg border px-4 py-3 ${
                    group.id === "ai"
                      ? "border-[var(--color-accent)]/35 bg-[var(--color-accent-soft)]/35"
                      : "border-[var(--color-line)] bg-[var(--color-surface)]"
                  }`}
                >
                  <p className="text-sm font-medium text-pretty">{cert.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-faint)]">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
