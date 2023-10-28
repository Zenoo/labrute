/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, SkillActivateStep } from '@labrute/core';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation, { handleEffects } from './changeAnimation';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './findFighter';

const skillActivate = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillActivateStep,
  speed: React.MutableRefObject<number>,
) => {
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  // Play skill SFX
  if (['cryOfTheDamned', 'fierceBrute'].includes(step.skill)) {
    void sound.play(`skills/${step.skill}`, {
      speed: speed.current,
    });
  }

  if (['fierceBrute', 'cryOfTheDamned', 'hammer'].includes(step.skill)) {
    // Set animation to `strenghten`
    changeAnimation(app, brute, 'strengthen', speed);

    // Add to active effects
    brute.activeEffects.push(step.skill);

    // Add filter
    handleEffects(brute, null);

    const animations = [];

    // Strengthen animation
    animations.push(new Promise((resolve) => {
      (brute.currentAnimation as AnimatedSprite).onComplete = () => {
        // Set animation to `idle`
        changeAnimation(app, brute, 'idle', speed);

        resolve(null);
      };
    }));

    if (step.skill === 'cryOfTheDamned') {
      // Create 3 cries
      for (let i = 0; i < 3; i++) {
        const cry = new AnimatedSprite(spritesheet.animations.cry);
        cry.animationSpeed = speed.current;
        cry.zIndex = 1000;
        cry.alpha = 0;

        // Set cry position
        cry.position.set(
          brute.container.x + (i % 2) * 20,
          brute.container.y - FIGHTER_HEIGHT.brute / 2 + i * 20,
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
          x: brute.team === 'left' ? cry.x + 100 : cry.x - 100,
        }).then(() => {
          // Destroy cry
          cry.destroy();
        }).catch(console.error);
      }
    }

    // Wait for animations to complete
    await Promise.all(animations);
  }

  // Flash flood
  if (step.skill === 'flashFlood') {
    // Set brute animation to `evade`
    changeAnimation(app, brute, 'evade', speed);

    // Move brute to upper middle
    await Tweener.add({
      target: brute.container,
      duration: 0.4 / speed.current,
      ease: Easing.easeOutCubic
    }, {
      y: 100,
      x: brute.team === 'left'
        ? app.screen.width / 2 - FIGHTER_WIDTH.brute / 2
        : app.screen.width / 2 + FIGHTER_WIDTH.brute / 2,
    });
  }

  // TODO: different visual for every skill activation
};

export default skillActivate;