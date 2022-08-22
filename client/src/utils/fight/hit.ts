import { Animation, HitStep } from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import { AnimatedSprite, Application } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter.js';
import { changeAnimation } from './setupFight.js';
import stagger from './stagger.js';
import updateHp from './updateHp.js';

const hit = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
) => {
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Get hit animation (random for male brute)
  const animation = target.type === 'brute' && target.data?.gender === 'male'
    ? `hit-${randomBetween(0, 3)}`
    : 'hit';

  // Set animation to the correct hit animation
  changeAnimation(app, target, animation as Animation);

  // Update HP bar
  if (target.hpBar) {
    updateHp(target, -step.damage);
  }

  // Stagger
  await stagger(target.currentAnimation as AnimatedSprite, target.team);
};

export default hit;