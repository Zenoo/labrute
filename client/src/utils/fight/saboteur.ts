import { Animation, randomBetween, SaboteurStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';

import findFighter, { AnimationFighter } from './findFighter';
import stagger from './stagger';
import updateWeapons from './updateWeapons';

const saboteur = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SaboteurStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `hit`
  changeAnimation(
    app,
    brute,
    brute.data?.gender === 'male'
      ? `hit-${randomBetween(0, 2)}` as Animation
      : 'hit',
    speed,
  );

  // Stagger animation
  await stagger(brute.currentAnimation as AnimatedSprite, brute.team, speed);

  // Update weapon list
  updateWeapons(app, brute, step.weapon, 'remove');
};

export default saboteur;