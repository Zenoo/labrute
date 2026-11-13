import assert from 'node:assert/strict';
import { test } from 'node:test';
import { scoreMultipleAccountGroup } from '../lib/utils/multipleAccountScore.js';

const metrics = (overrides = {}) => ({
  sharedBrowserAccounts: 4,
  repeatedAccounts: 0,
  sharedVisitorAccounts: 0,
  crossNetworkAccounts: 0,
  ...overrides,
});

test('browser evidence grows with recurrence and corroboration, and never claims certainty', () => {
  assert.equal(scoreMultipleAccountGroup('browser', 4, metrics()).percentage, 45);
  assert.equal(scoreMultipleAccountGroup('browser', 4, metrics({
    repeatedAccounts: 4,
    sharedVisitorAccounts: 4,
  })).percentage, 80);
  assert.equal(scoreMultipleAccountGroup('browser', 4, metrics({
    repeatedAccounts: 4,
    sharedVisitorAccounts: 4,
    crossNetworkAccounts: 4,
  })).percentage, 95);
});

test('a small linked subgroup cannot give a large network group a high score', () => {
  const score = scoreMultipleAccountGroup('fingerprint-ip', 31, metrics({
    repeatedAccounts: 31,
    sharedVisitorAccounts: 31,
  }));

  assert.equal(score.percentage, 40);
  assert.ok(!score.factors.some((factor) => factor.key === 'shared-visitor'));
  assert.equal(score.factors.find((factor) => factor.key === 'shared-browser').points, 5);
});

test('correlated device anchors are not added together', () => {
  assert.equal(scoreMultipleAccountGroup('fingerprint-ip', 31, metrics({
    sharedBrowserAccounts: 31,
  })).percentage, 45);
});

test('isolated, missing, nonfinite and out-of-range support stays bounded', () => {
  assert.equal(scoreMultipleAccountGroup('browser', 4, metrics({
    sharedBrowserAccounts: 1,
    repeatedAccounts: -5,
    sharedVisitorAccounts: NaN,
    crossNetworkAccounts: Infinity,
  })).percentage, 0);
  assert.equal(scoreMultipleAccountGroup('browser', 1, metrics()).percentage, 0);
  assert.equal(scoreMultipleAccountGroup('browser', 4, metrics({ sharedBrowserAccounts: 999 })).percentage, 45);
});
