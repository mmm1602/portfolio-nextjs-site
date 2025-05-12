import '../styles/globals.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  title: 'Miguel Angel Hurtado Gomez | Front-End Developer',
  description: 'Portfolio of Miguel Hurtado - React, TypeScript, Creative UI, and Cross-Platform Projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
