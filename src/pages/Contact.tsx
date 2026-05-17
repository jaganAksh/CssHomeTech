import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { brand } from '../assets/brand';
import { PageHero } from '../components/PageHero';
import { ValidatedForm } from '../components/ValidatedForm';

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with CSS home tech services"
        description="Use the form for sales, service, partnership, or careers enquiries. For urgent support, call or message us directly."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-brand-charcoal">Contact details</h2>
              <div className="mt-6 grid gap-5">
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex gap-4 text-slate-700 hover:text-brand-teal">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-teal shadow-sm">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-charcoal">Phone</span>
                    <span className="text-sm">{brand.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${brand.email}`} className="flex gap-4 text-slate-700 hover:text-brand-teal">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-teal shadow-sm">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-charcoal">Email</span>
                    <span className="text-sm">{brand.email}</span>
                  </span>
                </a>
                <div className="flex gap-4 text-slate-700">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-teal shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-charcoal">Address</span>
                    <span className="text-sm leading-6">{brand.address}</span>
                  </span>
                </div>
              </div>
              <a
                href={brand.whatsapp}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-tealDark"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp contact
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-brand-steel">
              <div className="flex aspect-[16/10] items-center justify-center bg-industrial-grid bg-[length:32px_32px] p-8 text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-brand-teal" />
                  <h2 className="mt-4 text-xl font-semibold text-brand-charcoal">Google Maps placeholder</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Embed a live Google Maps iframe here when the production address is finalized.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ValidatedForm mode="contact" />
        </div>
      </section>
    </>
  );
}
