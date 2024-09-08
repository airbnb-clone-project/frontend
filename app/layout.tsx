import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';

import Providers from './providers';
import NavBar from './_layout/Navbar';

const pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Pinterest clone',
  description: 'Pinterest clone with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
