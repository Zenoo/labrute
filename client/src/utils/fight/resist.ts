import { ResistStep } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';

const resist = (
  app: Application,
  fighters: AnimationFighter[],
  step: ResistStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Add a yellow outline filter to the brute on the next animation
  setTimeout(() => {
    const outline = new OutlineFilter(2, 0xffff00);
    brute.currentAnimation.filters = [outline];

    // Remove the outline filter after 0.2 second
    setTimeout(() => {
      brute.currentAnimation.filters = [];
    }, 200);
  }, 5);
};

export default resist;