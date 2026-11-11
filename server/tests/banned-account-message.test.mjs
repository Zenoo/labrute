import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mock, test } from 'node:test';
import i18next from 'i18next';

mock.module('../lib/context.js', { namedExports: {
  GLOBAL: {}, LOGGER: { log() {}, error() {} }, DISCORD: () => ({}),
} });
const { bannedAccountMessage } = await import('../lib/utils/user/bannedAccountMessage.js');
const { auth } = await import('../lib/utils/auth.js');
await i18next.init({ lng: 'en', resources: Object.fromEntries(['en', 'fr'].map((lang) => [lang, {
  translation: JSON.parse(readFileSync(new URL(`../i18n/${lang}.json`, import.meta.url), 'utf8')),
}])) });
const id = '11111111-1111-4111-8111-111111111111';
const code = '22222222-2222-4222-8222-222222222222';
const user = { id, lang: 'en', bannedAt: new Date(), banReason: 'multipleAccounts', banAppealCode: code };

test('ban notices include the stable case reference and localized Discord appeal instructions', () => {
  const message = bannedAccountMessage(user);
  assert.match(message, new RegExp(`MC-${code}`));
  assert.match(message, /Multiple accounts/);
  assert.match(message, /appealing on Discord/);
  assert.match(bannedAccountMessage({ ...user, lang: 'fr' }), /Code de recours/);
  assert.match(bannedAccountMessage({ ...user, banAppealCode: null }), new RegExp(`USER-${id}`));
});

test('authentication returns the case appeal code using its existing account query', async () => {
  let queries = 0;
  const db = { $queryRaw: async () => { queries++; return [user]; } };
  await assert.rejects(auth(db, { headers: {
    authorization: `Basic ${Buffer.from(`${id}:test-token`).toString('base64')}`,
  } }), (error) => error.message.includes(`MC-${code}`));
  assert.equal(queries, 1);
});
