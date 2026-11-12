import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { StepType } from '@labrute/core';
import { translateFightStep } from '../src/utils/translateFightStep.ts';

const clientRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const localesRoot = path.join(clientRoot, 'src', 'i18n', 'locales');
// Other locales are filled in through Crowdin.
const locales = ['en'];

test('rewind fight log translation passes caster and actual turns', () => {
  const calls = [];

  const t = (key, options) => {
    calls.push({
      key,
      options,
    });

    return key;
  };

  const fighters = [{
    index: 7,
    type: 'brute',
    name: 'Rewinder',
  }];

  const result = translateFightStep(fighters, {
    a: StepType.Rewind,
    f: 7,
    n: 11,
    t: 4,
  }, t);

  assert.equal(result, 'fight.step.rewind');
  assert.deepEqual(calls, [{
    key: 'fight.step.rewind',
    options: {
      brute: 'Rewinder',
      turns: 4,
    },
  }]);
});

test('source locale rewind tooltips expose the use count and tiered rewind amount', async () => {
  for (const locale of locales) {
    const messages = JSON.parse(await readFile(
      path.join(localesRoot, locale, 'common.json'),
      'utf8',
    ));

    assert.ok(messages.rewind, `${locale}: missing skill name`);
    assert.ok(messages['rewind.desc'], `${locale}: missing skill description`);
    assert.match(messages['rewind.effect'], /<uses\s*\/>/, `${locale}: missing use-count slot`);
    assert.match(messages['rewind.effect'], /<stats\s*\/>/, `${locale}: missing tiered rewind slot`);
    assert.ok(messages['fight.step.rewind'], `${locale}: missing fight log`);
  }
});
