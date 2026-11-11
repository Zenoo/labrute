import assert from 'node:assert/strict';
import { mock, test } from 'node:test';

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    DISCORD: () => ({}),
    LOGGER: { log() {}, error() {} },
  },
});

const { appendTlsToVisitorId, isFingerprintFormatValid } = await import('../lib/utils/fingerprint.js');
const visitorId = 'b4e0e8ddaa9cbc0cb11808045ca140b9';
const ja3 = '771,4866-4867-4865,65281-11-10,4588-29-23,0';
const ja4 = 't13i3012h2_1d37bd780c83_6ac85949c8c7';
const fingerprint = (headers = {}) => appendTlsToVisitorId(visitorId, { headers });

test('both provider fingerprints contribute, including JA3 fields after commas', () => {
  const original = fingerprint({ 'et-ja3': ja3, 'et-ja4': ja4 });
  assert.notEqual(original, fingerprint({ 'et-ja3': `${ja3}1`, 'et-ja4': ja4 }));
  assert.notEqual(original, fingerprint({ 'et-ja3': ja3, 'et-ja4': `${ja4}1` }));
  assert.equal(original.slice(0, 32), visitorId);
  assert.equal(isFingerprintFormatValid(original), true);
});

test('missing or partial provider headers still produce a valid fingerprint', () => {
  for (const headers of [{}, { 'et-ja3': ja3 }, { 'et-ja4': ja4 }]) {
    assert.equal(isFingerprintFormatValid(fingerprint(headers)), true);
  }
});

test('surrounding whitespace and empty headers are normalized', () => {
  assert.equal(
    fingerprint({ 'et-ja3': ` ${ja3} `, 'et-ja4': ` ${ja4} ` }),
    fingerprint({ 'et-ja3': ja3, 'et-ja4': ja4 }),
  );
  assert.equal(fingerprint({ 'et-ja3': ' ', 'et-ja4': '' }), fingerprint());
});

test('non-string header values are treated as missing', () => {
  assert.equal(fingerprint({ 'et-ja3': [ja3], 'et-ja4': [ja4] }), fingerprint());
});

test('legacy forwarded TLS and socket data no longer affect the fingerprint', () => {
  const headers = { 'et-ja3': ja3, 'et-ja4': ja4 };
  assert.equal(appendTlsToVisitorId(visitorId, {
    headers: {
      ...headers,
      'x-forwarded-proto': 'https',
      'x-forwarded-tls-version': 'TLSv1.3',
      'x-forwarded-tls-cipher': 'TLS_AES_256_GCM_SHA384',
      'x-forwarded-ssl': 'on',
      'cf-visitor': '{"scheme":"https"}',
    },
    secure: true,
    socket: { getProtocol() { throw new Error('Must not inspect proxy TLS'); } },
  }), fingerprint(headers));
});
