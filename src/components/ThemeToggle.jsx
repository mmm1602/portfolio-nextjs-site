'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(dark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      className="flex min-h-11 shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-light-border px-2 text-[11px] font-medium text-light-muted-text transition hover:border-light-accent hover:text-light-accent dark:border-dark-border dark:text-dark-muted-text dark:hover:border-dark-accent dark:hover:text-dark-accent"
      aria-label={mounted ? `Switch to ${dark ? 'light' : 'dark'} mode` : 'Change color theme'}
    >
      <span aria-hidden="true" className="text-base">{mounted && dark ? '☀' : '☾'}</span>
      <span className="hidden md:inline">{mounted ? (dark ? 'Light mode' : 'Dark mode') : 'Theme'}</span>
    </button>
  );
}
