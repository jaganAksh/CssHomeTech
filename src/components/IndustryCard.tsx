import type { Industry } from '../types';
import { IconBadge } from './Icon';

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-cobalt/35 hover:shadow-soft">
      <div className="flex items-start gap-4">
        <IconBadge name={industry.icon} className="bg-blue-50 text-brand-cobalt" />
        <div>
          <h3 className="text-xl font-semibold text-brand-charcoal">{industry.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{industry.description}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Needs</h4>
          <ul className="mt-3 space-y-2">
            {industry.needs.map((need) => (
              <li key={need} className="text-sm leading-5 text-slate-700">
                {need}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Matching solutions</h4>
          <ul className="mt-3 space-y-2">
            {industry.solutions.map((solution) => (
              <li key={solution} className="text-sm leading-5 text-slate-700">
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
