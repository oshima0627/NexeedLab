import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nexeedlab.com'),
  title: 'Nexeed Lab | AIとWeb開発ソリューション',
  description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナル',
  keywords: 'AI開発, Webアプリケーション, Webサイト制作, 業務システム, SEO対策, MEO対策',
  openGraph: {
    title: 'Nexeed Lab | AIとWeb開発ソリューション',
    description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナル',
    url: 'https://nexeedlab.com',
    siteName: 'Nexeed Lab',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}