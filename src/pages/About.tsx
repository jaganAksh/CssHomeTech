import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { stats, timeline, values } from '../data/company';

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About CSS home tech services"
        title="A practical partner for secure movement through buildings"
        description="We help organizations choose, install, maintain, and improve the physical access points that keep people, assets, and operations moving safely."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Company"
              title="Built around doors, locks, credentials, and service"
              description="CSS home tech services works across commercial, residential, industrial, and hospitality sites where access reliability matters every day."
            />
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-brand-charcoal">Our mission</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              To make secure access easier to plan, easier to use, and easier to maintain by combining product knowledge,
              field installation discipline, and responsive support.
            </p>
            <div className="mt-6 grid gap-3">
              {['Secure the opening', 'Protect daily movement', 'Support the full lifecycle'].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-4xl font-semibold text-brand-teal">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Timeline" description="A short view of how our access and service capabilities have grown." />
          <div className="grid gap-5 md:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">{item.year}</p>
                <h2 className="mt-4 text-lg font-semibold text-brand-charcoal">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Values" description="Principles that guide every specification, installation, and support visit." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-brand-charcoal">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
