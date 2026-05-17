import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, children, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`mb-10 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-brand-charcoal md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}
