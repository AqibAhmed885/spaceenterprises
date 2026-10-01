export type ImageAsset = { src: string; alt: string; position?: string };

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle?: string;
  description: string;
  overview: string;
  icon: string;
  capabilities: string[];
  challenges: string[];
  industries: string[];
  image: ImageAsset;
};

export type Industry = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  requirements: string[];
  products: string[];
  services: string[];
  image: ImageAsset;
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
  industries: string[];
  image: ImageAsset;
};

export type Project = {
  slug: string;
  title: string;
  industry: string;
  location: string;
  year: string;
  client: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string[];
  products: string[];
  sourcingRegion: string;
  quality: string;
  logistics: string;
  outcome: string;
  image: ImageAsset;
};

export type Brand = { name: string; category: string };

export type CompanyProfile = {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
  metrics: { value: string; label: string; note: string }[];
};

export type RFQStatus =
  | 'NEW'
  | 'REVIEWING'
  | 'QUOTED'
  | 'WON'
  | 'LOST'
  | 'CLOSED';

export type RFQ = {
  referenceNumber: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  category?: string;
  product: string;
  brand?: string;
  partNumber?: string;
  quantity?: string;
  specifications?: string;
  deliveryCountry?: string;
  deliveryCity?: string;
  requiredDate?: string;
  message?: string;
  attachmentName?: string;
  status: RFQStatus;
  createdAt: string;
};

export type ContactInquiry = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};
