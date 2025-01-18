import { DropShieldStep } from '@labrute/core';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './utils/findFighter';
import itemDrop from './itemDrop';

const dropShield = (
  app: Application,
  fighters: AnimationFighter[],
  step: DropShieldStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }

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
    fighter: target,
    speed,
    item: 'shield',
    initialPosition,
    initialVelocity,
  });
};

export default dropShield;
