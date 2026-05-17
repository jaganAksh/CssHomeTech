import type { Product } from '../types';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}placeholder/${fileName}`;

export const productFilters = ['All', 'Openings', 'Electronic Security', 'Hospitality', 'Specialty'];

export const products: Product[] = [
  {
    id: 'door-hardware',
    title: 'Door Hardware',
    group: 'Openings',
    description:
      'Durable door closers, hinges, panic hardware, exit devices, and compliant accessories for high-use buildings.',
    features: ['Closers and floor springs', 'Exit devices', 'Fire-rated hardware'],
    icon: 'hardware',
    image: assetPath('door-hardware.svg'),
  },
  {
    id: 'automatic-entrance-systems',
    title: 'Automatic Entrance Systems',
    group: 'Openings',
    description:
      'Sliding, swing, and sensor-controlled entrance packages that improve people flow, safety, and accessibility.',
    features: ['Sliding entrances', 'Swing operators', 'Sensor activation'],
    icon: 'door',
    image: assetPath('automatic-entrance.svg'),
  },
  {
    id: 'interior-glass-systems',
    title: 'Interior Glass Systems',
    group: 'Openings',
    description:
      'Glass partitions, patch fittings, and door assemblies for open interiors that still need secure access points.',
    features: ['Patch fittings', 'Glass door hardware', 'Partition access points'],
    icon: 'glass',
    image: assetPath('interior-glass.svg'),
  },
  {
    id: 'mechanical-key-systems',
    title: 'Mechanical Key Systems',
    group: 'Electronic Security',
    description:
      'Master key planning, cylinders, restricted keyways, and audit-friendly key control for multi-door facilities.',
    features: ['Master key hierarchy', 'Restricted cylinders', 'Key issue control'],
    icon: 'key',
    image: assetPath('key-systems.svg'),
  },
  {
    id: 'electronic-access-control',
    title: 'Electronic Access Control',
    group: 'Electronic Security',
    description:
      'Readers, controllers, credentials, mobile access, and door monitoring built around modern facility workflows.',
    features: ['RFID and mobile access', 'Door monitoring', 'Role-based permissions'],
    icon: 'access',
    image: assetPath('electronic-access.svg'),
  },
  {
    id: 'hotel-lodging-lock-systems',
    title: 'Hotel/Lodging Lock Systems',
    group: 'Hospitality',
    description:
      'Guest room lock systems, staff credentials, and back-office access tools for hotels and serviced apartments.',
    features: ['Guest room locks', 'Staff access levels', 'Property management fit'],
    icon: 'hotel',
    image: assetPath('hotel-locks.svg'),
  },
  {
    id: 'safe-locks',
    title: 'Safe Locks',
    group: 'Specialty',
    description:
      'Electronic and mechanical safe lock solutions for retail cash rooms, vaults, pharmacies, and controlled storage.',
    features: ['Electronic safe locks', 'Dual-control options', 'Audit access modes'],
    icon: 'safe',
    image: assetPath('safe-locks.svg'),
  },
  {
    id: 'movable-walls',
    title: 'Movable Walls',
    group: 'Specialty',
    description:
      'Flexible partition systems for meeting suites, banquet halls, training rooms, and multi-use commercial spaces.',
    features: ['Acoustic partitions', 'Track systems', 'Flexible room planning'],
    icon: 'wall',
    image: assetPath('movable-walls.svg'),
  },
];
