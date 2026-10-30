import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from 'vite';
import { SkillById, SkillByName, SkillId, skills, StepType, WeaponById, WeaponByName } from '@labrute/core';
import { readFileSync } from 'node:fs';
import { Ticker } from 'pixi.js';
import { gsap } from 'gsap';

let server;
let seekFight;
let Fight;
let setAnimation;
const soughtStepTypes = new Set();

before(async () => {
  server = await createServer({
    configFile: false,
    plugins: [{
      name: 'forbid-seek-audio',
      enforce: 'pre',
      resolveId(id) {
        if (id === '@pixi/sound') return '\0seek-audio';
        const visual = id.match(/\/(displayDamage|displayHeal)(?:\.[jt]s)?$/);
        if (visual) return `\0seek-visual:${visual[1]}`;
      },
      load(id) {
        if (id === '\0seek-audio') {
          return `export const sound = new Proxy({}, {
            get() { throw new Error('Seeking must not access audio'); }
          });`;
        }
        if (id.startsWith('\0seek-visual:')) {
          return `export const ${id.split(':')[1]} = () => {
            throw new Error('Seeking must not display visual effects');
          };`;
        }
      },
    }],
    ssr: { external: ['@labrute/core', '@labrute/prisma'], noExternal: ['@pixi/sound'] },
    optimizeDeps: { noDiscovery: true, entries: [] },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  ({ Fight } = await server.ssrLoadModule('/src/utils/fight/Fight.ts'));
  const { FighterHolder } = await server.ssrLoadModule('/src/utils/fight/FighterHolder.ts');
  setAnimation = FighterHolder.prototype.setAnimation;
  seekFight = async (fighters, steps, position, isClanWar) => {
    if (!Number.isInteger(position) || position < 0 || position > steps.length) {
      throw new Error('Invalid seek position');
    }
    const poses = new Map(fighters.map((fighter) => [fighter, fighter.animation.seekPose]));
    const noRender = new Proxy({}, {
      get() { throw new Error('Seeking must not access rendering or audio'); },
    });
    const context = {
      fighters,
      fight: { clanWarId: isClanWar ? 'war' : null },
      speed: { current: 2 },
      app: noRender,
      spritesheets: noRender,
      renderer: noRender,
      t: () => { throw new Error('Seeking must not translate visual effects'); },
      shouldAbort: () => false,
      steps,
    };
    const fight = new Fight(context);
    for (let index = 0; index < position; index++) {
      await fight.runStep(steps[index], true);
      soughtStepTypes.add(steps[index].a);
    }
    return poses;
  };
});
after(async () => {
  await server?.close();
  gsap.ticker.sleep();
});

const fighter = (index, overrides = {}) => ({
  id: `fighter-${index}`,
  index,
  team: index === 1 ? 'L' : 'R',
  name: `Fighter ${index}`,
  type: 'brute',
  maxHp: 200,
  hp: 200,
  strength: 10,
  weapons: {},
  skills: {},
  HUDFocused: true,
  teamWeaponsIllustrations: [],
  teamSkillsIllustrations: [],
  hpBar: {},
  hpBarPhantom: {},
  animation: {
    type: overrides.type ?? 'brute',
    skills: {},
    seekPose: { animation: 'idle', visible: true, airborne: false, hypnotised: false },
    weapon: null,
    shield: true,
    baseAnimationSpeed: 1,
    animationSpeed: 1,
    baseWidth: 50,
    container: { x: index === 1 ? -100 : 600, y: 150, scale: { x: 1 } },
    setAnimation(animation, frame, seeking) {
      if (!seeking) throw new Error('Seeking must not animate');
      setAnimation.call(this, animation, frame, seeking);
    },
    setAirborn(airborne, seeking) {
      if (!seeking) throw new Error('Seeking must not animate');
      this.seekPose.airborne = airborne;
    },
    waitForEvent() { throw new Error('Seeking must not wait for animation events'); },
  },
  ...overrides,
});

const reportedFight = JSON.parse(readFileSync(
  new URL('./fixtures/slow-seek-fight.json', import.meta.url), 'utf8',
));
const headlessFight = (fighters, options = {}) => {
  const noRender = new Proxy({}, {
    get() { throw new Error('Seeking must not access rendering or audio'); },
  });
  return new Fight({
    fighters, fight: { clanWarId: null }, app: noRender, spritesheets: noRender,
    renderer: noRender, t: noRender, speed: { current: 2 }, shouldAbort: () => false,
    steps: [],
    ...options,
  });
};
// Declares the upcoming Rewind instructions as [step index, steps undone] so their states are captured.
const rewindPlan = (...rewinds) => {
  const length = Math.max(...rewinds.map(([index]) => index)) + 1;
  const steps = Array.from({ length }, () => ({ a: StepType.Hit, f: 1, t: 2, d: 0 }));
  for (const [index, n] of rewinds) steps[index] = { a: StepType.Rewind, f: 1, n, t: 1 };
  return { steps };
};
const reportedFighters = () => structuredClone(reportedFight.fighters).map((data) => {
  const result = fighter(data.index, {
    ...data,
    skills: Object.fromEntries(Object.entries(data.skills).map(([skill, tier]) => [
      skill, { tier, uses: (skills[SkillById[skill]].uses?.[tier - 1] || 0)
        + (+skill === SkillId.fierceBrute ? Math.floor(data.strength / 30) : 0) },
    ])),
  });
  result.animation.shield = data.shield;
  return result;
});

test('reported 235-action fight seeks to the middle and end in under 100ms', async (t) => {
  assert.equal(reportedFight.steps.length, 235);
  const middle = reportedFighters();
  const end = reportedFighters();
  const start = performance.now();
  await seekFight(middle, reportedFight.steps, 117, false);
  const poses = await seekFight(end, reportedFight.steps, reportedFight.steps.length, false);
  const elapsed = performance.now() - start;
  assert.ok(elapsed < 100, `Two seek reductions took ${elapsed.toFixed(2)}ms`);
  t.diagnostic(`Reported fight: middle + end state restored in ${elapsed.toFixed(2)}ms`);
  assert.deepEqual(middle.map((f) => f.hp), [90, 102]);
  assert.equal(middle[0].animation.shield, false);
  assert.equal(middle[0].animation.weapon, null);
  assert.equal(middle[1].animation.weapon, null);
  assert.equal(middle[1].fierceBrute, false);
  assert.deepEqual(end.map((f) => f.hp), [0, 35]);
  assert.equal(end[0].dead, true);
  assert.equal(poses.get(end[1]).animation, 'win');
  assert.equal(end[1].skills[SkillId.fierceBrute].uses, 1);
});

test('every action boundary in the reported fight can be reconstructed without ticking', async (t) => {
  const start = performance.now();
  for (let index = 0; index <= reportedFight.steps.length; index++) {
    const fighters = reportedFighters();
    const poses = await seekFight(fighters, reportedFight.steps, index, false);
    assert.equal(poses.size, 2);
    for (const fighterState of fighters) {
      assert.ok(Number.isFinite(fighterState.animation.container.x));
      assert.ok(Number.isFinite(fighterState.animation.container.y));
      assert.ok(fighterState.hp >= 0);
    }
  }
  const elapsed = performance.now() - start;
  assert.ok(elapsed < 1000, `All boundaries took ${elapsed.toFixed(2)}ms`);
  t.diagnostic(`All 236 seek boundaries: ${elapsed.toFixed(2)}ms`);
});

test('direct seeking restores health, weapons, shield and skill reloads without animations', async () => {
  const left = fighter(1, {
    weapons: { 15: 3 },
    skills: { [SkillId.net]: { tier: 1, uses: 1 } },
  });
  const right = fighter(2, {
    skills: { [SkillId.fierceBrute]: { tier: 1, uses: 1 } },
  });
  const steps = [
    { a: StepType.Arrive, f: 1 },
    { a: StepType.Arrive, f: 2 },
    { a: StepType.Trap, b: 1, t: 2 },
    { a: StepType.Equip, b: 1, w: 15 },
    { a: StepType.Hit, f: 1, t: 2, d: 18 },
    { a: StepType.DropShield, b: 1 },
    { a: StepType.SkillActivate, b: 2, s: SkillId.fierceBrute },
    { a: StepType.SkillExpire, b: 2, s: SkillId.fierceBrute },
    { a: StepType.Reload, f: 2, w: [{ i: 2, t: 3 }], s: [{ i: SkillId.fierceBrute, t: 1 }] },
  ];
  const poses = await seekFight([left, right], steps, steps.length, false);
  assert.equal(right.hp, 182);
  assert.equal(right.trapped, false);
  assert.equal(right.stunned, false);
  assert.equal(right.fierceBrute, false);
  assert.deepEqual(right.skills[SkillId.fierceBrute], { tier: 1, uses: 1 });
  assert.equal(right.weapons[2], 3);
  assert.equal(left.skills[SkillId.net], undefined);
  assert.equal(left.weapons[15], undefined);
  assert.equal(left.animation.weapon, WeaponById[15]);
  assert.equal(left.animation.shield, false);
  assert.equal(poses.get(right).animation, 'idle');
});

test('each Reload instruction spends one Reload skill use and removes it once exhausted', async () => {
  const right = fighter(2, {
    skills: {
      [SkillId.reload]: { tier: 2, uses: 2 },
      [SkillId.bomb]: { tier: 1, uses: 1 },
    },
  });
  const reloadStep = { a: StepType.Reload, f: 2, w: [], s: [{ i: SkillId.bomb, t: 1 }] };
  const steps = [
    { a: StepType.Arrive, f: 1 },
    { a: StepType.Arrive, f: 2 },
    reloadStep,
    reloadStep,
  ];
  await seekFight([fighter(1), right], steps, 3, false);
  assert.deepEqual(right.skills[SkillId.reload], { tier: 2, uses: 1 });

  const replay = fighter(2, {
    skills: { [SkillId.reload]: { tier: 2, uses: 2 } },
  });
  await seekFight([fighter(1), replay], steps, steps.length, false);
  assert.equal(replay.skills[SkillId.reload], undefined);

  const legacy = fighter(2);
  await seekFight([fighter(1), legacy], steps, steps.length, false);
  assert.equal(legacy.skills[SkillId.reload], undefined, 'Old fights without the skill still reload');
  assert.equal(legacy.skills[SkillId.bomb].uses, 2);
});

test('seeking stops before the selected action and handles zero and end positions', async () => {
  const steps = [
    { a: StepType.Arrive, f: 1 },
    { a: StepType.Arrive, f: 2 },
    { a: StepType.Hit, f: 1, t: 2, d: 50 },
    { a: StepType.Death, f: 2 },
    { a: StepType.End, w: 1, l: 2 },
  ];
  const initial = [fighter(1), fighter(2)];
  await seekFight(initial, steps, 0, false);
  assert.equal(initial[1].animation.container.x, 600);
  const middle = [fighter(1), fighter(2)];
  await seekFight(middle, steps, 2, false);
  assert.equal(middle[1].hp, 200);
  const end = [fighter(1), fighter(2)];
  const poses = await seekFight(end, steps, steps.length, false);
  assert.equal(end[1].hp, 150);
  assert.equal(end[1].dead, true);
  assert.equal(poses.get(end[0]).animation, 'win');
  assert.equal(poses.get(end[1]).animation, 'death');
});

test('healing, vampirism, overkill and survival match playback health updates', async () => {
  const left = fighter(1);
  const right = fighter(2);
  const steps = [
    { a: StepType.Hit, f: 2, t: 1, d: 250 },
    { a: StepType.Survive, b: 1 },
    { a: StepType.Vampirism, b: 1, t: 2, d: 51, h: 73 },
    { a: StepType.Regeneration, f: 1, h: 10 },
    { a: StepType.Heal, b: 2, h: 20 },
  ];
  await seekFight([left, right], steps, steps.length, false);
  assert.equal(left.hp, 84);
  assert.equal(right.hp, 169);
  const war = [fighter(1), fighter(2)];
  await seekFight(war, steps, 2, true);
  assert.equal(war[0].hp, 0);
});

test('vampirism uses shared helpers with only a boolean and no seek context', async () => {
  const noRender = new Proxy({}, {
    get() { throw new Error('Seeking must not access rendering or audio'); },
  });
  for (const trapped of [false, true]) {
    const left = fighter(1, { hp: 50, skills: { [SkillId.vampirism]: { tier: 1, uses: 1 } } });
    const right = fighter(2, { trapped, stunned: true, resist: true, hp: 30 });
    left.animation.seekPose.airborne = true;
    right.animation.seekPose.animation = trapped ? 'trapped' : 'death';

    const fight = new Fight({
      app: noRender, spritesheets: noRender, fighters: [left, right],
      speed: { current: 2 }, fight: { clanWarId: null },
      renderer: noRender, t: noRender, shouldAbort: () => false,
      steps: [],
    });
    fight.seeking = true;
    await fight.vampirism({ a: StepType.Vampirism, b: 1, t: 2, d: 51, h: 73 });

    assert.equal(left.hp, 123);
    assert.equal(right.hp, 0);
    assert.equal(left.skills[SkillId.vampirism], undefined);
    assert.equal(right.trapped, false);
    assert.equal(right.stunned, trapped);
    assert.equal(right.resist, false);
    assert.equal(right.animation.seekPose.animation, trapped ? 'death' : 'idle');
    assert.equal(left.animation.seekPose.animation, 'idle');
    assert.equal(left.animation.seekPose.airborne, false);
    assert.equal(left.animation.container.zIndex, left.animation.container.y);
  }
});

test('hypnosis, pet removal, mimic and HUD focus are restored', async () => {
  const left = fighter(1);
  const right = fighter(2);
  const pet = fighter(3, { type: 'pet', master: right.id, team: 'R', hpBar: undefined });
  const fighters = [left, right, pet];
  const steps = [
    { a: StepType.Hypnotise, b: 1, t: [2], p: [3] },
    { a: StepType.Mimic, f: [1], s: SkillId.net, t: 2 },
    { a: StepType.Treat, b: 1, t: 3, h: 5 },
    { a: StepType.Leave, f: 3 },
  ];
  const poses = await seekFight(fighters, steps, steps.length, false);
  assert.equal(pet.team, 'L');
  assert.equal(pet.master, left.id);
  assert.equal(poses.get(pet).visible, false);
  assert.equal(poses.get(right).hypnotised, true);
  assert.equal(fighters.length, 2);
  assert.deepEqual(left.skills[SkillId.net], { tier: 2, uses: 1 });
  assert.equal(left.HUDFocused, true);
});

test('spy swaps tiers before subsequent equips, throws, sabotage and reloads', async () => {
  const left = fighter(1, { weapons: { 2: 2, 15: 3 } });
  const right = fighter(2, { weapons: { 2: 1, 17: 4 } });
  const steps = [
    { a: StepType.Spy, b: 1, t: 2, s: [2, 15], r: [2, 17] },
    { a: StepType.Equip, b: 1, w: 17 },
    { a: StepType.Throw, f: 1, t: 2, w: 17, k: 1 },
    { a: StepType.Sabotage, f: 1, t: 2, w: 15 },
  ];
  await seekFight([left, right], steps, steps.length, false);
  assert.deepEqual(left.weapons, { 2: 1 });
  assert.deepEqual(right.weapons, { 2: 2 });
  assert.equal(left.animation.weapon, WeaponById[17]);
  await seekFight([left, right], [
    { a: StepType.Throw, f: 1, t: 2, w: 17 },
  ], 1, false);
  assert.equal(left.animation.weapon, null);
});

test('traps, stuns, resist, expiry and shield throws preserve status transitions', async () => {
  const left = fighter(1);
  const right = fighter(2);
  const steps = [
    { a: StepType.Trap, b: 1, t: 2 },
    { a: StepType.Resist, b: 2 },
    { a: StepType.Hit, f: 1, t: 2, d: 10 },
  ];
  let poses = await seekFight([left, right], steps, 3, false);
  assert.equal(right.trapped, false);
  assert.equal(right.stunned, true);
  assert.equal(right.resist, false);
  assert.equal(poses.get(right).animation, 'death');
  poses = await seekFight([left, right], [
    { a: StepType.SkillExpire, f: 2, s: SkillId.chaining },
    { a: StepType.FlashFlood, f: 1, t: 2, s: 1, d: 0 },
  ], 2, false);
  assert.equal(right.stunned, true);
  assert.equal(left.animation.shield, false);
  assert.equal(right.hp, 190);
  assert.equal(poses.get(right).animation, 'death');
});

test('bomb, haste, flash flood and regeneration apply damage without visual effects', async () => {
  const left = fighter(1);
  const right = fighter(2);
  const steps = [
    { a: StepType.Arrive, f: 1 },
    { a: StepType.Arrive, f: 2 },
    { a: StepType.Bomb, f: 1, t: [2], d: { 2: 20 } },
    { a: StepType.Haste, b: 1, t: 2, d: 10 },
    { a: StepType.SkillActivate, b: 1, s: SkillId.flashFlood },
    { a: StepType.FlashFlood, f: 1, t: 2, w: 17, d: 15 },
    { a: StepType.SkillExpire, b: 1, s: SkillId.flashFlood },
    { a: StepType.Regeneration, f: 2, h: 5 },
  ];
  const poses = await seekFight([left, right], steps, steps.length, false);
  assert.equal(right.hp, 160);
  assert.equal(poses.get(left).airborne, false);
  assert.equal(poses.get(left).animation, 'idle');
  assert.ok(left.animation.container.x < 250);
  assert.ok(left.animation.container.y > 150);
});

test('clan war focus and total health remain available for rebuilding the HUD', async () => {
  const first = fighter(1);
  const opponent = fighter(2);
  const backup = fighter(3, { team: 'L', HUDFocused: false });
  const fighters = [first, opponent, backup];
  const steps = [
    { a: StepType.Hit, f: 2, t: 1, d: 250 },
    { a: StepType.Death, f: 1 },
    { a: StepType.Arrive, f: 3 },
    { a: StepType.Hit, f: 2, t: 3, d: 20 },
  ];
  const poses = await seekFight(fighters, steps, steps.length, true);
  assert.equal(poses.get(first).visible, false);
  assert.equal(first.HUDFocused, false);
  assert.equal(backup.HUDFocused, true);
  assert.equal(fighters.filter((f) => f.team === 'L').reduce((sum, f) => sum + f.hp, 0), 180);
});

test('eating hides a pet and consumes the same skill uses as playback', async () => {
  const left = fighter(1, { hp: 100, skills: { [SkillId.tamer]: { tier: 1, uses: 1 } } });
  const pet = fighter(3, { type: 'pet', master: left.id, hpBar: undefined, team: 'L' });
  const fighters = [left, fighter(2), pet];
  const poses = await seekFight(fighters, [{ a: StepType.Eat, b: 1, t: 3, h: 50 }], 1, false);
  assert.equal(left.hp, 150);
  assert.equal(left.skills[SkillId.tamer], undefined);
  assert.equal(poses.get(pet).visible, false);
});

test('remaining steps share their handlers without rendering or waiting', async () => {
  const left = fighter(1, { weapons: { 2: 1 } });
  const right = fighter(2);
  const steps = [
    { a: StepType.Arrive, f: 1, w: 2 },
    { a: StepType.Arrive, f: 2 },
    { a: StepType.Saboteur, b: 1, w: 2 },
    { a: StepType.Equip, b: 1, w: 15 },
    { a: StepType.Trash, b: 1 },
    { a: StepType.Equip, b: 2, w: 17 },
    { a: StepType.Steal, b: 1, t: 2, w: 17 },
    { a: StepType.Disarm, f: 2, t: 1, w: 17 },
    { a: StepType.Block, f: 1 },
    { a: StepType.Evade, f: 2 },
    { a: StepType.Poison, f: 1, t: 2, d: 5 },
    { a: StepType.Hammer, f: 1, t: 2, d: 15, c: 1 },
    { a: StepType.SkillExpire, f: 1, s: SkillId.hammer },
    { a: StepType.Counter, f: 1, t: 2 },
  ];
  await seekFight([left, right], steps, steps.length, false);
  assert.equal(left.animation.weapon, null);
  assert.equal(right.animation.weapon, null);
  assert.equal(right.hp, 180);
});

test('shared movement helpers apply clamped endpoints immediately while seeking', async () => {
  const left = fighter(1);
  const right = fighter(2);
  Object.assign(left.animation.container, { x: 30, y: 200 });
  Object.assign(right.animation.container, { x: 470, y: 210 });
  const steps = [
    { a: StepType.Block, f: 1 },
    { a: StepType.Evade, f: 2 },
  ];
  await seekFight([left, right], steps, steps.length, false);
  assert.equal(left.animation.container.x, 27);
  assert.equal(right.animation.container.x, 473);
  assert.equal(left.animation.seekPose.animation, 'idle');
  assert.equal(right.animation.seekPose.airborne, false);

  const fight = new Fight({
    fighters: [left, right], fight: { clanWarId: null }, speed: { current: 2 },
    shouldAbort: () => false,
    steps: [],
  });
  fight.seeking = true;
  await fight.moveBack({ a: StepType.MoveBack, f: 1 }, { x: 100, y: 180 });
  assert.equal(left.animation.container.x, 100);
  assert.equal(left.animation.container.y, 180);
  assert.equal(left.animation.container.zIndex, 180);
  assert.equal(left.animation.container.scale.x, 1);
});

test('attempted hits share range correction and legacy shield breaking without effects', async () => {
  const left = fighter(1);
  const right = fighter(2);
  left.animation.container.x = 100;
  left.animation.seekPose.animation = 'death';
  right.animation.container.x = 400;
  const { getHitDistance } = await server.ssrLoadModule('/src/utils/fight/utils/getHitDistance.ts');
  const expectedX = right.animation.container.x - getHitDistance(left, right);
  await seekFight([left, right], [
    { a: StepType.AttemptHit, f: 1, t: 2, b: 1 },
  ], 1, false);
  assert.equal(left.animation.container.x, expectedX);
  assert.equal(right.animation.shield, false);
  assert.equal(left.animation.seekPose.animation, 'idle');

  // An attacker already inside range must not move backwards.
  left.animation.container.x = expectedX + 5;
  await seekFight([left, right], [
    { a: StepType.AttemptHit, f: 1, t: 2 },
  ], 1, false);
  assert.equal(left.animation.container.x, expectedX + 5);
});

test('seeking uses the same monk and pet pose rules as playback', () => {
  const monk = fighter(1);
  monk.animation.skills[SkillId.monk] = 1;
  monk.animation.setAnimation('idle', 0, true);
  assert.equal(monk.animation.seekPose.animation, 'monk');
  const pet = fighter(3, { type: 'pet' });
  pet.animation.setAnimation('death', 0, true);
  pet.animation.setAnimation('win', 0, true);
  assert.equal(pet.animation.seekPose.animation, 'death');
});

test('winning pets leave their trapped pose through the shared untrap helper', async () => {
  const winner = fighter(1);
  const pet = fighter(3, { type: 'pet', team: 'L', trapped: true, master: winner.id });
  pet.animation.seekPose.animation = 'trapped';
  await seekFight([winner, fighter(2), pet], [
    { a: StepType.End, w: 1, l: 2 },
  ], 1, false);
  assert.equal(pet.trapped, false);
  assert.equal(pet.animation.seekPose.animation, 'idle');
});

test('knockback and stagger reach the same endpoints in playback and seeking', async () => {
  const { FightClock } = await server.ssrLoadModule('/src/utils/fight/utils/FightClock.ts');
  const { knockBack } = await server.ssrLoadModule('/src/utils/fight/utils/knockBack.ts');
  const { stagger } = await server.ssrLoadModule('/src/utils/fight/stagger.ts');
  const ticker = new Ticker();
  ticker.update(0);
  const clock = new FightClock({ ticker });
  try {
    for (const move of [knockBack, stagger]) {
      const playing = fighter(1);
      const seeking = fighter(1);
      playing.animation.container.x = 100;
      seeking.animation.container.x = 100;
      const start = ticker.lastTime;
      const animation = move(playing, { current: 1 }, 45, 0.5);
      await move(seeking, { current: 1 }, 45, 0.5, true);
      assert.equal(playing.animation.container.x, 100);
      assert.ok(Math.abs(seeking.animation.container.x - 55) < 0.000001);
      ticker.update(start + 1000);
      await animation;
      assert.ok(Math.abs(playing.animation.container.x - seeking.animation.container.x) < 0.000001);
    }
  } finally {
    clock.destroy();
    ticker.destroy();
  }
});

test('the same dispatcher resumes the normal rendering path when the seeking flag is omitted', async () => {
  const fighters = [fighter(1), fighter(2)];
  const context = {
    fighters,
    fight: { clanWarId: null },
    speed: { current: 2 },
    app: {},
    spritesheets: { misc: { textures: {} }, skills: { textures: {} } },
    renderer: {},
    t: () => '',
    shouldAbort: () => false,
    steps: [],
  };
  // Fixture animation methods throw, so this proves the real render branch is selected.
  const fight = new Fight(context);
  fight.reversal = { startStep() {}, finishStep() {} };
  await assert.rejects(fight.runStep({ a: StepType.Equip, b: 1, w: 2 }),
    /animation events/);
});

test('invalid seek positions and unknown steps throw rather than load forever', async () => {
  for (const position of [-1, 0.5, 1, NaN]) {
    await assert.rejects(async () => seekFight([fighter(1)], [], position, false), /Invalid/);
  }
  await assert.rejects(async () => seekFight([fighter(1)], [{ a: 1000 }], 1, false), /Unsupported/);
  await assert.rejects(async () => seekFight([fighter(1)], [{ a: StepType.Hit, f: 1, t: 2, d: 1 }], 1, false),
    /Fighter with index \d+ not found/);
});

test('fights without a Rewind instruction do not capture snapshots or record rendered frames', async () => {
  const left = fighter(1);
  Object.defineProperty(left, 'weapons', {
    get() { throw new Error('Snapshot capture must not read equipment'); },
  });
  const fight = headlessFight([left, fighter(2)]);
  fight.getReversal = () => { throw new Error('Must not create recorder'); };
  await fight.runStep({ a: StepType.Counter, f: 1, t: 2 });
  assert.equal(fight.completedSteps, 1);
  assert.equal(fight.history.length, 0);
  assert.equal(fight.visualHistory.length, 0);
  await assert.rejects(fight.rewind(1), /history is disabled/);
});

test('Rewind instructions share playback and seek logic and never restore consumed Rewinds', async () => {
  const createFighters = () => [1, 2].map((index) => fighter(index, {
    skills: { [SkillId.rewind]: { tier: 3, uses: 1 } },
  }));
  const steps = [
    { a: StepType.Hit, f: 2, t: 1, d: 50 },
    { a: StepType.Hit, f: 1, t: 2, d: 20 },
    { a: StepType.Rewind, f: 1, n: 2, t: 5 },
    { a: StepType.Hit, f: 2, t: 1, d: 10 },
    { a: StepType.Rewind, f: 2, n: 4, t: 4 },
  ];
  const expected = [[200, 200], [150, 200], [150, 180], [200, 200], [190, 200], [200, 200]];
  for (let position = 0; position <= steps.length; position++) {
    const fighters = createFighters();
    await seekFight(fighters, steps, position, false);
    assert.deepEqual(fighters.map((f) => f.hp), expected[position]);
    assert.equal(!!fighters[0].skills[SkillId.rewind], position < 3);
    assert.equal(!!fighters[1].skills[SkillId.rewind], position < 5);
  }
});

test('generated lethal Rewinds reproduce server combat state through the shared seek handlers', async () => {
  const { getFighters } = await import('../../server/lib/utils/fight/getFighters.js');
  const { createFightRewind } = await import('../../server/lib/utils/fight/fightRewind.js');
  const { fighterArrives, orderFighters, playFighterTurn, checkDeaths } = await import(
    '../../server/lib/utils/fight/fightMethods.js'
  );
  const previousRandom = Math.random;
  let seed = 12345;
  Math.random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  try {
    for (const tier of [1, 2, 3]) {
      const brutes = reportedFight.fighters.map((source) => ({
        ...source,
        hpValue: source.maxHp,
        strengthValue: source.strength,
        agilityValue: source.agility,
        speedValue: source.speed,
        ranking: source.rank,
        skills: {
          ...Object.fromEntries(Object.entries(source.skills).map(([id, t]) => [SkillById[id], t])),
          rewind: tier,
        },
        weapons: Object.fromEntries(Object.entries(source.weapons).map(([id, t]) => [WeaponById[id], t])),
        pets: {},
      }));
      const generated = getFighters({
        team1: { brutes: [brutes[0]], backups: [], bosses: [] },
        team2: { brutes: [brutes[1]], backups: [], bosses: [] },
        modifiers: {},
      });
      const initial = structuredClone(generated);
      const data = {
        fighters: generated, initialFighters: initial, modifiers: {}, steps: [],
        initiative: 0, winner: null, loser: null, overtime: false,
        rewind: createFightRewind(generated),
      };
      for (const current of data.fighters) fighterArrives(data, current);
      const checkpoints = [];
      const projectServer = () => data.fighters.map((f) => ({
        index: f.index, hp: Math.max(0, f.hp), shield: f.shield,
        weapon: f.activeWeapon?.name ?? null,
        weapons: Object.fromEntries(Object.values(f.weapons).map((w) => [WeaponByName[w.name], w.tier])),
        rewind: !!f.skills.rewind,
      })).sort((a, b) => a.index - b.index);
      for (let turn = 0; turn < 500 && !data.loser; turn++) {
        orderFighters(data);
        data.initiative = data.fighters[0].initiative;
        playFighterTurn(data, {}, {});
        checkDeaths(data, {});
        checkpoints.push({ end: data.steps.length, state: projectServer() });
      }
      assert.ok(data.loser, 'Generated fight must finish');
      assert.ok(data.steps.some((s) => s.a === StepType.Rewind), 'Generated fight must use Rewind');
      const animated = initial.map((source) => {
        const current = fighter(source.index, {
          ...source,
          weapons: Object.fromEntries(Object.values(source.weapons).map((w) => [WeaponByName[w.name], w.tier])),
          skills: Object.fromEntries(Object.values(source.skills).map((s) => [SkillByName[s.name], {
            tier: s.tier,
            uses: (s.uses?.[s.tier - 1] ?? 0)
              + (s.name === 'fierceBrute' ? Math.floor(source.strength / 30) : 0),
          }])),
        });
        current.animation.shield = source.shield;
        return current;
      });
      const playback = headlessFight(animated, { steps: data.steps });
      let index = 0;
      for (const checkpoint of checkpoints) {
        while (index < checkpoint.end) await playback.runStep(data.steps[index++], true);
        assert.deepEqual(animated.map((f) => ({
          index: f.index, hp: f.hp, shield: f.animation.shield,
          weapon: f.animation.weapon, weapons: f.weapons,
          rewind: !!f.skills[SkillId.rewind],
        })), checkpoint.state, `Tier ${tier}, playback boundary ${index}`);
      }
    }
  } finally {
    Math.random = previousRandom;
  }
});

test('rewind captures only the states and recordings a later Rewind reverts', async () => {
  const fight = headlessFight([fighter(1), fighter(2)], rewindPlan([4, 2]));
  const started = [];
  fight.dispatch = async () => {};
  fight.reversal = {
    startStep() { started.push(fight.completedSteps); },
    finishStep() { return { step: fight.completedSteps }; },
  };
  for (let index = 0; index < 4; index++) {
    await fight.runStep({ a: StepType.Hit, f: 1, t: 2, d: 1 });
  }
  assert.deepEqual(started, [2, 3]);
  assert.deepEqual(fight.history.map(Boolean), [false, false, true, true, true]);
  assert.deepEqual(fight.visualHistory, [undefined, undefined, { step: 2 }, { step: 3 }]);
});

test('rewind restores earlier state and subsequent instructions continue without replay', async () => {
  const left = fighter(1);
  const right = fighter(2);
  const fight = headlessFight([left, right], rewindPlan([3, 2], [4, 1]));
  await fight.runStep({ a: StepType.Hit, f: 1, t: 2, d: 10 }, true);
  await fight.runStep({ a: StepType.Hit, f: 2, t: 1, d: 20 }, true);
  await fight.runStep({ a: StepType.Hit, f: 1, t: 2, d: 30 }, true);
  assert.deepEqual([left.hp, right.hp], [180, 160]);
  fight.seeking = true;
  await fight.rewind(2);
  assert.deepEqual([left.hp, right.hp], [200, 190]);
  assert.equal(fight.completedSteps, 3);
  await fight.runStep({ a: StepType.Hit, f: 2, t: 1, d: 5 }, true);
  assert.deepEqual([left.hp, right.hp], [195, 190]);
  assert.equal(fight.completedSteps, 4);
  await fight.rewind(1);
  assert.deepEqual([left.hp, right.hp], [180, 160]);
});

test('rewind restores removed pets, hypnosis, traps and consumed equipment from history', async () => {
  const left = fighter(1, { weapons: { 2: 1 }, skills: {
    [SkillId.hypnosis]: { tier: 1, uses: 1 },
    [SkillId.net]: { tier: 1, uses: 1 },
  } });
  const right = fighter(2);
  const pet = fighter(3, { type: 'pet', team: 'R', master: right.id });
  const fighters = [left, right, pet];
  const fight = headlessFight(fighters, rewindPlan([4, 100]));
  await fight.runStep({ a: StepType.Equip, b: 1, w: 2 }, true);
  await fight.runStep({ a: StepType.Trap, b: 1, t: 2 }, true);
  await fight.runStep({ a: StepType.Hypnotise, b: 1, t: [2], p: [3] }, true);
  await fight.runStep({ a: StepType.Leave, f: 3 }, true);
  assert.equal(fighters.length, 2);
  fight.seeking = true;
  await fight.rewind(3);
  assert.equal(fighters[2], pet);
  assert.equal(pet.team, 'R');
  assert.equal(pet.master, right.id);
  assert.equal(pet.animation.seekPose.visible, true);
  assert.equal(right.animation.seekPose.hypnotised, false);
  assert.equal(right.trapped, undefined);
  assert.equal(left.animation.weapon, WeaponById[2]);
  assert.equal(left.skills[SkillId.net].uses, 1);
  await fight.rewind(100);
  assert.equal(left.animation.weapon, null);
  assert.equal(left.weapons[2], 1);
  assert.equal(fight.completedSteps, 4);
});

test('rewind validates counts and zero is a no-op without rendering', async () => {
  const left = fighter(1);
  const right = fighter(2);
  const fight = headlessFight([left, right], rewindPlan([0, 10]));
  await fight.rewind(0);
  for (const count of [-1, 0.5, NaN, Infinity]) {
    await assert.rejects(fight.rewind(count), /Invalid fight rewind count/);
  }
  assert.equal(fight.completedSteps, 0);
  fight.seeking = true;
  await fight.rewind(10);
  assert.deepEqual([left.hp, right.hp], [200, 200]);
});

test('rendered rewind opens, reverses each step, rebuilds visuals, then closes', async () => {
  const fight = headlessFight([fighter(1), fighter(2)], rewindPlan([2, 2]));
  await fight.runStep({ a: StepType.Hit, f: 1, t: 2, d: 25 }, true);
  await fight.runStep({ a: StepType.Hit, f: 1, t: 2, d: 10 }, true);
  const calls = [];
  const recordedStep = { frames: [] };
  fight.visualHistory[1] = recordedStep;
  for (const fighter of fight.fighters) fighter.animation.pause = () => {};
  fight.playHypnosisEffect = async () => { calls.push(['hypnosis', fight.fighters[1].hp]); };
  fight.hypnosisEffect = {
    async finish() { calls.push(['closing']); },
    dispose() {},
  };
  for (const fighter of fight.fighters) fighter.animation.play = () => {};
  fight.renderState = async () => { calls.push(['render', fight.fighters[1].hp]); };
  fight.reversal = {
    destroy() {},
    async play(recording) {
      assert.equal(recording, recordedStep);
      calls.push(['recorded']);
    },
    async playBetween(from, to) {
      calls.push(['reverse', from.fighters[1].state.hp, to.fighters[1].state.hp]);
    },
  };
  const { FightClock } = await server.ssrLoadModule('/src/utils/fight/utils/FightClock.ts');
  const ticker = new Ticker();
  const clock = new FightClock({ ticker });
  try {
    await fight.runStep({ a: StepType.Rewind, f: 1, n: 2, t: 3 });
    assert.deepEqual(calls, [
      ['hypnosis', 165], ['recorded'], ['reverse', 175, 200], ['render', 200], ['closing'],
    ]);
    assert.equal(fight.completedSteps, 3);
  } finally {
    clock.destroy();
    ticker.destroy();
  }
});

test('failed reverse rendering disposes effects and playback, resumes the clock, and surfaces the error', async () => {
  const fight = headlessFight([fighter(1), fighter(2)], rewindPlan([1, 1]));
  await fight.runStep({ a: StepType.Hit, f: 1, t: 2, d: 25 }, true);
  for (const fighter of fight.fighters) fighter.animation.pause = () => {};
  let disposed = 0;
  let destroyed = 0;
  const error = new Error('Reverse rendering failed');
  fight.hypnosisEffect = { dispose() { disposed++; } };
  fight.playHypnosisEffect = async () => {};
  fight.reversal = {
    destroy() { destroyed++; },
    async playBetween() { throw error; },
  };
  const { FightClock } = await server.ssrLoadModule('/src/utils/fight/utils/FightClock.ts');
  const ticker = new Ticker();
  const clock = new FightClock({ ticker });
  try {
    await assert.rejects(fight.rewind(1), (failure) => failure === error);
    assert.equal(disposed, 1);
    assert.equal(destroyed, 1);
    assert.equal(fight.reversing, false);
    assert.equal(fight.reversal, undefined);
    const target = { x: 0 };
    clock.tween(target, { x: 10, duration: 0.5, ease: 'none' });
    ticker.update(ticker.lastTime + 500);
    assert.equal(target.x, 10);
  } finally {
    clock.destroy();
    ticker.destroy();
  }
});

test('Fight isolates playback context and restores seeking mode after failures', async () => {
  const first = headlessFight([fighter(1), fighter(2)]);
  const second = headlessFight([fighter(1), fighter(2)]);
  await first.runStep({ a: StepType.Hit, f: 1, t: 2, d: 25 }, true);
  assert.equal(first.fighters[1].hp, 175);
  assert.equal(second.fighters[1].hp, 200);
  assert.equal(first.seeking, false);
  await assert.rejects(first.runStep({ a: 1000 }, true), /Unsupported/);
  assert.equal(first.seeking, false);
  assert.equal(first.completedSteps, 1);
});

test('every fight step type is exercised in seeking mode', () => {
  const stepTypes = Object.values(StepType).filter((value) => typeof value === 'number');
  assert.deepEqual([...soughtStepTypes].sort((a, b) => a - b), stepTypes.sort((a, b) => a - b));
});
