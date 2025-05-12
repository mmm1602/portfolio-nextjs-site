'use client';
import { motion } from "framer-motion";
import Footer from '@/components/Footer';

export default function AboutSection() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full bottom-20 right-32 blur-2xl animate-spin-slow" />
        <div className="absolute w-80 h-80 bg-pink-500 opacity-20 rounded-full top-1/2 left-1/3 blur-2xl animate-bounce" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-3xl"
        >
          I'm a front-end developer and aerospace engineering student passionate about building sleek UIs and interactive experiences. I love combining code and creativity to bring ideas to life.
        </motion.p>
      </div>

      <Footer />
    </section>
  );
}