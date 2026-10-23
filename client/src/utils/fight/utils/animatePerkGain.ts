import { Application, Sprite } from 'pixi.js';
import { Easing, tween } from './tween';

export const animatePerkGain = (
  app: Application,
  sprite: Sprite,
  speed: React.RefObject<number>
) => {
  // Create a 3x scaled copy of the sprite for the animation
  const copy = new Sprite(sprite.texture);
  copy.scale.set(sprite.scale.x * 3, sprite.scale.y * 3);
  copy.zIndex = 1000;
  if (sprite.filters) {
    copy.filters = [...sprite.filters];
  }
  copy.x = sprite.x - sprite.width;
  copy.y = sprite.y - sprite.height;
  app.stage.addChild(copy);

  // Animate: scale down to normal size and fade in
  tween(copy, {
    duration: 2 / speed.current,
    ease: Easing.easeOutQuad,
    width: sprite.width,
    height: sprite.height,
    x: sprite.x,
    y: sprite.y,
    alpha: 1,
  }).then(() => {
    copy.destroy();
  }).catch(console.error);
};
