import { SkillExpireStep, SkillId } from '@labrute/core';
import { Application } from 'pixi.js';

import { OutlineFilter } from '@pixi/filter-outline';
import { Easing, Tweener } from 'pixi-tweener';
import { getRandomPosition } from './fightPositions';
import findFighter, { AnimationFighter } from './findFighter';

const skillExpire = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillExpireStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  if (step.s === SkillId.fierceBrute) {
    // Remove Outline filter
    brute.animation.container.filters = brute.animation.container.filters?.filter(
      (filter) => !(filter instanceof OutlineFilter),
    ) || [];
  }

  // Flash flood
  if (step.s === SkillId.flashFlood) {
    // Set brute animation to `arrive`
    brute.animation.once('arrive:start', () => {
      brute.animation.pause();
    });
    brute.animation.setAnimation('arrive');

    // Get positions
    const { x, y } = getRandomPosition(fighters, brute.animation.team);

    // Move brute back
    await Tweener.add({
      target: brute.animation.container,
      duration: 0.4 / speed.current,
      ease: Easing.easeInCubic
    }, { x, y });

    const animationEnded = brute.animation.waitForEvent('arrive:end');

    // Continue brute animation
    brute.animation.play();

    // Wait for animation to end before going further
    await animationEnded;

    // Set animation to `idle`
    brute.animation.setAnimation('idle');
  }

  // TODO: different visual for every skill expiration
};

export default skillExpire;
