import type { Company, EarlyRole } from "./types";

export const companies: Company[] = [
  {
    id: "eon",
    name: "E.ON Digital Technology GmbH",
    location: { de: "Essen, Deutschland", en: "Essen, Germany" },
    period: { de: "seit 07/2022", en: "since 07/2022" },
    roles: [
      {
        id: "eon-lead",
        title: {
          de: "Team Lead BPM & Intelligent Automation Development",
          en: "Team Lead BPM & Intelligent Automation Development",
        },
        period: { de: "08/2025 – heute", en: "08/2025 – present" },
        start: "2025-08-01",
        current: true,
        tracks: ["ai", "leadership", "delivery"],
        summary: {
          de: "Führe ein Team von 19 Entwicklern, das Geschäftsprozesse mit BPM- und KI-Technologien automatisiert — inklusive P&L-Verantwortung.",
          en: "Leading a team of 19 developers automating business processes with BPM and AI technologies — including P&L ownership.",
        },
        highlights: [
          {
            label: { de: "Führung & Teamentwicklung", en: "Leadership & team growth" },
            text: {
              de: "Führung und Coaching eines Teams aus BPM- und Intelligent-Automation-Entwicklern (19 FTE); gezielte Talentförderung und Aufbau einer High-Performance-Kultur.",
              en: "Leading and coaching a team of BPM and intelligent automation developers (19 FTE); fostering talent and building a high-performance culture.",
            },
          },
          {
            label: { de: "Automatisierungsstrategie", en: "Strategic automation delivery" },
            text: {
              de: "Entwicklung und Umsetzung wirkungsvoller Automatisierungsstrategien auf Basis von BPM- und KI-Technologien.",
              en: "Developing and implementing impactful automation strategies leveraging BPM and AI technologies.",
            },
          },
          {
            label: { de: "Innovation & Expertise", en: "Innovation & expertise" },
            text: {
              de: "Kontinuierliche Beobachtung von Trends in KI, BPM und Softwareentwicklung als Treiber für laufende Verbesserung.",
              en: "Staying ahead of trends in AI, BPM and software development to drive continuous improvement.",
            },
          },
          {
            label: { de: "Operational Excellence", en: "Operational excellence" },
            text: {
              de: "Steuerung von P&L und Team-Auslastung entlang der Business- und Performance-Ziele.",
              en: "Managing P&L and optimising team utilisation to meet business and performance goals.",
            },
          },
        ],
      },
      {
        id: "eon-pm",
        title: { de: "Product Manager", en: "Product Manager" },
        period: { de: "07/2022 – 07/2025", en: "07/2022 – 07/2025" },
        start: "2022-07-01",
        tracks: ["product", "leadership", "delivery"],
        summary: {
          de: "Verantwortung für ein Programm mit 46 Mio. € Volumen und Aufbau eines konzernweiten Product-Management-Standards.",
          en: "Ownership of a €46M programme and creation of a group-wide product management standard.",
        },
        highlights: [
          {
            label: { de: "Strategische Führung", en: "Strategic leadership" },
            text: {
              de: "Leitung Scrum-basierter Software-Vorhaben inklusive Führung eines Teams aus Scrum Mastern und Agile Coaches (5 FTE); Workshops, Zeremonien und Agile-Adoption für messbaren Business Impact.",
              en: "Leading Scrum-based software engagements including a team of Scrum Masters and Agile Coaches (5 FTE); workshops, ceremonies and agile adoption for measurable business impact.",
            },
          },
          {
            label: { de: "Skalierung", en: "Team scaling" },
            text: {
              de: "Wachstum von 30 auf 120+ Projektmitglieder (intern und extern) innerhalb von 3 Monaten gesteuert — Staffing, Organisation, Zusammenarbeit und Kommunikation bei einem Gesamtvolumen von 46 Mio. €.",
              en: "Managed growth from 30 to 120+ project members (internal and external) within 3 months — staffing, organisation, collaboration and communication at a total volume of €46M.",
            },
          },
          {
            label: { de: "Product-Management-Chapter", en: "Product management chapter" },
            text: {
              de: "Als Chapter Coordinator einen standardisierten Product-Management-Ansatz entwickelt: Toolkits, Prozessdokumentation, maßgeschneiderte Trainings, individuelle Entwicklungspläne und Cross-Unit-Kollaboration.",
              en: "As chapter coordinator, built a standardised product management approach: toolkits, process documentation, tailored training, individual development plans and cross-unit collaboration.",
            },
          },
          {
            label: { de: "Top-Talent-Programm", en: "Top talent recognition" },
            text: {
              de: "Als High-Potential-Management-Talent ausgewählt und in ein beschleunigtes Entwicklungsprogramm aus Training, Mentoring und Coaching aufgenommen.",
              en: "Recognised as high-potential management talent and enrolled in an accelerated development programme of training, mentoring and coaching.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "abas",
    name: "abas Software GmbH",
    location: { de: "Deutschland", en: "Germany" },
    period: { de: "11/2019 – 06/2022", en: "11/2019 – 06/2022" },
    roles: [
      {
        id: "abas-lead",
        title: { de: "Delivery Team Lead", en: "Delivery Team Lead" },
        period: { de: "06/2021 – 06/2022", en: "06/2021 – 06/2022" },
        start: "2021-06-01",
        tracks: ["leadership", "delivery"],
        summary: {
          de: "Co-Leitung einer Regionalniederlassung mit voller Verantwortung für Team, Portfolio und Ergebnis.",
          en: "Co-heading a regional office with full ownership of team, portfolio and result.",
        },
        highlights: [
          {
            label: { de: "Co-Leitung Niederlassung", en: "Co-head of regional office" },
            text: {
              de: "Motivierende Führung, Coaching, Talententwicklung, Staffing und Retention für ein cross-funktionales Team (13 FTE).",
              en: "Motivational leadership, coaching, talent growth, staffing and retention for a cross-functional team (13 FTE).",
            },
          },
          {
            label: { de: "End-to-End-Ownership", en: "End-to-end ownership" },
            text: {
              de: "Verantwortung für komplette Kundenprojekt-Lebenszyklen und Personalführung — vom Deal-Abschluss über die Delivery bis zu Performance-Reviews (P&L und Auslastung).",
              en: "Ownership of complete client project lifecycles and people management — from deal closing through delivery to performance reviews (P&L and utilisation).",
            },
          },
          {
            label: { de: "Kunden auf C-Level", en: "C-level client relationships" },
            text: {
              de: "Ausbau der Kundenbeziehungen auf C-Level bei gleichzeitiger Verantwortung für das gesamte Serviceportfolio der Delivery Unit (11 Mio. € Portfoliowert).",
              en: "Strengthened client relationships at C-level while owning the entire service portfolio of the delivery unit (€11M portfolio value).",
            },
          },
          {
            label: { de: "Forecasting", en: "Forecasting" },
            text: {
              de: "Aufbau, Steuerung und Reporting eines Rolling Forecast als Grundlage für strategische Planung und Team-Alignment.",
              en: "Built, monitored and reported a rolling forecast as the basis for strategic planning and team alignment.",
            },
          },
        ],
      },
      {
        id: "abas-pm",
        title: { de: "Project Manager", en: "Project Manager" },
        period: { de: "11/2019 – 05/2021", en: "11/2019 – 05/2021" },
        start: "2019-11-01",
        tracks: ["delivery", "product"],
        summary: {
          de: "Führung interdisziplinärer Teams über mehrere Projekte mit 1,2 Mio. € Budgetverantwortung.",
          en: "Leading interdisciplinary teams across multiple projects with €1.2M budget ownership.",
        },
        highlights: [
          {
            label: { de: "Cross-funktionale Teams", en: "Cross-functional teams" },
            text: {
              de: "Steuerung interdisziplinärer Teams aus Consultants und Entwicklern über mehrere Projekte hinweg (bis 35 FTE).",
              en: "Directing interdisciplinary teams of consultants and developers across multiple projects (up to 35 FTE).",
            },
          },
          {
            label: { de: "Budgetverantwortung", en: "Budget ownership" },
            text: {
              de: "Finanzielle und fachliche Verantwortung für ein breit gefächertes Projektportfolio im Wert von 1,2 Mio. €.",
              en: "Financial and service accountability for a diverse project portfolio valued at €1.2M.",
            },
          },
          {
            label: { de: "Agile Einführung", en: "Agile adoption" },
            text: {
              de: "Maßgeblich an Einführung und Weiterentwicklung agiler Praktiken zur Steigerung der operativen Effizienz beteiligt.",
              en: "Instrumental in introducing and evolving agile practices to increase operational efficiency.",
            },
          },
          {
            label: { de: "Steering Committees", en: "Steering committees" },
            text: {
              de: "Moderation und Leitung von Steering Committees auf C-Level zur strategischen Richtungsentscheidung.",
              en: "Moderating and leading C-level steering committees to set strategic direction.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "computacenter",
    name: "Computacenter AG & Co. OHG",
    location: { de: "Deutschland", en: "Germany" },
    period: { de: "03/2017 – 10/2019", en: "03/2017 – 10/2019" },
    roles: [
      {
        id: "cc-pm",
        title: { de: "Project Manager", en: "Project Manager" },
        period: { de: "02/2019 – 10/2019", en: "02/2019 – 10/2019" },
        start: "2019-02-01",
        tracks: ["delivery"],
        summary: {
          de: "Eigenverantwortliche Leitung nationaler und internationaler IT-Projekte mit bis zu 30 Teammitgliedern.",
          en: "Independently leading national and international IT projects with up to 30 team members.",
        },
        highlights: [
          {
            label: { de: "End-to-End-Projektleitung", en: "End-to-end project ownership" },
            text: {
              de: "Planung, Steuerung, Durchführung und Koordination von IT-Projekten auf nationaler und internationaler Ebene.",
              en: "Planning, managing, executing and coordinating IT projects on a national and international scale.",
            },
          },
          {
            label: { de: "Kaufmännische Steuerung", en: "Financial stewardship" },
            text: {
              de: "Budgetverantwortung für Festpreis- und T&M-Projekte mit bis zu 800k € Project Booking Value.",
              en: "Budget ownership for fixed-price and T&M projects with up to €800k project booking value.",
            },
          },
          {
            label: { de: "Teamführung", en: "Team guidance" },
            text: {
              de: "Führung von Projektteams mit bis zu 30 FTE mit Fokus auf Zusammenhalt und Ergebnisqualität.",
              en: "Leading project teams of up to 30 FTE with a focus on cohesion and successful outcomes.",
            },
          },
        ],
      },
      {
        id: "cc-associate",
        title: { de: "Project Manager Associate", en: "Project Manager Associate" },
        period: { de: "10/2017 – 01/2019", en: "10/2017 – 01/2019" },
        start: "2017-10-01",
        tracks: ["delivery"],
        summary: {
          de: "Teilprojektleitung und Projektcontrolling in nationalen und internationalen IT-Projekten.",
          en: "Sub-project leadership and project control in national and international IT projects.",
        },
        highlights: [
          {
            label: { de: "Teilprojektleitung", en: "Partial project leadership" },
            text: {
              de: "Verantwortung für einzelne Teilbereiche nationaler und internationaler IT-Projekte.",
              en: "Ownership of specific streams within national and international IT projects.",
            },
          },
          {
            label: { de: "PMO", en: "PMO" },
            text: {
              de: "Unterstützung der Projektleitung durch Project-Management-Office-Funktionen.",
              en: "Supporting project management through project management office functions.",
            },
          },
          {
            label: { de: "Projektcontrolling", en: "Project control" },
            text: {
              de: "Überwachung des Projektfortschritts, enge Budgetkontrolle und Sicherstellung finanzieller Disziplin.",
              en: "Monitoring project progress, tight budget control and financial discipline.",
            },
          },
        ],
      },
      {
        id: "cc-trainee",
        title: { de: "Trainee Projektmanagement", en: "Trainee Project Management" },
        period: { de: "03/2017 – 09/2017", en: "03/2017 – 09/2017" },
        start: "2017-03-01",
        tracks: ["delivery"],
        summary: {
          de: "Sechsmonatiges Traineeprogramm für IT-Projektmanagement inklusive stellvertretender Teilprojektleitung.",
          en: "Six-month trainee programme for IT project management including deputy sub-project leadership.",
        },
        highlights: [
          {
            label: { de: "Traineeprogramm", en: "Trainee programme" },
            text: {
              de: "Intensives sechsmonatiges Programm zur Entwicklung der fachlichen und persönlichen Fähigkeiten eines IT-Projektmanagers.",
              en: "Intensive six-month programme developing the hard and soft skills required of an IT project manager.",
            },
          },
          {
            label: { de: "Globale Infrastruktur", en: "Global infrastructure" },
            text: {
              de: "Stellvertretende Teilprojektleitung in globalen IT-Infrastruktur-Initiativen.",
              en: "Deputy sub-project manager in global IT infrastructure initiatives.",
            },
          },
        ],
      },
    ],
  },
];

export const earlyRoles: EarlyRole[] = [
  {
    role: {
      de: "Werkstudent Online- & HR-Marketing",
      en: "Online & HR Marketing Working Student",
    },
    company: "STUDITEMPS GmbH",
    location: { de: "Köln", en: "Cologne" },
    period: "07/2015 – 09/2016",
  },
  {
    role: {
      de: "Co-Founder & Geschäftsführer",
      en: "Co-Founder & Managing Director",
    },
    company: "POPGOLD Berlin",
    location: { de: "Berlin", en: "Berlin" },
    period: "03/2014 – 04/2015",
  },
  {
    role: {
      de: "Praktikant Products & Innovation",
      en: "Products & Innovation Intern",
    },
    company: "M Cube Incubator GmbH",
    location: { de: "Berlin", en: "Berlin" },
    period: "02/2014 – 07/2014",
  },
  {
    role: { de: "Praktikant Marketing", en: "Marketing Intern" },
    company: "PB Firmenkunden AG",
    location: { de: "Bonn", en: "Bonn" },
    period: "06/2012 – 01/2013",
  },
  {
    role: { de: "Studentische Projektberatung", en: "Student Project Consulting" },
    company: "Henkel AG & Co. KGaA",
    location: { de: "Düsseldorf", en: "Düsseldorf" },
    period: "02/2012 – 06/2012",
  },
  {
    role: { de: "Co-Founder", en: "Co-Founder" },
    company: "Wear[e]Venlo S.C.",
    location: { de: "Venlo, Niederlande", en: "Venlo, Netherlands" },
    period: "09/2011 – 06/2012",
  },
  {
    role: { de: "Studentische Projektberatung", en: "Student Project Consulting" },
    company: "Koch Architekten",
    location: { de: "Düsseldorf", en: "Düsseldorf" },
    period: "09/2010 – 01/2011",
  },
];
