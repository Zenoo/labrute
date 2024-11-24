/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, HypnotiseStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { GlowFilter } from '@pixi/filter-glow';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';

const hypnotise = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HypnotiseStep,
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

  const animationEnded = brute.animation.waitForEvent('strengthen:end');

  // Set brute animation to `strengthen`
  brute.animation.setAnimation('strengthen');

  // Play hypnosis SFX
  void sound.play('sfx', { sprite: 'hypnosis' });

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

  // Create wave sprite
  const wave = new AnimatedSprite(spritesheet.animations.wave || []);
  wave.animationSpeed = speed.current;
  wave.loop = true;

  // Set wave position
  wave.position.set(
    brute.animation.container.x + FIGHTER_WIDTH.brute / 2,
    brute.animation.container.y - FIGHTER_HEIGHT.brute / 2,
  );

  // Add wave to stage
  app.stage.addChild(wave);

  // Play wave animation
  wave.play();

  // Grow wave for 0.5s
  animations.push(Tweener.add({
    target: wave,
    duration: 0.5 / speed.current,
    ease: Easing.linear,
  }, {
    width: 200,
    height: 200,
  }));

  // Wait for all animations to complete
  await Promise.all(animations);

  // Destroy wave
  wave.destroy();

  for (const target of step.t) {
    // Get fighter brute and bosses
    const fighter = findFighter(fighters, target);
    if (!fighter) {
      throw new Error('Hypnotized brute or boss not found');
    }

    if (!fighter.animation.container.filters) {
    // eslint-disable-next-line no-param-reassign
      fighter.animation.container.filters = [];
    }

    fighter.animation.container.filters.push(new GlowFilter({
      distance: 10,
      outerStrength: 1,
      innerStrength: 0.5,
      color: 0xAD3C8F,
      quality: 0.05,
    }));
  }

  // Move each pet to other team
  const animationsDone = [];
  for (const stepPet of step.p) {
    // Get random position
    const { x, y } = getRandomPosition(fighters, brute.team);

    const pet = findFighter(fighters, stepPet);
    if (!pet) {
      throw new Error('Pet not found');
    }

    // Set pet animation to `run`
    pet.animation.setAnimation('run');

    // Move pet to other team
    animationsDone.push(
      Tweener.add({
        target: pet.animation.container,
        duration: 0.5 / speed.current,
        ease: Easing.linear,
      }, { x, y }).then(() => {
        // Change pet team
        pet.team = brute.team;
        pet.master = brute.id;
        pet.animation.container.scale.x *= -1;

        // Set pet animation to `idle`
        pet.animation.setAnimation('idle');
      })
    );
  }

  // Wait for all animations to complete
  await Promise.all(animationsDone);
};

export default hypnotise;
