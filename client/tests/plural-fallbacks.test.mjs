import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import i18next from 'i18next';
import { withPluralFallbacks } from '../src/i18n/withPluralFallbacks.ts';

test('Russian hall plurals stay in Russian with the standard count API', async () => {
  const loadHall = (language) => JSON.parse(readFileSync(
    new URL(`../src/i18n/locales/${language}/hall.json`, import.meta.url), 'utf8',
  ));
  const instance = i18next.createInstance();
  await instance.init({
    lng: 'ru',
    fallbackLng: 'en',
    defaultNS: 'hall',
    resources: {
      ru: { hall: withPluralFallbacks(loadHall('ru'), 'ru') },
      en: { hall: loadHall('en') },
    },
  });

  for (const key of ['fightsLeft', 'missingRegistrations']) {
    for (const count of [0, 1, 2, 4, 5, 11, 21, 22, 25, 101, 1.5]) {
      const result = instance.t(key, { count, returnDetails: true });
      assert.equal(result.usedLng, 'ru', `${key}, count ${count}`);
      assert.match(result.res, /[а-яА-Я]/);
      if (new Intl.PluralRules('ru').select(count) !== 'one') {
        assert.ok(result.res.includes(String(count)));
      }
    }
  }
});

test('nested resources preserve explicit forms and do not mutate the input', () => {
  const resources = {
    nested: { item_one: 'one', item_few: 'few', item_other: 'other' },
    list: ['unchanged'],
    plain: 'unchanged',
  };
  const result = withPluralFallbacks(resources, 'ru');
  assert.deepEqual(result.nested, {
    item_one: 'one', item_few: 'few', item_many: 'other', item_other: 'other',
  });
  assert.equal(resources.nested.item_many, undefined);
  assert.deepEqual(result.list, resources.list);
  assert.equal(result.plain, 'unchanged');
});

test('languages with only one and other return the original resources', () => {
  const resources = { nested: { item_one: 'one', item_other: 'other' } };
  for (const language of ['en', 'de']) {
    assert.equal(withPluralFallbacks(resources, language), resources);
    assert.equal(withPluralFallbacks(resources, language), resources);
  }
});

test('extra categories follow the language without changing ordinal translations', () => {
  const arabic = withPluralFallbacks({
    item_zero: 'zero', item_one: 'one', item_other: 'other',
  }, 'ar');
  for (const category of new Intl.PluralRules('ar').resolvedOptions().pluralCategories) {
    const expected = ['zero', 'one'].includes(category) ? category : 'other';
    assert.equal(arabic[`item_${category}`], expected);
  }
  const resources = { place_ordinal_other: 'other' };
  assert.deepEqual(withPluralFallbacks(resources, 'ru'), resources);
});
