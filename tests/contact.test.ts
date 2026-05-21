import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sendContactEmail } from '../lib/contact';
import type { ContactFormData } from '../lib/validation';

const validData: ContactFormData = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  inquiryType: 'general',
  message: 'Hello, I would like to learn more.',
  noMedicalInfoConfirmed: true,
};

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_TO_EMAIL;
  delete process.env.CONTACT_FROM_EMAIL;
});

describe('sendContactEmail', () => {
  describe('when email delivery is not configured', () => {
    it('returns ok:true when env vars are absent', async () => {
      const result = await sendContactEmail(validData);
      expect(result.ok).toBe(true);
    });

    it('does not call fetch when env vars are absent', async () => {
      const fetchMock = vi.fn();
      vi.stubGlobal('fetch', fetchMock);
      await sendContactEmail(validData);
      expect(fetchMock).not.toHaveBeenCalled();
    });
  });

  describe('when email delivery is configured', () => {
    beforeEach(() => {
      process.env.RESEND_API_KEY = 'test-resend-key';
      process.env.CONTACT_TO_EMAIL = 'team@silphium.bio';
      process.env.CONTACT_FROM_EMAIL = 'noreply@silphium.bio';
    });

    it('returns ok:true on a successful Resend response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
      const result = await sendContactEmail(validData);
      expect(result.ok).toBe(true);
    });

    it('calls the Resend API endpoint with POST', async () => {
      const fetchMock = vi.fn().mockResolvedValue({ ok: true });
      vi.stubGlobal('fetch', fetchMock);
      await sendContactEmail(validData);
      expect(fetchMock).toHaveBeenCalledWith(
        'https://api.resend.com/emails',
        expect.objectContaining({ method: 'POST' })
      );
    });

    it('sends Authorization header with the API key', async () => {
      const fetchMock = vi.fn().mockResolvedValue({ ok: true });
      vi.stubGlobal('fetch', fetchMock);
      await sendContactEmail(validData);
      const [, options] = fetchMock.mock.calls[0] as [string, RequestInit & { headers: Record<string, string> }];
      expect(options.headers['Authorization']).toBe('Bearer test-resend-key');
    });

    it('sets reply_to to the submitter email address', async () => {
      const fetchMock = vi.fn().mockResolvedValue({ ok: true });
      vi.stubGlobal('fetch', fetchMock);
      await sendContactEmail(validData);
      const [, options] = fetchMock.mock.calls[0] as [string, RequestInit & { body: string }];
      const body = JSON.parse(options.body);
      expect(body.reply_to).toBe('jane@example.com');
    });

    it('includes the submitter name in the email subject', async () => {
      const fetchMock = vi.fn().mockResolvedValue({ ok: true });
      vi.stubGlobal('fetch', fetchMock);
      await sendContactEmail(validData);
      const [, options] = fetchMock.mock.calls[0] as [string, RequestInit & { body: string }];
      const body = JSON.parse(options.body);
      expect(body.subject).toContain('Jane Smith');
    });

    it('returns ok:false when Resend returns a non-ok response', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: false,
          status: 422,
          text: vi.fn().mockResolvedValue('Unprocessable Entity'),
        })
      );
      const result = await sendContactEmail(validData);
      expect(result.ok).toBe(false);
    });

    it('returns ok:false on a network error', async () => {
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network failure')));
      const result = await sendContactEmail(validData);
      expect(result.ok).toBe(false);
    });
  });
});
