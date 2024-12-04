/* eslint-disable no-void */
import { HitStep, randomBetween } from '@labrute/core';
import { Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import displayDamage from './utils/displayDamage';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import { untrap } from './untrap';
import { getRealKnockBack } from './utils/knockBack';
import { playDustEffect, playHitEffect } from './utils/playVFX';
import { playResistAnimation } from './resist';
import { updateShadow, airbornMove, tweenShadow } from './utils/updateShadow';

const hammer = async (
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

  // Skill SFX
  void sound.play('sfx', { sprite: 'hammer' });

  // Wake up target
  target.stunned = false;

  // Untrap target
  untrap(app, target);

  fighter.animation.container.zIndex = target.animation.container.zIndex + 1;

  // Get signed and clamped push
  const knockBack = getRealKnockBack(target, 30);

  // Push both
  const pushAnimations = [fighter, target].map((f) => Tweener.add({
    target: f.animation.container,
    duration: 0.16 / speed.current,
    ease: Easing.linear
  }, {
    x: f.animation.container.x + knockBack,
  }));

  // Dust cloud
  playDustEffect(app, target, speed, 22);

  // Wait for both animations to finish
  await Promise.all(pushAnimations);

  // Start airborn phase
  fighter.animation.setAirborn(true);
  target.animation.setAirborn(true);

  // Handle fighters with base scale inverted (dog)
  const targetInitialScaleX = target.animation.container.scale.x;

  // Store start position
  const start = {
    x: fighter.animation.container.x,
    y: fighter.animation.container.y,
  };

  // Jump to the top of the screen
  const topY = fighter.animation.baseHeight * 0.2;

  // Jump duration depends on jump height
  const jumpDuration = 0.0032 * (fighter.animation.container.y - topY);

  // Jump both
  const jumpAnimations = [fighter, target].map((f) => airbornMove({
    fighter: f,
    duration: jumpDuration,
    speed,
    ease: Easing.linear,
    endPosition: { y: topY },
  }));

  // Max brute distance
  const bruteDistance = Math.abs(target.animation.container.x - start.x);
  // Store direction
  const direction = fighter.team === 'L' ? 1 : -1;

  // Get fighter current side relative to target
  let side = direction * (target.animation.container.x > fighter.animation.container.x ? -1 : 1);

  const changeSide = () => {
    side *= -1;

    // Turn fighters
    target.animation.container.scale.x = side * targetInitialScaleX;
    fighter.animation.container.scale.x = side;

    // zIndex fighters
    target.animation.container.zIndex = start.y - side;
    fighter.animation.container.zIndex = start.y + side;
  };

  changeSide();

  jumpAnimations.push(
    // First spin
    Tweener.add(
      {
        target: fighter.animation.container,
        duration: jumpDuration / (6 * speed.current),
        ease: Easing.linear,
      },
      {
        x: target.animation.container.x,
      }
    )
      .then(() => {
        changeSide();
        return Tweener.add(
          {
            target: fighter.animation.container,
            duration: jumpDuration / (6 * speed.current),
            ease: Easing.linear,
          },
          {
            x: target.animation.container.x + bruteDistance * direction,
          }
        );
      })
      // Second spin
      .then(() => {
        // Set fighter animation to `grab`
        fighter.animation.setAnimation('grab');

        // Set target animation to `grabbed`
        target.animation.setAnimation('grabbed');

        return Tweener.add(
          {
            target: fighter.animation.container,
            duration: jumpDuration / (6 * speed.current),
            ease: Easing.linear,
          },
          {
            x: target.animation.container.x,
          }
        );
      })
      .then(() => {
        changeSide();
        return Tweener.add(
          {
            target: fighter.animation.container,
            duration: jumpDuration / (6 * speed.current),
            ease: Easing.linear,
          },
          {
            x: target.animation.container.x - bruteDistance * direction,
          }
        );
      })
      // Third spin
      .then(() => Tweener.add(
        {
          target: fighter.animation.container,
          duration: jumpDuration / (6 * speed.current),
          ease: Easing.linear,
        },
        {
          x: target.animation.container.x,
        }
      ))
      .then(() => {
        changeSide();
        return Tweener.add(
          {
            target: fighter.animation.container,
            duration: jumpDuration / (6 * speed.current),
            ease: Easing.linear,
          },
          {
            x: target.animation.container.x + bruteDistance * direction,
          }
        );
      })
  );

  // Wait for jump animations to finish
  await Promise.all(jumpAnimations);

  // Invert on y for the drop
  fighter.animation.container.scale.y = -1;
  target.animation.container.scale.y = -1;

  // Change their y as their y anchor is 0
  fighter.animation.container.y -= fighter.animation.baseHeight;
  target.animation.container.y -= target.animation.baseHeight;

  // Drop both
  const dropAnimations = [fighter, target].map((f) => Tweener.add({
    target: f.animation.container,
    duration: (jumpDuration * 0.38) / speed.current,
    ease: Easing.linear
  }, {
    y: start.y - f.animation.baseHeight,
  }));

  // Special shadow handling as fighters are y inverted
  updateShadow(fighter, fighter.animation.container.y - start.y, 0.2);
  updateShadow(target, target.animation.container.y - start.y, 0.2);

  // Add a tweener for the fighter's shadow
  dropAnimations.push(tweenShadow({
    fighter,
    speed,
    duration: jumpDuration * 0.38,
    ease: Easing.linear,
    endAltitude: -fighter.animation.baseHeight,
  }));

  // Add a tweener for the target's shadow
  dropAnimations.push(tweenShadow({
    fighter: target,
    speed,
    duration: jumpDuration * 0.38,
    ease: Easing.linear,
    endAltitude: -target.animation.baseHeight,
  }));

  // Wait for animations to finish
  await Promise.all(dropAnimations);

  // Reset fighters scale
  fighter.animation.container.scale.set(direction, 1);
  target.animation.container.scale.set(targetInitialScaleX, 1);

  // Reset y to match y inversion
  fighter.animation.container.y += fighter.animation.baseHeight;
  target.animation.container.y += target.animation.baseHeight;

  // Reset fighter x
  fighter.animation.container.x = start.x;

  // End airborn phase
  fighter.animation.setAirborn(false);
  target.animation.setAirborn(false);

  // Dust cloud on landing
  playDustEffect(app, target, speed);

  // Display damage
  displayDamage(app, target, step.d, speed);

  // Play the resist animation now
  playResistAnimation(app, target, speed);

  // Update HP bar
  updateHp(fighters, target, -step.d, speed, isClanWar);

  // Get hit animation (random for male brute)
  const hitAnimation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
    : 'hit';

  // Set animation to the correct hit animation
  target.animation.setAnimation(hitAnimation);

  // Play hit effect on target
  playHitEffect(app, fighter, target, speed);

  // Stagger target
  stagger(target, speed).then(() => {
    target.animation.setAnimation(target.stunned ? 'death' : 'idle');
  }).catch(console.error);
};

export default hammer;
