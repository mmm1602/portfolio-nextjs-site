'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', shouldUseDark);
    setDark(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  };

  if (!mounted) {
    return <div className="h-9 w-20 rounded-full border border-slate-300/60 bg-slate-200/60" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-300 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
      aria-label="Toggle dark and light mode"
    >
      {dark ? 'Dark' : 'Light'} mode
    </button>
  );
}
