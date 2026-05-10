
import { WeaponById, WeaponId } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import * as PIXI from 'pixi.js';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';

export const updateWeapons = (
  app: Application,
  brute: AnimationFighter,
  weapon?: WeaponId,
  action?: 'remove',
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Only affect the HUD for the focused brutes
  if (brute.HUDFocused) {
    // Empty list
    brute.teamWeaponsIllustrations.forEach((illustration) => {
      illustration.destroy();
    });
    brute.teamWeaponsIllustrations.length = 0;
  }

  // Remove weapon
  if (action === 'remove') {
    if (typeof weapon === 'undefined') {
      throw new Error('Weapon not found');
    }

    delete brute.weapons[weapon];
  }

  // Only affect the HUD for the focused brutes
  if (brute.HUDFocused) {
    // Generate new list
    Object.keys(brute.weapons).forEach((w, index) => {
      const texture = spritesheet.textures[`weapons/${WeaponById[+w as WeaponId]}.png`];

      if (!texture) {
        throw new Error('Texture not found');
      }

      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      const sprite = new Sprite(texture);
      sprite.name = w.toString();

      if (brute.team === 'L') {
        sprite.x = (index % 9) * 20 + 60;
      } else {
        sprite.x = 480 - ((index % 9) * 20 + 60);
      }
      sprite.y = Math.floor(index / 9) * 20 + 40;
      sprite.filters = [new OutlineFilter()];
      app.stage.addChild(sprite);
      brute.teamWeaponsIllustrations.push(sprite);
    });
  }
};
