// /src/components/ExperienceSection.jsx
'use client';

/**
 * Renders the experience timeline section.
 * This component lists professional and academic experiences in chronological order.
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="sticky mx-auto mt-8 flex min-h-screen w-full max-w-6xl items-center px-6 py-12 md:pl-36 md:pr-10">
      <div className="w-full rounded-3xl border border-light-border/80 bg-light-background/75 p-7 shadow-[0_12px_36px_rgba(2,6,23,0.08)] backdrop-blur dark:border-dark-border/80 dark:bg-dark-background/70 md:p-9">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-light-accent dark:text-dark-accent">Timeline</p>
        <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-light-text dark:text-dark-text md:text-3xl">Experience Timeline</h2>
        <ol className="relative mt-6 space-y-4 border-l border-light-border pl-4 dark:border-dark-border">
          {/* Experience Item 1 */}
          <li className="relative rounded-xl border border-light-border/80 bg-light-background/75 p-4 dark:border-dark-border/80 dark:bg-dark-background/60">
            <span className="absolute -left-[22px] top-5 h-2.5 w-2.5 rounded-full bg-light-accent dark:bg-dark-accent" />
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Feb 2026 – Present</p>
            <p className="mt-1 text-sm font-semibold text-light-text dark:text-dark-text">Undergraduate Researcher · PERL Lab, UCF</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Hydrogen propulsion experiment support, combustion analysis, and thermal/system troubleshooting.</p>
          </li>
          {/* Experience Item 2 */}
          <li className="relative rounded-xl border border-light-border/80 bg-light-background/75 p-4 dark:border-dark-border/80 dark:bg-dark-background/60">
            <span className="absolute -left-[22px] top-5 h-2.5 w-2.5 rounded-full bg-light-accent dark:bg-dark-accent" />
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Jan 2026 – Present</p>
            <p className="mt-1 text-sm font-semibold text-light-text dark:text-dark-text">Propulsion Team Lead · VTOL Aircraft, UCF JAS</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Leading 6-member propulsion group for conceptual VTOL architecture and thrust vectoring design.</p>
          </li>
          {/* Experience Item 3 */}
          <li className="relative rounded-xl border border-light-border/80 bg-light-background/75 p-4 dark:border-dark-border/80 dark:bg-dark-background/60">
            <span className="absolute -left-[22px] top-5 h-2.5 w-2.5 rounded-full bg-light-accent dark:bg-dark-accent" />
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">2025</p>
            <p className="mt-1 text-sm font-semibold text-light-text dark:text-dark-text">Autonomous Boat + Project STORM + Flite</p>
            <p className="mt-1 text-sm text-light-muted-text dark:text-dark-muted-text">Delivered robotics and software systems with measurable outputs, including 200-ft autonomous navigation and an award-winning UAV planning prototype.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}