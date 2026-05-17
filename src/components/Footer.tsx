import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { brand } from '../assets/brand';
import { navItems, routes } from '../data/navigation';
import type { Page } from '../types';

interface FooterProps {
  navigate: (page: Page) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-brand-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal text-white">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">CSS home tech</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-300">services</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Access, door hardware, entrance, lock, and service solutions for places that need secure movement every day.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-200 transition hover:border-brand-teal hover:bg-brand-teal"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Quick links</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.page}>
                <a
                  href={routes[item.page]}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.page);
                  }}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Solutions</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>Electronic access control</li>
            <li>Door hardware</li>
            <li>Automatic entrances</li>
            <li>Hotel lock systems</li>
            <li>Maintenance contracts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-300">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand-mist" />
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {brand.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-mist" />
              <a href={`mailto:${brand.email}`} className="hover:text-white">
                {brand.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-mist" />
              <span>{brand.address}</span>
            </li>
            <li>
              <a
                href={brand.whatsapp}
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 font-semibold text-brand-charcoal transition hover:bg-brand-mist"
              >
                <MessageCircle className="h-4 w-4 text-brand-teal" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 CSS home tech services. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Warranty policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
