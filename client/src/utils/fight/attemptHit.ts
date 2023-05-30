import { AttemptHitStep, FIGHTER_HEIGHT, FIGHTER_WIDTH, weapons } from '@labrute/core';

import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';
import { updateActiveWeapon } from './updateWeapons';
import { BevelFilter } from '@pixi/filter-bevel';
import { Easing, Tweener } from 'pixi-tweener';

const attemptHit = (
  app: Application,
  fighters: AnimationFighter[],
  step: AttemptHitStep,
  speed: React.MutableRefObject<number>,
) => {
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Custom animation for brutes
  const animation = step.fighter.type === 'brute'
    ? weapons.find((w) => w.name === step.weapon)?.animation || 'fist'
    : 'attack';

  // Set animation to the correct hitting animation
  changeAnimation(app, fighter, animation, speed);

  // Wait for animation to finish
  (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
    // Set animation to `idle`
    changeAnimation(app, fighter, 'idle', speed);
  };

  // Handle shield breaking
  if (step.brokeShield) {
    target.shield = false;

    // Update active weapon
    updateActiveWeapon(app, target, target.activeWeapon ? target.activeWeapon.name : null);

    // Create trashed shield sprite
    const trashedShield = new Sprite(spritesheet.textures['shield.png']);
    trashedShield.filters = [new BevelFilter()];
    trashedShield.zIndex = 1;

    // Anchor to left center
    trashedShield.anchor.set(0, 0.5);

    // Set position
    trashedShield.position.set(
      target.team === 'left'
        ? target.container.x + FIGHTER_WIDTH.brute / 4
        : target.container.x + FIGHTER_WIDTH.brute * 0.75,
      target.container.y - FIGHTER_HEIGHT.brute * 0.5,
    );

    // Set angle
    trashedShield.angle = target.team === 'left' ? -110 : 70;

    // Add to stage
    app.stage.addChild(trashedShield);

    // Animate the fall
    Tweener.add({
      target: trashedShield,
      duration: 0.3 / speed.current,
      ease: Easing.linear,
    }, {
      x: target.team === 'left'
        ? trashedShield.x - 20
        : trashedShield.x + 20,
      y: trashedShield.y + 50,
      angle: target.team === 'left' ? -180 : 0,
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