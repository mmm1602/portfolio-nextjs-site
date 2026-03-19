// /src/components/SkillsSection.jsx
'use client';

/**
 * Renders the skills section, showcasing engineering capabilities.
 * This component lists and describes key skill areas.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="sticky mx-auto mt-8 flex min-h-screen w-full max-w-6xl items-center px-6 py-12 md:pl-36 md:pr-10">
      <div className="w-full rounded-3xl border border-light-border/80 bg-light-background/75 p-7 shadow-[0_12px_36px_rgba(2,6,23,0.08)] backdrop-blur dark:border-dark-border/80 dark:bg-dark-background/70 md:p-9">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-light-accent dark:text-dark-accent">Core Skills</p>
        <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-light-text dark:text-dark-text md:text-3xl">Engineering Capabilities</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
    </section>
  );
}