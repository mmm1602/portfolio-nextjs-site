'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

/**
 * Renders the projects gallery section.
 * This component displays a grid of featured projects with interactive elements.
 */
export default function ProjectsSection() {
  // Slicing the first 6 projects to be featured
  const featured = projects.slice(0, 6);
  const rowOne = featured.filter((_, index) => index % 2 === 0);
  const rowTwo = featured.filter((_, index) => index % 2 !== 0);
  // State to track the active media index for each project's gallery
  const [activeMediaIndex, setActiveMediaIndex] = useState({});
  // State to track the project shown in full-screen detail view
  const [focusedProject, setFocusedProject] = useState(null);

  /**
   * Gets all media sources for a project, including the main media and gallery images.
   * @param {object} project - The project object.
   * @returns {string[]} An array of media source URLs.
   */
  const getProjectMedia = (project) => [project.media?.src, ...(project.gallery || [])].filter(Boolean);

  /**
   * Checks if a given source URL is a video file.
   * @param {string} src - The media source URL.
   * @returns {boolean} True if the source is a video, false otherwise.
   */
  const isVideoSrc = (src) => /\.(mp4|mov|webm|ogg)$/i.test(src || '');

  /**
   * Cycles through the media gallery for a project.
   * @param {string} projectTitle - The title of the project.
   * @param {number} total - The total number of media items.
   * @param {number} direction - The direction to cycle (1 for next, -1 for previous).
   */
  const cycleMedia = (projectTitle, total, direction) => {
    setActiveMediaIndex((prev) => {
      const current = prev[projectTitle] ?? 0;
      const next = (current + direction + total) % total;
      return { ...prev, [projectTitle]: next };
    });
  };

  return (
    <section
      id="projects"
      className="sticky h-[100svh] w-full overflow-hidden bg-light-background px-4 py-8 dark:bg-dark-background md:pl-36 md:pr-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.12),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.12),transparent_36%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.14),transparent_36%)]" />
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        <div className="mb-6 shrink-0 text-center md:text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-light-accent dark:text-dark-accent">Portfolio Highlights</p>
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-light-text dark:text-dark-text md:text-4xl">
            Engineering Projects
          </h2>
          <p className="text-base text-light-muted-text dark:text-dark-muted-text">
            Explore selected aerospace, robotics, and software work.
          </p>
        </div>

        <div className="min-h-0 flex flex-1 flex-col gap-4 overflow-hidden">
          {[rowOne, rowTwo].map((rowProjects, rowIndex) => {
            const duplicated = [...rowProjects, ...rowProjects];
            return (
              <div key={rowIndex} className="relative flex-1 overflow-hidden">
                <div className={`marquee-track flex h-full w-max gap-6 ${rowIndex === 0 ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
                  {duplicated.map((project, cardIndex) => {
                    const mediaItems = getProjectMedia(project);
                    const currentIndex = activeMediaIndex[project.title] ?? 0;
                    const currentSrc = mediaItems[currentIndex] || project.media?.src;

                    return (
                      <motion.article
                        key={`${project.title}-${rowIndex}-${cardIndex}`}
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                        className="group relative flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-light-border/70 bg-light-background/80 shadow-[0_12px_30px_rgba(2,6,23,0.08)] backdrop-blur-sm dark:border-dark-border/70 dark:bg-dark-background/80 md:w-[360px]"
                      >
                        <div className="absolute inset-0">
                          {isVideoSrc(currentSrc) ? (
                            <video src={currentSrc} autoPlay muted loop playsInline className="h-full w-full object-cover" />
                          ) : (
                            <img src={currentSrc} alt={project.title} className="h-full w-full object-cover" />
                          )}
                        </div>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

                        <button
                          type="button"
                          onClick={() => setFocusedProject(project)}
                          className="absolute right-3 top-3 z-20 rounded-full border border-white/35 bg-black/35 p-2 text-white transition hover:bg-black/55"
                          aria-label={`Open detailed view for ${project.title}`}
                          title="Open detailed view"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M8 3H3v5" />
                            <path d="M16 3h5v5" />
                            <path d="M8 21H3v-5" />
                            <path d="M16 21h5v-5" />
                          </svg>
                        </button>

                        <div className="absolute bottom-3 right-3 z-20 flex gap-2">
                          {mediaItems.length > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={() => cycleMedia(project.title, mediaItems.length, -1)}
                                className="rounded-full bg-white/85 px-2 py-1 text-xs font-semibold text-slate-900"
                                aria-label={`Previous media for ${project.title}`}
                              >
                                ‹
                              </button>
                              <button
                                type="button"
                                onClick={() => cycleMedia(project.title, mediaItems.length, 1)}
                                className="rounded-full bg-white/85 px-2 py-1 text-xs font-semibold text-slate-900"
                                aria-label={`Next media for ${project.title}`}
                              >
                                ›
                              </button>
                              <span className="rounded-full bg-white/75 px-2 py-0.5 text-[10px] font-medium text-slate-900">
                                {currentIndex + 1}/{mediaItems.length}
                              </span>
                            </>
                          )}
                        </div>

                        <div className="relative z-10 mt-auto flex min-h-0 flex-1 flex-col justify-end p-5 text-white">
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                            <p className="text-sm text-white/85">{project.summary}</p>
                          </div>

                          <div className="mt-4 flex items-center justify-end">
                            <div className="flex gap-2">
                              {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/60 bg-white/10 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white hover:text-slate-900">
                                  Live
                                </a>
                              )}
                              {project.sourceUrl && (
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/50 bg-black/20 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white hover:text-slate-900">
                                  Source
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {focusedProject && (() => {
        const detailMedia = getProjectMedia(focusedProject);
        const detailIndex = activeMediaIndex[focusedProject.title] ?? 0;
        const detailSrc = detailMedia[detailIndex] || focusedProject.media?.src;

        return (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative h-[88svh] w-full max-w-6xl overflow-hidden rounded-2xl border border-light-border bg-light-background shadow-2xl dark:border-dark-border dark:bg-dark-background"
            >
              <button
                type="button"
                onClick={() => setFocusedProject(null)}
                className="absolute right-3 top-3 z-20 rounded-full border border-white/35 bg-black/45 p-2 text-white transition hover:bg-black/70"
                aria-label="Close detailed project view"
              >
                ✕
              </button>

              <div className="grid h-full grid-cols-1 md:grid-cols-[1.15fr_1fr]">
                <div className="relative h-[44svh] md:h-full">
                  {isVideoSrc(detailSrc) ? (
                    <video src={detailSrc} autoPlay muted loop playsInline className="h-full w-full object-cover" />
                  ) : (
                    <img src={detailSrc} alt={focusedProject.title} className="h-full w-full object-cover" />
                  )}

                  {detailMedia.length > 1 && (
                    <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                      <button
                        type="button"
                        onClick={() => cycleMedia(focusedProject.title, detailMedia.length, -1)}
                        className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900"
                        aria-label={`Previous media for ${focusedProject.title}`}
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => cycleMedia(focusedProject.title, detailMedia.length, 1)}
                        className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900"
                        aria-label={`Next media for ${focusedProject.title}`}
                      >
                        ›
                      </button>
                      <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900">
                        {detailIndex + 1}/{detailMedia.length}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex h-full min-h-0 flex-col overflow-y-auto p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-light-accent dark:text-dark-accent">Detailed View</p>
                  <h3 className="mt-2 text-2xl font-bold text-light-text dark:text-dark-text">{focusedProject.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-light-muted-text dark:text-dark-muted-text">{focusedProject.summary}</p>

                  <div className="mt-6 space-y-2 rounded-xl border border-light-border bg-light-background/70 p-4 text-sm dark:border-dark-border dark:bg-dark-background/70">
                    <p><span className="font-medium text-light-accent dark:text-dark-accent">Category:</span> {focusedProject.category}</p>
                    <p><span className="font-medium text-light-accent dark:text-dark-accent">Period:</span> {focusedProject.period}</p>
                    <p><span className="font-medium text-light-accent dark:text-dark-accent">Impact:</span> {focusedProject.impact}</p>
                    <p><span className="font-medium text-light-accent dark:text-dark-accent">Tools:</span> {focusedProject.tech?.join(', ')}</p>
                  </div>

                  {focusedProject.highlights && (
                    <div className="mt-5">
                      <p className="mb-2 text-sm font-semibold text-light-text dark:text-dark-text">Highlights</p>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-light-muted-text dark:text-dark-muted-text">
                        {focusedProject.highlights.map((hl, idx) => (
                          <li key={idx}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {focusedProject.liveUrl && (
                      <a href={focusedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-light-accent px-4 py-2 text-sm font-semibold text-light-accent transition hover:bg-light-accent hover:text-light-background dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-background">
                        Live Demo
                      </a>
                    )}
                    {focusedProject.sourceUrl && (
                      <a href={focusedProject.sourceUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-light-border px-4 py-2 text-sm font-semibold text-light-muted-text transition hover:border-light-accent hover:text-light-accent dark:border-dark-border dark:text-dark-muted-text dark:hover:border-dark-accent dark:hover:text-dark-accent">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })()}

      <style jsx>{`
        .animate-marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marqueeRight 40s linear infinite;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
