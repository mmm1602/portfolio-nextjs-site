'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  { id: 'hero', title: 'The introduction', label: 'Home' },
  { id: 'about', title: 'The mindset', label: 'About' },
  { id: 'projects', title: 'The work', label: 'Projects' },
  { id: 'skills', title: 'The toolkit', label: 'Skills' },
  { id: 'experience', title: 'The trajectory', label: 'Timeline' },
  { id: 'contact', title: 'The next chapter', label: 'Contact' },
];

export default function Footer() {
  const footerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const footer = footerRef.current;
    const media = gsap.matchMedia();
    let disposed = false;

    document.fonts.ready.then(() => {
      if (disposed) return;
      media.add('(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)', () => {
        const wheel = footer.querySelector('.orbit-wheel');
        const scene = footer.querySelector('.orbit-scene');
        const cards = [...footer.querySelectorAll('.orbit-card')];
        const previews = [];

        chapters.forEach((chapter, index) => {
          const source = document.querySelector(`#${chapter.id} .section-surface`);
          if (!source) return;
          const clone = source.cloneNode(true);
          // Decorative snapshots; real navigation stays outside the wheel.
          clone.querySelectorAll('dialog, script, style').forEach((node) => node.remove());
          // SplitText's word wrappers depend on inline display styles. Flatten
          // the decorative heading to its accessible original before stripping styles.
          clone.querySelectorAll('h1[aria-label], h2[aria-label]').forEach((heading) => {
            heading.textContent = heading.getAttribute('aria-label');
          });
          [clone, ...clone.querySelectorAll('*')].forEach((node) => {
            node.removeAttribute('id');
            node.removeAttribute('style');
            node.removeAttribute('name');
          });
          clone.classList.add('orbit-preview-source');
          clone.inert = true;
          const slot = cards[index].querySelector('.orbit-preview');
          slot.appendChild(clone);
          previews.push({ source, clone, slot });
        });

        const layout = () => {
          const radius = cards[0].offsetHeight * 1.05;
          footer.style.setProperty('--orbit-radius', `${radius}px`);
          cards.forEach((card, index) => {
            card.style.transform = `rotateX(${-index * 60}deg) translateZ(${radius}px)`;
          });
          previews.forEach(({ source, clone, slot }) => {
            const width = source.offsetWidth;
            Object.assign(clone.style, { width: `${width}px`, height: 'auto', minHeight: '0', padding: '24px' });
            const height = clone.offsetHeight;
            const scale = Math.min(slot.clientWidth / width, slot.clientHeight / height);
            Object.assign(clone.style, {
              width: `${width}px`, height: `${height}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
            });
          });
        };
        footer.dataset.orbit = 'true';
        layout();
        const observer = new ResizeObserver(layout);
        observer.observe(scene);

        gsap.fromTo(wheel, { rotationX: 0 }, {
          rotationX: 300, ease: 'none',
          scrollTrigger: {
            trigger: footer.querySelector('.orbit-runway'),
            start: 'top top', end: 'bottom bottom', scrub: 0.65,
            onUpdate: (self) => setActive(Math.min(5, Math.round(self.progress * 5))),
          },
        });
        gsap.from(scene, {
          scale: 0.72, opacity: 0, y: 100, ease: 'power2.out',
          scrollTrigger: { trigger: footer, start: 'top 90%', end: 'top top', scrub: 0.5 },
        });
        ScrollTrigger.refresh();
        return () => {
          observer.disconnect();
          previews.forEach(({ clone }) => clone.remove());
          cards.forEach((card) => card.removeAttribute('style'));
          delete footer.dataset.orbit;
          footer.style.removeProperty('--orbit-radius');
        };
      });
    });
    return () => { disposed = true; media.revert(); };
  }, []);

  return (
    <footer ref={footerRef} className="orbit-footer">
      <div className="orbit-runway">
        <div className="orbit-stage">
          <div className="orbit-heading">
            <p className="orbit-eyebrow">Flight log / 06 chapters</p>
            <h2>One more <span>orbit.</span></h2>
            <p className="orbit-instruction">Scroll to take another look around.</p>
            <p className="orbit-fallback-copy">Good engineering starts with a conversation.</p>
          </div>
          <div className="orbit-scene" aria-hidden="true">
            <div className="orbit-wheel">
              {chapters.map((chapter, index) => (
                <div key={chapter.id} className="orbit-card">
                  <div className="orbit-card-caption"><span>0{index + 1} / {chapter.label}</span><span>MH — Flight log</span></div>
                  <div className="orbit-preview" />
                  <p className="orbit-card-title">{chapter.title}<span>↗</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="orbit-console">
            <a className="orbit-open" href={`#${chapters[active].id}`}>
              <span>0{active + 1} / {chapters[active].label}</span> Revisit this chapter ↗
            </a>
            <nav aria-label="Explore portfolio chapters" className="orbit-chapters">
              {chapters.map((chapter, index) => (
                <a key={chapter.id} href={`#${chapter.id}`} data-active={active === index}>
                  <span>0{index + 1}</span>{chapter.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-launch">
        <div><p className="orbit-eyebrow">Ready for what&apos;s next</p><a className="footer-contact" href="mailto:mi622061@ucf.edu">Let&apos;s build.<span aria-hidden="true">↗</span></a></div>
        <a href="#hero" className="footer-top">Back to launch <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer-meta">
        <p>© 2026 Miguel Hurtado · Aerospace + Software</p>
        <div><a href="https://linkedin.com/in/miguelangelhurtadogomez" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/mmm1602" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:mi622061@ucf.edu">Email ↗</a></div>
        <span><i aria-hidden="true" /> Open to internships</span>
      </div>
    </footer>
  );
}
