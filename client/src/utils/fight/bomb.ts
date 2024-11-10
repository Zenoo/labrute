/* eslint-disable no-void */
import { BombStep, FIGHTER_HEIGHT, FIGHTER_WIDTH, randomBetween } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import stagger from './stagger';
import updateHp from './updateHp';
import displayDamage from './utils/displayDamage';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { untrap } from './untrap';

const getBombDamage = (damage: BombStep['d'], target: AnimationFighter) => {
  const targetDamage = damage[target.index];

  if (typeof targetDamage !== 'number') {
    throw new Error('Target damage not found');
  }

  return targetDamage;
};

const bomb = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BombStep,
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

  // Set animation to `launch`
  fighter.animation.setAnimation('launch');
  // Play launch SFX
  void sound.play('sfx', { sprite: 'net' });

  // Create bomb sprite
  const bombSprite = new AnimatedSprite(spritesheet.animations.bomb || []);
  bombSprite.animationSpeed = speed.current / 2;
  bombSprite.loop = true;

  // Set bomb sprite position
  bombSprite.x = fighter.animation.container.x + FIGHTER_WIDTH.brute / 2;
  bombSprite.y = fighter.animation.container.y - FIGHTER_HEIGHT.brute / 2;

  // Get target position
  const targetPosition = {
    x: fighter.team === 'L' ? app.screen.width - 100 : 100,
    y: app.screen.height * 0.75,
  };

  // Add bomb sprite to stage
  app.stage.addChild(bombSprite);

  // Play bomb
  bombSprite.play();

  const animations = [];

  // Move bomb horizontally
  animations.push(Tweener.add({
    target: bombSprite,
    duration: 0.5 / speed.current,
    ease: Easing.linear,
  }, {
    x: targetPosition.x,
  }));

  // Move bomb vertically
  animations.push(new Promise((resolve) => {
    // Move up
    Tweener.add({
      target: bombSprite,
      duration: 0.25 / speed.current,
      ease: Easing.easeOutCirc,
    }, {
      y: targetPosition.y - 100,
    }).then(() => {
      // Move down
      Tweener.add({
        target: bombSprite,
        duration: 0.25 / speed.current,
        ease: Easing.easeInCirc,
      }, {
        y: targetPosition.y,
      }).then(resolve).catch(console.error);
    }).catch(console.error);
  }));

  // Wait for animations to complete
  await Promise.all(animations);

  // Remove bomb sprite
  bombSprite.destroy();

  // Create explosion sprite
  const explosionSprite = new AnimatedSprite(spritesheet.animations.explosion || []);
  explosionSprite.animationSpeed = speed.current;
  explosionSprite.loop = false;

  // Set explosion sprite position
  explosionSprite.x = targetPosition.x;
  explosionSprite.y = targetPosition.y;

  // Add explosion sprite to stage
  app.stage.addChild(explosionSprite);

  // Delete explosion sprite when animation is complete
  explosionSprite.onComplete = () => {
    explosionSprite.destroy();
  };

  // Play explosion
  explosionSprite.play();

  // Set animation to `idle`
  fighter.animation.setAnimation('idle');

  // Play bomb SFX
  void sound.play('sfx', { sprite: 'bomb' });

  // Get targets
  const targets = step.t.map((t) => {
    const target = findFighter(fighters, t);

    if (!target) {
      throw new Error('Target not found');
    }

    return target;
  });

  const staggers = [];

  for (const target of targets) {
    // Untrap target
    untrap(app, target);

    // Get damage
    const damage = getBombDamage(step.d, target);

    // Get hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';

    // Set animation to the correct hit animation
    target.animation.setAnimation(animation);

    displayDamage(app, target, damage, speed);

    // Update HP bar
    updateHp(fighters, target, -damage, speed, isClanWar);

    // Stagger
    staggers.push(stagger(target, speed)
      .then(() => {
        if (target.animation.animation.startsWith('hit')) {
          // Set animation to normal
          target.animation.setAnimation(target.stunned ? 'death' : 'idle');
        }
      }));
  }

  // Wait for staggers to complete
  await Promise.all(staggers);
};

export default bomb;
