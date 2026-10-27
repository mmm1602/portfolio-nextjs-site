// /src/components/SkillsSection.jsx
'use client';
import StickySection from '@/components/StickySection';

/**
 * Renders the skills section, showcasing engineering capabilities.
 * This component lists and describes key skill areas.
 */
export default function SkillsSection() {
  return (
    <StickySection id="skills" className="portfolio-section">
      <div className="section-panel">
        <p className="section-label">Core Skills</p>
        <h2 className="section-title">Engineering Capabilities</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {/* Skill: Design */}
          <div className="rounded-xl border border-light-border/80 bg-light-background/75 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-dark-border/80 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Design</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Mechanical concept development, CAD assemblies, and packaging under geometric and mass constraints (SolidWorks, Fusion 360).</p>
          </div>
          {/* Skill: Simulation & Analysis */}
          <div className="rounded-xl border border-light-border/80 bg-light-background/75 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-dark-border/80 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Simulation & Analysis</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Numerical modeling for system behavior prediction, early-stage CFD trend analysis, and thermal/combustion diagnostic support.</p>
          </div>
          {/* Skill: Programming */}
          <div className="rounded-xl border border-light-border/80 bg-light-background/75 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-dark-border/80 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Programming</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Controls-oriented implementation in C/C++ and Arduino, analysis scripting, and web-based engineering tools with version-controlled workflows.</p>
          </div>
          {/* Skill: Systems Engineering */}
          <div className="rounded-xl border border-light-border/80 bg-light-background/75 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-dark-border/80 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Systems Engineering</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Subsystem interface definition, tradeoff-driven decision-making, sensor integration, and iterative test-to-redesign execution.</p>
          </div>
        </div>
      </div>
    </StickySection>
  );
}
