import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tonyclyburn.com'),
  title: 'Tony Clyburn | Crisp. Clear. Midwestern Resonance.',
  description: 'A voice that cares as much as you. Tony Clyburn partners with organizations that do good and strive to be better.',
  icons: { icon: '/images/tony-client-portrait.jpg' },
  openGraph: {
    title: 'Tony Clyburn | Crisp. Clear. Midwestern Resonance.',
    description: 'A voice that cares as much as you.',
    url: '/',
    siteName: 'Tony Clyburn',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Crisp. Clear. Midwestern Resonance. A voice that cares as much as you.' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony Clyburn | Crisp. Clear. Midwestern Resonance.',
    description: 'A voice that cares as much as you.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
