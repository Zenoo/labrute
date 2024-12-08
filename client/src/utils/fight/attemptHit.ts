import { AttemptHitStep, WeaponById, weapons } from '@labrute/core';

import { BevelFilter } from '@pixi/filter-bevel';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite } from 'pixi.js';
import findFighter, { AnimationFighter } from './utils/findFighter';
import getHitDistance from './utils/getHitDistance';

const attemptHit = async (
  app: Application,
  fighters: AnimationFighter[],
  step: AttemptHitStep,
  speed: React.MutableRefObject<number>,
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

  // Custom animation for brutes
  const animation = fighter.type === 'brute'
    ? typeof step.w !== 'undefined' ? weapons.find((w) => (typeof step.w !== 'undefined' ? w.name === WeaponById[step.w] : false))?.animation || 'fist' : 'fist'
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
    await Tweener.add({
      target: fighter.animation.container,
      duration: 0.1 / speed.current,
      ease: Easing.linear
    }, {
      x: hitRangeXPosition,
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
    Tweener.add({
      target: trashedShield,
      duration: 0.3 / speed.current,
      ease: Easing.linear,
    }, {
      x: target.team === 'L'
        ? trashedShield.x - 20
        : trashedShield.x + 20,
      y: trashedShield.y + 50,
      angle: target.team === 'L' ? -180 : 0,
    }).then(() => {
      // Wait a bit
      setTimeout(() => {
        // Decrease opacity
        Tweener.add({
          target: trashedShield,
          duration: 0.5 / speed.current,
          ease: Easing.linear,
        }, {
          alpha: 0,
        }).then(() => {
          // Remove from stage
          app.stage.removeChild(trashedShield);
        }).catch(console.error);
      }, 500 / speed.current);
    }).catch(console.error);
  }
};

export default attemptHit;
