import type { Page } from '../types';

const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

const withBase = (path: string) => {
  if (!basePath) return path;
  return path === '/' ? `${basePath}/` : `${basePath}${path}`;
};

export const routes: Record<Page, string> = {
  home: withBase('/'),
  products: withBase('/products-solutions'),
  industries: withBase('/industries'),
  services: withBase('/services'),
  about: withBase('/about'),
  careers: withBase('/careers'),
  contact: withBase('/contact'),
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
  let localPath = pathname;

  if (basePath && (pathname === basePath || pathname === `${basePath}/`)) {
    localPath = '/';
  } else if (basePath && pathname.startsWith(`${basePath}/`)) {
    localPath = pathname.slice(basePath.length);
  }

  const route = Object.entries(routes).find(([, path]) => {
    const comparablePath = basePath && path.startsWith(basePath) ? path.slice(basePath.length) || '/' : path;
    return comparablePath === localPath;
  });

  return route ? (route[0] as Page) : 'home';
}
