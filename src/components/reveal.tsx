"use client";

import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: React.ReactNode;
  /** Verzögerung in Millisekunden für gestaffelte Listen. */
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-visible={inView}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
