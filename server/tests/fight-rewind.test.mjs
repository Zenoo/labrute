import assert from 'node:assert/strict';
import { test } from 'node:test';
import { skills, weapons, SkillId, SkillByName, ExtraTieredSkillData, StepType } from '@labrute/core';
import { FightModifier, SkillName } from '@labrute/prisma';
import { checkDeaths, orderFighters, playFighterTurn } from '../lib/utils/fight/fightMethods.js';
import { createFightRewind, requestFightRewind, withFightRewind } from '../lib/utils/fight/fightRewind.js';
import { getFighterStat } from '../lib/utils/fight/getFighterStat.js';

const skill = (name, tier = 1) => ({ ...structuredClone(skills[name]), tier });
const fighter = (index, overrides = {}) => ({
  id: `fighter-${index}`, index, team: index === 1 ? 'L' : 'R',
  name: `Fighter ${index}`, type: 'brute', hp: 200, maxHp: 200,
  strength: 10, agility: 5, speed: 5, criticalChance: 0, criticalDamage: 1,
  regeneration: 0, initiative: 0, hitSpeed: 0, tempo: 1, baseDamage: 10,
  counter: 0, reversal: 0, combo: 0, deflect: 0, block: 0, accuracy: 1,
  armor: 0, disarm: 0, weaponGrip: 0, sabotage: 0, evasion: 0,
  reach: 0, size: 1, determination: 0, resistant: 0, ironHead: 0,
  retryAttack: false, bodybuilder: false, survival: false, balletShoes: false,
  fastMetabolism: null, skills: {}, weapons: {}, reloadableSkills: {},
  reloadableWeapons: {}, shield: false, activeSkills: [],
  activeWeapon: null, keepWeaponChance: 0, poisonedBy: null, trapped: false, hitBy: {},
  ...overrides,
});
const fixture = (tier = 1) => {
  const fighters = [
    fighter(1, { skills: { rewind: skill(SkillName.rewind, tier) } }),
    fighter(2),
  ];
  return {
    fighters, initialFighters: structuredClone(fighters), modifiers: {},
    steps: [{ a: StepType.Arrive, f: 1 }, { a: StepType.Arrive, f: 2 }],
    initiative: 0, winner: null, loser: null, overtime: false,
    rewind: createFightRewind(fighters),
  };
};

const simulateTurn = (fight, stats = {}, achievements = {}, lethal = false) => {
  withFightRewind(fight, stats, achievements, () => {
    const caster = fight.fighters.find((f) => f.index === 1);
    caster.hp -= lethal ? 1000 : 1;
    fight.steps.push({ a: StepType.Hit, f: 2, t: 1, d: lethal ? 1000 : 1 });
    requestFightRewind(fight);
  }, (caster) => { caster.initiative -= 3; });
};

test('Rewind has stable appended IDs and is a non-reloadable once-per-fight passive in the normal pool', () => {
  assert.equal(SkillByName.rewind, SkillId.deity + 1);
  assert.equal(StepType.Rewind, StepType.Reload + 1);
  assert.equal(skills.rewind.type, 'passive');
  assert.ok(skills.rewind.odds > 0);
  assert.equal(skills.rewind.canReload, false);
  assert.deepEqual(skills.rewind.uses, [1, 1, 1]);
  assert.deepEqual(ExtraTieredSkillData.rewind, [3, 4, 5]);
});

test('tiers rewind exactly 3/4/5 playFighterTurn boundaries and preserve the forward instruction log', () => {
  for (let tier = 1; tier <= 3; tier++) {
    const fight = fixture(tier);
    for (let turn = 0; turn < 6; turn++) simulateTurn(fight);
    assert.equal(fight.fighters[0].hp, 194);
    simulateTurn(fight, {}, {}, true);
    const step = fight.steps.at(-1);
    assert.deepEqual(step, { a: StepType.Rewind, f: 1, n: tier + 2, t: tier + 2 });
    assert.equal(fight.fighters[0].hp, 194 + tier + 1);
    assert.equal(fight.fighters[0].initiative, -3);
    assert.equal(fight.steps.length, 10);
    assert.equal(fight.fighters[0].skills.rewind, undefined);
    simulateTurn(fight, {}, {}, true);
    checkDeaths(fight, {});
    assert.equal(fight.steps.filter((s) => s.a === StepType.Rewind).length, 1);
    assert.equal(fight.loser, 'fighter-1');
  }
});

