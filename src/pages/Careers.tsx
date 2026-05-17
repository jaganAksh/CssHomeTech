import { ArrowRight, Mail } from 'lucide-react';
import { brand } from '../assets/brand';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { jobs } from '../data/company';

export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build practical security solutions with a field-first team"
        description="Join a team that works closely with customers, sites, hardware, access systems, and service operations."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Open roles"
            description="We look for people who care about dependable work, clear communication, and secure everyday movement."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {jobs.map((job) => (
              <article key={job.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">{job.type}</p>
                <h2 className="mt-4 text-xl font-semibold text-brand-charcoal">{job.title}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-500">{job.location}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{job.summary}</p>
                <a
                  href={`mailto:${brand.email}?subject=Career application - ${encodeURIComponent(job.title)}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-brand-teal px-4 py-2 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
                >
                  Apply now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Send your resume</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-charcoal">Do not see the right role?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
              Share your resume and tell us whether you are interested in projects, service, sales, design, or operations.
            </p>
          </div>
          <a
            href={`mailto:${brand.email}?subject=Resume for future opportunities`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-cobalt px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            Send resume
          </a>
        </div>
      </section>
    </>
  );
}
