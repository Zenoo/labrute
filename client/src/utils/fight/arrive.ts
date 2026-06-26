
import { ArriveStep, WeaponById } from '@labrute/core';
import { Application } from 'pixi.js';
import { BossName } from '@labrute/prisma';

import { AnimationFighter, findFighter } from './utils/findFighter';
import { shakeStage } from './utils/stageAnimations';
import { sound } from '@pixi/sound';
import { getRandomPosition } from './utils/fightPositions';
import { updateWeapons } from './updateWeapons';
import { playDustEffect } from './utils/playVFX';
import { updateShadow, airbornMove } from './utils/updateShadow';
import { Spritesheets } from './utils/spritesheet';

export const arrive = async (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: ArriveStep,
  speed: React.MutableRefObject<number>,
) => {
  const shouldAbort = () => !app.stage || app.stage.destroyed;

  const spritesheet = spritesheets.misc;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.f);

  if (!fighter) {
    throw new Error('Fighter not found');
  }

  if (shouldAbort()
    || fighter.animation.container.destroyed
    || fighter.animation.shadow.destroyed) {
    return;
  }

  // Equip weapon if needed
  if (typeof step.w !== 'undefined') {
    // Update available weapons
    updateWeapons(app, spritesheets, fighter, step.w, 'remove');

    // Update active weapon
    fighter.animation.weapon = WeaponById[step.w];
  }

  // Get random position
  const { x, y } = getRandomPosition(fighters, fighter);

  fighter.animation.once('arrive:start', () => {
    fighter.animation.pause();
  });
  fighter.animation.setAnimation('arrive');

  // Wait 0.25s before playing arrive SFX
  setTimeout(() => {
    if (shouldAbort() || fighter.animation.container.destroyed) {
      return;
    }
    void sound.play('sfx', { sprite: 'arrive' });
  }, 250 / speed.current);

  // Set airborn phase
  fighter.animation.setAirborn(true);

  // Hide shadow
  fighter.animation.shadow.alpha = 0;

  // Set zIndex to front
  fighter.animation.container.zIndex = y + 30;

  // Update shadow to the state from which it will be tweened
  updateShadow(fighter);

  await airbornMove({
    fighter,
    speed,
    duration: 0.5,
    ease: 'none',
    endPosition: { x, y, zIndex: y },
  });

  if (shouldAbort()
    || fighter.animation.container.destroyed
    || fighter.animation.shadow.destroyed) {
    return;
  }

  // Stop airborn phase
  fighter.animation.setAirborn(false);

  const animations = [fighter.animation.waitForEvent('arrive:end')];

  // GroundShake for big bosses
  if (fighter.type === 'boss'
    && (fighter.name === BossName.EmberFang || fighter.name === BossName.GoldClaw)) {
    // Shake 8px for 350 ms
    animations.push(shakeStage(app, speed, 8, 350));
  }

  // Finish the arrive animation
  fighter.animation.play();

  // Dust cloud at arrival
  playDustEffect(app, spritesheets, fighter, speed);

  // Wait for animation to end
  await Promise.all(animations);

  if (shouldAbort() || fighter.animation.container.destroyed) {
    return;
  }

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');
};