test('an early lethal hit clamps to available history, restores all mutable fight state and discards future stats', () => {
  const fight = fixture(3);
  const pet = fighter(3, { type: 'pet', team: 'L', master: 'fighter-1' });
  fight.fighters.push(pet);
  const stats = { 'fighter-1': { userId: 'user', hits: 2 } };
  const achievements = { 'fighter-1': { userId: 'user', achievements: {} } };
  const before = structuredClone(fight.fighters);
  withFightRewind(fight, stats, achievements, () => {
    fight.fighters[0].hp = 0;
    fight.fighters[0].shield = true;
    fight.fighters[1].team = 'L';
    fight.fighters[1].trapped = true;
    fight.fighters[1].skills.bomb = skill(SkillName.bomb);
    fight.fighters.pop();
    fight.initiative = 100;
    fight.loser = 'fighter-1';
    stats['fighter-1'].hits = 100;
    stats.extra = { userId: 'extra' };
    achievements.extra = { userId: 'extra', achievements: {} };
    fight.steps.push({ a: StepType.Hit, f: 2, t: 1, d: 200 });
    requestFightRewind(fight);
    assert.fail('A lethal hit must interrupt the rest of the turn');
  }, () => {});
  delete before[0].skills.rewind;
  assert.deepEqual(fight.fighters, before);
  assert.equal(fight.initiative, 0);
  assert.equal(fight.loser, null);
  assert.deepEqual(stats, { 'fighter-1': { userId: 'user', hits: 2, skillsUsed: 1 } });
  assert.equal(achievements.extra, undefined);
  assert.deepEqual(fight.steps.at(-1), { a: StepType.Rewind, f: 1, n: 1, t: 1 });
});

test('another caster cannot restore a consumed Rewind and discarded turns are removed from the server timeline', () => {
  const fight = fixture(3);
  fight.fighters[1].skills.rewind = skill(SkillName.rewind, 3);
  simulateTurn(fight);
  simulateTurn(fight);
  simulateTurn(fight, {}, {}, true);
  assert.equal(fight.steps.at(-1).t, 3);
  withFightRewind(fight, {}, {}, () => {
    fight.fighters[1].hp = 0;
    fight.steps.push({ a: StepType.Hit, f: 1, t: 2, d: 200 });
    requestFightRewind(fight);
  }, () => {});
  assert.equal(fight.steps.at(-1).t, 1);
  assert.equal(fight.fighters[0].skills.rewind, undefined);
  assert.equal(fight.fighters[1].skills.rewind, undefined);
});

test('a resurrected pet can die again even though its old Death instruction remains in the log', () => {
  const fight = fixture();
  const pet = fighter(3, { type: 'pet', team: 'L', master: 'fighter-1' });
  fight.fighters.push(pet);
  withFightRewind(fight, {}, {}, () => {
    pet.hp = 0;
    checkDeaths(fight, {});
  }, () => {});
  simulateTurn(fight, {}, {}, true);
  const restoredPet = fight.fighters.find((f) => f.index === 3);
  assert.equal(restoredPet.hp, 200);
  restoredPet.hp = 0;
  checkDeaths(fight, {});
  assert.equal(fight.steps.filter((s) => s.a === StepType.Death && s.f === 3).length, 2);
});

test('fights without Rewind never clone snapshots and unrelated errors are not swallowed', () => {
  const fight = fixture();
  delete fight.fighters[0].skills.rewind;
  fight.rewind = createFightRewind(fight.fighters);
  assert.equal(fight.rewind, null);
  let ran = false;
  const noClone = new Proxy({}, { ownKeys() { throw new Error('Must not clone'); } });
  withFightRewind(fight, noClone, noClone, () => { ran = true; }, () => {});
  assert.equal(ran, true);
  const error = new Error('Real failure');
  assert.throws(() => withFightRewind(fixture(), {}, {}, () => { throw error; }, () => {}),
    (failure) => failure === error);
});

test('Rewind availability is decided at fight creation and disabled after the last use', () => {
  const fight = fixture();
  delete fight.fighters[0].skills.rewind;
  fight.rewind = createFightRewind(fight.fighters);
  fight.fighters[0].skills = new Proxy({}, {
    get() { assert.fail('Ordinary fights must not scan fighters during turns'); },
  });
  for (let turn = 0; turn < 100; turn++) {
    withFightRewind(fight, {}, {}, () => {}, () => {});
    requestFightRewind(fight);
  }

  const exhausted = fixture();
  simulateTurn(exhausted, {}, {}, true);
  let scans = 0;
  exhausted.fighters[0].skills = new Proxy({}, {
    get() { scans++; return undefined; },
    ownKeys() { assert.fail('Exhausted Rewind must not copy snapshots'); },
  });
  for (let turn = 0; turn < 100; turn++) {
    withFightRewind(exhausted, {}, {}, () => {}, () => {});
    requestFightRewind(exhausted);
  }
  assert.equal(scans, 1);
});

