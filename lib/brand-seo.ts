// ブランド強化のための特別な構造化データ
export const brandSEOData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nexeed Lab - 大阪のAI・Web開発プロフェッショナル | 公式サイト',
  description: 'Nexeed Lab（ネクシードラボ）公式サイト。大阪を拠点とするAI開発・Webアプリケーション開発・システム構築の専門企業です。',
  url: 'https://www.nexeed-web.com',
  mainEntity: {
    '@type': 'Organization',
    name: 'Nexeed Lab',
    alternateName: ['ネクシードラボ', '株式会社ネクシードラボ'],
    url: 'https://www.nexeed-web.com',
    sameAs: [
      'https://github.com/nexeedlab',
      'https://twitter.com/nexeedlab'
    ]
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Nexeed Lab',
        item: 'https://www.nexeed-web.com'
      }
    ]
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-section', '.about-section']
  },
  about: {
    '@type': 'Thing',
    name: 'AI開発・Web開発・システム開発',
    description: '最新技術を活用したビジネスソリューション'
  }
}

// ホームページ専用の拡張構造化データ
export const homePageSEOData = {
  '@context': 'https://schema.org',
  '@type': ['WebPage', 'CollectionPage'],
  name: 'Nexeed Lab（ネクシードラボ）| 大阪のAI・Web開発プロフェッショナル',
  headline: 'Nexeed Lab - AIとWebの力でビジネスを変革',
  description: 'Nexeed Lab（ネクシードラボ）は大阪を拠点とするAI開発・Webアプリケーション開発・システム構築の専門企業です。最新技術でお客様のビジネス課題を解決し、デジタル変革を支援します。',
  keywords: 'Nexeed Lab, ネクシードラボ, AI開発, Web開発, システム開発, 大阪, プログラミング会社',
  inLanguage: 'ja-JP',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Nexeed Lab',
    url: 'https://www.nexeed-web.com'
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.nexeed-web.com/og-image.jpg'
  },
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString(),
  publisher: {
    '@type': 'Organization',
    name: 'Nexeed Lab'
  }
}