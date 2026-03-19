// /src/app/layout.jsx
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata = {
  title: 'Miguel Angel Hurtado Gomez - Aerospace Engineering Portfolio',
  description: 'An engineering portfolio showcasing projects in aerospace, robotics, and software.',
};

/**
 * The root layout for the application.
 * It sets up the global font, theme provider, and page structure.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-light-background dark:bg-[#0d1117] text-light-text dark:text-dark-text selection:bg-light-accent/30 dark:selection:bg-dark-accent/30">
        <ThemeProvider attribute="class">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

