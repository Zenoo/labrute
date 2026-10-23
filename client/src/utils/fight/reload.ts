
import {
  ReloadStep, SkillById, skills
} from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { Application, Text } from 'pixi.js';
import { AnimationFighter, findFighter } from './utils/findFighter.js';
import { Spritesheets } from './utils/spritesheet.js';
import { TFunction } from 'react-i18next';
import { OutlineFilter } from 'pixi-filters';
import { MotionBlurFilter } from 'pixi-filters/motion-blur';
import { fightDelay, tween } from './utils/tween.js';
import { updateWeapons } from './updateWeapons.js';
import { updateSkills } from './updateSkills.js';

export const reload = async (
  app: Application,
  spritesheets: Spritesheets,
  fighters: AnimationFighter[],
  step: ReloadStep,
  speed: React.RefObject<number>,
  t: TFunction
) => {
  const fighter = findFighter(fighters, step.f);

  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const handRaised = fighter.animation.waitForEvent('win:hand-raised');

  // Faster win animation speed for male brutes
  const animationSpeed = fighter.gender === Gender.male ? 2 : 1;
  fighter.animation.animationSpeed = animationSpeed;

  // Set opponent animation to `win` at frame 5
  fighter.animation.setAnimation('win', 6 * animationSpeed);

  // Wait for the hand to be raised
  await handRaised;
  // Keep hand raised
  fighter.animation.animationSpeed = 0;

  const reloadMessage = new Text({
    text: t('fight.reload').toLocaleUpperCase(),
    style: {
      fontFamily: 'GameFont',
      fontSize: 30,
      fill: 0xffffff,
      align: 'center',
    }
  });

  const motionBlur = new MotionBlurFilter({
    velocity: [50, 0],
    kernelSize: 9,
    offset: -0.5,
  });
  motionBlur.padding = 60;
  reloadMessage.filters = [new OutlineFilter(), motionBlur];
  const offscreenMargin = reloadMessage.width;
  reloadMessage.x = -offscreenMargin;
  reloadMessage.y = app.screen.height / 2;
  reloadMessage.anchor.set(0.5, 0.5);
  reloadMessage.scale.set(1.5, 0.75);
  reloadMessage.angle = -12;
  reloadMessage.alpha = 0;
  reloadMessage.zIndex = 900;
  app.stage.addChild(reloadMessage);

  // Animate reload message
  const messageAnimation = Promise.all([
    tween(motionBlur, {
      duration: 0.7 / speed.current,
      ease: 'power4.out',
      velocityX: 0,
    }),
    tween(reloadMessage, {
      duration: 0.7 / speed.current,
      ease: 'power4.out',
      x: app.screen.width / 2,
      angle: 4,
      alpha: 1,
    }),
    tween(reloadMessage.scale, {
      duration: 0.7 / speed.current,
      ease: 'back.out(2)',
      x: 1.15,
      y: 1.15,
    }),
  ]).then(() => Promise.all([
    tween(reloadMessage, {
      duration: 0.3 / speed.current,
      ease: 'power2.out',
      angle: 0,
    }),
    tween(reloadMessage.scale, {
      duration: 0.3 / speed.current,
      ease: 'power2.out',
      x: 1,
      y: 1,
    }),
  ])).then(() => Promise.all([
    tween(motionBlur, {
      duration: 1 / speed.current,
      ease: 'power4.in',
      velocityX: 50,
    }),
    tween(reloadMessage, {
      duration: 1 / speed.current,
      ease: 'power4.in',
      x: app.screen.width + offscreenMargin,
      angle: -8,
      alpha: 0,
    }),
    tween(reloadMessage.scale, {
      duration: 1 / speed.current,
      ease: 'power4.in',
      x: 1.5,
      y: 0.75,
    }),
  ]));

  // Stagger gains using the fight clock so pause and seek apply.
  for (const weapon of step.w) {
    updateWeapons(app, spritesheets, fighter, weapon.i, 'add', weapon.t, speed);
    await fightDelay(0.05 / speed.current);
  }
  for (const skill of step.s) {
    if (!skills[SkillById[skill.i]].uses) continue;
    updateSkills(app, spritesheets, fighter, skill.i, 'add', skill.t, speed);
    await fightDelay(0.05 / speed.current);
  }
  await messageAnimation;
  reloadMessage.destroy();
  motionBlur.destroy();

  // Set animation speed to fast reverse
  const handDown = fighter.animation.waitForEvent('win:start');
  fighter.animation.animationSpeed = -animationSpeed * 2;

  await handDown;
  fighter.animation.animationSpeed = 1;
  fighter.animation.setAnimation('idle');
};
