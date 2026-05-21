import type { ContactFormData } from './validation';

type SendResult = { ok: true } | { ok: false; error: string };

export async function sendContactEmail(data: ContactFormData): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.warn(
      '[contact] Email delivery not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL to enable sending.'
    );
    console.log('[contact] Submission received (not sent):', {
      name: data.name,
      email: data.email,
      inquiryType: data.inquiryType,
      organization: data.organization ?? '—',
    });
    return { ok: true };
  }

  const subject = `[Silphium] ${inquiryLabel(data.inquiryType)} — ${data.name}`;
  const html = buildEmailHtml(data);

  let res: Response;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: data.email,
        subject,
        html,
      }),
    });
  } catch (err) {
    console.error('[contact] Network error reaching Resend:', err);
    return { ok: false, error: 'Email delivery failed.' };
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '(unreadable)');
    console.error('[contact] Resend error:', res.status, body);
    return { ok: false, error: 'Email delivery failed.' };
  }

  return { ok: true };
}

function inquiryLabel(type: string): string {
  const labels: Record<string, string> = {
    press: 'Press',
    investor: 'Investor',
    partnership: 'Strategic Partnership',
    collaboration: 'Scientific Collaboration',
    general: 'General Inquiry',
  };
  return labels[type] ?? type;
}

function buildEmailHtml(data: ContactFormData): string {
  const row = (label: string, value: string) =>
    `<tr>
      <th style="text-align:left;padding:8px 12px;background:#f8f4ee;border:1px solid #e5e5e5;width:140px;white-space:nowrap;">${label}</th>
      <td style="padding:8px 12px;border:1px solid #e5e5e5;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Contact inquiry — Silphium</title></head>
<body style="font-family:sans-serif;color:#1c1c1e;max-width:600px;margin:0 auto;padding:24px;">
  <h2 style="color:#7b1d2e;margin-top:0;">New contact inquiry — Silphium</h2>
  <table style="border-collapse:collapse;width:100%;margin-bottom:24px;">
    <tbody>
      ${row('Name', esc(data.name))}
      ${row('Email', esc(data.email))}
      ${data.organization ? row('Organization', esc(data.organization)) : ''}
      ${row('Inquiry type', esc(inquiryLabel(data.inquiryType)))}
    </tbody>
  </table>
  <h3 style="margin-bottom:8px;">Message</h3>
  <p style="white-space:pre-wrap;background:#f8f4ee;padding:12px;border-radius:4px;border:1px solid #e5e5e5;margin:0;">${esc(data.message)}</p>
  <hr style="margin-top:24px;border:none;border-top:1px solid #e5e5e5;">
  <p style="font-size:12px;color:#6e6e73;margin-bottom:0;">Submitted via the Silphium website contact form.</p>
</body>
</html>`;
}

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
