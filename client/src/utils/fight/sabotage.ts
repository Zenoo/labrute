import { SabotageStep } from '@labrute/core';
import { Application } from 'pixi.js';

import { AnimationFighter, findFighter } from './utils/findFighter';
import { updateWeapons } from './updateWeapons';
import { itemDrop } from './itemDrop';
import { Spritesheets } from './utils/spritesheet';

export const sabotage = (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: SabotageStep,
  speed: React.RefObject<number>,
) => {
  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Opponent not found');
  }

  // Weapon position
  const initialPosition = {
    x: target.animation.container.x,
    y: target.animation.container.y - target.animation.baseHeight * 0.4,
  };

  // Weapon velocity
  const initialVelocity = {
    x: 3 + Math.random() * 2,
    y: -3,
  };

  // Drop broken weapon
  itemDrop({
    app,
    spritesheets,
    fighter: target,
    speed,
    item: step.w,
    initialPosition,
    initialVelocity,
    broken: true
  });

  // Update weapon list
  updateWeapons(app, spritesheets, target, step.w, 'remove');
};
