
import { SkillId, TrapStep } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';

import { sound } from '@pixi/sound';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { skillUse } from './skillActivate';
import { tween } from './utils/tween';

export const trap = async (
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

  skillUse(app, brute, SkillId.net, speed);

  // Create net sprite
  const net = new Sprite(spritesheet.textures['thrown-net.png']);
  net.anchor.set(0.5, 0.5);

  // Set net position
  net.position.set(
    brute.team === 'L'
      ? brute.animation.container.x + brute.animation.baseWidth / 2
      : brute.animation.container.x - brute.animation.baseWidth / 2,
    brute.animation.container.y - brute.animation.baseHeight / 2,
  );

  // Get target position
  const targetPosition = {
    x: target.animation.container.x,
    y: target.animation.container.y - target.animation.baseHeight,
  };

  // Set rotation (from brute and target positions)
  net.angle = (Math.atan2(
    targetPosition.y - net.y,
    targetPosition.x - net.x,
  ) * 180) / Math.PI;

  // Add net to stage
  app.stage.addChild(net);

  const animations = [];

  // Move net horizontally
  animations.push(tween(net, {
    duration: 0.5 / speed.current,
    ease: 'none',
    x: targetPosition.x,
  }));

  // Move net vertically
  animations.push(new Promise((resolve) => {
    // Move up
    tween(net, {
      duration: 0.25 / speed.current,
      ease: 'circ.out',
      y: targetPosition.y - 120,
    }).then(() => {
      // Move down
      tween(net, {
        duration: 0.25 / speed.current,
        ease: 'circ.in',
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
