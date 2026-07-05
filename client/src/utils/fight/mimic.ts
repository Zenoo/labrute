
import { MimicStep, SkillId } from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { Application } from 'pixi.js';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { skillUse } from './skillActivate';
import { updateSkills } from './updateSkills';
import { Spritesheets } from './utils/spritesheet';

export const mimic = async (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: MimicStep,
  speed: React.RefObject<number>,
) => {
  const opponents = step.f.map((fighterId) => {
    const fighter = findFighter(fighters, fighterId);
    if (!fighter) {
      throw new Error('Fighter not found');
    }
    return fighter;
  });

  if (opponents.length === 0) {
    throw new Error('No opponent found for mimic');
  }

  const animations: Promise<void>[] = [];

  for (const opponent of opponents) {
    animations.push(new Promise<void>((resolve) => {
      const handRaised = opponent.animation.waitForEvent('win:hand-raised');

      // Faster win animation speed for male brutes
      const animationSpeed = opponent.gender === Gender.male ? 2 : 1;
      opponent.animation.animationSpeed = animationSpeed;

      // Set opponent animation to `win` at frame 5
      opponent.animation.setAnimation('win', 6 * animationSpeed);

      // Wait for the hand to be raised
      handRaised.then(() => {
        // Keep hand raised
        opponent.animation.animationSpeed = 0;

        skillUse(app, spritesheets, opponent, SkillId.mimic, speed);

        updateSkills(app, spritesheets, opponent, step.s, 'add', step.t, speed);

        // Set animation speed to fast reverse
        opponent.animation.animationSpeed = -animationSpeed * 2;

        // Add hand down to waited animations
        opponent.animation.waitForEvent('win:start').then(() => {
          // Set animation speed to normal
          opponent.animation.animationSpeed = 1;

          // Set animation to idle
          opponent.animation.setAnimation('idle');

          resolve();
        });
      });
    }));
  }

  await Promise.all(animations);
};
