import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SkillByName, skills, StepType, weapons } from '@labrute/core';
import { FightModifier, SkillName } from '@labrute/prisma';
import { playFighterTurn } from '../lib/utils/fight/fightMethods.js';

const skill = (name, overrides = {}) => ({
  ...structuredClone(skills[name]),
  tier: 1,
  ...overrides,
});

const fighter = (overrides = {}) => ({
  id: 'fighter',
  index: 0,
  team: 'L',
  name: 'fighter',
  type: 'brute',
  hp: 1000,
  maxHp: 1000,
  strength: 5,
  agility: 5,
  speed: 5,
  criticalChance: 0,
  criticalDamage: 1,
  regeneration: 0,
  initiative: 0,
  hitSpeed: 1,
  tempo: 1,
  baseDamage: 5,
  counter: 0,
  reversal: 0,
  combo: 0,
  deflect: 0,
  block: 0,
  accuracy: 1,
  armor: 0,
  disarm: 0,
  weaponGrip: 0,
  sabotage: 0,
  evasion: 0,
  reach: 0,
  size: 1,
  determination: 0,
  resistant: 0,
  ironHead: 0,
  retryAttack: false,
  bodybuilder: false,
  survival: false,
  balletShoes: false,
  fastMetabolism: null,
  skills: {},
  weapons: {},
  reloadableSkills: { fierceBrute: skill(SkillName.fierceBrute) },
  reloadableWeapons: {},
  shield: false,
  activeSkills: [],
  activeWeapon: null,
  keepWeaponChance: 0,
  poisonedBy: null,
  trapped: false,
  hitBy: {},
  ...overrides,
});

const reloads = (remainingSkill, opponentOverrides = {}, fighterOverrides = {}) => {
  const current = fighter({
    skills: { reload: skill(SkillName.reload), [remainingSkill.name]: remainingSkill },
    ...fighterOverrides,
  });
  const opponent = fighter({
    id: 'opponent',
    index: 1,
    team: 'R',
    ...opponentOverrides,
  });
  const fightData = {
    fighters: [current, opponent],
    initialFighters: [],
    modifiers: { [FightModifier.alwaysUseSupers]: true },
    steps: [],
    initiative: 0,
    winner: null,
    loser: null,
    overtime: false,
  };
  playFighterTurn(fightData, {}, {});
  return fightData.steps.some((step) => step.a === StepType.Reload);
};

test('Mimic does not block reload without an opponent super to copy', () => {
  assert.equal(reloads(skill(SkillName.mimic)), true);
  assert.equal(reloads(skill(SkillName.mimic), {
    skills: { mimic: skill(SkillName.mimic) },
  }), true);
  assert.equal(reloads(skill(SkillName.mimic), {
    skills: { bomb: skill(SkillName.bomb, { uses: [0, 0, 0] }) },
  }), true);
});

test('Mimic ignores dead opponents and backups that have not arrived', () => {
  for (const overrides of [{ hp: 0 }, { arrivesAtInitiative: 10 }]) {
    assert.equal(reloads(skill(SkillName.mimic), {
      skills: { bomb: skill(SkillName.bomb) },
      ...overrides,
    }), true);
  }
});

test('Mimic ignores supers whose copy conditions cannot be met', () => {
  for (const name of [SkillName.flashFlood, SkillName.tamer, SkillName.treat]) {
    assert.equal(reloads(skill(SkillName.mimic), {
      skills: { [name]: skill(name) },
    }), true);
  }
});

test('unusable weapon and pet skills do not block reload', () => {
  for (const name of [
    SkillName.flashFlood,
    SkillName.thief,
    SkillName.cryOfTheDamned,
    SkillName.hypnosis,
  ]) {
    assert.equal(reloads(skill(name, { canReload: true })), true, name);
  }
});

test('pet skills still block reload with a valid target', () => {
  for (const name of [SkillName.cryOfTheDamned, SkillName.hypnosis]) {
    assert.equal(reloads(skill(name, { canReload: true }), { type: 'pet' }), false);
    assert.equal(reloads(skill(name, { canReload: true }), {
      type: 'pet',
      trapped: true,
    }), true);
  }
});

