import type { Project } from '../types/domain';

export const projects: Project[] = [
  {
    slug: 'industrial-equipment-procurement',
    title: 'Industrial Equipment Procurement',
    industry: 'Manufacturing',
    location: 'International sourcing route',
    year: '2026',
    client: 'Confidential Manufacturing Company',
    summary:
      'International sourcing and delivery coordination for specialized industrial equipment.',
    overview:
      'A procurement requirement moved from technical brief to coordinated delivery through a focused sourcing and documentation process.',
    challenge:
      'The client needed a specialized equipment package with clear technical alignment, commercial comparison and a dependable delivery path.',
    approach: [
      'Clarified the equipment requirements and delivery context.',
      'Identified suitable international supplier options.',
      'Coordinated quotation comparison and supplier communication.',
      'Tracked quality documentation and delivery milestones.',
    ],
    products: [
      'Specialized industrial equipment',
      'Supporting mechanical components',
      'Documentation package',
    ],
    sourcingRegion: 'International supplier network',
    quality:
      'Specification and documentation checks were coordinated before dispatch.',
    logistics:
      'Shipping documentation and destination delivery coordination were managed as part of the procurement workflow.',
    outcome:
      'A single procurement workflow gave the client clearer visibility from requirement through delivery.',
    image: {
      src: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1600&q=85',
      alt: 'Large industrial facility with steel equipment',
    },
  },
];
