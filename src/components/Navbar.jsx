'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 bg-gradient-to-b from-black/100 to-black/50 backdrop-blur-sm shadow-md border-b border-white/10 font-sans">


      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-tight">
          Miguel Angel<br /> Hurtado Gomez
        </div>

        <div className="hidden md:flex space-x-6 text-xl text-white">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          {/*<a href="/contact" className="hover:text-blue-400 transition">Contact</a>*/}
        </div>

        {/* Mobile icon (optional future feature) */}
        <div className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
