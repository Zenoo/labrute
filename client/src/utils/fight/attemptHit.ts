import {
  AttemptHitStep, WeaponById, weapons
} from '@labrute/core';

import { BevelFilter } from 'pixi-filters/bevel';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { getHitDistance } from './utils/getHitDistance';
import { tween } from './utils/tween';
import { Spritesheets } from './utils/spritesheet';

export const attemptHit = async (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: AttemptHitStep,
  speed: React.MutableRefObject<number>,
) => {
  const spritesheet = spritesheets.misc;

  const fighter = findFighter(fighters, step.f);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Custom animation for brutes
  const animation = fighter.type === 'brute'
    ? typeof step.w !== 'undefined' ? weapons[WeaponById[step.w]].animation || 'fist' : 'fist'
    : 'attack';

  const hitTriggered = fighter.animation.waitForEvent(`${animation}:hit`);
  const animationEnded = fighter.animation.waitForEvent(`${animation}:end`);

  // Set animation to the correct hitting animation
  fighter.animation.setAnimation(animation);

  // Wait for animation to hit
  await hitTriggered;

  // Get the correct x position in order to hit
  const hitRangeXPosition = fighter.team === 'L'
    ? target.animation.container.x - getHitDistance(fighter, target)
    : target.animation.container.x + getHitDistance(fighter, target);

  // If this position is ahead, leap to it
  if (fighter.team === 'L'
    ? hitRangeXPosition > fighter.animation.container.x
    : hitRangeXPosition < fighter.animation.container.x
  ) {
    await tween(fighter.animation.container, {
      x: hitRangeXPosition,
      duration: 0.1 / speed.current,
      ease: 'none',
    });
  }

  animationEnded.then(() => {
    // Set animation to `idle`
    fighter.animation.setAnimation('idle');
  }).catch(console.error);

  // Handle shield breaking
  // Necessary since dropShield was added later
  // TODO: Remove on release
  if (step.b) {
    target.animation.shield = false;

    // Create trashed shield sprite
    const trashedShield = new Sprite(spritesheet.textures['shield.png']);
    trashedShield.filters = [new BevelFilter()];
    trashedShield.zIndex = 1;

    // Anchor to left center
    trashedShield.anchor.set(0, 0.5);

    // Set position
    trashedShield.position.set(
      target.team === 'L'
        ? target.animation.container.x + target.animation.baseWidth * 0.25
        : target.animation.container.x + target.animation.baseWidth * 0.25,
      target.animation.container.y - target.animation.baseHeight * 0.4,
    );

    // Set angle
    trashedShield.angle = target.team === 'L' ? -110 : 70;

    // Add to stage
    app.stage.addChild(trashedShield);

    // Animate the fall
    tween(trashedShield, {
      duration: 0.3 / speed.current,
      ease: 'none',
      x: target.team === 'L'
        ? trashedShield.x - 20
        : trashedShield.x + 20,
      y: trashedShield.y + 50,
      angle: target.team === 'L' ? -180 : 0,
    }).then(() => {
      // Wait a bit
      setTimeout(() => {
        // Decrease opacity
        tween(trashedShield, {
          duration: 0.5 / speed.current,
          ease: 'none',
          alpha: 0,
        }).then(() => {
          // Remove from stage
          app.stage.removeChild(trashedShield);
        }).catch(console.error);
      }, 500 / speed.current);
    }).catch(console.error);
  }
};
