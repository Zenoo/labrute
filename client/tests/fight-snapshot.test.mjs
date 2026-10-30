import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  captureFightSnapshot, restoreFightSnapshot,
} from '../src/utils/fight/utils/fightSnapshot.ts';

const fighter = (index) => {
  let baseSpeed = 2;
  const noRender = () => { throw new Error('Snapshots must not render'); };
  const holder = {
    animation: 'run',
    seekPose: { animation: 'idle', visible: true, airborne: false, hypnotised: false },
    weapon: 'knife',
    shield: true,
    get animationSpeed() { return baseSpeed / 1.5; },
    get baseAnimationSpeed() { return baseSpeed; },
    set animationSpeed(value) { baseSpeed = value; },
    container: {
      x: index * 100, y: 150, zIndex: 150,
      scale: { x: -1, y: 1 }, rotation: 0, alpha: 0.8, visible: true,
      get filters() { return noRender(); },
    },
    setAnimation: noRender,
    setAirborn: noRender,
    get shadow() { return noRender(); },
  };
  return {
    index, hp: 200, maxHp: 200, strength: 10, agility: 20, speed: 30, size: 1,
    team: 'L', master: undefined, weapons: { 1: 2 },
    skills: { 1: { tier: 2, uses: 3 } },
    stunned: undefined, trapped: false, dead: undefined, fierceBrute: false,
    resist: true, HUDFocused: true, animation: holder,
  };
};

test('restores active order, removed fighters, gameplay and holder state without rendering', () => {
  const first = fighter(1);
  const second = fighter(2);
  const active = [first, second];
  const holder = first.animation;
  const { container, seekPose } = holder;
  const snapshot = captureFightSnapshot(active, [first, second]);
  first.hp = 1;
  first.maxHp = 50;
  first.strength = 99;
  first.team = 'R';
  first.master = 'other';
  first.weapons[1] = 0;
  first.skills[1].tier = 9;
  first.skills[1].uses = 0;
  first.stunned = true;
  first.trapped = true;
  first.dead = true;
  first.fierceBrute = true;
  first.resist = false;
  first.HUDFocused = false;
  holder.seekPose.animation = 'death';
  holder.seekPose.visible = false;
  holder.seekPose.airborne = true;
  holder.seekPose.hypnotised = true;
  holder.weapon = null;
  holder.shield = false;
  holder.animationSpeed = -4;
  container.x = 999;
  container.y = 99;
  container.scale.x = 2;
  container.scale.y = 0.5;
  container.alpha = 0;
  container.visible = false;
  active.splice(0, 1);
  second.hp = 3;
  restoreFightSnapshot(snapshot, active);
  assert.deepEqual(active, [first, second]);
  assert.equal(first.animation, holder);
  assert.equal(holder.container, container);
  assert.equal(holder.seekPose, seekPose);
  assert.deepEqual(first.skills, { 1: { tier: 2, uses: 3 } });
  assert.deepEqual(first.weapons, { 1: 2 });
  assert.equal(first.hp, 200);
  assert.equal(second.hp, 200);
  assert.equal(first.maxHp, 200);
  assert.equal(first.strength, 10);
  assert.equal(first.team, 'L');
  assert.equal(first.master, undefined);
  assert.equal(first.stunned, undefined);
  assert.equal(first.dead, undefined);
  assert.equal(first.trapped, false);
  assert.equal(first.fierceBrute, false);
  assert.equal(first.resist, true);
  assert.equal(first.HUDFocused, true);
  assert.deepEqual(seekPose, {
    animation: 'run', visible: true, airborne: false, hypnotised: false,
  });
  assert.equal(holder.weapon, 'knife');
  assert.equal(holder.shield, true);
  assert.equal(holder.animationSpeed, 2 / 1.5);
  assert.equal(container.x, 100);
  assert.equal(container.y, 150);
  assert.deepEqual(container.scale, { x: -1, y: 1 });
  assert.equal(container.alpha, 0.8);
  assert.equal(container.visible, true);
});

test('seeking captures seekPose and restoration never aliases saved mutable data', () => {
  const first = fighter(1);
  const inactive = fighter(2);
  const active = [first];
  const snapshot = captureFightSnapshot(active, [first, inactive], true);
  active.length = 0;
  inactive.hp = 0;
  first.animation.seekPose.animation = 'death';
  restoreFightSnapshot(snapshot, active);
  assert.deepEqual(active, [first]);
  assert.equal(inactive.hp, 200);
  assert.equal(first.animation.seekPose.animation, 'idle');
  assert.equal(first.animation.animation, 'run');
  first.weapons[1] = 0;
  first.skills[1].uses = 0;
  first.animation.seekPose.visible = false;
  restoreFightSnapshot(snapshot, active);
  assert.equal(first.weapons[1], 2);
  assert.equal(first.skills[1].uses, 3);
  assert.equal(first.animation.seekPose.visible, true);
  assert.notEqual(first.skills, snapshot.fighters[0].state.skills);
  assert.notEqual(first.skills[1], snapshot.fighters[0].state.skills[1]);
});
