// /src/components/FlagshipSection.jsx
'use client';
import { motion } from 'framer-motion';

/**
 * Renders the flagship experience section.
 * This component details a significant project, highlighting the process, decisions, and outcomes.
 */
export default function FlagshipSection() {
  // Data for the steps in the flagship project
  const flagshipSteps = [
    {
      phase: '01 — Mission Definition',
      text: 'Defined VTOL propulsion constraints around lift margin, stability envelope, and integrated subsystem packaging.',
    },
    {
      phase: '02 — Engineering Development',
      text: 'Modeled a 3BSN thrust vectoring mechanism in SolidWorks and iterated geometry for structural feasibility and controllability.',
    },
    {
      phase: '03 — System Validation',
      text: 'Set thrust-to-weight objectives and translated propulsion requirements into implementation-ready targets for team alignment.',
    },
  ];

  return (
    <section id="flagship" className=" sticky mx-auto mt-12 w-full max-w-6xl px-6 md:px-10">
      <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 md:p-9">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">Flagship Experience</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
            VTOL Aircraft Propulsion System
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Deep-dive narrative of my propulsion team work in the UCF Jets and Aeronautics Society,
            from architecture targets to thrust vectoring implementation decisions.
          </p>

          {/* Displaying the project phases */}
          <div className="mt-6 space-y-3">
            {flagshipSteps.map((step) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/70"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{step.phase}</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{step.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Key design decisions and challenges */}
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Key Design Decision</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                Standardized around a 3BSN-style vectoring concept to preserve directional control authority while keeping assembly complexity manageable for a student team.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Major Challenge</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                Maintaining articulation range without introducing interference or excess structural risk at high deflection demanded multiple CAD revisions and tolerance checks.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Tradeoff Analysis</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                Higher vectoring freedom increases control options but adds weight and failure points. We favored constrained but reliable articulation to improve integration confidence.
              </p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Suggested interaction: reveal each decision stage on scroll with CAD overlays and force-vector callouts.</p>
          </div>
        </div>

        {/* System snapshot providing key metrics */}
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 md:p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">System Snapshot</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
              Thrust-to-weight objective: <span className="font-semibold text-slate-900 dark:text-slate-100">1.5:1</span>
            </p>
            <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
              Nozzle architecture: <span className="font-semibold text-slate-900 dark:text-slate-100">3BSN</span>
            </p>
            <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
              Team leadership: <span className="font-semibold text-slate-900 dark:text-slate-100">6-member propulsion group</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}