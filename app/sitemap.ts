import type { MetadataRoute } from 'next';

const ROUTES = ['', '/science', '/development', '/team', '/press', '/contact', '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://silphium.bio';
  return ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
