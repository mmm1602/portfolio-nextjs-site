// /src/components/Navbar.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Renders the navigation bar for the portfolio.
 * It includes navigation links and a theme toggle button.
 */
export default function Navbar() {
  // Navigation items with their corresponding links and labels

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
      const visible = offsets.filter((o) => o.top <= window.innerHeight * 0.4);
      if (visible.length > 0) {
        setActiveSection(visible[visible.length - 1].href);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className="fixed left-0 top-0 z-50 flex h-[76px] w-full items-center gap-3 border-b border-light-border/60 bg-light-background/90 px-4 backdrop-blur-xl dark:border-dark-border/70 dark:bg-dark-background/90 md:h-screen md:w-36 md:flex-col md:items-start md:border-b-0 md:border-r md:px-5 md:py-8">
      <a href="#hero" aria-label="Miguel Hurtado — Home" className="font-display text-lg font-bold tracking-tight text-light-text dark:text-dark-text">MH<span className="text-light-accent dark:text-dark-accent">.</span></a>
      <div className="nav-links flex min-w-0 flex-1 items-center gap-4 overflow-x-auto md:w-full md:flex-col md:items-start md:justify-center md:gap-3 md:overflow-visible">
        {navItems.map((item) => (
          <a 
            key={item.href}
            href={item.href}
            aria-current={activeSection === item.href ? 'location' : undefined}
            className={`relative flex min-h-11 shrink-0 items-center pl-2 text-xs font-semibold tracking-wide transition-colors md:text-sm ${activeSection === item.href ? 'text-light-accent dark:text-dark-accent' : 'text-light-muted-text dark:text-dark-muted-text'} hover:text-light-accent dark:hover:text-dark-accent`}
          >
            {activeSection === item.href && (
              <motion.span
                layoutId="active-section-indicator"
                aria-hidden="true"
                className="absolute left-0 top-1/2 -mt-2 h-4 w-[2px] rounded-full bg-light-accent dark:bg-dark-accent"
                transition={{ type: 'spring', stiffness: 340, damping: 32 }}
              />
            )}
            {item.label}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
