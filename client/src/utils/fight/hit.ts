/* eslint-disable no-void */
import { HitStep, StepType, WEAPONS_SFX, WeaponById, randomBetween } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';

import { Application } from 'pixi.js';
import { sound } from '@pixi/sound';
import displayDamage from './utils/displayDamage';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import { untrap } from './untrap';
import { playHitEffect } from './utils/playVFX';

const hit = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Get hit animation (random for male brute)
  const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
    : 'hit';

  // Fighter's side of the map
  const fighterSide = fighter.animation.container.x > 250 ? 'R' : 'L';
  // Target's side of the map
  const targetSide = target.animation.container.x > 250 ? 'R' : 'L';
  // Store if the hit was dealt in it's own side of the map
  const ownSideHit = fighter.team === fighterSide && targetSide === fighterSide;

  // Wake up target
  target.stunned = false;

  // Untrap target
  untrap(app, target);

  // Set animation to the correct hit animation
  target.animation.setAnimation(animation);
  // Play hitting SFX
  if (step.a === StepType.Poison) {
    // Poison SFX
    void sound.play('sfx', { sprite: 'poison' });
  } else if (typeof step.w !== 'undefined') {
    // Weapon SFX
    void sound.play('sfx', { sprite: `${WEAPONS_SFX[WeaponById[step.w]][randomBetween(0, WEAPONS_SFX[WeaponById[step.w]].length - 1)]}` });
  } else if (fighter.type === 'pet') {
    // Sword SFX for pets
    void sound.play('sfx', { sprite: 'sword' });
  } else {
    // Fist SFX
    void sound.play('sfx', { sprite: `fist${randomBetween(1, 3)}` });
  }

  // Play hit SFX
  if (target.type === 'pet') {
    // Remove numbers from pet name
    void sound.play('sfx', { sprite: `${target.name.replace(/\d/g, '')}` });
  }

  if (step.a !== StepType.Poison) {
    playHitEffect(app, fighter, target, speed);
  }

  // Add poison filter if damage is poison
  let poisonFilter: OutlineFilter | null = null;
  if (step.a === StepType.Poison) {
    poisonFilter = new OutlineFilter(1, 0x006400);
    target.animation.container.filters = [
      ...target.animation.container.filters || [],
      poisonFilter,
    ];
  }

  displayDamage(app, target, step.d, speed);

  // Update HP bar
  updateHp(fighters, target, -step.d, speed, isClanWar);

  // Max possible hit knockback
  const maxKnockBack = 32;
  let knockBack = 0;

  // If regular hit
  if (!ownSideHit) {
    // 0 - 50 % knockBack from 0 - 20% lost hp
    if (step.d > target.maxHp * 0.2) {
      knockBack = maxKnockBack * 0.5 * (1 + (step.d - target.maxHp * 0.2) / (target.maxHp * 0.8));
    // 50 - 100 % knockBack from 20 - 100% lost hp
    } else {
      knockBack = maxKnockBack * 0.5 * (step.d / (target.maxHp * 0.2));
    }
    // 2 minimum knockBack
    if (knockBack < 1) knockBack = 2;
    if (knockBack > maxKnockBack) knockBack = maxKnockBack;
  // Else if stun and own side hit
  } else if (step.s) {
    // Counter stun knockback
    knockBack = 65;
  }

  // Stagger with knockBack
  await stagger(target, speed, knockBack);

  // Remove poison filter
  if (step.a === StepType.Poison) {
    target.animation.container.filters = target.animation.container.filters?.filter(
      (filter) => filter !== poisonFilter,
    ) || [];
  }

  // Chaining
  if (step.s) {
    void sound.play('sfx', { sprite: 'chaining' });
    target.stunned = true;
  }

  // Set animation to `death` if target is stunned
  if (target.stunned) {
    target.animation.setAnimation('death');
    // Wait for 0.45s if this is a counter attack stun so it gets readable for the player
    if (ownSideHit) {
      await new Promise((resolve) => { setTimeout(resolve, 450 / speed.current); });
    }
  } else {
    // Set animation to `idle`
    target.animation.setAnimation('idle');
  }
};

export default hit;
