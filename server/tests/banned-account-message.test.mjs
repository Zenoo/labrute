import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mock, test } from 'node:test';
import i18next from 'i18next';
import { formatAppealCode, parseAppealCode } from '@labrute/core';

mock.module('../lib/context.js', {
  namedExports: {
    GLOBAL: {},
    LOGGER: {
      log() {},
      error() {},
    },
    DISCORD: () => ({}),
  },
});
const { bannedAccountMessage } = await import('../lib/utils/user/bannedAccountMessage.js');
const { auth } = await import('../lib/utils/auth.js');

await i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: Object.fromEntries(['en', 'fr'].map((lang) => [lang, {
    translation: JSON.parse(readFileSync(new URL(`../i18n/${lang}.json`, import.meta.url), 'utf8')),
  }])),
});
const id = '11111111-1111-4111-8111-111111111111';
const code = '22222222-2222-4222-8222-222222222222';

const user = {
  id,
  appealReference: '0123456789ABCDEF',
  lang: 'en',
  bannedAt: new Date(),
  banReason: 'multipleAccounts',
  banAppealCode: code,
};

test('ban notices include a short account reference and localized Discord appeal instructions', () => {
  const message = bannedAccountMessage(user);

  assert.ok(message.includes('AP-0123456789ABCDEF'));
  assert.notEqual(bannedAccountMessage({
    ...user,
    appealReference: 'FEDCBA9876543210',
  }), message);
  assert.match(message, /Multiple accounts/);
  assert.match(message, /appealing on Discord/);

  const frenchMessage = bannedAccountMessage({
    ...user,
    lang: 'fr',
  });

  assert.match(frenchMessage, /Votre compte/);
  assert.ok(frenchMessage.includes('AP-0123456789ABCDEF'));
  assert.ok(bannedAccountMessage({
    ...user,
    banAppealCode: null,
  }).includes('AP-0123456789ABCDEF'));
});

test('appeal parsing preserves both identities and still accepts legacy case and USER codes', () => {
  const composite = formatAppealCode(id, code);

  assert.deepEqual(parseAppealCode(' ap-0123456789abcdef '), {
    caseCode: null,
    userId: null,
    reference: '0123456789ABCDEF',
  });
  assert.equal(parseAppealCode('AP-0'), null);
  assert.equal(parseAppealCode('AP-ZZZZZZ'), null);

  assert.deepEqual(parseAppealCode(` ${composite.toUpperCase()} `), {
    caseCode: `MC-${code}`,
    userId: id,
  });
  assert.deepEqual(parseAppealCode(`MC-${code}`), {
    caseCode: `MC-${code}`,
    userId: null,
  });
  assert.deepEqual(parseAppealCode(`USER-${id}`), {
    caseCode: null,
    userId: id,
  });

  for (const invalid of [`MC-${code}/USER-invalid`, `${composite}/extra`, `MC-${code}/`, 'garbage']) {
    assert.equal(parseAppealCode(invalid), null);
  }
});

test('authentication returns the case appeal code using its existing account query', async () => {
  let queries = 0;

  const db = {
    $queryRaw: async () => {
      queries++;

      return [user];
    },
  };

  await assert.rejects(auth(db, {
    headers: {
      authorization: `Basic ${Buffer.from(`${id}:test-token`).toString('base64')}`,
    },
  }), (error) => error.message.includes('AP-0123456789ABCDEF'));
  assert.equal(queries, 1);
});