test('usable, exhausted and non-reloadable skills retain their behavior', () => {
  assert.equal(reloads(skill(SkillName.bomb)), false);
  assert.equal(reloads(skill(SkillName.bomb, { uses: [0, 0, 0] })), true);
  assert.equal(reloads(skill(SkillName.tragicPotion)), true);
  assert.equal(reloads(skill(SkillName.bomb, { tier: 2, uses: [1, 0, 1] })), true);
});

test('other reload prerequisites remain required', () => {
  assert.equal(reloads(skill(SkillName.mimic), {}, {
    skills: { mimic: skill(SkillName.mimic) },
  }), false, 'Reload requires the Reload skill');
  assert.equal(reloads(skill(SkillName.mimic), {}, {
    activeSkills: [skill(SkillName.fierceBrute)],
  }), false);
});

test('reload keeps non-reloadable passive skill tiers', () => {
  const chefT3 = skill(SkillName.chef, {
    tier: 3,
    canReload: false,
  });
  const exhaustedReloadable = skill(SkillName.bomb, {
    uses: [0, 0, 0],
    canReload: true,
  });

  const current = fighter({
    skills: {
      [SkillName.reload]: skill(SkillName.reload),
      [SkillName.chef]: chefT3,
      [SkillName.bomb]: exhaustedReloadable,
    },
  });
  const opponent = fighter({
    id: 'opponent',
    index: 1,
    team: 'R',
  });
  const fightData = {
    fighters: [current, opponent],
    initialFighters: [],
    modifiers: { [FightModifier.alwaysUseSupers]: true },
    steps: [],
    initiative: 0,
    winner: null,
    loser: null,
    overtime: false,
  };

  playFighterTurn(fightData, {}, {});

  assert.equal(fightData.steps.some((step) => step.a === StepType.Reload), true);
  assert.equal(current.skills[SkillName.chef]?.tier, 3);
});

const reloadFight = (tier) => {
  const current = fighter({
    skills: { [SkillName.reload]: skill(SkillName.reload, { tier }) },
  });
  const opponent = fighter({ id: 'opponent', index: 1, team: 'R' });
  const fightData = {
    fighters: [current, opponent],
    initialFighters: [],
    modifiers: {},
    steps: [],
    initiative: 0,
    winner: null,
    loser: null,
    overtime: false,
  };
  return { current, fightData };
};

test('Reload triggers 1/2/3 times per fight depending on its tier', () => {
  for (const tier of [1, 2, 3]) {
    const { current, fightData } = reloadFight(tier);
    for (let turn = 0; turn < 6; turn++) {
      // Spend the restored perk so that the next turn can reload again
      delete current.skills[SkillName.fierceBrute];
      current.activeSkills = [];
      fightData.fighters = [current, ...fightData.fighters.filter((f) => f !== current)];
      playFighterTurn(fightData, {}, {});
    }
    const reloadSteps = fightData.steps.filter((step) => step.a === StepType.Reload);
    assert.equal(reloadSteps.length, tier, `tier ${tier}`);
    assert.equal(current.skills[SkillName.reload], undefined, 'Exhausted Reload is removed');
  }
});

test('Reload spends one use per trigger, counts as a used skill and never reloads itself', () => {
  const { current, fightData } = reloadFight(3);
  // Reload a weapon only, so that no other skill use is counted
  current.reloadableSkills = {};
  current.reloadableWeapons = { fan: { ...weapons.fan, tier: 1 } };
  const stats = { fighter: { userId: 'fighter' } };
  playFighterTurn(fightData, stats, {});
  assert.equal(stats.fighter.skillsUsed, 1);
  const reloadSkill = current.skills[SkillName.reload];
  assert.equal(reloadSkill.uses[2], 2);
  const step = fightData.steps.find((s) => s.a === StepType.Reload);
  assert.ok(step);
  assert.equal(step.s.some((s) => s.i === SkillByName.reload), false);
});

test('Reload is a non-reloadable passive with 1/2/3 uses', () => {
  assert.equal(skills.reload.type, 'passive');
  assert.deepEqual(skills.reload.uses, [1, 2, 3]);
  assert.equal(skills.reload.canReload, false);
  assert.ok(skills.reload.odds > 0);
});