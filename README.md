# minh-cv

Interaktive, zweisprachige (DE/EN) Portfolio-/CV-Seite von The Minh Nguyen.
Positionierung: Team Lead BPM & Intelligent Automation, der KI nicht nur führt,
sondern auch selbst baut.

**Live:** https://theminhnguyen.github.io/minh-cv

## Stack

- Next.js 15 (App Router, statischer Export)
- Tailwind CSS v4
- TypeScript, keine externen Backend-Abhängigkeiten
- Web3Forms für das Kontaktformular (kein eigener Server nötig)

## Struktur

```
src/content/     # Alle Texte, zweisprachig (DE/EN), typisiert
src/components/  # UI-Komponenten (Hero, Timeline, Skills, ...)
src/lib/         # Sprache/Theme-Context, Hilfsfunktionen
```

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build (wie im Deploy-Workflow)

```bash
NEXT_PUBLIC_BASE_PATH=/minh-cv npm run build
```

Erzeugt einen statischen Export in `out/`, der automatisch per GitHub Actions
auf GitHub Pages deployed wird (`.github/workflows/deploy.yml`).

## Datenschutz

Keine Cookies, kein Tracking. Kontaktformular läuft über Web3Forms (siehe
[/datenschutz](https://theminhnguyen.github.io/minh-cv/datenschutz)).
