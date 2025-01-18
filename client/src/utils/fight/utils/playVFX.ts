/* eslint-disable no-void */
import { randomBetween } from '@labrute/core';
import { Application, AnimatedSprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import getHitDistance from './getHitDistance';

const playDustEffect = (
  app: Application,
  fighter: AnimationFighter,
  speed: React.MutableRefObject<number>,
  offset: number = 0,
) => {
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;
  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Create dust sprite
  const dustSprite = new AnimatedSprite(spritesheet.animations.dust || []);
  dustSprite.animationSpeed = speed.current / 2;
  dustSprite.loop = false;

  // Set dust sprite position to the feet of fighter
  dustSprite.x = fighter.animation.container.x + (fighter.team === 'L' ? -offset : offset);
  dustSprite.y = fighter.animation.container.y + 5;
  dustSprite.zIndex = fighter.animation.container.zIndex - 1;

  // Add dust sprite to stage
  app.stage.addChild(dustSprite);

  // Destroy dust sprite when animation ends
  dustSprite.onComplete = () => {
    dustSprite.destroy();
  };

  // Play dust
  dustSprite.play();
};

const playHitEffect = (
  app: Application,
  fighter: AnimationFighter,
  target: AnimationFighter,
  speed: React.MutableRefObject<number>,
  VFX?: string,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const HIT_VFX = ['blood', 'impact-1', 'impact-2'];

  const vfx = fighter.type === 'pet'
    ? 'blood'
    : VFX ?? HIT_VFX[randomBetween(0, HIT_VFX.length - 1)] ?? 'blood';

  // Create hit VFX
  const hitVfx = new AnimatedSprite(spritesheet.animations[vfx] || []);
  hitVfx.zIndex = 1000;
  hitVfx.animationSpeed = speed.current / 4;
  hitVfx.loop = false;
  hitVfx.scale.x = target.team === 'L' ? -1 : 1;
  hitVfx.anchor.set(0.5, 0.5);

  const distance = Math.abs(fighter.animation.container.x - target.animation.container.x);
  const hitDistance = getHitDistance(fighter, target);

  const fighterHead = {
    x: fighter.team === 'L'
      ? fighter.animation.container.x + fighter.animation.baseWidth * 0.1
      : fighter.animation.container.x - fighter.animation.baseWidth * 0.1,
    y: fighter.animation.container.y - fighter.animation.baseHeight * 0.55,
  };

  const targetHead = {
    x: target.team === 'L'
      ? target.animation.container.x + target.animation.baseWidth * 0.1
      : target.animation.container.x - target.animation.baseWidth * 0.1,
    y: target.animation.container.y - target.animation.baseHeight * 0.55,
  };

  // If target is smaller than fighter
  if (fighter.animation.baseHeight > target.animation.baseHeight
    // or thrown attack
    || distance > hitDistance * 1.2
    // or fighter and target are too close (vampirism, hammer)
    || distance < hitDistance * 0.9) {
    // Set position to target head
    hitVfx.position.set(targetHead.x, targetHead.y);
  // Else set position to contact point
  } else {
    hitVfx.position.set(targetHead.x, fighterHead.y);
  }

  // Add hit VFX to stage
  app.stage.addChild(hitVfx);

  // Destroy hit VFX when animation is finished
  hitVfx.onComplete = () => {
    hitVfx.destroy();
  };

  // Play hit VFX
  hitVfx.play();
};

export { playDustEffect, playHitEffect };
