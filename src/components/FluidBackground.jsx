'use client';
import { useEffect, useRef } from 'react';

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    import('webgl-fluid').then(({ default: createFluid }) => {
      createFluid(canvasRef.current, {
        TRIGGER: 'auto',                  // react to mouse
        IMMEDIATE: true,                  // start immediately
        SIM_RESOLUTION: 256,
        DYE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.01,       // slower fade
        VELOCITY_DISSIPATION: 0,
        PRESSURE: 0.1,
        PRESSURE_ITERATIONS: 25,
        CURL: 0,                         // less turbulence
        SPLAT_RADIUS: 0.5,              // bigger splashes
        SHADING: true,
        COLOR_PALETTE: [
          '#7c3aed', // violet-600
          '#3b82f6', // blue-500
          '#9333ea', // purple-600
          '#0ea5e9', // sky-500
        ],
        BACK_COLOR: 'black',
        TRANSPARENT: false,
        HOVER: true,
      });
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        opacity: 0.3, // subtle background feel
        mixBlendMode: 'normal', // adds glow-like overlay
      }}
    />
  );
}
