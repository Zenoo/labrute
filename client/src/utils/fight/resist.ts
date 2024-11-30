import { ResistStep } from '@labrute/core';
import { Application, AnimatedSprite } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';

const resist = (
  app: Application,
  fighters: AnimationFighter[],
  step: ResistStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const waveSpritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!waveSpritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Create resist sprite
  const resistSprite = new AnimatedSprite(waveSpritesheet.animations.resist || []);
  resistSprite.animationSpeed = speed.current * 0.4;
  resistSprite.loop = false;

  // Center resist sprite on brute's chest
  resistSprite.anchor.set(0.5, 0.5);
  resistSprite.zIndex = brute.animation.container.zIndex + 1;
  resistSprite.position.set(
    brute.animation.container.x + (brute.team === 'L' ? -10 : 10),
    brute.animation.container.y - brute.animation.baseHeight * 0.36
  );

  // Add resist sprite to stage
  app.stage.addChild(resistSprite);

  // Delete resist sprite when animation is complete
  resistSprite.onComplete = () => {
    resistSprite.destroy();
  };

  // Play resist
  resistSprite.play();
};

export default resist;
