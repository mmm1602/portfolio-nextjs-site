'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import StickySection from '@/components/StickySection';

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
  const [paused, setPaused] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!focusedProject) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [focusedProject]);

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
    <StickySection
      id="projects"
      className="relative w-full overflow-hidden px-6 py-16 md:px-10 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.12),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.12),transparent_36%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.14),transparent_36%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
          <p className="section-label">Portfolio Highlights</p>
          <h2 className="section-title">
            Engineering Projects
          </h2>
          <p className="mt-3 text-base text-light-muted-text dark:text-dark-muted-text">
            Explore selected aerospace, robotics, and software work.
          </p>
          </div>
          <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="button-secondary">
            {paused ? 'Resume gallery' : 'Pause gallery'}
          </button>
        </div>

        <div className="min-h-0 flex flex-1 flex-col gap-4 overflow-hidden">
          {[rowOne, rowTwo].map((rowProjects, rowIndex) => {
            const duplicated = [...rowProjects, ...rowProjects];
            return (
              <div key={rowIndex} className="project-row relative h-[360px] overflow-x-auto sm:h-[380px]">
                <div style={{ animationPlayState: paused ? 'paused' : undefined }} className={`marquee-track flex h-full w-max gap-6 pr-6 ${rowIndex === 0 ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
                  {duplicated.map((project, cardIndex) => {
                    const mediaItems = getProjectMedia(project);
                    const currentIndex = activeMediaIndex[project.title] ?? 0;
                    const currentSrc = mediaItems[currentIndex] || project.media?.src;

                    return (
                      <motion.article
                        key={`${project.title}-${rowIndex}-${cardIndex}`}
                        data-duplicate={cardIndex >= rowProjects.length || undefined}
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                        className="group relative flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-light-border/70 bg-light-background/80 shadow-[0_12px_30px_rgba(2,6,23,0.08)] backdrop-blur-sm dark:border-dark-border/70 dark:bg-dark-background/80 md:w-[360px]"
                      >
                        <div className="absolute inset-0">
                          {isVideoSrc(currentSrc) ? (
                            <video src={currentSrc} muted loop playsInline preload="none" poster="/projects/GNOR/Boat00.png" className="h-full w-full object-cover" />
                          ) : (
                            <img src={currentSrc} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
                          )}
                        </div>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

                        <button
                          type="button"
                          onClick={() => setFocusedProject(project)}
                          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white transition hover:bg-black/55"
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

                        <div className="absolute left-3 top-3 z-20 flex gap-2">
                          {mediaItems.length > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={() => cycleMedia(project.title, mediaItems.length, -1)}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-lg font-semibold text-slate-900"
                                aria-label={`Previous media for ${project.title}`}
                              >
                                ‹
                              </button>
                              <button
                                type="button"
                                onClick={() => cycleMedia(project.title, mediaItems.length, 1)}
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-lg font-semibold text-slate-900"
                                aria-label={`Next media for ${project.title}`}
                              >
                                ›
                              </button>
                              <span className="flex items-center rounded-full bg-white/75 px-2 text-xs font-medium text-slate-900">
                                {currentIndex + 1}/{mediaItems.length}
                              </span>
                            </>
                          )}
                        </div>

                        <div className="relative z-10 mt-auto flex min-h-0 flex-1 flex-col justify-end p-5 text-white">
                          <div>
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/75">{project.category}</p>
                            <h3 className="mb-2 font-display text-xl font-semibold"><button type="button" onClick={() => setFocusedProject(project)} className="text-left hover:underline">{project.title}</button></h3>
                            <p className="text-sm text-white/85">{project.summary}</p>
                          </div>

                          <div className="mt-4 flex items-center justify-end">
                            <div className="flex gap-2">
                              {project.liveUrl && project.liveUrl !== project.sourceUrl && (
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
          <dialog ref={dialogRef} aria-labelledby="project-detail-title" onCancel={() => setFocusedProject(null)} onClick={(event) => { if (event.target === event.currentTarget) setFocusedProject(null); }} className="project-dialog rounded-2xl border border-light-border bg-light-background shadow-2xl dark:border-dark-border dark:bg-dark-background">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full"
            >
              <button
                type="button"
                onClick={() => setFocusedProject(null)}
                autoFocus
                className="sticky top-3 z-20 -mb-14 ml-auto mr-3 mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/65 text-white transition hover:bg-black/90"
                aria-label="Close detailed project view"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr]">
                <div className="relative h-[32svh] md:h-full md:min-h-[640px]">
                  {isVideoSrc(detailSrc) ? (
                    <video src={detailSrc} controls muted playsInline className="h-full w-full object-contain" />
                  ) : (
                    <img src={detailSrc} alt={focusedProject.title} className="h-full w-full object-contain" />
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

                <div className="flex min-h-0 flex-col p-6 md:p-8">
                  <p className="section-label">Detailed View</p>
                  <h3 id="project-detail-title" className="mt-2 font-display text-2xl font-bold text-light-text dark:text-dark-text">{focusedProject.title}</h3>
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
                    {focusedProject.liveUrl && focusedProject.liveUrl !== focusedProject.sourceUrl && (
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
          </dialog>
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
        .animate-marquee-right:hover,
        .marquee-track:focus-within {
          animation-play-state: paused !important;
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

        @media (max-width: 767px), (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          article[data-duplicate] { display: none; }
        }

        @media (min-width: 768px) {
          .project-row { scrollbar-width: none; }
          .project-row::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </StickySection>
  );
}
