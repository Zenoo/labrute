import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { test } from 'node:test';
import { fightScenarios, runScenario } from './fixtures/fight-scenarios.mjs';

// Includes instructions, full combat state, stats, achievements, turn count and RNG calls
// for 30 seeded fights. Refreshed for d968ee84: Reload and Rewind are supers, so the
// all-super fixtures now include both and consume a different random sequence.
const golden = {
  ordinary: '237f18544e765231553a1809aebd71d03dd1ec9d30eec6d6dd9b9176b8c35e05',
  'pets-supers-backups': '23d057ce400d5340b6dc642f447aced412774aaee4910ae2192a9d70d1451d29',
  'clan-16': '596a2739ccf9c162b29c33fbe8e4a27d4c7fa2a2d744c384a6efbabf67fdc964',
  boss: '71f975d877e3aca200d4427f3a6f447ae7c50720784b0d0fd78bae5d67db81f3',
  rewind: 'ac816d3c17c957cddf189bf75e9f70b8a62bb46118fb1b060df0c97749d961cb',
  reload: 'ed4dcf3ef1da5c4860fbe047106e8010fc097bcdb7344bd0f16313883025790a',
};

const digest = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');

for (const scenario of fightScenarios) {
  test(`${scenario.name}: 30 seeded fights retain deterministic outcomes`, () => {
    const outcomes = [];

    for (let seed = 1; seed <= 30; seed++) {
      const result = runScenario(scenario, seed);

      assert.ok(result.fight.loser && result.turns < 2000, 'seeded fight finishes');
      assert.ok(result.fight.fighters.every((fighter) => Number.isFinite(fighter.hp)
        && Number.isFinite(fighter.initiative)), 'combat values remain finite');
      assert.equal(digest(result), digest(runScenario(scenario, seed)), 'same seed replays identically');
      outcomes.push(digest(result));
    }

    assert.equal(digest(outcomes), golden[scenario.name]);
  });
}
