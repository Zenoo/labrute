import { EndStep } from '@labrute/core';

import { Application } from 'pixi.js';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { untrap } from './untrap';

export const end = (
  app: Application,
  fighters: AnimationFighter[],
  step: EndStep,
) => {
  const winner = findFighter(fighters, step.w);
  if (!winner) {
    throw new Error('Fighter not found');
  }

  // Get team
  const team = fighters.filter((fighter) => fighter.team === winner.team);

  team.forEach((fighter) => {
    // Untrap fighter
    untrap(app, fighter);
    // Set animation to `win`
    fighter.animation.setAnimation('win');
  });
};
