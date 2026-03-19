// /src/components/Footer.jsx

/**
 * Renders the footer section of the portfolio.
 * It includes the user's name, a brief title, navigation links, and copyright information.
 */
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 px-6 py-10 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-slate-800 dark:text-slate-100">Miguel Angel Hurtado Gomez</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Aerospace Engineering Student · Open to Internships</p>
        </div>

        {/* Footer navigation links */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
          <a href="#projects" className="transition hover:text-slate-900 dark:hover:text-slate-100">Projects</a>
          <a href="mailto:mi622061@ucf.edu" className="transition hover:text-slate-900 dark:hover:text-slate-100">Email</a>
          <a href="https://linkedin.com/in/miguelangelhurtadogomez" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-900 dark:hover:text-slate-100">
            LinkedIn
          </a>
          <a href="https://github.com/mmm1602" target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-900 dark:hover:text-slate-100">
            GitHub
          </a>
        </div>
      </div>
      {/* Copyright notice */}
      <p className="mx-auto mt-6 w-full max-w-6xl text-xs text-slate-500 dark:text-slate-500">© 2026 Miguel Hurtado. All rights reserved.</p>
    </footer>
  );
}
