/* eslint-disable no-void */
import { FIGHTER_HIT_ANCHOR, HitStep, StepType, WEAPONS_SFX, WeaponById, randomBetween } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';

import { sound } from '@pixi/sound';
import { AnimatedSprite, Application } from 'pixi.js';
import stagger from './stagger';
import { untrap } from './untrap';
import updateHp from './updateHp';
import displayDamage from './utils/displayDamage';
import findFighter, { AnimationFighter } from './utils/findFighter';
import getFighterType from './utils/getFighterType';

const HIT_VFX = ['blood', 'impact-1', 'impact-2'];

const hit = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

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

  const targetWasTrapped = target.trapped;

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

  let vfx = null;

  if (step.a !== StepType.Poison) {
    if (fighter.type === 'pet') {
      vfx = 'blood';
    } else {
      vfx = HIT_VFX[randomBetween(0, HIT_VFX.length - 1)];
    }
  }

  // Create hit VFX
  if (vfx) {
    const hitVfx = new AnimatedSprite(spritesheet.animations[vfx] || []);
    hitVfx.zIndex = 1000;
    hitVfx.animationSpeed = speed.current / 4;
    hitVfx.loop = false;
    hitVfx.scale.x = target.team === 'L' ? -1 : 1;

    // Set hit VFX position
    const fighterType = getFighterType(fighter);
    hitVfx.x = target.animation.container.x + FIGHTER_HIT_ANCHOR[fighterType].x * (target.team === 'L' ? 1 : -1);
    hitVfx.y = target.animation.container.y - FIGHTER_HIT_ANCHOR[fighterType].y;

    // Add hit VFX to stage
    app.stage.addChild(hitVfx);

    // Destroy hit VFX when animation is finished
    hitVfx.onComplete = () => {
      hitVfx.destroy();
    };

    // Play hit VFX
    hitVfx.play();
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

  // Stagger
  await stagger(target, speed);

  // Remove poison filter
  if (step.a === StepType.Poison) {
    target.animation.container.filters = target.animation.container.filters?.filter(
      (filter) => filter !== poisonFilter,
    ) || [];
  }

  if (step.s) {
    target.stunned = true;
  } else if (target.stunned && !targetWasTrapped) {
    target.stunned = false;
  }

  // Set animation to `death` if target is stunned
  if (target.stunned) {
    target.animation.setAnimation('death');
    void sound.play('sfx', { sprite: 'chaining' });
  } else {
    // Set animation to `idle`
    target.animation.setAnimation('idle');
  }
};

export default hit;
