'use client';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden text-white flex items-center justify-center px-6 py-20">
      
      {/* 🔮 Animated Background Shapes - Outside the animation scope */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full top-10 left-0 blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full bottom-10 right-0 blur-2xl animate-spin-slow" />
      </div>

      {/* 🧾 Animated Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl backdrop-blur-sm bg-white/5 rounded-xl shadow-lg p-8 border border-white/10 relative z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
        <form className="space-y-5">
          <input
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>
    </div>
  );
}
