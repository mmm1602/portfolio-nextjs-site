'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from "framer-motion";

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
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">

      {/* 🔮 Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600 opacity-20 rounded-full top-0 left-0 blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full bottom-0 right-0 blur-2xl animate-spin-slow" />
        <div className="absolute w-96 h-96 bg-pink-500 opacity-20 rounded-full top-1/2 left-1/3 blur-2xl animate-bounce" />
      </div>

      {/* 💡 Foreground Content */}
      <div className="relative z-10 w-full h-64 md:h-96">
        <Canvas>
          <ambientLight />
          <directionalLight position={[2, 2, 5]} />
          <SpinningBox />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 z-10"
      >
        Miguel Angel Hurtado Gomez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl z-10"
      >
        Front-End Developer / Aerospace Engineering Student | React • TypeScript • UI/UX
      </motion.p>

      <div className="mt-8 space-x-4 z-10">
        <a href="/projects" className="px-6 py-2 bg-gray-700 rounded">View Projects</a>
      </div>
    </section>
  );
}
