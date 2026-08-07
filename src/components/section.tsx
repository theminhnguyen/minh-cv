import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  kicker,
  title,
  lead,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[68rem] px-5 sm:px-8">
        <div className="xl:grid xl:grid-cols-[3.5rem_1fr] xl:gap-8">
          {/* Sektionsnummer bleibt am linken Rand stehen, solange die Sektion läuft. */}
          <div aria-hidden="true" className="no-print hidden xl:block">
            <div className="sticky top-28 font-mono text-xs text-[var(--color-accent)]">
              {index}
              <span className="mt-2 block h-16 w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
            </div>
          </div>

          <div>
            <Reveal>
              <p
                aria-hidden="true"
                className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase xl:hidden"
              >
                {`// ${index}`}
                <span className="text-[var(--color-faint)]"> — </span>
                {kicker}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl xl:mt-0">
                {title}
              </h2>
              {lead ? (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] text-pretty">
                  {lead}
                </p>
              ) : null}
            </Reveal>
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
