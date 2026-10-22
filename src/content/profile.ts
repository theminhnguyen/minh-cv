import type { Certification, Degree, SkillCluster } from "./types";

export const skillClusters: SkillCluster[] = [
  {
    id: "leadership",
    title: { de: "Leadership", en: "Leadership" },
    icon: "users",
    items: [
      {
        name: { de: "Teams führen", en: "Leading teams" },
        proof: {
          de: "19 Entwickler heute; zuvor 13 FTE cross-funktional und 5 Scrum Master / Agile Coaches",
          en: "19 developers today; previously 13 FTE cross-functional and 5 Scrum Masters / Agile Coaches",
        },
      },
      {
        name: { de: "Talententwicklung", en: "Talent development" },
        proof: {
          de: "Individuelle Entwicklungspläne, Coaching und maßgeschneiderte Trainingsprogramme aufgebaut",
          en: "Built individual development plans, coaching and tailored training programmes",
        },
      },
      {
        name: { de: "Servant Leadership", en: "Servant leadership" },
        proof: {
          de: "Retention und kontinuierliches Lernen für Projektmanager, Consultants und Entwickler",
          en: "Retention and continuous learning for project managers, consultants and developers",
        },
      },
      {
        name: { de: "Skalierung", en: "Scaling" },
        proof: {
          de: "Von 30 auf 120+ Projektmitglieder in 3 Monaten",
          en: "From 30 to 120+ project members within 3 months",
        },
      },
    ],
  },
  {
    id: "ai",
    title: { de: "KI & Automatisierung", en: "AI & Automation" },
    icon: "brain",
    items: [
      {
        name: { de: "Intelligent Automation", en: "Intelligent automation" },
        proof: {
          de: "Automatisierungsstrategie für einen Energiekonzern, umgesetzt mit BPM- und KI-Technologien",
          en: "Automation strategy for an energy group, delivered with BPM and AI technologies",
        },
      },
      {
        name: { de: "Business Process Management", en: "Business process management" },
        proof: {
          de: "Führung eines dedizierten BPM-Entwicklungsteams mit 19 Personen",
          en: "Leading a dedicated BPM development team of 19 people",
        },
      },
      {
        name: { de: "KI-Design-Sprints leiten", en: "Facilitating AI design sprints" },
        proof: {
          de: "Zertifizierter AI Design Sprint® Facilitator (33A) für Prozessautomatisierung",
          en: "Certified AI Design Sprint® facilitator (33A) for process automation",
        },
      },
      {
        name: { de: "ML-Vorhaben steuern", en: "Steering ML initiatives" },
        proof: {
          de: "Zertifiziert durch Duke University: ML Foundations for Product Managers und Managing ML Projects",
          en: "Certified by Duke University: ML Foundations for Product Managers and Managing ML Projects",
        },
      },
      {
        name: { de: "Ausprobieren statt abwarten", en: "Trying things instead of waiting" },
        proof: {
          de: "{Products} eigene Produkte neben dem Job als Technologie-Experimente gebaut und veröffentlicht",
          en: "{Products} of my own products built and shipped alongside my job as technology experiments",
        },
      },
    ],
  },
  {
    id: "product",
    title: { de: "Product Management", en: "Product management" },
    icon: "compass",
    items: [
      {
        name: { de: "Product-Standards aufbauen", en: "Building product standards" },
        proof: {
          de: "Als Chapter Coordinator einen konzernweiten PM-Ansatz inkl. Toolkits und Prozessen etabliert",
          en: "As chapter coordinator, established a group-wide PM approach incl. toolkits and processes",
        },
      },
      {
        name: { de: "Discovery & Roadmapping", en: "Discovery & roadmapping" },
        proof: {
          de: "Design Sprint Masterclass (AJ & Smart), Product Owner PSPO I",
          en: "Design Sprint Masterclass (AJ & Smart), Product Owner PSPO I",
        },
      },
      {
        name: { de: "Nutzerforschung", en: "User research" },
        proof: {
          de: "M.A. Wirtschaftspsychologie; qualitative Studien mit YouGov und zu Landingpage-Verhalten",
          en: "M.A. business psychology; qualitative studies with YouGov and on landing page behaviour",
        },
      },
      {
        name: { de: "Stakeholder-Management", en: "Stakeholder management" },
        proof: {
          de: "Steering Committees auf C-Level moderiert und geleitet",
          en: "Moderated and led C-level steering committees",
        },
      },
    ],
  },
  {
    id: "business",
    title: { de: "Business & Delivery", en: "Business & delivery" },
    icon: "gauge",
    items: [
      {
        name: { de: "P&L-Verantwortung", en: "P&L ownership" },
        proof: {
          de: "Ergebnis- und Auslastungssteuerung im aktuellen Team und zuvor als Delivery Team Lead",
          en: "Result and utilisation management in my current team and previously as delivery team lead",
        },
      },
      {
        name: { de: "Budgets & Forecasting", en: "Budgets & forecasting" },
        proof: {
          de: "46 Mio. € Projektvolumen, 11 Mio. € Portfolio, Rolling Forecast aufgebaut",
          en: "€46M project volume, €11M portfolio, built a rolling forecast",
        },
      },
      {
        name: { de: "Agile Delivery", en: "Agile delivery" },
        proof: {
          de: "Professional Scrum Master I, agile Transformationen in zwei Unternehmen begleitet",
          en: "Professional Scrum Master I, drove agile transformations at two companies",
        },
      },
      {
        name: { de: "IT-Service-Management", en: "IT service management" },
        proof: {
          de: "ITIL V3 Foundation, internationale IT-Infrastrukturprojekte",
          en: "ITIL V3 Foundation, international IT infrastructure projects",
        },
      },
    ],
  },
];

