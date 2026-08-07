"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Stats } from "@/components/stats";
import { AiStory } from "@/components/ai-story";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Ticker } from "@/components/ticker";
import { useLang } from "@/lib/language";
import { site } from "@/content/site";
import { LinkedinIcon } from "@/components/linkedin-icon";

export default function Home() {
  const { tk } = useLang();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--color-bg)]"
      >
        {tk("skipToContent")}
      </a>

      <ScrollProgress />
      <div aria-hidden="true" className="grain no-print" />
      <Header />

      <main id="main">
        <Hero />
        <Ticker />

        <Section
          id="impact"
          index="01"
          kicker={tk("sectionImpact")}
          title={tk("sectionImpact")}
          lead={tk("sectionImpactLead")}
        >
          <Stats />
        </Section>

        <Section
          id="ai"
          index="02"
          kicker={tk("sectionAi")}
          title={tk("sectionAi")}
          lead={tk("sectionAiLead")}
          className="border-y border-[var(--color-line)] bg-[var(--color-surface)]/40"
        >
          <AiStory />
        </Section>

        <Section
          id="career"
          index="03"
          kicker={tk("sectionCareer")}
          title={tk("sectionCareer")}
          lead={tk("sectionCareerLead")}
        >
          <Timeline />
        </Section>

        <Section
          id="skills"
          index="04"
          kicker={tk("sectionSkills")}
          title={tk("sectionSkills")}
          lead={tk("sectionSkillsLead")}
          className="border-y border-[var(--color-line)] bg-[var(--color-surface)]/40"
        >
          <Skills />
        </Section>

        <Section id="education" index="05" kicker={tk("sectionEducation")} title={tk("sectionEducation")}>
          <Education />
        </Section>

        <Section
          id="contact"
          index="06"
          kicker={tk("sectionContact")}
          title={tk("sectionContact")}
          lead={tk("sectionContactLead")}
          className="border-t border-[var(--color-line)]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
            <ContactForm />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="no-print flex h-fit items-center gap-2 self-start rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
