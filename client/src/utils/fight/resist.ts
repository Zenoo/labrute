import { FightStep, ResistStep } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';

const resist = (
  app: Application,
  fighters: AnimationFighter[],
  step: ResistStep,
  nextStep: FightStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Add a yellow outline filter to the brute on the next animation
  setTimeout(() => {
    const outline = new OutlineFilter(2, 0xffff00);
    brute.animation.container.filters = [
      ...brute.animation.container.filters || [],
      outline
    ];

    // Remove the outline filter after 0.2 second (more for hammer)
    const duration = (nextStep.action === 'hammer' ? 800 : 200) / speed.current;

    setTimeout(() => {
      brute.animation.container.filters = brute.animation.container.filters
        ?.filter((f) => !(f instanceof OutlineFilter)) || [];
    }, duration);
  }, 5);
};

export default resist;