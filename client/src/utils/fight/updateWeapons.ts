
import {
  entries, WeaponById, WeaponId, weapons
} from '@labrute/core';
import { OutlineFilter } from 'pixi-filters/outline';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';
import { TieredPerkColor } from '../StatColor';
import {
  WEAPON_SIZE, WEAPON_SPACING, WEAPONS_PER_ROW
} from './utils/fightPositions';
import { updateSkills } from './updateSkills';
import { Spritesheets } from './utils/spritesheet';
import { bindFightTooltip } from './utils/fightTooltip';
import { animatePerkGain } from './utils/animatePerkGain';

export const updateWeapons = (
  app: Application,
  spritesheets: Spritesheets,
  brute: AnimationFighter,
  weapon?: WeaponId,
  action?: 'remove' | 'add',
  weaponTier?: number,
  speed?: React.RefObject<number>,
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
  } else if (action === 'add') {
    if (typeof weapon === 'undefined') {
      throw new Error('Weapon not found');
    }
    if (typeof weaponTier === 'undefined') {
      throw new Error('Weapon tier not found');
    }

    brute.weapons[weapon] = weaponTier;
  }

  // Only affect the HUD for the focused brutes
  if (brute.HUDFocused) {
    // Generate new list
    entries(brute.weapons).forEach(([w, tier], index) => {
      const texture = spritesheet.textures[`weapons/${WeaponById[+w as WeaponId]}.png`];

      if (!texture) {
        throw new Error('Texture not found');
      }

      const sprite = new Sprite(texture);
      sprite.label = w.toString();
      sprite.zIndex = 104;
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
        sprite.filters = [new OutlineFilter({
          thickness: 1,
          color: parseInt(TieredPerkColor[tier]?.slice(1) ?? '0', 16),
        })];
      }
      sprite.filters = sprite.filters.concat(new OutlineFilter());
      if (brute.toggleTooltip) {
        bindFightTooltip(sprite, () => ({
          type: 'weapon',
          weapon: weapons[WeaponById[+w as WeaponId]],
          tier,
        }), brute.toggleTooltip);
      }
      app.stage.addChild(sprite);
      brute.teamWeaponsIllustrations.push(sprite);

      if (action === 'add' && +w === weapon && speed) {
        animatePerkGain(app, sprite, speed);
      }
    });
  }

  // Always update skills as well since they are displayed in the same area and can be affected by weapon changes
  updateSkills(app, spritesheets, brute);
};
