/* eslint-disable no-param-reassign */
import { WeaponById, WeaponId } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import * as PIXI from 'pixi.js';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';

const updateWeapons = (
  app: Application,
  brute: AnimationFighter,
  weapon?: WeaponId,
  action?: 'add' | 'remove',
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

  // Add new weapon
  if (action === 'add') {
    if (typeof weapon === 'undefined') {
      throw new Error('Weapon not found');
    }

    brute.weapons.push(weapon);
  } else if (action === 'remove') {
    if (typeof weapon === 'undefined') {
      throw new Error('Weapon not found');
    }

    // Remove only one weapon
    const index = brute.weapons.findIndex((w) => w === weapon);
    if (index !== -1) {
      brute.weapons.splice(index, 1);
    }
  }

  // Only affect the HUD for the focused brutes
  if (brute.HUDFocused) {
    // Generate new list
    brute.weapons.forEach((w, index) => {
      const texture = spritesheet.textures[`weapons/${WeaponById[w]}.png`];

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

export default updateWeapons;
