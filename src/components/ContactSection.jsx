// /src/components/ContactSection.jsx
'use client';
import StickySection from '@/components/StickySection';

/**
 * Renders the contact section.
 * This component provides contact information and links to social profiles.
 */
export default function ContactSection() {
  return (
    <StickySection id="contact" className="portfolio-section">
      <div className="section-panel">
        <p className="section-label">Let&apos;s Connect</p>
        <h2 className="section-title">Let’s build something that matters.</h2>
        <p className="mt-3 max-w-3xl text-sm text-light-muted-text dark:text-dark-muted-text md:text-base">
          I&apos;m actively seeking internship opportunities with aerospace and high-performance engineering teams.
        </p>
        {/* Contact links */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:mi622061@ucf.edu" className="button-primary">mi622061@ucf.edu <span aria-hidden="true">↗</span></a>
          <a href="https://linkedin.com/in/miguelangelhurtadogomez" target="_blank" rel="noopener noreferrer" className="button-secondary">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/mmm1602" target="_blank" rel="noopener noreferrer" className="button-secondary">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </StickySection>
  );
}
