import { IndustryCard } from '../components/IndustryCard';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { industries } from '../data/industries';

export function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Access solutions matched to each operating environment"
        description="We connect doors, credentials, entrances, lock systems, and maintenance into practical programs for complex sites."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industry needs and matching solutions"
            description="Each card summarizes the typical access and security concerns for that environment, plus the CSS home tech services solutions that fit."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: 'Survey the access journey',
              description: 'We review public routes, staff routes, service entries, restricted rooms, and emergency exits.',
            },
            {
              title: 'Map hardware to risk',
              description: 'Each opening gets the right level of hardware, credential control, monitoring, and backup access.',
            },
            {
              title: 'Support the lifecycle',
              description: 'Maintenance plans, spare parts, and response workflows keep the system useful after commissioning.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-brand-charcoal">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
