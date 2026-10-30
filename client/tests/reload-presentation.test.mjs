import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const clientRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const localesRoot = path.join(clientRoot, 'src', 'i18n', 'locales');
// Other locales are filled in through Crowdin.
const locales = ['en'];

test('source locale reload tooltips expose the tiered use count', async () => {
  for (const locale of locales) {
    const messages = JSON.parse(await readFile(
      path.join(localesRoot, locale, 'common.json'),
      'utf8',
    ));

    assert.ok(messages.reload, `${locale}: missing skill name`);
    assert.ok(messages['reload.desc'], `${locale}: missing skill description`);
    assert.match(messages['reload.effect'], /<uses\s*\/>/, `${locale}: missing use-count slot`);
  }
});

test('blank reload SVG placeholders exist for each skill tier', async () => {
  for (const tier of [1, 2, 3]) {
    const svg = await readFile(
      path.join(clientRoot, 'public', 'images', 'skills', `tier-${tier}`, 'reload.svg'),
      'utf8',
    );
    assert.match(svg.trim(), /^<svg\b[^>]*\/>$/);
  }
});
