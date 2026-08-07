"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLang } from "@/lib/language";
import { useTheme } from "@/lib/theme";
import { subscribeScroll } from "@/lib/scroll";

const navItems = [
  { id: "impact", key: "navImpact" },
  { id: "ai", key: "navAi" },
  { id: "career", key: "navCareer" },
  { id: "skills", key: "navSkills" },
  { id: "education", key: "navEducation" },
  { id: "contact", key: "navContact" },
] as const;

export function Header() {
  const { tk, lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());

  useEffect(() => {
    return subscribeScroll(() => {
      setScrolled(window.scrollY > 24);

      // Aktiv ist der Abschnitt, dessen Oberkante zuletzt die Leseposition passiert hat.
      const line = window.scrollY + window.innerHeight * 0.3;
      let current: string | null = null;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= line) current = item.id;
      }
      setActiveId(current);
    });
  }, []);

  useLayoutEffect(() => {
    const link = activeId ? linkRefs.current.get(activeId) : undefined;
    setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
  }, [activeId, lang]);

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
          ? "border-b border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-bg)_82%,transparent)] backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[68rem] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-[var(--color-accent)]">✦</span> minh
        </a>

        <nav aria-label="Hauptnavigation" className="relative hidden lg:block">
          {pill ? (
            <span
              aria-hidden="true"
              className="absolute top-0 h-full rounded-full bg-[var(--color-surface-2)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ left: pill.left, width: pill.width }}
            />
          ) : null}
          <ul className="relative flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  ref={(node) => {
                    if (node) linkRefs.current.set(item.id, node);
                    else linkRefs.current.delete(item.id);
                  }}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`block rounded-full px-3 py-2 text-sm transition-colors ${
                    activeId === item.id
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
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
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`block rounded-md px-2 py-3 text-sm transition-colors ${
                    activeId === item.id
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
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