test('optimized snapshots isolate all mutable perk data and preserve shared active/inventory aliases', () => {
  const fight = fixture(3);
  const caster = fight.fighters[0];
  const bomb = skill(SkillName.bomb);
  const weapon = { ...weapons.scimitar, tier: 2, sabotaged: 25, damaged: 0.2 };
  caster.skills.bomb = bomb;
  caster.reloadableSkills.bomb = bomb;
  caster.activeSkills.push(bomb);
  caster.weapons.scimitar = weapon;
  caster.reloadableWeapons.scimitar = weapon;
  caster.activeWeapon = weapon;
  caster.hitBy[2] = 2;
  const before = structuredClone(caster);
  delete before.skills.rewind;
  withFightRewind(fight, {}, {}, () => {
    bomb.uses[0] = 0;
    weapon.tier = 3;
    weapon.damaged = 1;
    weapon.sabotaged = 500;
    caster.hitBy[2] = 100;
    caster.activeSkills.length = 0;
    delete caster.weapons.scimitar;
    caster.hp = 0;
    fight.steps.push({ a: StepType.Hit, f: 2, t: 1, d: 200 });
    requestFightRewind(fight);
  }, () => {});
  const restored = fight.fighters[0];
  assert.deepEqual(restored, before);
  assert.notEqual(restored, caster);
  assert.notEqual(restored.skills.bomb, bomb);
  assert.notEqual(restored.skills.bomb.uses, bomb.uses);
  assert.equal(restored.skills.bomb, restored.reloadableSkills.bomb);
  assert.equal(restored.skills.bomb, restored.activeSkills[0]);
  assert.notEqual(restored.activeWeapon, weapon);
  assert.equal(restored.activeWeapon, restored.weapons.scimitar);
  assert.equal(restored.activeWeapon, restored.reloadableWeapons.scimitar);
  assert.equal(restored.activeWeapon.damage, weapon.damage, 'Static tier arrays are shared, not copied');
  assert.equal(restored.activeWeapon.types, weapon.types);
});

test('real lethal melee triggers Rewind, grants three normal initiative turns, and survival goes first', () => {
  const previousRandom = Math.random;
  Math.random = () => 0.5;
  try {
    const fight = fixture();
    fight.fighters.reverse();
    const caster = fight.fighters[1];
    caster.hp = 1;
    const initialInitiative = caster.initiative;
    const normalTurn = (getFighterStat(false, caster, 'tempo') * caster.tempo + 0.05)
      * (1 - caster.hitSpeed);
    playFighterTurn(fight, {}, {});
    assert.equal(fight.steps.at(-1).a, StepType.Rewind);
    const restoredCaster = fight.fighters.find((f) => f.index === 1);
    assert.equal(restoredCaster.hp, 1);
    assert.equal(restoredCaster.initiative, initialInitiative - 3 * normalTurn);
    assert.equal(fight.loser, null);
    orderFighters(fight);
    assert.equal(fight.fighters[0].index, 1);

    const survivalFight = fixture();
    survivalFight.fighters.reverse();
    survivalFight.fighters[1].hp = 1;
    survivalFight.fighters[1].survival = true;
    playFighterTurn(survivalFight, {}, {});
    assert.equal(survivalFight.steps.some((s) => s.a === StepType.Survive), true);
    assert.equal(survivalFight.steps.some((s) => s.a === StepType.Rewind), false);
  } finally {
    Math.random = previousRandom;
  }
});

test('lethal poison and area damage interrupt their turn before recording deaths or a loss', () => {
  const previousRandom = Math.random;
  Math.random = () => 0.5;
  try {
    const poisoned = fixture();
    poisoned.fighters[0].hp = 1;
    poisoned.fighters[0].poisonedBy = 2;
    playFighterTurn(poisoned, {}, {});
    assert.ok(poisoned.steps.some((s) => s.a === StepType.Poison));
    assert.equal(poisoned.steps.at(-1).a, StepType.Rewind);
    assert.equal(poisoned.loser, null);
    assert.equal(poisoned.fighters.find((f) => f.index === 1).hp, 1);

    const bombed = fixture();
    bombed.modifiers[FightModifier.alwaysUseSupers] = true;
    bombed.fighters.reverse();
    bombed.fighters[0].skills.bomb = skill(SkillName.bomb);
    bombed.fighters[1].hp = 1;
    playFighterTurn(bombed, {}, {});
    assert.ok(bombed.steps.some((s) => s.a === StepType.Bomb));
    assert.equal(bombed.steps.at(-1).a, StepType.Rewind);
    assert.equal(bombed.steps.some((s) => s.a === StepType.Death), false);
    assert.equal(bombed.loser, null);
  } finally {
    Math.random = previousRandom;
  }
});
