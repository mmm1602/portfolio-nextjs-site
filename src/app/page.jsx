// /src/app/page.jsx
"use client";

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

/**
 * The main page of the portfolio.
 * It aggregates all the different sections of the portfolio.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(9,105,218,0.16),transparent_34%),radial-gradient(circle_at_80%_2%,rgba(47,129,247,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(47,129,247,0.2),transparent_34%),radial-gradient(circle_at_80%_2%,rgba(88,166,255,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(101,109,118,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(101,109,118,0.12)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_92%)]" />
       
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}