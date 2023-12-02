/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, TrapStep } from '@labrute/core';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';
import getFighterType from './getFighterType';
import { Easing, Tweener } from 'pixi-tweener';

const trap = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TrapStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Set fighter animation to `launch`
  changeAnimation(app, brute, 'launch', speed);

  // Play trap SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Create net sprite
  const net = new Sprite(spritesheet.textures['thrown-net.png']);

  // Set net position
  net.position.set(
    brute.container.x + FIGHTER_WIDTH.brute / 2,
    brute.container.y - FIGHTER_HEIGHT.brute / 2,
  );

  // Get target position
  const targetType = getFighterType(target);
  const targetPosition = {
    x: target.container.x + FIGHTER_WIDTH[targetType] / 2,
    y: target.container.y - FIGHTER_HEIGHT[targetType] / 2,
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
  changeAnimation(app, brute, 'idle', speed);

  // Set target animation to `trap`
  changeAnimation(app, target, 'trapped-start', speed);

  // Wait for animation to complete
  await new Promise((resolve) => {
    (target.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set target animation to `trapped-loop`
      changeAnimation(app, target, 'trapped-loop', speed);

      resolve(null);
    };
  });
};

export default trap;