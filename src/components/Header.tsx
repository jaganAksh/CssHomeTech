import { Menu, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import { brand } from '../assets/brand';
import { navItems, routes } from '../data/navigation';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export function Header({ currentPage, navigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function goTo(page: Page) {
    setIsOpen(false);
    navigate(page);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand-teal focus:shadow-soft"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href={routes.home}
          onClick={(event) => {
            event.preventDefault();
            goTo('home');
          }}
          className="flex min-w-0 items-center gap-3"
          aria-label={`${brand.name} home`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal text-white shadow-lift">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-semibold leading-tight text-brand-charcoal sm:text-lg">
              CSS home tech
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500">services</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={routes[item.page]}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.page);
                }}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? 'bg-brand-mist text-brand-teal' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-charcoal'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="text-sm font-semibold text-slate-700">
            {brand.phone}
          </a>
          <button
            type="button"
            onClick={() => goTo('contact')}
            className="rounded-md bg-brand-cobalt px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-cobalt focus:ring-offset-2"
          >
            Contact Sales
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-brand-charcoal lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={routes[item.page]}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.page);
                }}
                className={`rounded-md px-3 py-3 text-base font-semibold ${
                  currentPage === item.page ? 'bg-brand-mist text-brand-teal' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
