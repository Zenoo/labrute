import { ThrowStep, weapons } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';
import updateWeapons from './updateWeapons';

const throwWeapon = async (
  app: Application,
  fighters: AnimationFighter[],
  step: ThrowStep,
) => {
  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Set animation to `prepare-throw`
  changeAnimation(app, fighter, 'prepare-throw');

  // Wait for animation to finish
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Remove weapon from brute if it is not a thrown weapon
  if (!weapons.find((w) => w.name === step.weapon)?.types.includes('thrown')) {
    updateWeapons(app, fighter, step.weapon, 'remove');
  }

  // Set animation to `throw`
  changeAnimation(app, fighter, 'throw');

  // Wait 250ms
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 250);
  });

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle');
};

export default throwWeapon;