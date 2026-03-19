// /src/components/ContactSection.jsx
'use client';

/**
 * Renders the contact section.
 * This component provides contact information and links to social profiles.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="sticky mx-auto mt-8 flex min-h-screen w-full max-w-6xl items-center px-6 py-12 md:pl-36 md:pr-10">
      <div className="w-full rounded-3xl border border-light-border/80 bg-gradient-to-b from-light-background/90 to-light-background/70 p-7 shadow-[0_12px_36px_rgba(2,6,23,0.08)] backdrop-blur dark:border-dark-border/80 dark:from-dark-background/85 dark:to-dark-background/60 md:p-9">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-light-accent dark:text-dark-accent">Let&apos;s Connect</p>
        <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-light-text dark:text-dark-text md:text-3xl">Contact</h2>
        <p className="mt-3 max-w-3xl text-sm text-light-muted-text dark:text-dark-muted-text md:text-base">
          I&apos;m actively seeking internship opportunities with aerospace and high-performance engineering teams.
        </p>
        {/* Contact links */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:mi622061@ucf.edu" className="rounded-full bg-light-accent px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-light-accent/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90">mi622061@ucf.edu</a>
          <a href="https://linkedin.com/in/miguelangelhurtadogomez" target="_blank" rel="noopener noreferrer" className="rounded-full border border-light-border bg-light-background/70 px-5 py-2 text-sm font-semibold text-light-muted-text transition hover:-translate-y-0.5 hover:border-light-accent hover:text-light-accent dark:border-dark-border dark:bg-dark-background/50 dark:text-dark-muted-text dark:hover:border-dark-accent dark:hover:text-dark-accent">LinkedIn</a>
          <a href="https://github.com/mmm1602" target="_blank" rel="noopener noreferrer" className="rounded-full border border-light-border bg-light-background/70 px-5 py-2 text-sm font-semibold text-light-muted-text transition hover:-translate-y-0.5 hover:border-light-accent hover:text-light-accent dark:border-dark-border dark:bg-dark-background/50 dark:text-dark-muted-text dark:hover:border-dark-accent dark:hover:text-dark-accent">GitHub</a>
        </div>
      </div>
    </section>
  );
}