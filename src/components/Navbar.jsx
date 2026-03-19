// /src/components/Navbar.jsx
'use client';
import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

/**
 * Renders the navigation bar for the portfolio.
 * It includes navigation links and a theme toggle button.
 */
export default function Navbar() {
  // Navigation items with their corresponding links and labels
  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    //{ href: '#flagship', label: 'Flagship' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Timeline' },
    { href: '#contact', label: 'Contact' },
  ];

  // Track active section for scrollspy
  const [activeSection, setActiveSection] = React.useState(navItems[0].href);

  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { href: item.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: item.href, top: rect.top };
      });
      const visible = offsets.filter((o) => o.top <= 120);
      if (visible.length > 0) {
        setActiveSection(visible[visible.length - 1].href);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-32 px-4">
      <div className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/15" />
      <div className="relative flex h-full flex-col items-start justify-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`relative pl-2 text-sm font-semibold tracking-wide transition-colors ${activeSection === item.href ? 'text-light-accent dark:text-dark-accent' : 'text-black/70 dark:text-white/70'} hover:text-light-accent dark:hover:text-dark-accent`}
            style={{ background: 'none', border: 'none' }}
          >
            <span className={`absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full transition-opacity ${activeSection === item.href ? 'bg-light-accent opacity-100 dark:bg-dark-accent' : 'bg-transparent opacity-0'}`} />
            {item.label}
          </a>
        ))}
        <div className="mt-8">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
