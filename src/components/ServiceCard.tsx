import type { ServiceItem } from '../types';
import { IconBadge } from './Icon';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-soft">
      <IconBadge name={service.icon} />
      <h3 className="mt-5 text-lg font-semibold text-brand-charcoal">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  );
}
