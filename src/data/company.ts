import type { Job, ServiceItem, TimelineItem } from '../types';

export const services: ServiceItem[] = [
  {
    title: 'Installation',
    icon: 'service',
    description: 'Planned installation for door hardware, entrances, locks, access readers, and integrated packages.',
  },
  {
    title: 'Maintenance',
    icon: 'maintenance',
    description: 'Preventive maintenance visits that keep access points aligned, calibrated, and compliant.',
  },
  {
    title: 'Annual service contracts',
    icon: 'clock',
    description: 'Structured coverage with response commitments, inspection schedules, and service reporting.',
  },
  {
    title: 'Emergency support',
    icon: 'emergency',
    description: 'Priority response for access failures, stuck doors, lockouts, and critical security incidents.',
  },
  {
    title: 'Spare parts',
    icon: 'parts',
    description: 'Replacement parts sourcing for closers, locks, cylinders, operators, credentials, and accessories.',
  },
  {
    title: 'Technical consultation',
    icon: 'consult',
    description: 'Site surveys, product selection, BOQ support, access plans, and lifecycle recommendations.',
  },
];

export const stats = [
  { label: 'Years of experience', value: '14+' },
  { label: 'Projects completed', value: '1,200+' },
  { label: 'Cities served', value: '28' },
  { label: 'Service engineers', value: '45+' },
];

export const timeline: TimelineItem[] = [
  {
    year: '2011',
    title: 'Field service roots',
    description: 'Started as a specialist team for door hardware installation and access repair support.',
  },
  {
    year: '2015',
    title: 'Access control expansion',
    description: 'Added electronic access, hotel locks, and structured maintenance contracts for commercial clients.',
  },
  {
    year: '2019',
    title: 'Multi-city delivery',
    description: 'Built a service partner network for faster project delivery across major urban centers.',
  },
  {
    year: '2024',
    title: 'Integrated security programs',
    description: 'Combined hardware, credentials, entrances, and lifecycle support into complete facility programs.',
  },
];

export const values = [
  {
    title: 'Reliability first',
    description: 'We design for daily use, emergency readiness, and long-term serviceability.',
  },
  {
    title: 'Clear accountability',
    description: 'Every project has defined ownership, documentation, and practical handover support.',
  },
  {
    title: 'Security with ease',
    description: 'Access should protect people and assets without slowing down the workday.',
  },
  {
    title: 'Local response',
    description: 'Our teams stay close to sites so maintenance and support are never abstract promises.',
  },
];

export const testimonials = [
  {
    quote:
      'CSS home tech services helped us standardize access hardware across three facilities without disrupting daily operations.',
    name: 'Operations Head',
    company: 'Regional Healthcare Group',
  },
  {
    quote:
      'Their service team understands both the physical door issues and the access control workflow behind them.',
    name: 'Facilities Manager',
    company: 'Commercial Office Campus',
  },
  {
    quote:
      'The annual service contract gave our hotel team a single escalation path for guest room locks and entrance hardware.',
    name: 'General Manager',
    company: 'Business Hotel',
  },
];

export const jobs: Job[] = [
  {
    title: 'Access Control Technician',
    location: 'Chennai / Field',
    type: 'Full time',
    summary: 'Install, configure, and troubleshoot readers, controllers, locks, and door monitoring devices.',
  },
  {
    title: 'Service Coordinator',
    location: 'Chennai',
    type: 'Full time',
    summary: 'Coordinate emergency tickets, planned maintenance schedules, parts movement, and client updates.',
  },
  {
    title: 'Project Sales Engineer',
    location: 'Bengaluru / Hybrid',
    type: 'Full time',
    summary: 'Develop access, door hardware, and service proposals for commercial and institutional projects.',
  },
];
