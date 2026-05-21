import { describe, it, expect } from 'vitest';
import { validateContactForm } from '../lib/validation';
import { MAX_MESSAGE_LENGTH } from '../lib/constants';

const validPayload = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  organization: 'Acme Corp',
  inquiryType: 'general',
  message: 'Hello, I would like to learn more.',
  noMedicalInfoConfirmed: true,
};

describe('validateContactForm', () => {
  describe('valid payloads', () => {
    it('accepts a complete valid payload', () => {
      expect(validateContactForm(validPayload).ok).toBe(true);
    });

    it('accepts payload without optional organization', () => {
      const { organization: _, ...rest } = validPayload;
      expect(validateContactForm(rest).ok).toBe(true);
    });

    it('accepts payload with empty organization string', () => {
      const result = validateContactForm({ ...validPayload, organization: '' });
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.data.organization).toBeUndefined();
    });

    it.each(['press', 'investor', 'partnership', 'collaboration', 'general'])(
      'accepts inquiryType "%s"',
      (inquiryType) => {
        expect(validateContactForm({ ...validPayload, inquiryType }).ok).toBe(true);
      }
    );

    it('trims whitespace from name and message', () => {
      const result = validateContactForm({
        ...validPayload,
        name: '  Jane Smith  ',
        message: '  Hello  ',
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.data.name).toBe('Jane Smith');
        expect(result.data.message).toBe('Hello');
      }
    });

    it('sets noMedicalInfoConfirmed to literal true in output data', () => {
      const result = validateContactForm(validPayload);
      if (result.ok) expect(result.data.noMedicalInfoConfirmed).toBe(true);
    });
  });

  describe('name validation', () => {
    it.each([
      [undefined, 'Name is required.'],
      [null, 'Name is required.'],
      ['', 'Name is required.'],
      ['   ', 'Name is required.'],
      [42, 'Name is required.'],
      ['a'.repeat(201), 'Name is too long.'],
    ])('rejects name %j → "%s"', (name, expectedMessage) => {
      const result = validateContactForm({ ...validPayload, name });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.find((e) => e.field === 'name')?.message).toBe(expectedMessage);
      }
    });

    it('accepts name of exactly 200 characters', () => {
      expect(validateContactForm({ ...validPayload, name: 'a'.repeat(200) }).ok).toBe(true);
    });
  });

  describe('email validation', () => {
    it.each([
      [undefined, 'Email is required.'],
      ['', 'Email is required.'],
      ['not-an-email', 'Please enter a valid email address.'],
      ['@nodomain', 'Please enter a valid email address.'],
      ['noatsign.com', 'Please enter a valid email address.'],
      ['a'.repeat(250) + '@b.com', 'Email address is too long.'],
    ])('rejects email %j → "%s"', (email, expectedMessage) => {
      const result = validateContactForm({ ...validPayload, email });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.find((e) => e.field === 'email')?.message).toBe(expectedMessage);
      }
    });

    it.each(['user@example.com', 'user+tag@sub.domain.org'])(
      'accepts valid email "%s"',
      (email) => {
        expect(validateContactForm({ ...validPayload, email }).ok).toBe(true);
      }
    );
  });

  describe('inquiryType validation', () => {
    it.each([undefined, null, '', 'unknown', 'clinical', 'medical'])(
      'rejects invalid inquiryType %j',
      (inquiryType) => {
        const result = validateContactForm({ ...validPayload, inquiryType });
        expect(result.ok).toBe(false);
        if (!result.ok) {
          expect(result.errors.some((e) => e.field === 'inquiryType')).toBe(true);
        }
      }
    );
  });

  describe('message validation', () => {
    it.each([
      [undefined, 'Message is required.'],
      ['', 'Message is required.'],
      ['   ', 'Message is required.'],
    ])('rejects message %j → "%s"', (message, expectedMessage) => {
      const result = validateContactForm({ ...validPayload, message });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.find((e) => e.field === 'message')?.message).toBe(expectedMessage);
      }
    });

    it('accepts message of exactly MAX_MESSAGE_LENGTH characters', () => {
      expect(
        validateContactForm({ ...validPayload, message: 'a'.repeat(MAX_MESSAGE_LENGTH) }).ok
      ).toBe(true);
    });

    it('rejects message one character over MAX_MESSAGE_LENGTH', () => {
      const result = validateContactForm({
        ...validPayload,
        message: 'a'.repeat(MAX_MESSAGE_LENGTH + 1),
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.find((e) => e.field === 'message')?.message).toContain(
          String(MAX_MESSAGE_LENGTH)
        );
      }
    });
  });

  describe('organization validation', () => {
    it('accepts organization of exactly 200 characters', () => {
      expect(
        validateContactForm({ ...validPayload, organization: 'a'.repeat(200) }).ok
      ).toBe(true);
    });

    it('rejects organization exceeding 200 characters', () => {
      const result = validateContactForm({ ...validPayload, organization: 'a'.repeat(201) });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.some((e) => e.field === 'organization')).toBe(true);
      }
    });
  });

  describe('noMedicalInfoConfirmed validation', () => {
    it.each([false, undefined, null, 0, ''])(
      'rejects noMedicalInfoConfirmed %j',
      (noMedicalInfoConfirmed) => {
        const result = validateContactForm({ ...validPayload, noMedicalInfoConfirmed });
        expect(result.ok).toBe(false);
        if (!result.ok) {
          expect(result.errors.some((e) => e.field === 'noMedicalInfoConfirmed')).toBe(true);
        }
      }
    );
  });

  describe('body structure', () => {
    it.each([null, undefined, [], 'string', 42])(
      'rejects non-object input %j',
      (input) => {
        const result = validateContactForm(input);
        expect(result.ok).toBe(false);
        if (!result.ok) {
          expect(result.errors.some((e) => e.field === 'form')).toBe(true);
        }
      }
    );

    it('collects all field errors in one response', () => {
      const result = validateContactForm({
        name: '',
        email: '',
        inquiryType: '',
        message: '',
        noMedicalInfoConfirmed: false,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.errors.length).toBeGreaterThanOrEqual(4);
      }
    });
  });
});
