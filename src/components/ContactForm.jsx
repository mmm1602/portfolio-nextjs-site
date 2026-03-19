// /src/components/ContactForm.jsx
'use client';
import { motion } from 'framer-motion';

/**
 * Renders the contact form section.
 * This component is designed for recruiters and hiring managers to get in touch.
 */
export default function ContactForm() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_35%)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
        {/* Contact information section */}
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-7 backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Contact</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100 md:text-4xl">Internship opportunities</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I&apos;m actively seeking internship roles in aerospace, robotics, and software engineering.
            Recruiters and hiring managers are welcome to reach out.
          </p>

          {/* Detailed contact info */}
          <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>Email: <a className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200" href="mailto:mi622061@ucf.edu">mi622061@ucf.edu</a></p>
            <p>Phone: <a className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200" href="tel:+16892981104">(689) 298-1104</a></p>
            <p>LinkedIn: <a className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200" href="https://linkedin.com/in/miguelangelhurtadogomez" target="_blank" rel="noopener noreferrer">linkedin.com/in/miguelangelhurtadogomez</a></p>
            <p>GitHub: <a className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200" href="https://github.com/mmm1602" target="_blank" rel="noopener noreferrer">github.com/mmm1602</a></p>
            <p>Location: United States (remote-friendly)</p>
          </div>
        </div>

        {/* Contact form with motion effects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-slate-200/80 bg-white/80 p-7 backdrop-blur dark:border-slate-800 dark:bg-slate-900/50"
        >
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recruiter / Hiring Contact</h2>
          <form className="mt-5 space-y-4">
            <input
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              type="text"
              placeholder="Your name and company"
              required
            />
            <input
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              type="email"
              placeholder="Work email"
              required
            />
            <textarea
              rows={5}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:border-cyan-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              placeholder="Role details, location, and internship timeline"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
