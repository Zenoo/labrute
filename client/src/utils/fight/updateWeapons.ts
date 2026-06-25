
import {
  entries, WeaponById, WeaponId
} from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import * as PIXI from 'pixi.js';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';
import { TieredPerkColor } from '../StatColor';
import {
  WEAPON_SIZE, WEAPON_SPACING, WEAPONS_PER_ROW
} from './utils/fightPositions';
import { updateSkills } from './updateSkills';
import { Spritesheets } from './utils/spritesheet';

export const updateWeapons = (
  app: Application,
  spritesheets: Spritesheets,
  brute: AnimationFighter,
  weapon?: WeaponId,
  action?: 'remove',
) => {
  const spritesheet = spritesheets.misc;

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
    entries(brute.weapons).forEach(([w, tier], index) => {
      const texture = spritesheet.textures[`weapons/${WeaponById[+w as WeaponId]}.png`];

      if (!texture) {
        throw new Error('Texture not found');
      }

      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      const sprite = new Sprite(texture);
      sprite.name = w.toString();
      sprite.zIndex = 99;
      sprite.width = WEAPON_SIZE;
      sprite.height = WEAPON_SIZE;

      if (brute.team === 'L') {
        sprite.x = (index % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60;
      } else {
        sprite.x = 480 - ((index % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60);
      }
      sprite.y = Math.floor(index / WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 40;
      sprite.filters = [];

      if (tier > 1) {
        sprite.filters.push(new OutlineFilter(undefined, parseInt(TieredPerkColor[tier]?.slice(1) ?? '0', 16)));
      }
      sprite.filters.push(new OutlineFilter());
      app.stage.addChild(sprite);
      brute.teamWeaponsIllustrations.push(sprite);
    });
  }

  // Always update skills as well since they are displayed in the same area and can be affected by weapon changes
  updateSkills(app, spritesheets, brute);
};
