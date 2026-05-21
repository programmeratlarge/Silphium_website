'use client';

import { useState } from 'react';
import { disclaimers } from '@/content/site';
import { MAX_MESSAGE_LENGTH, type InquiryType } from '@/lib/constants';

type FormData = {
  name: string;
  email: string;
  organization: string;
  inquiryType: InquiryType | '';
  message: string;
  noMedicalInfoConfirmed: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INQUIRY_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: 'press', label: 'Press' },
  { value: 'investor', label: 'Investor' },
  { value: 'partnership', label: 'Strategic partnership' },
  { value: 'collaboration', label: 'Scientific collaboration' },
  { value: 'general', label: 'General inquiry' },
];


function inputClass(hasError: boolean) {
  return [
    'block w-full rounded-lg border px-3 py-2 text-sm text-silphium-charcoal',
    'placeholder:text-silphium-muted/60 focus:outline-none focus:ring-2',
    'focus:ring-silphium-red focus:border-transparent transition-colors',
    hasError
      ? 'border-red-500'
      : 'border-silphium-charcoal/20 hover:border-silphium-charcoal/40',
  ].join(' ');
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ id, label, error, hint, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-silphium-charcoal"
      >
        {label}
        {required && (
          <span className="ml-1 text-silphium-red" aria-hidden="true">
            *
          </span>
        )}
        {hint && (
          <span className="ml-1.5 text-xs font-normal text-silphium-muted">
            {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.inquiryType) errors.inquiryType = 'Please select an inquiry type.';
  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
  }
  if (!form.noMedicalInfoConfirmed) {
    errors.noMedicalInfoConfirmed = 'Please confirm before submitting.';
  }
  return errors;
}

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  organization: '',
  inquiryType: '',
  message: '',
  noMedicalInfoConfirmed: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function set<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-silphium-cream px-8 py-12 text-center">
        <h3 className="font-display text-xl font-semibold text-silphium-charcoal">
          Message received.
        </h3>
        <p className="mt-3 text-sm leading-6 text-silphium-muted">
          Thank you for reaching out. We will follow up at the email address you
          provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field id="cf-name" label="Name" error={errors.name} required>
        <input
          id="cf-name"
          type="text"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          className={inputClass(!!errors.name)}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
          autoComplete="name"
        />
      </Field>

      <Field id="cf-email" label="Email" error={errors.email} required>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          className={inputClass(!!errors.email)}
          aria-describedby={errors.email ? 'cf-email-error' : undefined}
          autoComplete="email"
        />
      </Field>

      <Field id="cf-org" label="Organization" hint="optional">
        <input
          id="cf-org"
          type="text"
          value={form.organization}
          onChange={(e) => set('organization', e.target.value)}
          className={inputClass(false)}
          autoComplete="organization"
        />
      </Field>

      <Field
        id="cf-inquiry"
        label="Inquiry type"
        error={errors.inquiryType}
        required
      >
        <select
          id="cf-inquiry"
          value={form.inquiryType}
          onChange={(e) => set('inquiryType', e.target.value as InquiryType)}
          className={inputClass(!!errors.inquiryType)}
          aria-describedby={errors.inquiryType ? 'cf-inquiry-error' : undefined}
        >
          <option value="">Select…</option>
          {INQUIRY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="cf-message" label="Message" error={errors.message} required>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          rows={5}
          className={inputClass(!!errors.message)}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
        />
        <p className="mt-1 text-right text-xs text-silphium-muted">
          {form.message.length} / {MAX_MESSAGE_LENGTH}
        </p>
      </Field>

      <div className="rounded-lg bg-silphium-cream px-4 py-3 text-xs leading-5 text-silphium-muted">
        {disclaimers.contact}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={form.noMedicalInfoConfirmed}
            onChange={(e) => set('noMedicalInfoConfirmed', e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-silphium-charcoal/20 accent-silphium-red"
            aria-describedby={
              errors.noMedicalInfoConfirmed ? 'cf-consent-error' : undefined
            }
          />
          <span className="text-sm text-silphium-charcoal">
            I confirm I am not submitting personal medical information.
          </span>
        </label>
        {errors.noMedicalInfoConfirmed && (
          <p id="cf-consent-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.noMedicalInfoConfirmed}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-silphium-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-silphium-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silphium-red focus-visible:ring-offset-2 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
