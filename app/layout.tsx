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
  metadataBase: new URL('https://nexeedlab.com'),
  title: {
    default: 'Nexeed Lab | AIとWeb開発ソリューション | 大阪のプロフェッショナルサービス',
    template: '%s | Nexeed Lab'
  },
  description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナルサービス。大阪を拠点に、企業のデジタル化を支援します。',
  keywords: ['AI開発', 'Webアプリケーション', 'Webサイト制作', '業務システム', 'SEO対策', 'MEO対策', '大阪', 'プログラミング', 'システム開発', 'デジタル化'],
  authors: [{ name: '大島直孝', url: 'https://nexeedlab.com' }],
  creator: '大島直孝',
  publisher: 'Nexeed Lab',
  category: 'technology',
  openGraph: {
    title: 'Nexeed Lab | AIとWeb開発ソリューション',
    description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナルサービス',
    url: 'https://nexeedlab.com',
    siteName: 'Nexeed Lab',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexeed Lab - AIとWeb開発ソリューション',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexeed Lab | AIとWeb開発ソリューション',
    description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナルサービス',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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