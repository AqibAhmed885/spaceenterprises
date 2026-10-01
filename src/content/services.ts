import type { Service } from '../types/domain';

const industrialImage =
  'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1400&q=85';

export const services: Service[] = [
  {
    slug: 'strategic-sourcing',
    number: '01',
    title: 'Strategic Sourcing',
    description:
      'Identify suitable manufacturers and suppliers according to technical, commercial and delivery requirements.',
    overview:
      'We translate a requirement into a focused sourcing brief, then connect it with suppliers who can meet the right technical and commercial conditions.',
    icon: 'Compass',
    capabilities: [
      'Supplier discovery',
      'Technical requirement mapping',
      'Commercial comparison',
      'Sourcing region analysis',
    ],
    challenges: [
      'Fragmented supplier markets',
      'Unclear product specifications',
      'Tight delivery windows',
    ],
    industries: ['Oil & Gas', 'Manufacturing', 'Energy & Power'],
    image: {
      src: industrialImage,
      alt: 'Industrial facility equipment and piping',
    },
  },
  {
    slug: 'procurement-management',
    number: '02',
    title: 'Procurement Management',
    description:
      'Manage procurement from initial inquiry and quotation through purchasing and coordination.',
    overview:
      'A single coordination point for requirements, quotations, purchase decisions and supplier follow-through.',
    icon: 'ClipboardCheck',
    capabilities: [
      'Inquiry management',
      'Quotation coordination',
      'Purchase coordination',
      'Order tracking',
    ],
    challenges: [
      'Multiple stakeholders',
      'Inconsistent follow-up',
      'Time-sensitive purchasing',
    ],
    industries: [
      'Construction',
      'Government & Public Sector',
      'Telecommunications',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1586528116493-da8b9c4f6a53?auto=format&fit=crop&w=1400&q=85',
      alt: 'Warehouse aisle with organized inventory',
    },
  },
  {
    slug: 'vendor-management',
    number: '03',
    title: 'Vendor Management',
    description:
      'Supplier qualification, evaluation, communication and ongoing coordination.',
    overview:
      'We create clear supplier communication and keep procurement moving across the relationships that matter to your requirement.',
    icon: 'UsersRound',
    capabilities: [
      'Supplier qualification',
      'Vendor communication',
      'Documentation coordination',
      'Performance follow-up',
    ],
    challenges: [
      'Unverified supplier fit',
      'Slow communication',
      'Scattered documentation',
    ],
    industries: ['Manufacturing', 'Energy & Power', 'IT'],
    image: {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
      alt: 'Professionals discussing procurement plans',
    },
  },
  {
    slug: 'quality-assurance',
    number: '04',
    title: 'Quality Assurance',
    description:
      'Coordinate inspection and specification verification before final delivery.',
    overview:
      'Quality coordination keeps the agreed specification visible from quotation through dispatch and delivery.',
    icon: 'ShieldCheck',
    capabilities: [
      'Specification checks',
      'Inspection coordination',
      'Documentation review',
      'Pre-delivery verification',
    ],
    challenges: [
      'Specification drift',
      'Incomplete documentation',
      'Delivery surprises',
    ],
    industries: ['Oil & Gas', 'Construction', 'Energy & Power'],
    image: {
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
      alt: 'Engineer inspecting industrial equipment',
    },
  },
  {
    slug: 'logistics-delivery',
    number: '05',
    title: 'Logistics & Delivery',
    description:
      'Coordinate shipping, documentation and delivery to the required destination.',
    overview:
      'From packing requirements through shipping documents and delivery coordination, we maintain visibility beyond the purchase order.',
    icon: 'Truck',
    capabilities: [
      'Shipping coordination',
      'Delivery documentation',
      'Destination planning',
      'Milestone tracking',
    ],
    challenges: [
      'Cross-border complexity',
      'Documentation gaps',
      'Uncertain delivery status',
    ],
    industries: ['Construction', 'Manufacturing', 'Government & Public Sector'],
    image: {
      src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=85',
      alt: 'Cargo containers ready for shipment',
    },
  },
  {
    slug: 'international-procurement',
    number: '06',
    title: 'International Procurement',
    description:
      'Source specialized products and equipment through international manufacturers and suppliers.',
    overview:
      'When the right product is outside your immediate market, we coordinate the search, communication and delivery path.',
    icon: 'Globe2',
    capabilities: [
      'International supplier search',
      'Cross-border coordination',
      'Export documentation',
      'Multi-market sourcing',
    ],
    challenges: [
      'Limited local availability',
      'Different supplier regions',
      'Complex delivery routes',
    ],
    industries: ['Oil & Gas', 'Telecommunications', 'Information Technology'],
    image: {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
      alt: 'Cargo ship and global logistics containers',
    },
  },
];
