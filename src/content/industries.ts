import type { Industry } from '../types/domain';

export const industries: Industry[] = [
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    eyebrow: 'INDUSTRY',
    description:
      'Procurement coordination for equipment, components and supplies where specification, documentation and delivery discipline matter.',
    requirements: [
      'Industrial equipment and components',
      'Maintenance and operational supplies',
      'Specification-led sourcing',
    ],
    products: ['Industrial Equipment', 'Mechanical Components', 'Safety & PPE'],
    services: [
      'Strategic Sourcing',
      'Quality Assurance',
      'International Procurement',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=85',
      alt: 'Industrial refinery infrastructure',
    },
  },
  {
    slug: 'construction',
    title: 'Construction',
    eyebrow: 'INDUSTRY',
    description:
      'Keep project procurement moving with coordinated sourcing for materials, equipment and site requirements.',
    requirements: [
      'Site equipment and tools',
      'Mechanical and electrical components',
      'Recurring project supplies',
    ],
    products: ['Tools & Machinery', 'Electrical Equipment', 'General Supplies'],
    services: [
      'Procurement Management',
      'Vendor Management',
      'Logistics & Delivery',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
      alt: 'Construction site with cranes and structures',
    },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    eyebrow: 'INDUSTRY',
    description:
      'Support production environments with dependable access to components, equipment and recurring supply requirements.',
    requirements: [
      'Production equipment',
      'Replacement components',
      'Safety and operational supplies',
    ],
    products: ['Mechanical Components', 'Industrial Equipment', 'Safety & PPE'],
    services: ['Strategic Sourcing', 'Vendor Management', 'Quality Assurance'],
    image: {
      src: 'https://images.unsplash.com/photo-1565514020179-026b92b2d0b0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Manufacturing line with machinery',
    },
  },
  {
    slug: 'energy-power',
    title: 'Energy & Power',
    eyebrow: 'INDUSTRY',
    description:
      'Coordinate sourcing for projects and operations that depend on fit-for-purpose products and clear delivery milestones.',
    requirements: [
      'Electrical equipment',
      'Plant components',
      'Project-specific procurement',
    ],
    products: [
      'Electrical Equipment',
      'Industrial Equipment',
      'Tools & Machinery',
    ],
    services: [
      'International Procurement',
      'Quality Assurance',
      'Logistics & Delivery',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
      alt: 'Power transmission lines at sunset',
    },
  },
  {
    slug: 'telecommunications',
    title: 'Telecommunications',
    eyebrow: 'INDUSTRY',
    description:
      'Source network equipment and infrastructure supplies with clear technical and commercial coordination.',
    requirements: [
      'Network equipment',
      'Infrastructure components',
      'Deployment and maintenance supplies',
    ],
    products: ['IT & Networking', 'Electrical Equipment', 'General Supplies'],
    services: [
      'International Procurement',
      'Procurement Management',
      'Vendor Management',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      alt: 'Data center network racks',
    },
  },
  {
    slug: 'information-technology',
    title: 'Information Technology',
    eyebrow: 'INDUSTRY',
    description:
      'Bring together hardware, networking and supporting supplies through a procurement workflow built around your requirements.',
    requirements: [
      'IT hardware and accessories',
      'Networking equipment',
      'Deployment support supplies',
    ],
    products: ['IT & Networking', 'General Supplies', 'Safety & PPE'],
    services: [
      'Strategic Sourcing',
      'Procurement Management',
      'International Procurement',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      alt: 'Close-up of a technology circuit board',
    },
  },
  {
    slug: 'government-public-sector',
    title: 'Government & Public Sector',
    eyebrow: 'INDUSTRY',
    description:
      'Support institutional procurement with structured communication, documentation and dependable sourcing coordination.',
    requirements: [
      'General procurement requirements',
      'Equipment and materials',
      'Specification-led supply',
    ],
    products: ['General Supplies', 'Industrial Equipment', 'IT & Networking'],
    services: [
      'Procurement Management',
      'Vendor Management',
      'Logistics & Delivery',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85',
      alt: 'Modern civic building exterior',
    },
  },
];
