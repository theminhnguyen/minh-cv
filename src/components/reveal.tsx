"use client";

import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: React.ReactNode;
  /** Verzögerung in Millisekunden für gestaffelte Listen. */
  delay?: number;
  className?: string;
  /** "card" fügt eine leichte Skalierung und Neigung hinzu. */
  variant?: "default" | "card";
};

export function Reveal({ children, delay = 0, className = "", variant = "default" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-visible={inView}
      className={`${variant === "card" ? "reveal-card" : "reveal"} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
