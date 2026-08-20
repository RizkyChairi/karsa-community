import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Karsa Community',
  description: 'Karsa Community',
  keywords: [
    'Karsa Community',
    'komunitas',
    'komunitas pemuda',
    'komunitas generasi muda',
    'komunitas Indonesia',
    'kegiatan komunitas',
    'kegiatan pemuda',
    'kolaborasi',
    'volunteer',
  ],
  authors: [
    {
      name: 'Karsa Community',
    },
  ],
  creator: 'Karsa Community',
  publisher: 'Karsa Community',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
