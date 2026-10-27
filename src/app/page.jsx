// /src/app/page.jsx
"use client";

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import FlightLog from '@/components/FlightLog';

/**
 * The main page of the portfolio.
 * It aggregates all the different sections of the portfolio.
 */
export default function Home() {
  return (
    <FlightLog>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </FlightLog>
  );
}
