import type { Metadata } from 'next';

// Base metadata shared across pages
const baseMetadata = {
  title: {
    default: 'Nexeed Lab | AI & Web Development Solutions',
    template: '%s | Nexeed Lab',
  },
  description: 'Professional web application development, AI solutions, and digital services for businesses looking to innovate and grow online.',
  keywords: ['AI development', 'web application', 'website design', 'business systems', 'SEO', 'MEO'],
  authors: [{ name: 'Nexeed Lab' }],
  creator: 'Nexeed Lab',
  publisher: 'Nexeed Lab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexeedlab.com',
    siteName: 'Nexeed Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexeed Lab - AI & Web Development Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@nexeedlab',
  },
};

// Helper to extend base metadata with page-specific metadata
export function createMetadata(
  pageMetadata: Partial<Metadata> = {}
): Metadata {
  return {
    ...baseMetadata,
    ...pageMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      ...pageMetadata.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...pageMetadata.twitter,
    },
  };
}