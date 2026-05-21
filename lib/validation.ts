import { MAX_MESSAGE_LENGTH, INQUIRY_TYPES, type InquiryType } from './constants';

export type ContactFormData = {
  name: string;
  email: string;
  organization?: string;
  inquiryType: InquiryType;
  message: string;
  noMedicalInfoConfirmed: true;
};

export type FieldError = {
  field: string;
  message: string;
};

export type ValidationResult =
  | { ok: true; data: ContactFormData }
  | { ok: false; errors: FieldError[] };

export function validateContactForm(input: unknown): ValidationResult {
  const errors: FieldError[] = [];

  if (!isObject(input)) {
    return { ok: false, errors: [{ field: 'form', message: 'Invalid request body.' }] };
  }

  const { name, email, organization, inquiryType, message, noMedicalInfoConfirmed } = input;

  if (typeof name !== 'string' || !name.trim()) {
    errors.push({ field: 'name', message: 'Name is required.' });
  } else if (name.length > 200) {
    errors.push({ field: 'name', message: 'Name is too long.' });
  }

  if (typeof email !== 'string' || !email.trim()) {
    errors.push({ field: 'email', message: 'Email is required.' });
  } else if (email.length > 254) {
    errors.push({ field: 'email', message: 'Email address is too long.' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  if (organization !== undefined && organization !== null && organization !== '') {
    if (typeof organization !== 'string') {
      errors.push({ field: 'organization', message: 'Invalid organization.' });
    } else if (organization.length > 200) {
      errors.push({ field: 'organization', message: 'Organization name is too long.' });
    }
  }

  if (!isInquiryType(inquiryType)) {
    errors.push({ field: 'inquiryType', message: 'Please select a valid inquiry type.' });
  }

  if (typeof message !== 'string' || !message.trim()) {
    errors.push({ field: 'message', message: 'Message is required.' });
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.push({
      field: 'message',
      message: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    });
  }

  if (noMedicalInfoConfirmed !== true) {
    errors.push({ field: 'noMedicalInfoConfirmed', message: 'Please confirm before submitting.' });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name: (name as string).trim(),
      email: (email as string).trim(),
      organization:
        typeof organization === 'string' && organization.trim()
          ? organization.trim()
          : undefined,
      inquiryType: inquiryType as InquiryType,
      message: (message as string).trim(),
      noMedicalInfoConfirmed: true,
    },
  };
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isInquiryType(value: unknown): value is InquiryType {
  return typeof value === 'string' && (INQUIRY_TYPES as readonly string[]).includes(value);
}
