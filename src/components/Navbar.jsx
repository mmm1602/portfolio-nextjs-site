'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-gradient-to-b from-black/100 to-black/50 backdrop-blur-sm shadow-md border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-tight">
          Miguel Angel<br /> Hurtado Gomez
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-xl text-white">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (only visible when open) */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 px-6 text-white text-lg">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
        </div>
      )}
    </nav>
  );
}
