/* eslint-disable no-param-reassign */
import { weapons } from '@labrute/core';
import { WeaponName } from '@labrute/prisma';
import { OutlineFilter } from '@pixi/filter-outline';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import { GlowFilter } from '@pixi/filter-glow';

const updateWeapons = (
  app: Application,
  brute: AnimationFighter,
  weapon?: string,
  action?: 'add' | 'remove',
) => {
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Only affect the UI for main brutes
  if (!brute.master) {
    // Empty list
    brute.weaponsIllustrations.forEach((illustration) => {
      illustration.destroy();
    });
    brute.weaponsIllustrations = [];
  }

  // Add new weapon
  if (action === 'add') {
    if (!weapon) {
      throw new Error('Weapon not found');
    }
    brute.weapons.push({
      name: weapon as WeaponName,
      animation: weapons.find((w) => w.name === weapon)?.animation || 'fist',
    });
  } else if (action === 'remove') {
    if (!weapon) {
      throw new Error('Weapon not found');
    }

    // Remove only one weapon
    const index = brute.weapons.findIndex((w) => w.name === weapon);
    if (index !== -1) {
      brute.weapons.splice(index, 1);
    }
  }

  // Only affect the UI for main brutes
  if (!brute.master) {
    // Generate new list
    brute.weapons.forEach((w, index) => {
      const sprite = new Sprite(spritesheet.textures[`weapons/${w.name}.png`]);
      if (brute.team === 'left') {
        sprite.x = (index % 9) * 20 + 60;
      } else {
        sprite.x = 480 - ((index % 9) * 20 + 60);
      }
      sprite.y = Math.floor(index / 9) * 20 + 40;
      sprite.filters = [new OutlineFilter()];
      app.stage.addChild(sprite);
      brute.weaponsIllustrations.push(sprite);
    });
  }
};

export const updateActiveWeapon = (
  app: Application,
  brute: AnimationFighter,
  weapon: WeaponName | null,
) => {
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Only affect the UI for main brutes
  if (brute.master) return;

  const activeItems = [];
  if (brute.activeWeapon) {
    activeItems.push(brute.activeWeapon.illustration);
  }
  if (brute.shieldIllustration) {
    activeItems.push(brute.shieldIllustration);
  }

  // Remove everything
  activeItems.forEach((illustration) => {
    illustration.destroy();
  });

  // Shield
  if (brute.shield) {
    const sprite = new Sprite(spritesheet.textures['weapons/shield.png']);

    if (brute.team === 'left') {
      sprite.x = 10;
    } else {
      sprite.x = 480 - 5;
    }
    sprite.y = 80;
    sprite.filters = [new OutlineFilter(), new GlowFilter({
      color: 0xffff00,
      outerStrength: 2,
    })];
    app.stage.addChild(sprite);

    brute.shieldIllustration = sprite;
  } else {
    brute.shieldIllustration = null;
  }

  // Active weapon
  if (weapon) {
    // Add new weapon
    const sprite = new Sprite(spritesheet.textures[`weapons/${weapon}.png`]);
    if (brute.team === 'left') {
      sprite.x = 10 + (brute.shield ? 22 : 0);
    } else {
      sprite.x = 480 - 5 - (brute.shield ? 22 : 0);
    }
    sprite.y = 80;
    sprite.filters = [new OutlineFilter(), new GlowFilter({
      color: 0xffff00,
      outerStrength: 2,
    })];
    app.stage.addChild(sprite);

    brute.activeWeapon = {
      name: weapon,
      animation: weapons.find((w) => w.name === weapon)?.animation || 'fist',
      illustration: sprite,
    };
  } else {
    brute.activeWeapon = null;
  }
};

export default updateWeapons;