import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import { ThemeProvider, themeBootstrapScript } from "@/lib/theme";
import { site } from "@/content/site";
import { withBase } from "@/lib/paths";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
  weight: ["400", "500"],
});

const description =
  "The Minh Nguyen — Team Lead BPM & Intelligent Automation bei E.ON Digital Technology. 9+ Jahre Produkt-, Projekt- und Führungsverantwortung. Führt KI-Automatisierung im Konzern und baut eigene KI-Produkte.";

const title = "The Minh Nguyen — Team Lead BPM & Intelligent Automation";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · The Minh Nguyen" },
  description,
  keywords: [
    "The Minh Nguyen",
    "Intelligent Automation",
    "BPM",
    "Product Management",
    "AI",
    "E.ON Digital Technology",
    "Köln",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  openGraph: {
    type: "profile",
    siteName: site.name,
    title,
    description,
    url: site.url,
    locale: "de_DE",
    alternateLocale: ["en_US"],
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Team Lead BPM & Intelligent Automation Development",
  description,
  url: site.url,
  image: `${site.url}${site.photo}`,
  sameAs: [site.linkedin, site.studio],
  worksFor: { "@type": "Organization", name: "E.ON Digital Technology GmbH" },
  address: { "@type": "PostalAddress", addressLocality: "Köln", addressCountry: "DE" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Hochschule Fresenius" },
    { "@type": "CollegeOrUniversity", name: "Fontys International Business School" },
    { "@type": "CollegeOrUniversity", name: "VIA University College" },
  ],
  knowsAbout: [
    "Intelligent Automation",
    "Business Process Management",
    "Artificial Intelligence",
    "Product Management",
    "Agile Leadership",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <link rel="icon" href={withBase("/favicon.svg")} type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${mono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
