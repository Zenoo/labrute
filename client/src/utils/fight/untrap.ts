import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';
import { BevelFilter } from '@pixi/filter-bevel';
import { tween } from './utils/tween';
import { Spritesheets } from './utils/spritesheet';

export const untrap = (
  app: Application,
  spritesheets: Spritesheets,
  fighter: AnimationFighter,
) => {
  const spritesheet = spritesheets.misc;

  if (fighter.trapped) {

    fighter.trapped = false;
    if (fighter.type === 'brute') {

      fighter.stunned = true;
    }
  }

  // Add broken net VFX if fighter was trapped
  if (fighter.animation.animation === 'trapped') {
    // Set animation to `idle`
    fighter.animation.setAnimation('idle');

    // Create 6 net parts
    for (let i = 0; i < 6; i += 1) {
      const netPart = new Sprite(spritesheet.textures['net-part.png']);
      netPart.filters = [new BevelFilter()];
      // Set random position around fighter
      netPart.position.set(
        fighter.animation.container.x + Math.random() * 20 - 10,
        fighter.animation.container.y + Math.random() * 20 - 10,
      );
      // Add net part to stage
      app.stage.addChild(netPart);
      // Set random rotation
      netPart.rotation = Math.random() * Math.PI * 2;
      // Move net part away from fighter
      tween(netPart, {
        duration: 0.5,
        ease: 'none',
        x: netPart.x + Math.cos(netPart.rotation) * 30,
        y: netPart.y + Math.sin(netPart.rotation) * 30,
      }).then(() => {
        // Fade out net part
        tween(netPart, {
          duration: 0.5,
          ease: 'none',
          alpha: 0,
        }).then(() => {
          // Destroy net part
          netPart.destroy();
        }).catch(console.error);
      }).catch(console.error);
    }
  }
};
