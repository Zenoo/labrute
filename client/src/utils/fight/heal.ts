
import { HealStep, SkillId } from '@labrute/core';
import { Application, Sprite } from 'pixi.js';
import { sound } from '@pixi/sound';
import { updateHp } from './updateHp';
import { displayHeal } from './utils/displayHeal';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { insideXBounds } from './utils/insideXBounds';
import { skillUse } from './skillActivate';
import { tween } from './utils/tween';

export const heal = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HealStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
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

  const animationEnded = brute.animation.waitForEvent('drink:end');

  // Set animation to `drink`
  brute.animation.setAnimation('drink');
  // Play heal SFX
  void sound.play('sfx', { sprite: 'tragicPotion' });

  skillUse(app, brute, SkillId.tragicPotion, speed);

  displayHeal(app, brute, step.h, speed);

  // Display floating and fading cure icon if brute was poison healed
  if (step.c) {
    const cureIcon = new Sprite(spritesheet.textures['cure.png']);
    cureIcon.anchor.set(0.5);
    cureIcon.width = 30;
    cureIcon.height = 30;
    cureIcon.x = insideXBounds(brute.animation.container.x) - 35;
    cureIcon.y = brute.animation.container.y - brute.animation.container.height;
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

  // Heal brute
  updateHp(fighters, brute, step.h, speed, isClanWar);

  // Set animation to `idle`
  brute.animation.setAnimation('idle');
};
