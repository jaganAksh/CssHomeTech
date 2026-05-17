import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ValidatedForm } from '../components/ValidatedForm';
import { services } from '../data/company';

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Installation, maintenance, and support for dependable access"
        description="A strong access system needs skilled installation, scheduled care, emergency response, and the right replacement parts."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Service programs"
            description="Choose a one-time service request or build a long-term support plan for doors, entrances, locks, and access systems."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Service enquiry"
              title="Tell us what needs attention"
              description="For urgent issues, mention the affected door, lock, entrance, or access device and the impact on operations."
            />
            <div className="grid gap-4">
              {['Site assessment', 'Priority scheduling', 'Service report and recommendations'].map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-teal text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-2 text-sm font-semibold text-brand-charcoal">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <ValidatedForm mode="service" />
        </div>
      </section>
    </>
  );
}
