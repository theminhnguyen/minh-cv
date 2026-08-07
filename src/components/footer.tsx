"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { useLang } from "@/lib/language";

export function Footer() {
  const { tk } = useLang();

  return (
    <footer className="no-print border-t border-[var(--color-line)]">
      <div className="mx-auto flex w-full max-w-[68rem] flex-col gap-4 px-5 py-8 text-xs text-[var(--color-faint)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. {tk("builtWith")}
        </p>
        <nav aria-label="Rechtliches" className="flex gap-5">
          <Link href="/impressum" className="transition-colors hover:text-[var(--color-text)]">
            {tk("imprint")}
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-[var(--color-text)]">
            {tk("privacy")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
