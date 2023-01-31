import { EndStep } from '@labrute/core';
import { Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';

const end = (
  app: Application,
  fighters: AnimationFighter[],
  step: EndStep,
  speed: React.MutableRefObject<number>,
) => {
  const winner = findFighter(fighters, step.winner);
  if (!winner) {
    throw new Error('Fighter not found');
  }

  // Set animation to `win`
  changeAnimation(app, winner, 'win', speed);
};

export default end;