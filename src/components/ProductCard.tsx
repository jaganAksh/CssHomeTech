import { ArrowRight } from 'lucide-react';
import type { Product } from '../types';
import { IconBadge } from './Icon';

interface ProductCardProps {
  product: Product;
  onLearnMore?: (product: Product) => void;
}

export function ProductCard({ product, onLearnMore }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden bg-brand-steel">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center gap-3">
          <IconBadge name={product.icon} />
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{product.group}</span>
        </div>
        <h3 className="text-xl font-semibold text-brand-charcoal">{product.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>
        <ul className="mt-4 space-y-2">
          {product.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onLearnMore?.(product)}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-md border border-brand-teal px-4 py-2 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
