import { createJsonLd } from '@/lib/structured-data'

interface StructuredDataProps {
  data: any
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createJsonLd(data)}
    />
  )
}

interface BreadcrumbsProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbsStructuredData({ items }: BreadcrumbsProps) {
  const breadcrumbData = {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return <StructuredData data={breadcrumbData} />
}