import { Fighter, bosses } from '@labrute/core';
import { AdjustmentFilter } from '@pixi/filter-adjustment';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import getFighterType from './getFighterType';
import { BossName } from '@labrute/prisma';

const setupSprite = (
  app: Application,
  fighter: AnimationFighter | Fighter,
  animation: string,
  team: 'left' | 'right',
  speed: React.MutableRefObject<number>,
): Sprite | AnimatedSprite | null => {
  if (!app.loader) {
    return null;
  }

  const type = getFighterType(fighter);
  const { loader: { resources: {
    [type === 'brute' ? `/api/spritesheet/${fighter.id}.json` : `/images/game/${type}.json`]: { spritesheet }
  } } } = app;

  if (!spritesheet) {
    throw new Error(`Sprite not found: ${type === 'brute' ? fighter.id : type}`);
  }

  // Animation frames
  const { animations: { [animation]: animationFrames } } = spritesheet;

  let sprite: AnimatedSprite | Sprite | null = null;
  if (!animationFrames) {
    // Try for a single frame
    sprite = new Sprite(spritesheet.textures[`${animation}/00001.png`]);
  } else {
    // Animated sprite
    sprite = new AnimatedSprite(animationFrames);
    (sprite as AnimatedSprite).animationSpeed = speed.current;
  }

  if (!sprite) {
    throw new Error(`Sprite not found: ${animation}`);
  }

  sprite.name = animation;

  // Loop some animations
  if (['evade', 'idle', 'monk-loop', 'run', 'train', 'trapped-loop'].includes(animation)) {
    (sprite as AnimatedSprite).loop = true;
  } else {
    (sprite as AnimatedSprite).loop = false;
  }

  if (fighter.type === 'boss') {
    // Change color on bosses
    const boss = bosses.find(({ name }) => name === fighter.name);
    if (!boss) {
      throw new Error(`Boss not found: ${fighter.name}`);
    }

    if (fighter.name === BossName.GoldClaw) {
      sprite.filters = [new AdjustmentFilter({
        gamma: 1,
        brightness: 4,
      })];
    } else if (fighter.name === BossName.EmberFang) {
      sprite.filters = [new AdjustmentFilter({
        red: 4.8,
        green: 0.8,
        blue: 0.8,
      })];
    }

    // Scale bosses
    sprite.scale.set(boss.scale);
  }

  // Set animation length
  // TODO (adapt with DURATIONS if needed)
  (sprite as AnimatedSprite).animationSpeed = 1;

  // Set to invisible
  sprite.visible = false;

  // Add to stage
  app.stage.addChild(sprite);

  return sprite;
};

export default setupSprite;