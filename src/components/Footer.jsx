'use client';
export default function Footer() {
  return (
    <footer className="h-screen snap-start bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-start px-8 relative overflow-hidden backdrop-blur-md z-10">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-black/80 pointer-events-none" />
      {/* Large, off-center headline */}
      <h2 className="text-6xl md:text-8xl font-bold mb-4 md:ml-[1vw] leading-tight">
        Let’s build <br /> something amazing.
      </h2>

      {/* Subtext */}
      <p className="text-lg md:text-2xl max-w-xl translate-x-[5%] mb-8">
        Ready to collaborate? Contact me and let’s make your vision a reality.
      </p>

      {/* Background decorative element */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

      {/* Copyright */}
      <p className="absolute bottom-4 left-4 text-sm opacity-50">
        © 2025 Miguel Hurtado. All rights reserved.
      </p>

    </footer>
  );
}
