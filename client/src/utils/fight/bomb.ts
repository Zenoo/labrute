/* eslint-disable no-void */
import { BombStep, FIGHTER_HEIGHT, FIGHTER_WIDTH, randomBetween } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';

import { sound } from '@pixi/sound';
import displayDamage from './displayDamage';
import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';
import updateHp from './updateHp';

const getBombDamage = (damage: BombStep['damage'], target: AnimationFighter) => {
  if (typeof damage === 'number') {
    return damage;
  }

  const targetDamage = damage.find((d) => d.name === target.name
    && d.type === target.type
    && d.master === target.master);

  if (!targetDamage) {
    throw new Error('Target damage not found');
  }

  return targetDamage.damage;
};

const bomb = async (
  app: Application,
  fighters: AnimationFighter[],
  step: BombStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `launch`
  fighter.animation.setAnimation('launch');

  // Play launch SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Create bomb sprite
  const bombSprite = new AnimatedSprite(spritesheet.animations.bomb);
  bombSprite.animationSpeed = speed.current / 2;
  bombSprite.loop = true;

  // Set bomb sprite position
  bombSprite.x = fighter.animation.container.x + FIGHTER_WIDTH.brute / 2;
  bombSprite.y = fighter.animation.container.y - FIGHTER_HEIGHT.brute / 2;

  // Get target position
  const targetPosition = {
    x: fighter.animation.team === 'left' ? app.screen.width - 100 : 100,
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
  const explosionSprite = new AnimatedSprite(spritesheet.animations.explosion);
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
  void sound.play('skills/bomb', {
    speed: speed.current,
  });

  // Get targets
  const targets = step.targets.map((t) => {
    const target = findFighter(fighters, t);

    if (!target) {
      throw new Error('Target not found');
    }

    return target;
  });

  const staggers = [];

  for (let i = 0; i < targets.length; i++) {
    const { [i]: target } = targets;

    // Get damage
    const damage = getBombDamage(step.damage, target);

    // Get hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.data?.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';

    // Set animation to the correct hit animation
    target.animation.setAnimation(animation);

    displayDamage(app, target, damage, speed);

    // Update HP bar
    if (target.hpBar) {
      updateHp(target, -damage, speed);
    }

    // Stagger
    // eslint-disable-next-line no-await-in-loop
    staggers.push(stagger(target, speed)
      .then(() => {
        if (target.animation.animation.startsWith('hit')) {
          // Set animation to `idle`
          target.animation.setAnimation('idle');
        }
      }));
  }

  // Wait for staggers to complete
  await Promise.all(staggers);
};

export default bomb;