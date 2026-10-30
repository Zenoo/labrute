import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { test } from 'node:test';
import { fightScenarios, runScenario } from './fixtures/fight-scenarios.mjs';

// Captured before the performance changes: includes instructions, full combat state,
// stats, achievements, turn count and RNG call count for each of 30 seeded fights.
// Regenerated when Reload became a skill (fighters no longer carry `canReload`).
const golden = {
  ordinary: '237f18544e765231553a1809aebd71d03dd1ec9d30eec6d6dd9b9176b8c35e05',
  'pets-supers-backups': 'f21214636fc34e532cfe05fa70a437f68fbb33cdd2c149831adfba544d1ebbcd',
  'clan-16': '596a2739ccf9c162b29c33fbe8e4a27d4c7fa2a2d744c384a6efbabf67fdc964',
  boss: 'ff334ec8d9ceca9c9900a26b2eb65cdf809be2bb0338c3f4375d3a37c6438432',
  rewind: 'f10f316197f680d8e1b6658a95cad53c3f0656594b7bd2b9f3d0f5504b6dc04b',
  reload: '56412199fcc309705f81c3147ce1b522dabfc475560b9310ff977427ef706d51',
};
const digest = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');

for (const scenario of fightScenarios) {
  test(`${scenario.name}: 30 seeded fights exactly match the unoptimized algorithm`, () => {
    const outcomes = [];
    for (let seed = 1; seed <= 30; seed++) outcomes.push(digest(runScenario(scenario, seed)));
    assert.equal(digest(outcomes), golden[scenario.name]);
  });
}
