/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, TrapStep } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';
import getFighterType from './utils/getFighterType';

const trap = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrapStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set fighter animation to `launch`
  brute.animation.setAnimation('launch');
  // Play trap SFX
  void sound.play('sfx', { sprite: 'net' });

  // Create net sprite
  const net = new Sprite(spritesheet.textures['thrown-net.png']);

  // Set net position
  net.position.set(
    brute.animation.container.x + FIGHTER_WIDTH.brute / 2,
    brute.animation.container.y - FIGHTER_HEIGHT.brute / 2,
  );

  // Get target position
  const targetType = getFighterType(target);
  let targetPosition = {
    x: target.animation.container.x + FIGHTER_WIDTH[targetType] / 2,
    y: target.animation.container.y - FIGHTER_HEIGHT[targetType] / 2,
  };

  // Adjust for bosses
  if (target.type === 'boss') {
    targetPosition = {
      x: target.animation.container.x + FIGHTER_WIDTH[targetType],
      y: target.animation.container.y - FIGHTER_HEIGHT[targetType],
    };
  }

  // Set rotation (from brute and target positions)
  net.angle = (Math.atan2(
    targetPosition.y - net.y,
    targetPosition.x - net.x,
  ) * 180) / Math.PI;

  // Add net to stage
  app.stage.addChild(net);

  const animations = [];

  // Move net horizontally
  animations.push(Tweener.add({
    target: net,
    duration: 0.5 / speed.current,
    ease: Easing.linear,
  }, {
    x: targetPosition.x,
  }));

  // Move net vertically
  animations.push(new Promise((resolve) => {
    // Move up
    Tweener.add({
      target: net,
      duration: 0.25 / speed.current,
      ease: Easing.easeOutCirc,
    }, {
      y: targetPosition.y - 120,
    }).then(() => {
      // Move down
      Tweener.add({
        target: net,
        duration: 0.25 / speed.current,
        ease: Easing.easeInCirc,
      }, {
        y: targetPosition.y,
      }).then(resolve).catch(console.error);
    }).catch(console.error);
  }));

  // Wait for animations to complete
  await Promise.all(animations);

  // Remove net from stage
  net.destroy();

  // Set fighter animation to `idle`
  brute.animation.setAnimation('idle');

  // Set target animation to `trapped`
  target.animation.setAnimation('trapped');
  target.trapped = true;
};

export default trap;
