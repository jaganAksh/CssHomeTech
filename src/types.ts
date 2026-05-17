export type Page = 'home' | 'products' | 'industries' | 'services' | 'about' | 'careers' | 'contact';

export type IconName =
  | 'access'
  | 'airport'
  | 'building'
  | 'career'
  | 'check'
  | 'clock'
  | 'consult'
  | 'data'
  | 'door'
  | 'emergency'
  | 'factory'
  | 'glass'
  | 'hardware'
  | 'healthcare'
  | 'home'
  | 'hotel'
  | 'key'
  | 'maintenance'
  | 'parts'
  | 'safe'
  | 'service'
  | 'transport'
  | 'wall';

export interface Product {
  id: string;
  title: string;
  group: string;
  description: string;
  features: string[];
  icon: IconName;
  image: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: IconName;
  description: string;
  needs: string[];
  solutions: string[];
}

export interface ServiceItem {
  title: string;
  icon: IconName;
  description: string;
}

export interface Job {
  title: string;
  location: string;
  type: string;
  summary: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
