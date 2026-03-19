// /src/components/HeroSection.jsx
'use client';
import { motion } from 'framer-motion';

/**
 * Renders the hero section of the portfolio.
 * This component introduces the user with a title, a brief description, and key stats.
 */
export default function HeroSection() {
  return (
    <section id="hero" className="sticky mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-light-accent/20 blur-3xl dark:bg-dark-accent/25" />
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-3xl"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-light-border/80 bg-light-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-light-accent backdrop-blur dark:border-dark-border/80 dark:bg-dark-background/70 dark:text-dark-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-light-accent dark:bg-dark-accent" />
            Aerospace Engineering Student
          </div>

          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-light-text dark:text-dark-text md:text-6xl md:leading-[1.05]">
            Miguel Angel Hurtado Gomez
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-light-muted-text dark:text-dark-muted-text md:text-xl">
            Building reliable propulsion and autonomy systems with a systems-first engineering mindset.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#projects" className="rounded-full bg-light-accent px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-light-border/80 bg-light-background/60 px-5 py-2 text-sm font-semibold text-light-muted-text backdrop-blur transition hover:-translate-y-0.5 hover:border-light-accent hover:text-light-accent dark:border-dark-border/80 dark:bg-dark-background/50 dark:text-dark-muted-text dark:hover:border-dark-accent dark:hover:text-dark-accent">
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
        </motion.div>
      </div>
    </section>
  );
}
