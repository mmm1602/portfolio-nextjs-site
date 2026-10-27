// /src/components/HeroSection.jsx
'use client';
import StickySection from '@/components/StickySection';

/**
 * Renders the hero section of the portfolio.
 * This component introduces the user with a title, a brief description, and key stats.
 */
export default function HeroSection() {
  return (
    <StickySection id="hero" className="portfolio-section justify-center overflow-hidden text-center">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-light-accent/20 blur-3xl dark:bg-dark-accent/25" />
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-light-border/80 bg-light-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-light-accent backdrop-blur dark:border-dark-border/80 dark:bg-dark-background/70 dark:text-dark-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-light-accent dark:bg-dark-accent" />
            Aerospace Engineering Student
          </div>

          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-light-text dark:text-dark-text sm:text-5xl lg:text-7xl">
            Miguel Angel<br /><span className="text-light-accent dark:text-dark-accent">Hurtado Gomez</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-muted-text dark:text-dark-muted-text md:text-xl">
            Building reliable propulsion and autonomy systems with a systems-first engineering mindset.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#projects" className="button-primary">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>

          <div className="mx-auto mt-8 h-px w-36 bg-gradient-to-r from-transparent via-light-border to-transparent dark:via-dark-border" />
          {/* Scroll down indicator */}
                <div className="flex justify-center pb-6">
                  <a href="#about" className="text-xs mt-3 uppercase tracking-[0.22em] text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                    Scroll to continue ↓
                  </a>
                </div>
        </div>
      </div>
    </StickySection>
  );
}
