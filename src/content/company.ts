import type { CompanyProfile } from '../types/domain';

export const company: CompanyProfile = {
  name: 'Space Enterprises',
  tagline: 'Procurement solutions built around your business.',
  description:
    'Space Enterprises helps organizations source, procure and deliver equipment, materials and supplies through reliable supplier networks and efficient procurement processes.',
  email: 'procurement@spaceenterprises.com',
  phone: '+00 000 000 0000',
  whatsapp: '+00 000 000 0000',
  address: 'Office details available on request',
  hours: 'Sunday–Thursday · 09:00–18:00',
  metrics: [
    { value: '10+', label: 'Years experience', note: 'Indicative placeholder' },
    { value: '25+', label: 'Markets served', note: 'Indicative placeholder' },
    {
      value: '100+',
      label: 'Supplier relationships',
      note: 'Indicative placeholder',
    },
    {
      value: '500+',
      label: 'Procurement orders',
      note: 'Indicative placeholder',
    },
  ],
};

export const processSteps = [
  [
    '01',
    'Submit requirement',
    'Share the specifications, quantity and delivery context.',
  ],
  [
    '02',
    'Source suppliers',
    'We identify suitable manufacturers and supply options.',
  ],
  [
    '03',
    'Evaluate quotation',
    'Compare commercial and technical fit with clarity.',
  ],
  [
    '04',
    'Coordinate procurement',
    'We manage purchasing and supplier communication.',
  ],
  [
    '05',
    'Verify quality',
    'Coordinate checks against the agreed requirements.',
  ],
  [
    '06',
    'Deliver',
    'Bring the order through documentation, logistics and delivery.',
  ],
] as const;
