import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tonyclyburn.com'),
  title: 'Tony Clyburn | One Voice. Big Energy. Real Impact.',
  description: 'Radio personality, voice actor, speaker, host, and community connector Tony Clyburn.',
  icons: { icon: '/images/tony-portrait.jpg' },
  openGraph: {
    title: 'Tony Clyburn | One Voice. Big Energy. Real Impact.',
    description: 'Radio personality, voice actor, speaker, host, and community connector Tony Clyburn.',
    url: '/',
    siteName: 'Tony Clyburn',
    images: [{ url: '/og.png', width: 1738, height: 905, alt: 'Tony Clyburn — One Voice. Big Energy. Real Impact.' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony Clyburn | One Voice. Big Energy. Real Impact.',
    description: 'Radio personality, voice actor, speaker, host, and community connector Tony Clyburn.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
