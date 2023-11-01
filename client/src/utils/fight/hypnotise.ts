/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, HypnotiseStep } from '@labrute/core';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application } from 'pixi.js';
import changeAnimation from './changeAnimation';
import { getRandomPosition } from './fightPositions';
import findFighter, { AnimationFighter } from './findFighter';
import { sound } from '@pixi/sound';

const hypnotise = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HypnotiseStep,
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

  // Set brute animation to `strengthen`
  changeAnimation(app, brute, 'strengthen', speed);

  // Play hypnosis SFX
  void sound.play('skills/hypnosis', { speed: speed.current * 4 });

  const animations = [];

  // Strengthen animation
  animations.push(new Promise((resolve) => {
    (brute.currentAnimation as AnimatedSprite).onComplete = () => {
      // Set animation to `idle`
      changeAnimation(app, brute, 'idle', speed);

      resolve(null);
    };
  }));

  // Create wave sprite
  const wave = new AnimatedSprite(spritesheet.animations.wave);
  wave.animationSpeed = speed.current;
  wave.loop = true;

  // Set wave position
  wave.position.set(
    brute.container.x + FIGHTER_WIDTH.brute / 2,
    brute.container.y - FIGHTER_HEIGHT.brute / 2,
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

  if (!step.pets) {
    return;
  }

  // Move each pet to other team
  const animationsDone = [];
  for (const stepPet of step.pets) {
    // Get random position
    const { x, y } = getRandomPosition(fighters, brute.team);

    const pet = findFighter(fighters, stepPet);
    if (!pet) {
      throw new Error('Pet not found');
    }

    // Set pet animation to `run`
    changeAnimation(app, pet, 'run', speed);

    // Move pet to other team
    animationsDone.push(
      Tweener.add({
        target: pet.container,
        duration: 0.5 / speed.current,
        ease: Easing.linear,
      }, { x, y }).then(() => {
        // Change pet team
        pet.team = brute.team;
        pet.master = brute.id;
        pet.hypnotised = true;
        pet.container.scale.x *= -1;

        // Set pet animation to `idle`
        changeAnimation(app, pet, 'idle', speed);
      })
    );
  }

  // Wait for all animations to complete
  await Promise.all(animationsDone);
};

export default hypnotise;