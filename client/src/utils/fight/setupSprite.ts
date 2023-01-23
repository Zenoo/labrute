import { AnimatedSprite, Application, Sprite } from 'pixi.js';

const setupSprite = (
  app: Application,
  type: string,
  animation: string,
  team: 'left' | 'right',
  isBrute: boolean,
): Sprite | AnimatedSprite | null => {
  const { loader: { resources: {
    [isBrute ? `/api/spritesheet/${type}.json` : `/images/game/${type}.json`]: { spritesheet }
  } } } = app;

  if (!spritesheet) {
    throw new Error(`Sprite not found: ${type}`);
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

  // Set position
  sprite.x = team === 'left' ? -100 : 600;
  sprite.y = 150;

  // Set inverted
  sprite.scale.x = team === 'left' ? 1 : -1;

  // Add to stage
  app.stage.addChild(sprite);

  return sprite;
};

export default setupSprite;