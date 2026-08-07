"use client";

import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLang } from "@/lib/language";
import { useTheme } from "@/lib/theme";

const navItems = [
  { href: "#impact", key: "navImpact" },
  { href: "#ai", key: "navAi" },
  { href: "#career", key: "navCareer" },
  { href: "#skills", key: "navSkills" },
  { href: "#education", key: "navEducation" },
  { href: "#contact", key: "navContact" },
] as const;

export function Header() {
  const { tk, lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-bg)_85%,transparent)] backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[68rem] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-[var(--color-accent)]">✦</span> minh
        </a>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {tk(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={tk("toggleLang")}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-2 font-mono text-xs text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]"
          >
            <Languages size={15} aria-hidden="true" />
            {lang === "de" ? "EN" : "DE"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={tk("toggleTheme")}
            className="rounded-md p-2 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]"
          >
            {theme === "dark" ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={tk("menu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md p-2 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)] lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation mobil"
          className="border-t border-[var(--color-line)] bg-[var(--color-bg)] lg:hidden"
        >
          <ul className="mx-auto max-w-[68rem] px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {tk(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
