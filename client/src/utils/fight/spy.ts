import { SpyStep, randomBetween } from '@labrute/core';
import { Application } from 'pixi.js';

import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './findFighter';

const spy = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SpyStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const opponent = findFighter(fighters, step.opponent);
  if (!opponent) {
    throw new Error('Opponent not found');
  }

  const animations: Promise<unknown>[] = [];

  const swapWeapons = (fighter: AnimationFighter) => {
    // Move brute weapons to opponent
    fighter.weaponsIllustrations.forEach((weapon, i) => {
      // Get target position
      const targetPosition = {
        x: fighter.team === 'right'
          ? (i % 9) * 20 + 60
          : 480 - ((i % 9) * 20 + 60),
        y: Math.floor(i / 9) * 20 + 40,
      };

      // Move weapon horizontally
      animations.push(Tweener.add({
        target: weapon,
        duration: 1 / speed.current,
        ease: Easing.linear,
      }, {
        x: targetPosition.x,
      }));

      // Move weapon vertically
      animations.push(new Promise((resolve) => {
        // First arc
        Tweener.add({
          target: weapon,
          duration: 0.5 / speed.current,
          ease: Easing.easeOutCirc,
        }, {
          y: targetPosition.y + randomBetween(-100, 100),
        }).then(() => {
          // Second arc
          Tweener.add({
            target: weapon,
            duration: 0.5 / speed.current,
            ease: Easing.easeInCirc,
          }, {
            y: targetPosition.y,
          }).then(resolve).catch(console.error);
        }).catch(console.error);
      }));
    });
  };

  swapWeapons(brute);
  swapWeapons(opponent);

  // Wait for animations to complete
  await Promise.all(animations);

  // Swap weapons
  const tempWeapons = [...brute.weapons];
  brute.weapons = [...opponent.weapons];
  opponent.weapons = tempWeapons;

  const tempWeaponsIllustrations = [...brute.weaponsIllustrations];
  brute.weaponsIllustrations = [...opponent.weaponsIllustrations];
  opponent.weaponsIllustrations = tempWeaponsIllustrations;
};

export default spy;