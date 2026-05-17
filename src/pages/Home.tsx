import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { industries } from '../data/industries';
import { services, stats, testimonials } from '../data/company';
import type { Page } from '../types';
import { IndustryCard } from '../components/IndustryCard';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

interface HomeProps {
  navigate: (page: Page) => void;
}

export function Home({ navigate }: HomeProps) {
  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(23,26,32,0.90) 0%, rgba(23,26,32,0.74) 42%, rgba(23,26,32,0.35) 100%), url('/placeholder/hero-access.svg')",
        }}
      >
        <div className="mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-mist">
              Access, door hardware & security solutions
            </p>
            <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
              Smart Access & Security Solutions for Every Place That Matters
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              CSS home tech services designs, installs, and maintains secure movement systems for commercial,
              industrial, hospitality, healthcare, transport, and residential spaces.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate('products')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-brand-tealDark focus:outline-none focus:ring-2 focus:ring-brand-mist focus:ring-offset-2 focus:ring-offset-brand-charcoal"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-charcoal shadow-soft transition hover:bg-brand-mist focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-charcoal"
              >
                Contact Sales
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products & solutions"
            title="Access products organized around real building needs"
            description="From mechanical door hardware to connected credentials, every category can stand alone or become part of a complete access program."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onLearnMore={() => navigate('products')} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Security designed for the way each place works"
              description="Every site has a different rhythm. We map security needs to doors, credentials, movement flow, maintenance, and emergency response."
            />
            <button
              type="button"
              onClick={() => navigate('industries')}
              className="mb-10 inline-flex items-center gap-2 self-start rounded-md border border-brand-cobalt px-4 py-2.5 text-sm font-semibold text-brand-cobalt transition hover:bg-brand-cobalt hover:text-white"
            >
              View all industries
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {industries.slice(0, 4).map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service & support"
            title="Lifecycle support after the door is installed"
            description="Our team handles installation, preventive maintenance, emergency response, spare parts, and technical consultation through one service channel."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-mist">Company highlights</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal md:text-4xl">
              Practical access expertise with local service accountability
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              We work with builders, facility teams, property operators, and business owners who need dependable
              security without complicated handoffs.
            </p>
            <button
              type="button"
              onClick={() => navigate('about')}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-charcoal transition hover:bg-brand-mist"
            >
              Learn about us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client feedback"
            title="Trusted by facility teams that value uptime"
            description="A few examples of the operational problems our access and service programs help solve."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.company} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-7 w-7 text-brand-teal" />
                <blockquote className="mt-5 text-sm leading-6 text-slate-700">"{item.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-brand-charcoal">{item.name}</span>
                  <span className="block text-slate-500">{item.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Talk to a specialist</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-charcoal md:text-4xl">
              Planning a new access project or fixing an unreliable opening?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Send the site details and our team will recommend the right product, installation, or maintenance path.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('contact')}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-cobalt px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-700"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </>
  );
}
