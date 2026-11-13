import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  findSharedNameFamily, normalizeAccountName,
} from '../lib/utils/multipleAccountSignals.js';

test('name families normalize accents, Unicode, punctuation and numeric suffixes conservatively', () => {
  assert.equal(normalizeAccountName('Zénoo-001'), 'zenoo');
  assert.equal(normalizeAccountName('ZENOO_2'), 'zenoo');
  assert.equal(normalizeAccountName('勇敢的战士01'), '勇敢的战士');
  assert.equal(normalizeAccountName('player123'), null);
  assert.equal(normalizeAccountName('Bob123'), null);
  assert.equal(normalizeAccountName('12345'), null);
  assert.equal(normalizeAccountName('a'.repeat(65)), null);
  assert.notEqual(normalizeAccountName('ZenooAlpha'), normalizeAccountName('ZenooBeta'));
});

test('brute families count different owners rather than the number of similarly named brutes', () => {
  const names = Array.from({ length: 12 }, (_, index) => ({
    userId: 'owner-a',
    name: `Warlock${index}`,
    kind: 'brute',
  }));

  assert.equal(findSharedNameFamily(names, 'brute').accounts, 0);
  names.push({
    userId: 'owner-b',
    name: 'Warlock99',
    kind: 'brute',
  });
  assert.equal(findSharedNameFamily(names, 'brute').accounts, 2);
  assert.equal(findSharedNameFamily(names, 'brute').examples.length, 2);
  assert.equal(findSharedNameFamily(names, 'user').accounts, 0);
});
