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
    de: "Erst ausprobieren. Dann skalieren.",
    en: "Try it first. Then scale it.",
  } satisfies L,
  headline: {
    de: ["Vom Pilot in den ", "Betrieb", "."],
    en: ["From pilot to ", "production", "."],
  },
  lead: {
    de: "Ich führe bei E.ON Digital Technology ein Team von 19 Entwicklern, das Konzernprozesse mit BPM und KI automatisiert. Seit über 9 Jahren verantworte ich Teams und Produkte in Enterprise-Umgebungen — und baue KI-Prototypen weiterhin selbst, statt nur darüber zu reden.",
    en: "At E.ON Digital Technology I lead a team of 19 developers automating corporate processes with BPM and AI. For over 9 years I have owned teams and products in enterprise environments — and I still build AI prototypes myself instead of just talking about them.",
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
    period: { de: "2022–2025", en: "2022–2025" },
  },
  {
    value: 19,
    label: {
      de: "Entwickler im aktuellen Team",
      en: "Developers in my current team",
    },
    period: { de: "seit 2025", en: "since 2025" },
  },
  {
    value: 120,
    suffix: "+",
    label: {
      de: "Teammitglieder in 3 Monaten skaliert",
      en: "Team members scaled within 3 months",
    },
    period: { de: "2022", en: "2022" },
  },
  {
    value: 9,
    suffix: "+",
    label: {
      de: "Jahre Produkt- & Führungsverantwortung",
      en: "Years of product & leadership ownership",
    },
    period: { de: "seit 2017", en: "since 2017" },
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
      de: "Heute Team Lead für BPM & Intelligent Automation bei E.ON: 19 Entwickler, KI-gestützte Automatisierungsstrategie, volle P&L-Verantwortung. Als zertifizierter AI Design Sprint® Facilitator hole ich Teams dabei ins Ausprobieren.",
      en: "Today Team Lead for BPM & intelligent automation at E.ON: 19 developers, AI-driven automation strategy, full P&L ownership. As a certified AI Design Sprint® facilitator I get teams experimenting.",
    },
  },
  {
    step: "04",
    title: { de: "Neben dem Job", en: "Outside work" },
    text: {
      de: "Dreizehn eigene Produkte im Vibe-Coding-Stil gebaut und live deployed — von der lokalen KI-Diktier-App bis zum begehbaren 3D-Schloss. Privat entstanden, beruflich nützlich: Ich schätze Aufwände realistischer ein und rede mit meinem Team auf Augenhöhe über Technik.",
      en: "Thirteen of my own products built and shipped in vibe-coding style — from a local AI dictation app to a walkable 3D castle. Built privately, useful professionally: I estimate effort more realistically and talk technology with my team as an equal.",
    },
  },
];
