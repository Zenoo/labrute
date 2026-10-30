import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fightScenarios, runScenario } from './fixtures/fight-scenarios.mjs';

const digest = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const baseline = process.env.FIGHT_BENCH_BASELINE
  ? JSON.parse(readFileSync(process.env.FIGHT_BENCH_BASELINE, 'utf8')) : null;
const report = {};
const iterations = Number(process.env.FIGHT_BENCH_ITERATIONS ?? 200);
assert.ok(Number.isInteger(iterations) && iterations > 0,
  'FIGHT_BENCH_ITERATIONS must be a positive integer');
for (const scenario of fightScenarios) {
  const outcomes = [];
  for (let seed = 1; seed <= 30; seed++) {
    const result = runScenario(scenario, seed);
    outcomes.push(digest(result));
  }
  if (baseline) assert.deepEqual(outcomes, baseline[scenario.name].outcomes,
    `${scenario.name}: combat state, instructions, stats, achievements or random calls changed`);
  const times = [];
  for (let round = 0; round < 7; round++) {
    const start = performance.now();
    for (let index = 0; index < iterations; index++) runScenario(scenario, index % 30 + 1);
    times.push((performance.now() - start) / iterations);
  }
  times.sort((a, b) => a - b);
  const ms = times[Math.floor(times.length / 2)];
  report[scenario.name] = { ms, outcomes };
  const comparison = baseline ? ` (${((1 - ms / baseline[scenario.name].ms) * 100).toFixed(1)}% faster)` : '';
  console.log(`${scenario.name}: ${ms.toFixed(3)} ms/fight${comparison}`);
}
if (process.env.FIGHT_BENCH_OUTPUT) {
  writeFileSync(process.env.FIGHT_BENCH_OUTPUT, `${JSON.stringify(report, null, 2)}\n`);
}
