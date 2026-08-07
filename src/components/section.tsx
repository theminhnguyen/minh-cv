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
        <Reveal>
          <p
            aria-hidden="true"
            className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)] uppercase"
          >
            {`// ${index}`}
            <span className="text-[var(--color-faint)]"> — </span>
            {kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
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
    </section>
  );
}
