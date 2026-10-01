import { NextResponse } from 'next/server';
import { rfqSchema } from '../../../src/lib/validation/rfq';
import { createRFQ } from '../../../src/services/rfq-service';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    let body: Record<string, unknown>;
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('attachment');
      body = Object.fromEntries(
        [...formData.entries()]
          .filter(([key]) => key !== 'attachment')
          .map(([key, value]) => [
            key,
            typeof value === 'string' ? value : value.name,
          ]),
      );
      if (file instanceof File && file.size > 0)
        body.attachment = {
          name: file.name,
          type: file.type,
          size: file.size,
        };
    } else {
      body = (await request.json()) as Record<string, unknown>;
    }
    const parsed = rfqSchema.safeParse(body);
    if (!parsed.success) {
      const attachment = body.attachment;
      if (
        attachment &&
        typeof attachment === 'object' &&
        'size' in attachment &&
        Number(attachment.size) > 10 * 1024 * 1024
      )
        return NextResponse.json(
          { error: 'Attachment exceeds the 10 MB limit.' },
          { status: 413 },
        );
      if (
        attachment &&
        typeof attachment === 'object' &&
        'name' in attachment &&
        !/\.(pdf|doc|docx|xls|xlsx|csv|jpg|jpeg|png)$/i.test(
          String(attachment.name),
        )
      )
        return NextResponse.json(
          { error: 'Unsupported attachment type.' },
          { status: 415 },
        );
      return NextResponse.json(
        {
          error: 'Please review the highlighted fields.',
          issues: parsed.error.issues,
        },
        { status: 400 },
      );
    }
    const rfq = await createRFQ(parsed.data);
    return NextResponse.json(
      { referenceNumber: rfq.referenceNumber, status: rfq.status },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload.' },
      { status: 400 },
    );
  }
}
