
import {
  randomBetween, SkillId, TreatStep
} from '@labrute/core';
import { Application, Sprite } from 'pixi.js';
import { sound } from '@pixi/sound';
import { displayHeal } from './utils/displayHeal';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { untrap } from './untrap';
import { insideXBounds } from './utils/insideXBounds';
import { skillUse } from './skillActivate';
import { tween } from './utils/tween';

export const treat = async (
  app: Application,
  fighters: AnimationFighter[],
  step: TreatStep,
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

  const pet = findFighter(fighters, step.t);
  if (!pet) {
    throw new Error('Pet not found');
  }

  const animationEnded = brute.animation.waitForEvent('eat:end');

  // Set brute animation to `eat`
  brute.animation.setAnimation('eat');
  // Play eat SFX
  void sound.play('sfx', { sprite: `tamer${randomBetween(1, 2)}` });

  skillUse(app, brute, SkillId.treat, speed);

  displayHeal(app, pet, step.h, speed);

  // Display floating and fading cure icon if pet was poison healed
  if (step.c) {
    const cureIcon = new Sprite(spritesheet.textures['cure.png']);
    cureIcon.anchor.set(0.5);
    cureIcon.width = 30;
    cureIcon.height = 30;
    cureIcon.x = insideXBounds(pet.animation.container.x) - 35;
    cureIcon.y = pet.animation.container.y - pet.animation.container.height;
    cureIcon.zIndex = 1000;
    app.stage.addChild(cureIcon);

    tween(cureIcon, {
      duration: 2 / speed.current,
      y: cureIcon.y - 100,
      ease: 'none',
      alpha: 0,
    }).then(() => {
      // Remove icon
      cureIcon.destroy();
    }).catch(console.error);
  }

  // Wait for animation to complete
  await animationEnded;

  // Untrap pet
  untrap(app, pet);

  // Set animation to `idle`
  brute.animation.setAnimation('idle');
};
