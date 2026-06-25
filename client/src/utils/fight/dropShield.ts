import { DropShieldStep } from '@labrute/core';
import { Application } from 'pixi.js';

import { AnimationFighter, findFighter } from './utils/findFighter';
import { itemDrop } from './itemDrop';
import { Spritesheets } from './utils/spritesheet';

export const dropShield = (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: DropShieldStep,
  speed: React.MutableRefObject<number>,
) => {
  const target = findFighter(fighters, step.b);
  if (!target) {
    throw new Error('Target not found');
  }

  target.animation.shield = false;

  // position middle of target
  const initialPosition = {
    x: target.animation.container.x,
    y: target.animation.container.y - target.animation.baseHeight * 0.25
  };
  // velocity 9 back 7 up
  const initialVelocity = { x: 9, y: -7 };

  // Drop shield
  itemDrop({
    app,
    spritesheets,
    fighter: target,
    speed,
    item: 'shield',
    initialPosition,
    initialVelocity,
  });
};
