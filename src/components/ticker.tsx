"use client";

// Abwechselnd Leadership und KI, damit beide Schwerpunkte gleichgewichtig durchlaufen.
const keywords = [
  "Team Leadership",
  "Intelligent Automation",
  "Talent Development",
  "Business Process Management",
  "Team Scaling",
  "AI Design Sprint",
  "P&L Ownership",
  "Machine Learning",
];

// Vier Kopien, damit auch auf breiten Bildschirmen keine Lücke in der Schleife entsteht.
const COPIES = [0, 1, 2, 3];

export function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="ticker-mask no-print overflow-hidden border-y border-[var(--color-line)] py-4"
    >
      <div className="ticker-track">
        {COPIES.map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {keywords.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="flex items-center gap-8 px-8 font-mono text-xs tracking-wide whitespace-nowrap text-[var(--color-faint)] uppercase"
              >
                {word}
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
