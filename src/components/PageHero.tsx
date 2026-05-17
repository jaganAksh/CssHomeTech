import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-brand-charcoal bg-industrial-grid bg-[length:42px_42px] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-mist">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-normal md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">{description}</p>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
