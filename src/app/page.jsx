import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col bg-black text-white">


      <Hero />

      {/* --- Summary Section --- */}
      <section className="w-full max-w-7xl py-12 px-12 mx-auto space-y-8">

        <div>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-lg text-gray-300">
            Learn about my journey as a front-end developer, my skills, and what drives my passion for creative web design and interactive experiences.
          </p>
          <Link href="/about" className="underline text-blue-400 hover:text-blue-300">Read more →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-lg text-gray-300">
            Explore my latest projects where I blend development and design — including interactive 3D sites, responsive web apps, and creative experiments.
          </p>
          <Link href="/projects" className="underline text-blue-400 hover:text-blue-300">View projects →</Link>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-lg text-gray-300">
            Interested in working together or have a cool idea? Reach out and let’s make something amazing.
          </p>
          <Link href="/contact" className="underline text-blue-400 hover:text-blue-300">Get in touch →</Link>
        </div>

      </section>

      <Footer />
    </main>
  );
}
