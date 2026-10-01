import type { MetadataRoute } from 'next';
import { services } from '../src/content/services';
import { industries } from '../src/content/industries';
import { productCategories } from '../src/content/products';
import { projects } from '../src/content/projects';
import { siteConfig } from '../src/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/about',
    '/services',
    '/industries',
    '/products',
    '/projects',
    '/brands',
    '/rfq',
    '/contact',
  ];
  const dynamic = [
    ...services.map((x) => `/services/${x.slug}`),
    ...industries.map((x) => `/industries/${x.slug}`),
    ...productCategories.map((x) => `/products/${x.slug}`),
    ...projects.map((x) => `/projects/${x.slug}`),
  ];
  return [...staticPaths, ...dynamic].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
