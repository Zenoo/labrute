/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, SkillActivateStep, SkillById, SkillId } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';

import { OutlineFilter } from '@pixi/filter-outline';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import stagger from './stagger';
import findFighter, { AnimationFighter } from './utils/findFighter';
import repositionFighters from './utils/repositionFighters';

const skillActivate = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillActivateStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Filter the only activation case outside of neutral (wake up cry)
  if (step.s !== SkillId.cryOfTheDamned || !brute.stunned) {
    // Reposition mispositionned fighters before skillActivate
    await repositionFighters(app, fighters, speed);
  }

  // Play skill SFX
  if ([SkillId.cryOfTheDamned, SkillId.fierceBrute].includes(step.s)) {
    void sound.play('sfx', { sprite: `${SkillById[step.s]}` });
  }

  if ([SkillId.cryOfTheDamned, SkillId.fierceBrute, SkillId.hammer].includes(step.s)) {
    const animationEnded = brute.animation.waitForEvent('strengthen:end');

    // Set animation to `strenghten`
    brute.animation.setAnimation('strengthen');

    // Add filter
    if (step.s === SkillId.fierceBrute) {
      if (!brute.animation.container.filters) {
        brute.animation.container.filters = [];
      }

      brute.animation.container.filters.push(new OutlineFilter(1, 0xff0000));
    }

    const animations = [];

    // Strengthen animation
    animations.push(new Promise((resolve) => {
      animationEnded.then(() => {
        // Set animation to `idle`
        brute.animation.setAnimation('idle');

        resolve(null);
      }).catch((err) => {
        console.error(err);
      });
    }));

    if (step.s === SkillId.cryOfTheDamned) {
      // Create 3 cries
      for (let i = 0; i < 3; i++) {
        const cry = new AnimatedSprite(spritesheet.animations.cry || []);
        cry.animationSpeed = speed.current;
        cry.zIndex = 1000;
        cry.alpha = 0;

        // Set cry position
        cry.position.set(
          brute.animation.container.x + (i % 2) * 20 - (brute.team === 'L' ? 0 : 140),
          brute.animation.container.y - FIGHTER_HEIGHT.brute / 2 + i * 20,
        );

        // Add cry to stage
        app.stage.addChild(cry);

        // Play cry animation
        cry.play();

        // Fade in cry
        Tweener.add({
          target: cry,
          duration: 0.25 / speed.current,
          ease: Easing.linear,
        }, {
          alpha: 1,
        }).catch(console.error);

        // Move cry horizontally
        Tweener.add({
          target: cry,
          duration: 1 / speed.current,
          ease: Easing.linear,
        }, {
          x: brute.team === 'L' ? cry.x + 100 : cry.x - 100,
        }).then(() => {
          // Destroy cry
          cry.destroy();
        }).catch(console.error);
      }
    }

    // Stagger remaining pets
    // Don't do it if brute is stunned as it would cancel a pet's moveBack
    if (step.p && !brute.stunned) {
      for (const petIndex of step.p) {
        // Get pet
        const pet = findFighter(fighters, petIndex);
        if (!pet) {
          throw new Error('Pet not found');
        }
        animations.push(stagger(pet, speed));
      }
    }

    if (brute.stunned) {
      // If brute is stunned, it means it is repulsing the opponent
      // in this case the animation must be played while opponent runs away
      brute.stunned = false;
      void Promise.all(animations);
    } else {
      // Else, wait for animations to complete
      await Promise.all(animations);
    }
  }

  // Flash flood
  if (step.s === SkillId.flashFlood) {
    // Set brute animation to `evade`
    brute.animation.setAnimation('evade');

    // Move brute to upper middle
    await Tweener.add({
      target: brute.animation.container,
      duration: 0.4 / speed.current,
      ease: Easing.easeOutCubic
    }, {
      y: 100,
      x: brute.team === 'L'
        ? app.screen.width / 2 - FIGHTER_WIDTH.brute / 2
        : app.screen.width / 2 + FIGHTER_WIDTH.brute / 2,
    });
  }

  // TODO: different visual for every skill activation
};

export default skillActivate;
