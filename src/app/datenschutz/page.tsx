"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { useLang } from "@/lib/language";

export default function PrivacyPage() {
  const { lang, tk } = useLang();

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-24 sm:px-8">
      <Link href="/" className="font-mono text-xs text-[var(--color-accent)] hover:opacity-75">
        ← {tk("backHome")}
      </Link>

      {lang === "de" ? (
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--color-muted)]">
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">Datenschutzerklärung</h1>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">1. Verantwortlicher</h2>
            <p className="mt-1">
              {site.name}, Köln, Deutschland. Kontakt über das Kontaktformular dieser Seite oder
              LinkedIn.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">2. Hosting</h2>
            <p className="mt-1">
              Diese Seite wird als statische Website über GitHub Pages (GitHub Inc., 88 Colin P.
              Kelly Jr. St, San Francisco, CA 94107, USA) ausgeliefert. Beim Aufruf verarbeitet
              GitHub technisch notwendige Zugriffsdaten (u. a. IP-Adresse, Zeitpunkt der Anfrage,
              übertragene Datenmenge) in Server-Logs. Details:{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)]"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">3. Kontaktformular</h2>
            <p className="mt-1">
              Nachrichten über das Kontaktformular werden mit Hilfe des Dienstes Web3Forms (Web3Forms,
              USA) verarbeitet und per E-Mail an mich weitergeleitet. Es werden nur die von dir
              eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) übertragen. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
              Details:{" "}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)]"
              >
                Web3Forms Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">4. Keine Analyse, keine Cookies</h2>
            <p className="mt-1">
              Diese Seite setzt kein Tracking, keine Analyse-Tools und keine Cookies ein. Die
              gewählte Sprache und das Farbschema werden ausschließlich lokal in deinem Browser
              gespeichert (localStorage) und nicht übertragen.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">5. Deine Rechte</h2>
            <p className="mt-1">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung deiner Daten sowie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
            </p>
          </section>
        </div>
      ) : (
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--color-muted)]">
          <h1 className="text-2xl font-semibold text-[var(--color-text)]">Privacy policy</h1>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">1. Controller</h2>
            <p className="mt-1">
              {site.name}, Cologne, Germany. Contact via the contact form on this site or LinkedIn.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">2. Hosting</h2>
            <p className="mt-1">
              This site is served as a static website via GitHub Pages (GitHub Inc., 88 Colin P.
              Kelly Jr. St, San Francisco, CA 94107, USA). GitHub processes technically necessary
              access data (e.g. IP address, time of request, data volume) in server logs. Details:{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)]"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">3. Contact form</h2>
            <p className="mt-1">
              Messages sent via the contact form are processed using Web3Forms (Web3Forms, USA) and
              forwarded to me by email. Only the data you enter (name, email address, message) is
              transmitted. Legal basis is Art. 6 (1) (f) GDPR (legitimate interest in handling
              inquiries). Details:{" "}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)]"
              >
                Web3Forms Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">4. No analytics, no cookies</h2>
            <p className="mt-1">
              This site uses no tracking, no analytics tools and no cookies. Your chosen language
              and colour scheme are stored locally in your browser only (localStorage) and never
              transmitted.
            </p>
          </section>

          <section>
            <h2 className="font-medium text-[var(--color-text)]">5. Your rights</h2>
            <p className="mt-1">
              You have the right to access, rectify, erase and restrict processing of your data, as
              well as the right to lodge a complaint with a data protection authority.
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
