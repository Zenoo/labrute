import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { StepType } from '@labrute/core';
import { translateFightStep } from '../src/utils/translateFightStep.ts';

const clientRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(clientRoot, '..');
const localesRoot = path.join(clientRoot, 'src', 'i18n', 'locales');
// Other locales are filled in through Crowdin.
const locales = ['en'];

test('rewind fight log translation passes caster and actual turns', () => {
  const calls = [];
  const t = (key, options) => {
    calls.push({ key, options });
    return key;
  };
  const fighters = [{ index: 7, type: 'brute', name: 'Rewinder' }];
  const result = translateFightStep(fighters, {
    a: StepType.Rewind,
    f: 7,
    n: 11,
    t: 4,
  }, t);

  assert.equal(result, 'fight.step.rewind');
  assert.deepEqual(calls, [{
    key: 'fight.step.rewind',
    options: { brute: 'Rewinder', turns: 4 },
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

test('existing skill tooltip wires passive uses and extra tier values into effect text', async () => {
  const skills = await readFile(path.join(repoRoot, 'core', 'src', 'brute', 'skills.ts'), 'utf8');
  const tooltip = await readFile(
    path.join(clientRoot, 'src', 'components', 'Brute', 'SkillTooltip.tsx'),
    'utf8',
  );
  const rewindDefinition = skills.match(/\[SkillName\.rewind\]:\s*\{([\s\S]*?)\n\s+\},/);

  assert.ok(rewindDefinition, 'rewind skill definition exists');
  assert.match(rewindDefinition[1], /type:\s*'passive'/);
  assert.match(rewindDefinition[1], /uses:\s*\[1,\s*1,\s*1\]/);
  assert.match(skills, /\[SkillName\.rewind\]:\s*\[3,\s*4,\s*5\]/);

  assert.match(tooltip, /i18nKey=\{`\$\{skill\.name\}\.effect`\}/);
  assert.match(tooltip, /uses:\s*skill\.uses\s*\?\s*<TieredStat values=\{skill\.uses\} tier=\{tier\}\s*\/>/);
  assert.match(tooltip, /ExtraTieredSkillData\[skill\.name\]/);
  assert.match(tooltip, /getExtraTieredSkillStatProps\(\{\s*skill:\s*skill\.name,\s*tier\s*\}\)/);
});

test('blank rewind SVG placeholders exist for each skill tier', async () => {
  for (const tier of [1, 2, 3]) {
    const svg = await readFile(
      path.join(clientRoot, 'public', 'images', 'skills', `tier-${tier}`, 'rewind.svg'),
      'utf8',
    );
    assert.match(svg.trim(), /^<svg\b[^>]*\/>$/);
  }
});
