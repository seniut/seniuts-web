import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0]
  const routes = [
    '',
    'architecture-audit',
    'cost-optimization',
    'services',
    'resources',
    'about',
    'contact',
  ]

  return routes.map((route) => ({
    url: route ? `${siteMetadata.siteUrl}/${route}` : siteMetadata.siteUrl,
    lastModified,
  }))
}
