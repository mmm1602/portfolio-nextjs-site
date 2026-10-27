'use client';

import { Children, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ThemeToggle from '@/components/ThemeToggle';

const chapters = [
  { id: 'hero', label: 'Introduction' },
  { id: 'about', label: 'Mindset' },
  { id: 'projects', label: 'Selected work' },
  { id: 'skills', label: 'Capabilities' },
  { id: 'experience', label: 'Trajectory' },
  { id: 'contact', label: 'Next chapter' },
];
const IDLE_DELAY = 1800;
const OVERVIEW_SCALE = 0.58;

export default function FlightLog({ children }) {
  const rootRef = useRef(null);
  const controls = useRef({});
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState('wheel');
  const [autoOpen, setAutoOpen] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    const wheel = root.querySelector('.flight-wheel');
    const viewport = root.querySelector('.flight-viewport');
    const faces = [...root.querySelectorAll('.flight-face')];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const model = { position: 0, zoom: OVERVIEW_SCALE };
    let target = 0;
    let current = 0;
    let expanded = false;
    let reduced = preference.matches;
    let automatic = true;
    let radius = 600;
    let idleTimer;
    let snapTimer;
    let zoomTween;
    let turnTween;
    let touch = null;
    let disposed = false;
    const clamp = gsap.utils.clamp(0, chapters.length - 1);

    const cancelIdle = () => { clearTimeout(idleTimer); clearTimeout(snapTimer); };
    const render = () => {
      wheel.style.transform = reduced
        ? `translateZ(${-radius}px) rotateX(${Math.round(model.position) * 60}deg)`
        : `translateZ(${-radius * model.zoom}px) rotateX(${model.position * 60}deg) scale3d(${model.zoom}, ${model.zoom}, ${model.zoom})`;
      const nearest = clamp(Math.round(model.position));
      if (nearest !== current) { current = nearest; setActive(current); }
    };
    // Retarget one running tween instead of allocating a new tween per input event.
    const follow = gsap.quickTo(model, 'position', { duration: 0.18, ease: 'power2.out', onUpdate: render });
    const setExpanded = (value) => {
      expanded = value;
      setMode(value ? 'expanded' : 'wheel');
      root.dataset.mode = value ? 'expanded' : 'wheel';
    };
    const scheduleOpen = () => {
      clearTimeout(idleTimer);
      if (!automatic || reduced) return;
      idleTimer = setTimeout(() => {
        if (!document.hidden && !document.querySelector('dialog[open]')) open();
      }, IDLE_DELAY);
    };
    const updateHash = (index) => {
      const hash = `#${chapters[index].id}`;
      if (location.hash !== hash) history.replaceState(null, '', hash);
    };
    const open = (focus = false) => {
      cancelIdle();
      turnTween?.kill();
      follow.tween.pause();
      zoomTween?.kill();
      target = clamp(Math.round(target));
      current = target;
      setActive(current);
      updateHash(current);
      setExpanded(true);
      turnTween = gsap.to(model, { position: target, duration: reduced ? 0 : 0.28, ease: 'power3.out', onUpdate: render });
      zoomTween = gsap.to(model, {
        zoom: 1, duration: reduced ? 0 : 0.65, ease: 'power3.inOut', onUpdate: render,
        onComplete: () => {
          if (disposed || !expanded) return;
          window.dispatchEvent(new CustomEvent('flight:expand', { detail: chapters[current].id }));
          if (focus) faces[current].querySelector('.flight-document').focus({ preventScroll: true });
        },
      });
    };
    const close = () => {
      cancelIdle();
      zoomTween?.kill();
      setExpanded(false);
      // A focused link must not remain in a chapter that is about to be inert.
      if (faces.some((face) => face.contains(document.activeElement))) root.querySelector('.flight-enter').focus({ preventScroll: true });
      zoomTween = gsap.to(model, { zoom: OVERVIEW_SCALE, duration: reduced ? 0 : 0.42, ease: 'power2.out', onUpdate: render });
    };
    const snap = (enter = false) => {
      follow.tween.pause();
      turnTween?.kill();
      target = clamp(Math.round(target));
      turnTween = gsap.to(model, {
        position: target, duration: reduced ? 0 : 0.36, ease: 'power2.out', onUpdate: render,
        onComplete: () => { updateHash(target); if (enter) open(true); else scheduleOpen(); },
      });
    };
    const navigate = (index, enter = false) => {
      cancelIdle();
      close();
      target = clamp(index);
      snap(enter || reduced);
    };
    const canScrollContent = (delta) => {
      const content = faces[current].querySelector('.flight-document');
      return expanded && content.scrollHeight > content.clientHeight + 2 &&
        (delta > 0 ? content.scrollTop + content.clientHeight < content.scrollHeight - 2 : content.scrollTop > 2);
    };
    const rotate = (delta) => {
      cancelIdle();
      if (expanded) close();
      target = clamp(target + delta / 560);
      turnTween?.kill();
      if (reduced) { model.position = target; render(); }
      else follow(target, model.position);
      snapTimer = setTimeout(() => snap(reduced), 240);
    };
    const wheelInput = (event) => {
      if (event.ctrlKey || document.querySelector('dialog[open]')) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientHeight : 1);
      if (Math.abs(delta) < 1) return;
      if (event.target.closest('.flight-document') && canScrollContent(delta)) return;
      event.preventDefault();
      rotate(delta);
    };
    const keyInput = (event) => {
      if (document.querySelector('dialog[open]') || event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (event.key === 'Escape') { event.preventDefault(); close(); return; }
      const directions = { ArrowDown: 1, ArrowRight: 1, PageDown: 1, ArrowUp: -1, ArrowLeft: -1, PageUp: -1 };
      if (event.key in directions) { event.preventDefault(); navigate(Math.round(target) + directions[event.key]); }
      else if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); navigate(event.key === 'Home' ? 0 : 5); }
      else if ((event.key === 'Enter' || event.key === ' ') && event.target === root) { event.preventDefault(); open(true); }
    };
    const clickInput = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const index = chapters.findIndex((chapter) => `#${chapter.id}` === anchor.getAttribute('href'));
      if (index < 0) return;
      event.preventDefault();
      navigate(index, true);
    };
    const touchStart = (event) => {
      if (event.touches.length !== 1) { touch = null; return; }
      cancelIdle();
      touch = { x: event.touches[0].clientX, y: event.touches[0].clientY, moved: false };
    };
    const touchMove = (event) => {
      if (!touch || event.touches.length !== 1 || document.querySelector('dialog[open]')) return;
      const y = event.touches[0].clientY;
      const delta = touch.y - y;
      const dx = Math.abs(touch.x - event.touches[0].clientX);
      if (dx > Math.abs(delta) && !touch.moved) return;
      if (Math.abs(delta) < 3 || canScrollContent(delta)) { touch.y = y; return; }
      event.preventDefault();
      touch.moved = true;
      touch.y = y;
      rotate(delta * 2);
    };
    const touchEnd = () => { if (touch?.moved) snap(); else if (!expanded) scheduleOpen(); touch = null; };
    const hashInput = () => {
      const index = chapters.findIndex((chapter) => `#${chapter.id}` === location.hash);
      if (index >= 0) navigate(index, true);
    };
    const layout = () => {
      radius = viewport.clientHeight * 0.94;
      faces.forEach((face, index) => { face.style.transform = `rotateX(${-index * 60}deg) translateZ(${radius}px)`; });
      render();
    };
    const preferenceChange = () => {
      reduced = preference.matches;
      cancelIdle();
      if (reduced) open(); else render();
    };
    controls.current = {
      navigate, open, close,
      toggleAuto: () => { automatic = !automatic; setAutoOpen(automatic); cancelIdle(); if (automatic && !expanded) scheduleOpen(); },
    };
    const observer = new ResizeObserver(layout);
    observer.observe(viewport);
    root.addEventListener('wheel', wheelInput, { passive: false });
    root.addEventListener('keydown', keyInput);
    root.addEventListener('click', clickInput);
    viewport.addEventListener('touchstart', touchStart, { passive: true });
    viewport.addEventListener('touchmove', touchMove, { passive: false });
    viewport.addEventListener('touchend', touchEnd);
    viewport.addEventListener('touchcancel', touchEnd);
    window.addEventListener('hashchange', hashInput);
    preference.addEventListener('change', preferenceChange);
    const initial = chapters.findIndex((chapter) => `#${chapter.id}` === location.hash);
    target = initial < 0 ? 0 : initial;
    model.position = target;
    current = target;
    setActive(current);
    layout();
    if (initial >= 0 || reduced) open(); else scheduleOpen();

    return () => {
      disposed = true;
      cancelIdle();
      turnTween?.kill(); zoomTween?.kill();
      follow.tween.kill();
      observer.disconnect();
      root.removeEventListener('wheel', wheelInput);
      root.removeEventListener('keydown', keyInput);
      root.removeEventListener('click', clickInput);
      viewport.removeEventListener('touchstart', touchStart);
      viewport.removeEventListener('touchmove', touchMove);
      viewport.removeEventListener('touchend', touchEnd);
      viewport.removeEventListener('touchcancel', touchEnd);
      window.removeEventListener('hashchange', hashInput);
      preference.removeEventListener('change', preferenceChange);
      controls.current = {};
    };
  }, []);

  return (
    <div ref={rootRef} className="flight-log" data-mode={mode} tabIndex={-1} aria-label="Interactive portfolio flight log">
      <aside className="flight-sidebar">
        <a href="#hero" className="flight-brand" aria-label="Miguel Hurtado — Introduction">MH<span>.</span></a>
        <nav aria-label="Portfolio chapters">
          {chapters.map((chapter, index) => (
            <button key={chapter.id} type="button" aria-label={`0${index + 1} ${chapter.label}`} aria-current={active === index ? 'location' : undefined} onClick={() => controls.current.navigate?.(index)}>
              <span className="flight-nav-number">0{index + 1}</span><span>{chapter.label}</span><i aria-hidden="true" />
            </button>
          ))}
        </nav>
        <div className="flight-sidebar-bottom"><ThemeToggle /></div>
      </aside>
      <div className="flight-workspace">
        <div className="flight-viewport">
          <div className="flight-wheel">
            {Children.toArray(children).map((child, index) => (
              <div key={chapters[index].id} className="flight-face" data-active={active === index} aria-hidden={active !== index}>
                <div className="flight-document" inert={mode !== 'expanded' || active !== index} tabIndex={-1} aria-label={`${chapters[index].label} chapter`}>{child}</div>
                <button className="flight-card-open" type="button" tabIndex={active === index && mode === 'wheel' ? 0 : -1} aria-label={`Open ${chapters[index].label} chapter`} onClick={() => { if (active === index) controls.current.open?.(true); else controls.current.navigate?.(index, true); }} />
              </div>
            ))}
          </div>
        </div>
        <footer className="flight-toolbar">
          <div className="flight-actions">
            <button type="button" className="flight-auto" aria-label="Automatically open chapters after pausing" aria-pressed={autoOpen} onClick={() => controls.current.toggleAuto?.()} title={autoOpen ? 'Pause automatic opening' : 'Resume automatic opening'}><span aria-hidden="true">{autoOpen ? 'Ⅱ' : '▷'}</span></button>
            <button type="button" className="flight-enter" onClick={() => mode === 'wheel' ? controls.current.open?.(true) : controls.current.close?.()}>{mode === 'wheel' ? 'Open ↗' : 'Index ↙'}</button>
          </div>
        </footer>
      </div>
      <span className="sr-only" role="status">Chapter {active + 1} of 6: {chapters[active].label}. {mode === 'wheel' ? 'Gallery view.' : 'Expanded view.'}</span>
    </div>
  );
}
