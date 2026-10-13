import { Fredoka, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'beyond just a menu',
  description: 'An interactive mobile-first graphic design thesis project exploring food consumption, cultural commodification, and anti-Asian solidarity in Toronto.',
  openGraph: {
    title: 'beyond just a menu',
    description: 'An interactive mobile-first graphic design thesis project exploring food consumption, cultural commodification, and anti-Asian solidarity in Toronto.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'beyond just a menu',
    description: 'An interactive mobile-first graphic design thesis project exploring food consumption, cultural commodification, and anti-Asian solidarity in Toronto.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#0e0e0e] text-white selection:bg-[#E0564C] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
