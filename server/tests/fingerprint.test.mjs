import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createHash } from 'node:crypto';
import {
  createFingerprint, getTlsFingerprints, parseFingerprint, isFingerprintFormatValid,
} from '../lib/utils/fingerprintIdentity.js';

const visitorId = 'b4e0e8ddaa9cbc0cb11808045ca140b9';
const ja3 = '771,4866-4867-4865,65281-11-10,4588-29-23,0';
const ja4 = 't13i3012h2_1d37bd780c83_6ac85949c8c7';
const fingerprint = (headers = {}) => createFingerprint(visitorId, { headers });

test('version 2 prefers the full JA4 key while retaining separate JA3 metadata', () => {
  const original = fingerprint({
    'et-ja3': ja3,
    'et-ja4': ja4,
  });

  const hash = createHash('sha256').update(ja4).digest('hex');

  assert.equal(original, `v2:${visitorId}:ja4:${hash}`);
  assert.equal(original, fingerprint({
    'et-ja3': `${ja3}1`,
    'et-ja4': ja4,
  }));
  assert.notEqual(original, fingerprint({
    'et-ja3': ja3,
    'et-ja4': `${ja4}1`,
  }));
  assert.equal(parseFingerprint(original).visitorId, visitorId);
  assert.equal(getTlsFingerprints({ headers: { 'et-ja3': ja3 } }).ja3, ja3);
});

test('JA3-only and missing TLS requests have distinct, explicitly labelled identities', () => {
  const onlyJa3 = fingerprint({ 'et-ja3': ja3 });

  assert.match(onlyJa3, /^v2:[a-f0-9]{32}:ja3:[a-f0-9]{64}$/);
  assert.notEqual(onlyJa3, fingerprint({ 'et-ja3': `${ja3}1` }));
  assert.equal(fingerprint(), `v2:${visitorId}:none`);
  assert.equal(parseFingerprint(fingerprint()).tlsHash, null);
});

test('whitespace is normalized, JA3 commas preserved and non-string headers treated as absent', () => {
  assert.equal(fingerprint({ 'et-ja3': ` ${ja3} ` }), fingerprint({ 'et-ja3': ja3 }));
  assert.equal(fingerprint({ 'et-ja4': ` ${ja4} ` }), fingerprint({ 'et-ja4': ja4 }));
  assert.equal(fingerprint({
    'et-ja3': [ja3],
    'et-ja4': [ja4],
  }), fingerprint());
  assert.equal(fingerprint({
    'et-ja3': ' ',
    'et-ja4': '',
  }), fingerprint());
});

test('a reproduced legacy short-hash collision cannot collide in version 2', () => {
  const first = 't13d1516h2_bba58959c32a_be688d9cb522';
  const second = 't13d1516h2_3daebbc6dfd8_1355f1cc9d95';

  const legacyHash = (value) => {
    let hash = 0;

    for (const character of `|${value}`) {
      hash = (hash * 31 + character.charCodeAt(0)) % 1000000;
    }

    return hash;
  };

  assert.equal(legacyHash(first), legacyHash(second));
  assert.notEqual(fingerprint({ 'et-ja4': first }), fingerprint({ 'et-ja4': second }));
});

test('legacy values and malformed current formats are rejected after the fresh start', () => {
  for (const value of [null, '', `${visitorId}0000`, `${fingerprint()}\n`, '<img src=x>',
    `v3:${visitorId}:none`, `v2:${visitorId}:ja4:short`, `v2:${visitorId}:unknown`]) {
    assert.equal(isFingerprintFormatValid(value), false);
  }

  assert.equal(isFingerprintFormatValid(fingerprint()), true);
});

test('legacy socket and forwarded protocol metadata do not enter current identities', () => {
  assert.equal(createFingerprint(visitorId, {
    headers: {
      'x-forwarded-proto': 'https',
      'cf-visitor': '{"scheme":"https"}',
    },
    socket: {
      getProtocol() {
        throw new Error('Proxy TLS must not be inspected');
      },
    },
  }), fingerprint());
});
