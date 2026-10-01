import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '../src/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Space Enterprises | Procurement, Sourcing & Supply',
    template: '%s | Space Enterprises',
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Space Enterprises | Procurement, Sourcing & Supply',
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        {children}
      </body>
    </html>
  );
}
