'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

/** A real, interactive chapter inside the flight-log wheel. */
export default function StickySection({ id, className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    let context;
    let splits = [];
    const reset = () => {
      context?.revert();
      splits.forEach((split) => split.revert());
      splits = [];
    };
    const reveal = (event) => {
      if (event.detail !== id) return;
      reset();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      context = gsap.context(() => {
        ref.current.querySelectorAll('h1, h2').forEach((heading) => {
          const label = heading.innerText.replace(/\s+/g, ' ').trim();
          const split = new SplitText(heading, { type: 'words', aria: 'auto' });
          heading.setAttribute('aria-label', label);
          splits.push(split);
          if (split.words.length) gsap.from(split.words, { yPercent: 50, opacity: 0, duration: 0.65, stagger: 0.045, ease: 'power3.out' });
        });
        const labels = ref.current.querySelectorAll('.section-label');
        if (labels.length) gsap.from(labels, { y: 8, opacity: 0, duration: 0.5 });
      }, ref);
    };
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    media.addEventListener('change', reset);
    window.addEventListener('flight:expand', reveal);
    return () => {
      reset();
      media.removeEventListener('change', reset);
      window.removeEventListener('flight:expand', reveal);
    };
  }, [id]);

  return <section id={id} ref={ref} className={`section-surface ${className}`}>{children}</section>;
}
