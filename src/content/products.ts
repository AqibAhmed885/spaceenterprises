import type { ProductCategory } from '../types/domain';

export const productCategories: ProductCategory[] = [
  {
    slug: 'industrial-equipment',
    title: 'Industrial Equipment',
    description:
      'Source equipment for industrial, plant and operational environments.',
    examples: [
      'Plant equipment',
      'Process equipment',
      'Material handling equipment',
    ],
    industries: ['Oil & Gas', 'Manufacturing', 'Energy & Power'],
    image: {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
      alt: 'Industrial equipment in a production setting',
    },
  },
  {
    slug: 'electrical-equipment',
    title: 'Electrical Equipment',
    description:
      'Coordinate sourcing for electrical systems, projects and maintenance requirements.',
    examples: ['Switchgear', 'Cables and accessories', 'Control equipment'],
    industries: ['Energy & Power', 'Construction', 'Telecommunications'],
    image: {
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
      alt: 'Electrical infrastructure and power lines',
    },
  },
  {
    slug: 'mechanical-components',
    title: 'Mechanical Components',
    description:
      'Find components and replacement parts against technical and dimensional requirements.',
    examples: ['Valves and fittings', 'Bearings', 'Pumps and components'],
    industries: ['Oil & Gas', 'Manufacturing', 'Construction'],
    image: {
      src: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1400&q=85',
      alt: 'Mechanical workshop tooling and parts',
    },
  },
  {
    slug: 'it-networking',
    title: 'IT & Networking',
    description:
      'Source infrastructure, hardware and network equipment for operational environments.',
    examples: ['Servers and storage', 'Network switches', 'Structured cabling'],
    industries: [
      'Information Technology',
      'Telecommunications',
      'Government & Public Sector',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
      alt: 'Network servers in a data center',
    },
  },
  {
    slug: 'safety-ppe',
    title: 'Safety & PPE',
    description:
      'Coordinate reliable sourcing for personal protective and workplace safety requirements.',
    examples: ['Protective clothing', 'Safety footwear', 'Workplace signage'],
    industries: ['Construction', 'Manufacturing', 'Oil & Gas'],
    image: {
      src: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=85',
      alt: 'Safety equipment and protective gear',
    },
  },
  {
    slug: 'tools-machinery',
    title: 'Tools & Machinery',
    description:
      'Source tools and machinery for projects, workshops and operational teams.',
    examples: [
      'Power tools',
      'Workshop machinery',
      'Lifting and handling tools',
    ],
    industries: ['Construction', 'Manufacturing', 'Energy & Power'],
    image: {
      src: 'https://images.unsplash.com/photo-1581147036324-c1c7e54c8b7d?auto=format&fit=crop&w=1400&q=85',
      alt: 'Professional tools arranged in a workshop',
    },
  },
  {
    slug: 'general-supplies',
    title: 'General Supplies',
    description:
      'Cover recurring and project-based supply requirements with one coordination point.',
    examples: [
      'Office and facility supplies',
      'Packaging and consumables',
      'Operational essentials',
    ],
    industries: [
      'Government & Public Sector',
      'Manufacturing',
      'Information Technology',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
      alt: 'Organized supply cartons ready for dispatch',
    },
  },
];
