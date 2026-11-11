import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { setImmediate } from 'node:timers/promises';
import { mock, test } from 'node:test';
import { PREDICTABLE_HEADERS_PREFIX } from '@labrute/core';

let send;
mock.module('../lib/context.js', { namedExports: {
  DISCORD: () => ({ logObject: (...args) => send(...args) }),
} });
const { logSecurityRejection } = await import('../lib/utils/securityRejectionLog.js');
const request = {
  method: 'GET', path: '/api/' + 'p'.repeat(500), url: '/private-query',
  headers: { authorization: 'private-token', ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [
    `${PREDICTABLE_HEADERS_PREFIX}${i}`, 'x'.repeat(10000),
  ])) },
  security: { fingerprint: `v2:${'a'.repeat(32)}:none` },
};

test('repeated rejections are sampled before serialization and sensitive/large fields are excluded', async (t) => {
  let now = 1000000;
  t.mock.method(Date, 'now', () => now);
  const messages = [];
  send = async (details) => { messages.push(details); };
  const id = randomUUID();
  for (let i = 0; i < 1000; i++) logSecurityRejection(id, 'headers-tampering', request);
  logSecurityRejection(id, 'headers-tampering', { get path() { assert.fail('sampled request serialized'); } });
  assert.equal(messages.length, 1);
  assert.equal(Object.keys(messages[0].headers).length, 8);
  assert.ok(Object.values(messages[0].headers).every((value) => value.length === 128));
  assert.equal(messages[0].endpoint.length, 256);
  assert.doesNotMatch(JSON.stringify(messages), /private-token|private-query/);
  await setImmediate();
  now += 60000;
  logSecurityRejection(id, 'headers-tampering', request);
  assert.equal(messages.length, 2);
  await setImmediate();
});

test('slow or failing log transport cannot accumulate more than twenty pending messages', async () => {
  const failures = [];
  let sent = 0;
  send = () => { sent++; return new Promise((resolve, reject) => { failures.push(reject); }); };
  for (let i = 0; i < 100; i++) logSecurityRejection(randomUUID(), 'unrecognized-fingerprint', request);
  assert.equal(sent, 20);
  for (const reject of failures) reject(new Error('transport unavailable'));
  await setImmediate();
  send = async () => { sent++; };
  logSecurityRejection(randomUUID(), 'unrecognized-fingerprint', request);
  assert.equal(sent, 21);
  await setImmediate();
});

test('synchronous transport failures are contained and release capacity', () => {
  send = () => { throw new Error('transport setup failed'); };
  for (let i = 0; i < 30; i++) assert.doesNotThrow(() => logSecurityRejection(
    randomUUID(), 'unrecognized-fingerprint', request,
  ));
});

test('sampling state is bounded under many distinct accounts', async () => {
  let count = 0;
  send = async () => { count++; };
  const first = randomUUID();
  logSecurityRejection(first, 'unrecognized-fingerprint', request);
  await setImmediate();
  for (let i = 0; i < 10000; i++) {
    logSecurityRejection(randomUUID(), 'unrecognized-fingerprint', request);
    await setImmediate();
  }
  const before = count;
  logSecurityRejection(first, 'unrecognized-fingerprint', request);
  assert.equal(count, before + 1, 'evicted entries can be sampled again');
  await setImmediate();
});
