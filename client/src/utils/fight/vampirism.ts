/* eslint-disable no-void */
import { VampirismStep } from '@labrute/core';

import { sound } from '@pixi/sound';
import { Easing } from 'pixi-tweener';
import { Application } from 'pixi.js';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { displayHeal } from './utils/displayHeal';
import displayDamage from './utils/displayDamage';
import updateHp from './updateHp';
import { untrap } from './untrap';
import { playHitEffect } from './utils/playVFX';
import { playResistAnimation } from './resist';
import { airbornMove } from './utils/updateShadow';

export const vampirism = async (
  app: Application,
  fighters: AnimationFighter[],
  step: VampirismStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set brute animation to `evade`
  brute.animation.setAnimation('evade');

  // Start airborn phase
  brute.animation.setAirborn(true);

  // Move brute to target position
  await airbornMove({
    fighter: brute,
    speed,
    duration: 0.25,
    ease: Easing.linear,
    endPosition: {
      x: target.team === 'R'
        ? target.animation.container.x + target.animation.baseWidth / 2
        : target.animation.container.x - target.animation.baseWidth / 2,
      y: target.animation.container.y - 1,
      zIndex: target.animation.container.zIndex - 1,
    },
  });

  // Reverse brute
  brute.animation.container.scale.x *= -1;

  const animationEnded = brute.animation.waitForEvent('steal:end');

  // Set brute animation to `steal`
  brute.animation.setAnimation('steal');

  // Play steal SFX
  void sound.play('sfx', { sprite: 'vampirism' });

  // Wake up target
  target.stunned = false;

  // Untrap target
  untrap(app, target);

  // Set target animation to `stolen`
  if (target.type === 'brute') {
    target.animation.setAnimation('stolen');
  }

  // Blood vfx
  playHitEffect(app, brute, target, speed, 'blood');

  displayHeal(app, brute, step.h, speed);
  displayDamage(app, target, step.d, speed);

  // Play the resist animation now
  playResistAnimation(app, target, speed);

  // Update HP bar
  updateHp(fighters, brute, step.h, speed, isClanWar);
  updateHp(fighters, target, -step.d, speed, isClanWar);

  // Wait for animation to finish
  await animationEnded;

  // Set target animation to normal
  target.animation.setAnimation(target.stunned ? 'death' : 'idle');

  // Set brute animation to `evade`
  brute.animation.setAnimation('evade');

  const { x, y } = getRandomPosition(fighters, brute);

  // Move brute to position
  await airbornMove({
    fighter: brute,
    speed,
    duration: 0.25,
    ease: Easing.linear,
    endPosition: {
      x,
      y,
      zIndex: y,
    },
  });

  // End airborn phase
  brute.animation.setAirborn(false);

  // Restore scale
  brute.animation.container.scale.x *= -1;

  // Set brute animation to `idle`
  brute.animation.setAnimation('idle');
};
