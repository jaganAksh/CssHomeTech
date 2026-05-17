import { CheckCircle2, Send } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';

type FormMode = 'contact' | 'service';

interface ValidatedFormProps {
  mode: FormMode;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  enquiryType: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  city: '',
  enquiryType: 'Sales',
  serviceType: 'Installation',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ValidatedForm({ mode }: ValidatedFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const config = useMemo(
    () =>
      mode === 'contact'
        ? {
            title: 'Send an enquiry',
            description: 'Tell us what you need and our team will route your request to the right specialist.',
            typeLabel: 'Enquiry type',
            typeField: 'enquiryType' as const,
            typeOptions: ['Sales', 'Service', 'Partnership', 'Careers'],
            submitLabel: 'Submit enquiry',
          }
        : {
            title: 'Service enquiry',
            description: 'Share the site and equipment details so our service desk can plan the right response.',
            typeLabel: 'Service required',
            typeField: 'serviceType' as const,
            typeOptions: ['Installation', 'Maintenance', 'Annual service contract', 'Emergency support', 'Spare parts', 'Technical consultation'],
            submitLabel: 'Request service',
          },
    [mode],
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailPattern.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!form.company.trim()) nextErrors.company = 'Company or site name is required.';
    if (!form.city.trim()) nextErrors.city = 'City is required.';
    if (!form.message.trim()) nextErrors.message = 'Please add a short message.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  }

  const sharedInputClass =
    'mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-brand-charcoal shadow-sm transition placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20';

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <div>
        <h2 className="text-2xl font-semibold text-brand-charcoal">{config.title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{config.description}</p>
      </div>

      {submitted ? (
        <div
          className="mt-5 flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          Thank you. Your enquiry has been received and our team will get back to you shortly.
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <FormField label="Name" id={`${mode}-name`} error={errors.name}>
          <input
            id={`${mode}-name`}
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className={sharedInputClass}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            required
          />
        </FormField>
        <FormField label="Email" id={`${mode}-email`} error={errors.email}>
          <input
            id={`${mode}-email`}
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className={sharedInputClass}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            required
          />
        </FormField>
        <FormField label="Phone" id={`${mode}-phone`} error={errors.phone}>
          <input
            id={`${mode}-phone`}
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            className={sharedInputClass}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            required
          />
        </FormField>
        <FormField label="Company / site" id={`${mode}-company`} error={errors.company}>
          <input
            id={`${mode}-company`}
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
            className={sharedInputClass}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            required
          />
        </FormField>
        <FormField label="City" id={`${mode}-city`} error={errors.city}>
          <input
            id={`${mode}-city`}
            value={form.city}
            onChange={(event) => updateField('city', event.target.value)}
            className={sharedInputClass}
            autoComplete="address-level2"
            aria-invalid={Boolean(errors.city)}
            required
          />
        </FormField>
        <FormField label={config.typeLabel} id={`${mode}-type`}>
          <select
            id={`${mode}-type`}
            value={form[config.typeField]}
            onChange={(event) => updateField(config.typeField, event.target.value)}
            className={sharedInputClass}
          >
            {config.typeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="mt-4">
        <FormField label="Message" id={`${mode}-message`} error={errors.message}>
          <textarea
            id={`${mode}-message`}
            rows={5}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            className={sharedInputClass}
            aria-invalid={Boolean(errors.message)}
            required
          />
        </FormField>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-tealDark focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
      >
        {config.submitLabel}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, id, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-brand-charcoal">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-red-700" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
