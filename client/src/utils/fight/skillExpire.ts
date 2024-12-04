import { SkillExpireStep, SkillId } from '@labrute/core';
import { Application } from 'pixi.js';

import { GlowFilter } from '@pixi/filter-glow';
import { Easing } from 'pixi-tweener';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';
import { untrap } from './untrap';
import { jumpBack } from './evade';
import { playDustEffect } from './utils/playVFX';
import { airbornMove } from './utils/updateShadow';

const skillExpire = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillExpireStep,
  speed: React.MutableRefObject<number>,
) => {
  const fighter = findFighter(fighters, step.b || step.f || 0);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  if (step.s === SkillId.fierceBrute) {
    // End fierceBrute
    fighter.fierceBrute = false;
  }

  // Handle self untrap / wake up
  if (step.s === SkillId.net || step.s === SkillId.chaining) {
    // Untrap target
    untrap(app, fighter);
    // Wake up
    fighter.stunned = false;

    // Play strenghten anim if brute
    if (fighter.type === 'brute') {
      const animationEnded = fighter.animation.waitForEvent('strengthen:end');
      // Set animation to `strenghten`
      fighter.animation.setAnimation('strengthen');
      await animationEnded;
    }
  }

  // Hypnosis aura fade out
  if (step.s === SkillId.hypnosis) {
    // Get hypnosis Glowfilter
    const glowFilter = fighter.animation.container.filters?.find(
      (filter) => filter instanceof GlowFilter
    ) as GlowFilter | null;

    if (glowFilter) {
      let { outerStrength, innerStrength } = glowFilter;

      const fadeOut = () => {
        outerStrength -= 0.1;
        innerStrength -= 0.1;
        if (outerStrength <= 0 && innerStrength <= 0) {
          // Remove Glow filter when faded
          fighter.animation.container.filters = fighter.animation.container.filters?.filter(
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
    fighter.animation.once('arrive:start', () => {
      fighter.animation.pause();
    });
    fighter.animation.setAnimation('arrive');

    // Get positions
    const { x, y } = getRandomPosition(fighters, fighter);
    // Set zIndex
    fighter.animation.container.zIndex = y;

    // Move brute back
    await airbornMove({
      fighter,
      speed,
      duration: 0.4,
      ease: Easing.easeInCubic,
      endPosition: { x, y, zIndex: y },
    });

    // End airborn phase
    fighter.animation.setAirborn(false);

    // Dust cloud on landing
    playDustEffect(app, fighter, speed);

    const animationEnded = fighter.animation.waitForEvent('arrive:end');

    // Continue brute animation
    fighter.animation.play();

    // Wait for animation to end before going further
    await animationEnded;

    // Set animation to `idle`
    fighter.animation.setAnimation('idle');
  }

  // Hammer
  if (step.s === SkillId.hammer) {
    // Jump back from impact
    await jumpBack(fighter, speed, 110, 0.33);
  }
};

export default skillExpire;
