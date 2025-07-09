import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { StructuredData } from '@/components/seo/structured-data';
import { organizationStructuredData, websiteStructuredData } from '@/lib/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexeed-web.com'),
  title: {
    default: 'Nexeed Lab - 大阪のAI・Web開発プロフェッショナル | 株式会社ネクシードラボ公式サイト',
    template: '%s | Nexeed Lab'
  },
  description: 'Nexeed Lab（ネクシードラボ）は大阪を拠点とするAI開発・Webアプリケーション開発・システム構築の専門企業です。最新技術でお客様のビジネス課題を解決し、デジタル変革を支援します。無料相談受付中。',
  keywords: ['Nexeed Lab', 'ネクシードラボ', 'AI開発', 'Webアプリケーション開発', 'システム開発', 'Web制作', '大阪', 'デジタル変革', 'DX支援', 'プログラミング会社'],
  authors: [{ name: '大島直孝', url: 'https://www.nexeed-web.com' }],
  creator: '大島直孝',
  publisher: 'Nexeed Lab',
  category: 'technology',
  alternates: {
    canonical: 'https://www.nexeed-web.com',
  },
  openGraph: {
    title: 'Nexeed Lab - 大阪のAI・Web開発プロフェッショナル',
    description: 'Nexeed Lab（ネクシードラボ）は大阪を拠点とするAI開発・Webアプリケーション開発・システム構築の専門企業です。最新技術でお客様のビジネス課題を解決し、デジタル変革を支援します。',
    url: 'https://www.nexeed-web.com',
    siteName: 'Nexeed Lab',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexeed Lab - 大阪のAI・Web開発プロフェッショナル',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexeed Lab - 大阪のAI・Web開発プロフェッショナル',
    description: 'Nexeed Lab（ネクシードラボ）は大阪を拠点とするAI開発・Webアプリケーション開発・システム構築の専門企業です。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  other: {
    'google-site-verification': 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <StructuredData data={organizationStructuredData} />
        <StructuredData data={websiteStructuredData} />
      </head>
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