import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { getClientIp, normalizeIp } from '../lib/utils/clientIp.js';

const request = (headers = {}, remoteAddress = '127.0.0.1') => ({
  headers,
  socket: { remoteAddress },
});

test('IP normalization canonicalizes IPv6 and mapped IPv4 and rejects invalid address forms', () => {
  for (const [input, expected] of [
    ['192.0.2.1', '192.0.2.1'], [' 2001:0DB8:0:0:0:0:0:1 ', '2001:db8::1'],
    ['::ffff:192.0.2.1', '192.0.2.1'], ['::FFFF:c000:0201', '192.0.2.1'],
    ['::1', '::1'], [null, null], [undefined, null], [12, null], [['192.0.2.1'], null],
    ['', null], ['unknown', null], ['256.1.1.1', null], ['192.0.2.1:443', null],
    ['[2001:db8::1]', null], ['fe80::1%eth0', null], ['example.com', null],
    ['192.0.2.1,198.51.100.1', null], ['x'.repeat(10000), null],
  ]) {
    assert.equal(normalizeIp(input), expected, String(input));
  }
});

test('deployed X-Forwarded-For precedence handles chains with any comma spacing', () => {
  for (const chain of ['192.0.2.1,198.51.100.1', '192.0.2.1, 198.51.100.1', ' 192.0.2.1 , 198.51.100.1 ']) {
    assert.equal(getClientIp(request({
      'x-forwarded-for': chain,
      'x-real-ip': '203.0.113.1',
    })), '192.0.2.1');
  }

  assert.equal(getClientIp(request({ 'x-forwarded-for': '::FFFF:c000:0201, 198.51.100.1' })), '192.0.2.1');
});

test('missing and malformed forwarding fields fall back to valid real-IP and socket addresses', () => {
  for (const value of [undefined, '', ' ', 'unknown', ['192.0.2.99'], '999.0.0.1', ',192.0.2.99']) {
    assert.equal(getClientIp(request({
      'x-forwarded-for': value,
      'x-real-ip': ' 203.0.113.1 ',
    })), '203.0.113.1');
    assert.equal(getClientIp(request({ 'x-forwarded-for': value }, '::ffff:192.0.2.1')), '192.0.2.1');
  }

  assert.equal(getClientIp(request({ 'x-real-ip': '2001:db8::1,198.51.100.1' })), '2001:db8::1');
  assert.equal(getClientIp(request({}, undefined)), '127.0.0.1');
  assert.equal(getClientIp({
    headers: {},
    socket: {},
  }), null);
  assert.equal(getClientIp(request({ 'x-real-ip': ['203.0.113.1'] }, 'invalid')), null);
});

mock.module('../lib/context.js', {
  namedExports: {
    LOGGER: {
      log() {},
      error() {},
    },
  },
});
const { ServerState } = await import('../lib/utils/ServerState.js');

test('legacy IP bans match canonical variants without rewriting history or querying on warm checks', async () => {
  let reads = 0;
  const rows = ['::FFFF:c000:0201', '2001:0DB8:0:0:0:0:0:1'];

  const prisma = {
    bannedIp: {
      findMany: async () => {
        reads++;

        return rows.map((id) => ({ id }));
      },
      createMany: async ({ data }) => {
        rows.push(...data.map((row) => row.id));

        return { count: data.length };
      },
      deleteMany: async ({ where }) => {
        for (let i = rows.length - 1; i >= 0; i--) {
          if (where.id.in.includes(rows[i])) {
            rows.splice(i, 1);
          }
        }
      },
    },
  };

  assert.equal(await ServerState.isIpBanned(prisma, '192.0.2.1'), true);
  assert.equal(await ServerState.isIpBanned(prisma, '::ffff:192.0.2.1'), true);
  assert.equal(await ServerState.isIpBanned(prisma, '2001:db8::1'), true);
  assert.equal(await ServerState.isIpBanned(prisma, '203.0.113.1'), false);
  assert.equal(reads, 1);
  assert.deepEqual(await ServerState.getBannedIps(prisma), ['::FFFF:c000:0201', '2001:0DB8:0:0:0:0:0:1']);
  await ServerState.addBannedIps(prisma, ['198.51.100.1']);
  assert.equal(await ServerState.isIpBanned(prisma, '::ffff:198.51.100.1'), true);
  await ServerState.removeBannedIps(prisma, ['::FFFF:c000:0201']);
  assert.equal(await ServerState.isIpBanned(prisma, '192.0.2.1'), false);
  assert.equal(await ServerState.isIpBanned(prisma, '2001:db8::1'), true);
  assert.equal(reads, 1);
});
