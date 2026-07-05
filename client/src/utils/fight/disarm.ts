import { DisarmStep } from '@labrute/core';
import { Application, AnimatedSprite } from 'pixi.js';

import { AnimationFighter, findFighter } from './utils/findFighter';
import { itemDrop } from './itemDrop';
import { Spritesheets } from './utils/spritesheet';

export const disarm = (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: DisarmStep,
  speed: React.RefObject<number>,
) => {
  const waveSpritesheet = spritesheets.misc;

  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }

  // Create wave sprite
  const waveSprite = new AnimatedSprite(waveSpritesheet.animations.wave || []);
  waveSprite.animationSpeed = speed.current;
  waveSprite.loop = false;

  // Center sprite on the hand of target
  waveSprite.anchor.set(0.5, 0.5);
  waveSprite.zIndex = target.animation.container.zIndex + 1;
  waveSprite.position.set(
    target.team === 'L'
      ? target.animation.container.x + target.animation.baseWidth * 0.25
      : target.animation.container.x - target.animation.baseWidth * 0.25,
    target.animation.container.y - target.animation.baseHeight * 0.5,
  );

  // Add wave sprite to stage
  app.stage.addChild(waveSprite);

  // Delete sprite when animation is complete
  waveSprite.onComplete = () => {
    waveSprite.destroy();
  };

  // Play wave
  waveSprite.play();

  // Remove weapon from opponent
  target.animation.weapon = null;

  // Drop item
  itemDrop({
    app,
    spritesheets,
    fighter: target,
    speed,
    item: step.w,
  });
};
