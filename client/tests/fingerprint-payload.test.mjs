import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { formatFP } from '../src/utils/fingerprint.ts';

mock.module(new URL('../../server/lib/context.js', import.meta.url).href, { namedExports: {
  GLOBAL: { config: { fpAesSecret: 'a'.repeat(32), fpAesIv: 'b'.repeat(16) } },
  DISCORD: () => ({}), LOGGER: { log() {}, error() {} },
} });
const { readFP, getFingerprintEvent, decryptFPEvent } = await import('../../server/lib/utils/fingerprint.js');
const visitorId = 'a'.repeat(32);

test('fingerprint submission preserves the full result for future server-side bot detection', () => {
  const result = {
    visitorId, version: '5.2.0',
    confidence: { score: 0.9, comment: 'Synthetic test' },
    components: {
      languages: { value: [['en-US', 'fr']], duration: 1 },
      canvas: { value: { geometry: 'synthetic', text: 'échantillon' }, duration: 2 },
      unavailable: { error: { name: 'Error', message: 'Synthetic component failure' }, duration: 3 },
    },
    futureMetadata: { enabled: true },
  };
  assert.deepEqual(readFP(formatFP(result)), result);
});

test('large component collections are transmitted without truncation', () => {
  const base = { visitorId, version: '5.2.0' };
  const result = {
    ...base, components: { large: { value: 'x'.repeat(65536), duration: 0 } },
  };
  assert.deepEqual(readFP(formatFP(result)), result);
});

test('the actual client encoder and server endpoint remain compatible', () => {
  const res = {
    status() { return this; }, send(body) { this.body = body; },
    cookie() { assert.fail('a verified existing cookie must not be reissued'); },
  };
  getFingerprintEvent({
    headers: {}, signedCookies: { browserId: '11111111-1111-4111-8111-111111111111' },
    body: { data: formatFP({
      visitorId, version: '5.2.0', confidence: { score: 0.9 },
      components: { languages: { value: [['en-US']], duration: 1 } },
    }) },
  }, res);
  assert.ok(res.body.visitorId.startsWith(visitorId));
  assert.equal(decryptFPEvent(res.body.eventId), res.body.visitorId);
});
