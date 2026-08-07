import type { L, Stat } from "./types";

export const site = {
  name: "The Minh Nguyen",
  /** Nur Stadt — keine Anschrift, keine Telefonnummer, kein Geburtsdatum. */
  location: { de: "Köln, Deutschland", en: "Cologne, Germany" } satisfies L,
  linkedin: "https://www.linkedin.com/in/the-minh-ng/",
  studio: "https://theminhnguyen.github.io",
  url: "https://theminhnguyen.github.io/minh-cv",
  photo: "/portrait.jpg",
};

export const hero = {
  eyebrow: {
    de: "Team Lead BPM & Intelligent Automation @ E.ON Digital Technology",
    en: "Team Lead BPM & Intelligent Automation @ E.ON Digital Technology",
  } satisfies L,
  headline: {
    de: ["Ich führe KI-", "Automatisierung", " — und baue sie selbst."],
    en: ["I lead AI ", "automation", " — and build it myself."],
  },
  lead: {
    de: "9+ Jahre Produkte, Projekte und Teams in Enterprise-Umgebungen. Heute verantworte ich ein Entwicklungsteam für BPM und Intelligent Automation. Abends baue ich eigene KI-gestützte Produkte — vom ersten Prototyp bis zum Deployment.",
    en: "9+ years of products, projects and teams in enterprise environments. Today I lead a development team for BPM and intelligent automation. In my own time I build AI-powered products — from first prototype to deployment.",
  } satisfies L,
};

export const stats: Stat[] = [
  {
    value: 46,
    prefix: "€",
    suffix: "M",
    label: {
      de: "Verantwortetes Projektvolumen",
      en: "Project volume under my responsibility",
    },
  },
  {
    value: 19,
    label: {
      de: "Entwickler im aktuellen Team",
      en: "Developers in my current team",
    },
  },
  {
    value: 120,
    suffix: "+",
    label: {
      de: "Teammitglieder in 3 Monaten skaliert",
      en: "Team members scaled within 3 months",
    },
  },
  {
    value: 9,
    suffix: "+",
    label: {
      de: "Jahre Produkt- & Führungsverantwortung",
      en: "Years of product & leadership ownership",
    },
  },
];

export const aiStory: Array<{ step: string; title: L; text: L }> = [
  {
    step: "01",
    title: { de: "Fundiert", en: "Grounded" },
    text: {
      de: "Machine-Learning-Zertifikate von Duke: ML-Vorhaben bewerten, priorisieren und in lieferbare Produkte übersetzen — statt Buzzwords zu verwalten.",
      en: "Machine learning certificates from Duke: assessing ML initiatives, prioritising them and turning them into products that ship — instead of managing buzzwords.",
    },
  },
  {
    step: "02",
    title: { de: "Angewandt", en: "Applied" },
    text: {
      de: "Als Product Manager im Konzernumfeld: Nutzenbewertung, Roadmapping und Delivery datengetriebener Produkte über Einheiten und Ländergrenzen hinweg.",
      en: "As a product manager in a corporate environment: value assessment, roadmapping and delivery of data-driven products across units and countries.",
    },
  },
  {
    step: "03",
    title: { de: "Geführt", en: "Leading" },
    text: {
      de: "Heute Team Lead für BPM & Intelligent Automation bei E.ON: 19 Entwickler, KI-gestützte Automatisierungsstrategie, volle P&L-Verantwortung.",
      en: "Today Team Lead for BPM & intelligent automation at E.ON: 19 developers, AI-driven automation strategy, full P&L ownership.",
    },
  },
  {
    step: "04",
    title: { de: "Selbst gebaut", en: "Hands-on" },
    text: {
      de: "Acht eigene Produkte im Vibe-Coding-Stil entwickelt und live deployed — Live-Sync-Apps, ein Bluetooth-Health-Dashboard, ein Browser-Multiplayer, macOS-Tools.",
      en: "Eight of my own products built and shipped in vibe-coding style — live-sync apps, a Bluetooth health dashboard, a browser multiplayer, macOS tools.",
    },
  },
];
