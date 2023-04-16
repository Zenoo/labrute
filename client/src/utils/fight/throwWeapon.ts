/* eslint-disable no-void */
import { FIGHTER_HEIGHT, FIGHTER_WIDTH, ThrowStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import changeAnimation from './changeAnimation';
import findFighter, { AnimationFighter } from './findFighter';
import { updateActiveWeapon } from './updateWeapons';
import { Easing, Tweener } from 'pixi-tweener';
import getFighterType from './getFighterType';

const throwWeapon = async (
  app: Application,
  fighters: AnimationFighter[],
  step: ThrowStep,
  speed: React.MutableRefObject<number>,
) => {
  const { loader: { resources: { '/images/game/thrown-weapons.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  const opponent = findFighter(fighters, step.opponent);
  if (!opponent) {
    throw new Error('Opponent not found');
  }

  // Set animation to `prepare-throw`
  changeAnimation(app, fighter, 'prepare-throw', speed);

  // Wait for animation to finish
  await new Promise((resolve) => {
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      resolve(null);
    };
  });

  // Remove weapon from brute if needed
  if (!step.keep) {
    updateActiveWeapon(app, fighter, null);
  }

  // Set animation to `throw`
  changeAnimation(app, fighter, 'throw', speed);

  // Create thrown weapon sprite
  const thrownWeapon = new Sprite(spritesheet.textures[`${step.weapon}.png`]);

  // Anchor to left center
  thrownWeapon.anchor.set(0, 0.5);

  // Get starting position
  const start = {
    x: fighter.team === 'left'
      ? fighter.container.x + FIGHTER_WIDTH.brute
      : fighter.container.x,
    y: fighter.container.y - FIGHTER_HEIGHT.brute * 0.5,
  };

  // Get end position
  const end = {
    x: opponent.team === 'left'
      ? opponent.container.x + FIGHTER_WIDTH[getFighterType(opponent)]
      : opponent.container.x,
    y: opponent.container.y - FIGHTER_HEIGHT[getFighterType(opponent)] * 0.5,
  };

  // Set position
  thrownWeapon.position.set(start.x, start.y);

  // Set rotation (from distance between fighter and opponent and their Y position)
  thrownWeapon.angle = (Math.atan2(
    end.y - start.y,
    end.x - start.x,
  ) * 180) / Math.PI;

  // Add to stage
  app.stage.addChild(thrownWeapon);

  // Play throw SFX
  void sound.play('skills/net', {
    speed: speed.current,
  });

  // Move thrown weapon
  await Tweener.add({
    target: thrownWeapon,
    duration: 0.25 / speed.current,
    ease: Easing.linear,
  }, {
    x: end.x,
    y: end.y,
  });

  // Remove thrown weapon
  app.stage.removeChild(thrownWeapon);
  thrownWeapon.destroy();

  // Set animation to `idle`
  changeAnimation(app, fighter, 'idle', speed);
};

export default throwWeapon;