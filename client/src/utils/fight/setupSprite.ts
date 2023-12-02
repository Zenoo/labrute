import { Fighter } from '@labrute/core';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import getFighterType from './getFighterType';

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