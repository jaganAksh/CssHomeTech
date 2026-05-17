import type { Page } from '../types';

export const routes: Record<Page, string> = {
  home: '/',
  products: '/products-solutions',
  industries: '/industries',
  services: '/services',
  about: '/about',
  careers: '/careers',
  contact: '/contact',
};

export const navItems: { label: string; page: Page }[] = [
  { label: 'Products & Solutions', page: 'products' },
  { label: 'Industries', page: 'industries' },
  { label: 'Services', page: 'services' },
  { label: 'About', page: 'about' },
  { label: 'Careers', page: 'careers' },
  { label: 'Contact', page: 'contact' },
];

export function pageFromPath(pathname: string): Page {
  const route = Object.entries(routes).find(([, path]) => path === pathname);
  return route ? (route[0] as Page) : 'home';
}
