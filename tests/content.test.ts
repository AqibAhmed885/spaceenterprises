import test from 'node:test';
import assert from 'node:assert/strict';

import { getBySlug } from '../src/lib/content.ts';
import { services } from '../src/content/services.ts';

void test('getBySlug returns the strategic sourcing service', () => {
  const service = getBySlug(services, 'strategic-sourcing');

  assert.equal(service?.title, 'Strategic Sourcing');
});

void test('getBySlug returns undefined for an unknown slug', () => {
  assert.equal(getBySlug(services, 'not-a-service'), undefined);
});
