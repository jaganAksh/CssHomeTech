import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'airports',
    title: 'Airports',
    icon: 'airport',
    description:
      'High-traffic terminals need secure access for passengers, staff, service corridors, and restricted zones.',
    needs: ['Controlled staff movement', 'Reliable passenger flow', 'Restricted-area door monitoring'],
    solutions: ['Automatic entrances', 'Electronic access control', 'Panic and exit hardware'],
  },
  {
    id: 'data-centers',
    title: 'Data Centers',
    icon: 'data',
    description:
      'Critical infrastructure needs layered physical security, traceable entry, and dependable hardware uptime.',
    needs: ['Multi-factor entry points', 'Audit trails', '24/7 service response'],
    solutions: ['Access readers', 'Mechanical key hierarchy', 'Annual service contracts'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'healthcare',
    description:
      'Hospitals and clinics balance patient access, clinical safety, infection control, and emergency egress.',
    needs: ['Hygienic flow', 'Emergency exits', 'Restricted clinical areas'],
    solutions: ['Touch-free operators', 'Fire-rated hardware', 'Access permissions'],
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: 'hotel',
    description:
      'Hotels need reliable guest access, staff zoning, service support, and smooth back-of-house operations.',
    needs: ['Guest room access', 'Staff zone control', 'Fast lock support'],
    solutions: ['Hotel locks', 'Mobile credentials', 'Spare parts and maintenance'],
  },
  {
    id: 'offices',
    title: 'Offices',
    icon: 'building',
    description:
      'Workplaces need secure entry, visitor access, meeting room flexibility, and hardware that suits interiors.',
    needs: ['Employee access', 'Visitor management', 'Flexible collaboration areas'],
    solutions: ['Electronic access control', 'Glass systems', 'Movable walls'],
  },
  {
    id: 'residential-buildings',
    title: 'Residential Buildings',
    icon: 'home',
    description:
      'Apartment and villa communities need convenient resident access with dependable doors and safer common areas.',
    needs: ['Resident access', 'Common-area security', 'Service gate reliability'],
    solutions: ['Entrance systems', 'Key systems', 'Door hardware'],
  },
  {
    id: 'rail-transport',
    title: 'Rail & Transport',
    icon: 'transport',
    description:
      'Stations and depots need robust hardware for public flow, back-office security, and emergency readiness.',
    needs: ['Public movement', 'Staff-only access', 'Durable exits'],
    solutions: ['Automatic doors', 'Exit devices', 'Maintenance programs'],
  },
  {
    id: 'utilities',
    title: 'Utilities',
    icon: 'factory',
    description:
      'Power, water, telecom, and industrial sites need controlled access to plants, substations, and remote assets.',
    needs: ['Remote site control', 'Key accountability', 'Resilient hardware'],
    solutions: ['Mechanical key systems', 'Safe locks', 'Emergency support'],
  },
];
