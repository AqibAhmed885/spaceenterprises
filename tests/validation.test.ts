import test from 'node:test';
import assert from 'node:assert/strict';

import { rfqSchema } from '../src/lib/validation/rfq.ts';
import { contactSchema } from '../src/lib/validation/contact.ts';

void test('rfqSchema accepts a minimal requirement', () => {
  const result = rfqSchema.safeParse({
    name: 'Amina',
    company: 'Example Co',
    email: 'amina@example.com',
    product: 'Industrial pump',
  });
  assert.equal(result.success, true);
});

void test('rfqSchema rejects an invalid attachment type', () => {
  const result = rfqSchema.safeParse({
    name: 'Amina',
    company: 'Example Co',
    email: 'amina@example.com',
    product: 'Pump',
    attachment: {
      name: 'script.exe',
      type: 'application/octet-stream',
      size: 100,
    },
  });
  assert.equal(result.success, false);
});

void test('contactSchema rejects an empty message', () => {
  const result = contactSchema.safeParse({
    name: 'Amina',
    email: 'amina@example.com',
    message: '',
  });
  assert.equal(result.success, false);
});
