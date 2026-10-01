import { NextResponse } from 'next/server';
import { contactSchema } from '../../../src/lib/validation/contact';
import { createContactInquiry } from '../../../src/services/contact-service';

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json(
        {
          error: 'Please review the highlighted fields.',
          issues: parsed.error.issues,
        },
        { status: 400 },
      );
    await createContactInquiry(parsed.data);
    return NextResponse.json({ received: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload.' },
      { status: 400 },
    );
  }
}
