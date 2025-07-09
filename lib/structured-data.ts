import { Organization, WebSite, BreadcrumbList, Service, LocalBusiness } from 'schema-dts'

// 企業情報の構造化データ
export const organizationStructuredData: Organization = {
  '@type': 'Organization',
  name: 'Nexeed Lab',
  url: 'https://nexeedlab.com',
  logo: 'https://nexeedlab.com/og-image.jpg',
  description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナルサービス',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+81-80-6176-0627',
    contactType: 'customer service',
    email: 'oshima6.27@gmail.com',
    availableLanguage: ['ja', 'en']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: '門真市',
    addressRegion: '大阪府',
    addressCountry: 'JP'
  },
  founder: {
    '@type': 'Person',
    name: '大島直孝',
    jobTitle: 'CEO & Lead Developer'
  },
  sameAs: [
    'https://github.com/nexeedlab',
    'https://twitter.com/nexeedlab'
  ]
}

// ウェブサイトの構造化データ
export const websiteStructuredData: WebSite = {
  '@type': 'WebSite',
  name: 'Nexeed Lab',
  url: 'https://nexeedlab.com',
  description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナルサービス',
  publisher: organizationStructuredData,
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://nexeedlab.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

// サービス情報の構造化データ
export const servicesStructuredData: Service[] = [
  {
    '@type': 'Service',
    name: 'AI開発サービス',
    description: '機械学習、自然言語処理、画像認識などのAI技術を活用したシステム開発',
    provider: organizationStructuredData,
    serviceType: 'AI Development',
    areaServed: '日本',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://nexeedlab.com/services',
      servicePhone: '+81-80-6176-0627'
    }
  },
  {
    '@type': 'Service',
    name: 'Webアプリケーション開発',
    description: 'Next.js、React、TypeScriptを使用したモダンなWebアプリケーション開発',
    provider: organizationStructuredData,
    serviceType: 'Web Application Development',
    areaServed: '日本',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://nexeedlab.com/services',
      servicePhone: '+81-80-6176-0627'
    }
  },
  {
    '@type': 'Service',
    name: 'Webサイト制作',
    description: 'SEO対策、レスポンシブデザインを含む企業サイト制作',
    provider: organizationStructuredData,
    serviceType: 'Website Development',
    areaServed: '日本',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://nexeedlab.com/services',
      servicePhone: '+81-80-6176-0627'
    }
  },
  {
    '@type': 'Service',
    name: '業務システム開発',
    description: '企業の業務効率化を支援するカスタムシステム開発',
    provider: organizationStructuredData,
    serviceType: 'Business System Development',
    areaServed: '日本',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://nexeedlab.com/services',
      servicePhone: '+81-80-6176-0627'
    }
  }
]

// 地域ビジネスの構造化データ
export const localBusinessStructuredData: LocalBusiness = {
  '@type': 'LocalBusiness',
  name: 'Nexeed Lab',
  description: 'AIを活用したWebアプリケーション開発、Webサイト制作、業務システム開発のプロフェッショナルサービス',
  url: 'https://nexeedlab.com',
  telephone: '+81-80-6176-0627',
  email: 'oshima6.27@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '門真市',
    addressRegion: '大阪府',
    addressCountry: 'JP'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.7388,
    longitude: 135.5803
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: '大阪府'
  }
}

// パンくずリストの構造化データを生成
export function createBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  }
}

// JSON-LD形式で出力
export function createJsonLd(data: any) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      ...data
    })
  }
}