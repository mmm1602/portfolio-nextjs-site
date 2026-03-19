// /src/components/AboutSection.jsx
'use client';
import { motion } from 'framer-motion';

/**
 * Renders the about section of the portfolio.
 * This component provides a summary of the user's background, skills, and career highlights.
 */
export default function AboutSection() {
  return (
    <section id="about" className="sticky mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-12 text-center md:pl-36 md:pr-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl rounded-3xl border border-light-border/80 bg-light-background/75 px-8 py-12 shadow-[0_12px_36px_rgba(2,6,23,0.08)] backdrop-blur dark:border-dark-border/80 dark:bg-dark-background/70"
      >
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-light-accent dark:text-dark-accent">About Me</p>
        <h2 className="font-display mb-6 text-4xl font-bold tracking-tight text-light-text dark:text-dark-text md:text-5xl">
          Engineering Mindset,<br />Systems-First Execution.
        </h2>
        <p className="mx-auto mb-5 max-w-3xl text-base leading-relaxed text-light-muted-text dark:text-dark-muted-text md:text-lg">
          I define the problem first, map constraints early, then iterate until performance is reliable under practical conditions. My strongest work sits at the intersection of propulsion, controls, and subsystem integration.
        </p>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-light-muted-text dark:text-dark-muted-text md:text-lg">
          I prefer field-tested behavior over perfect simulation visuals, and I optimize for robust systems that remain stable when assumptions break.
        </p>

        <div className="mt-8 grid w-full gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl border border-light-border/80 bg-light-background/70 p-4 dark:border-dark-border/70 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Focus</p>
            <p className="mt-1 text-sm text-light-text dark:text-dark-text">Propulsion + Autonomy</p>
          </div>
          <div className="rounded-xl border border-light-border/80 bg-light-background/70 p-4 dark:border-dark-border/70 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Approach</p>
            <p className="mt-1 text-sm text-light-text dark:text-dark-text">Test, iterate, harden</p>
          </div>
          <div className="rounded-xl border border-light-border/80 bg-light-background/70 p-4 dark:border-dark-border/70 dark:bg-dark-background/60">
            <p className="text-xs uppercase tracking-[0.14em] text-light-accent dark:text-dark-accent">Goal</p>
            <p className="mt-1 text-sm text-light-text dark:text-dark-text">Build reliable systems</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}