import { ResistStep } from '@labrute/core';
import { Application, AnimatedSprite } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';

const resist = (
  fighters: AnimationFighter[],
  step: ResistStep,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }
  brute.resist = true;
};

export const playResistAnimation = (
  app: Application,
  brute: AnimationFighter,
  speed: React.MutableRefObject<number>,
) => {
  // Abort if brute doesn't resist
  if (!brute.resist) return;

  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Create resist sprite
  const resistSprite = new AnimatedSprite(spritesheet.animations.resist || []);
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

  // eslint-disable-next-line no-param-reassign
  brute.resist = false;
};

export default resist;