export const degrees: Degree[] = [
  {
    degree: {
      de: "Master of Arts, Wirtschaftspsychologie",
      en: "Master of Arts, Business Psychology",
    },
    school: "Hochschule Fresenius",
    location: { de: "Köln", en: "Cologne" },
    period: "09/2014 – 09/2016",
    grade: "1,8",
    thesis: {
      partner: "YouGov Deutschland AG",
      title: {
        de: "Wie erzeugen FinTechs Begeisterung? Finanzverhalten im digitalen Zeitalter — eine theoretische und qualitative Untersuchung der Generation Y.",
        en: "How do FinTechs generate enthusiasm? Financial behaviour in the digital age — a theoretical and qualitative investigation of Generation Y.",
      },
    },
  },
  {
    degree: {
      de: "Auslandssemester, Global Business Engineering",
      en: "Semester abroad, Global Business Engineering",
    },
    school: "VIA University College",
    location: { de: "Horsens, Dänemark", en: "Horsens, Denmark" },
    period: "02/2013 – 07/2013",
  },
  {
    degree: {
      de: "Bachelor of Business Administration, Marketing",
      en: "Bachelor of Business Administration, Marketing",
    },
    school: "Fontys International Business School",
    location: { de: "Venlo, Niederlande", en: "Venlo, Netherlands" },
    period: "09/2010 – 07/2014",
    grade: "2,3",
    thesis: {
      partner: "M Cube Incubator GmbH",
      title: {
        de: "Bestimmung von Erfolgsfaktoren für Landingpages anhand der exemplarischen Analyse von Online-Nutzerverhalten in einem Internet-Start-up.",
        en: "Determining success factors for landing pages based on an exemplary analysis of online user behaviour at an internet start-up.",
      },
    },
  },
];

export const certifications: Certification[] = [
  {
    name: "AI Design Sprint® — Process Automation Facilitator",
    issuer: "33A, Kopenhagen",
    group: "ai",
    year: "2026",
  },
  {
    name: "Machine Learning Foundations for Product Managers",
    issuer: "Duke University / Coursera",
    group: "ai",
  },
  { name: "Managing Machine Learning Projects", issuer: "Duke University / Coursera", group: "ai" },
  { name: "Design Sprint Masterclass", issuer: "AJ & Smart", group: "ai" },
  { name: "Professional Product Owner I", issuer: "Scrum.org", group: "ai" },
  { name: "Professional Scrum Master I", issuer: "Scrum.org", group: "delivery" },
  { name: "CAPM", issuer: "Project Management Institute", group: "delivery" },
  { name: "ITIL V3 Foundation", issuer: "Axelos & APMG International", group: "delivery" },
  { name: "Change>>Forward — It's about Leadership", issuer: "E.ON", group: "delivery" },
];
