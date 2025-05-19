'use client';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FluidBackground = dynamic(() => import('./FluidBackground'), {
  ssr: false,
});

function SpinningBox() {
  return (
    <mesh rotation={[45, 45, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start md:justify-center items-center bg-black text-white overflow-hidden px-4 sm:px-6 md:px-10 pt-24 md:pt-12 pb-24">

      {/* 🌊 Fluid Simulation */}
      <div className="absolute inset-0 z-0">
        <FluidBackground />
      </div>

      {/* 💠 3D Canvas */}
      <div className="relative z-10 w-full h-56 sm:h-72 md:h-96 max-w-5xl">
        <Canvas>
          <ambientLight />
          <directionalLight position={[2, 2, 5]} />
          <SpinningBox />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* 📣 Title and Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-8 text-center z-10"
      >
        Miguel Angel Hurtado Gomez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-base sm:text-lg md:text-xl mt-4 text-center px-2 z-10"
      >
        Front-End Developer / Aerospace Engineering Student | React • TypeScript • UI/UX
      </motion.p>

      {/* 📎 CTA */}
      <div className="mt-8 z-10">
        <a href="/projects" className="px-6 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
          View Projects
        </a>
      </div>
    </section>
  );
}
