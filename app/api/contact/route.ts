import { NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';
import { sendContactEmail } from '@/lib/contact';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const result = validateContactForm(body);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  const sent = await sendContactEmail(result.data);
  if (!sent.ok) {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
