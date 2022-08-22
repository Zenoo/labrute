import { EquipStep } from '@eternaltwin/labrute-core/types';

import { AnimatedSprite, Application } from 'pixi.js';
import findFighter, { AnimationFighter } from './findFighter.js';
import { changeAnimation } from './setupFight.js';
import updateWeapons from './updateWeapons.js';

const equip = async (
  app: Application,
  fighters: AnimationFighter[],
  step: EquipStep,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Set animation to `equip`
  changeAnimation(app, brute, 'equip');
  (brute.currentAnimation as AnimatedSprite).animationSpeed = 0.5;

  // Wait for animation to complete
  await new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `iddle`
      changeAnimation(app, brute, 'iddle');

      // Update weapon list
      updateWeapons(app, brute, step.name, 'remove');

      resolve(null);
    };
  });
};

export default equip;