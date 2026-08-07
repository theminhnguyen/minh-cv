"use client";

const keywords = [
  "Team Leadership",
  "Intelligent Automation",
  "Business Process Management",
  "AI Design Sprint",
  "Machine Learning",
  "Product Management",
  "Scrum",
  "Agile Coaching",
  "Talent Development",
  "Roadmapping",
  "Stakeholder Management",
  "P&L",
  "Rolling Forecast",
  "Servant Leadership",
  "Change Management",
  "ITIL",
  "Discovery",
  "Prototyping",
];

export function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="ticker-mask no-print overflow-hidden border-y border-[var(--color-line)] py-4"
    >
      <div className="ticker-track">
        {/* Zweimal gerendert, damit die Schleife nahtlos umbricht. */}
        {[0, 1].map((copy) => (
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
