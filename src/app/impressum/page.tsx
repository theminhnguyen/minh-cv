"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { useLang } from "@/lib/language";

export default function ImprintPage() {
  const { lang, tk } = useLang();

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-24 sm:px-8">
      <Link
        href="/"
        className="font-mono text-xs text-[var(--color-accent)] hover:opacity-75"
      >
        ← {tk("backHome")}
      </Link>

      {lang === "de" ? (
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--color-muted)]">
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">Impressum</h1>
          <p>Angaben gemäß § 5 TMG</p>
          <p>
            {site.name}
            <br />
            Köln, Deutschland
          </p>
          <p>
            Kontakt: über das{" "}
            <Link href="/#contact" className="text-[var(--color-accent)]">
              Kontaktformular
            </Link>{" "}
            oder{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)]">
              LinkedIn
            </a>
            .
          </p>
          <p>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: {site.name}, Anschrift wie oben.
          </p>
          <p className="text-xs text-[var(--color-faint)]">
            Diese Seite ist ein privates, nicht-kommerzielles Portfolio-Projekt.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--color-muted)]">
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">Legal notice</h1>
          <p>Information according to § 5 TMG (German Telemedia Act)</p>
          <p>
            {site.name}
            <br />
            Cologne, Germany
          </p>
          <p>
            Contact: via the{" "}
            <Link href="/#contact" className="text-[var(--color-accent)]">
              contact form
            </Link>{" "}
            or{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)]">
              LinkedIn
            </a>
            .
          </p>
          <p>Responsible for the content according to § 55 (2) RStV: {site.name}, address as above.</p>
          <p className="text-xs text-[var(--color-faint)]">
            This site is a private, non-commercial portfolio project.
          </p>
        </div>
      )}
    </main>
  );
}
