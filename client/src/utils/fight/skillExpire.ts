import { SkillExpireStep, SkillId } from '@labrute/core';
import { Application } from 'pixi.js';

import { OutlineFilter } from '@pixi/filter-outline';
import { GlowFilter } from '@pixi/filter-glow';
import { Easing, Tweener } from 'pixi-tweener';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';

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

  // Hypnosis aura fade out
  if (step.s === SkillId.hypnosis) {
    // Get hypnosis Glowfilter
    const glowFilter = brute.animation.container.filters?.find(
      (filter) => filter instanceof GlowFilter
    ) as GlowFilter | null;

    if (glowFilter) {
      let { outerStrength, innerStrength } = glowFilter;

      const fadeOut = () => {
        outerStrength -= 0.1;
        innerStrength -= 0.1;
        if (outerStrength <= 0 && innerStrength <= 0) {
          // Remove Glow filter when faded
          brute.animation.container.filters = brute.animation.container.filters?.filter(
            (filter) => !(filter instanceof GlowFilter)
          ) || [];
        } else {
          glowFilter.outerStrength = outerStrength;
          glowFilter.innerStrength = innerStrength;
          requestAnimationFrame(fadeOut);
        }
      };
      fadeOut();
    }
  }

  // Flash flood
  if (step.s === SkillId.flashFlood) {
    // Set brute animation to `arrive`
    brute.animation.once('arrive:start', () => {
      brute.animation.pause();
    });
    brute.animation.setAnimation('arrive');

    // Get positions
    const { x, y } = getRandomPosition(fighters, brute.team);

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
