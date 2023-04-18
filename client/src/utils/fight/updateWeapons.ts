/* eslint-disable no-param-reassign */
import { Animation, WEAPON_ANCHOR, WEAPON_ANIMATIONS, weapons } from '@labrute/core';
import { Gender, WeaponName } from '@labrute/prisma';
import { OutlineFilter } from '@pixi/filter-outline';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import { GlowFilter } from '@pixi/filter-glow';
import * as PIXI from 'pixi.js';
import { BevelFilter } from '@pixi/filter-bevel';

export const updateWeaponFrame = (
  brute: AnimationFighter,
) => {
  const sprite = brute.activeWeapon?.sprite;
  if (!sprite) return;
  if (sprite.destroyed) return;

  const spriteData = WEAPON_ANIMATIONS[
    brute.gender || Gender.male
  ][
    brute.currentAnimation.name as Animation
  ]?.[
    (brute.currentAnimation as AnimatedSprite)?.currentFrame || 0
  ];

  if (!spriteData) {
    sprite.x = 0;
    sprite.y = 0;
    sprite.angle = 0;
    sprite.visible = false;
  } else {
    [sprite.x] = spriteData.anchor;
    [, sprite.y] = spriteData.anchor;
    sprite.angle = spriteData.rotation;
    sprite.visible = true;
    sprite.zIndex = spriteData.behind ? -1 : 1;
  }
};

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
      const texture = spritesheet.textures[`weapons/${w.name}.png`];
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      const sprite = new Sprite(texture);
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
  if (!brute.master) {
    const activeItems = [];
    if (brute.activeWeapon) {
      activeItems.push(brute.activeWeapon.illustration);
    }
    if (brute.shieldIllustration) {
      activeItems.push(brute.shieldIllustration);
    }

    // Remove everything
    activeItems.forEach((illustration) => {
      if (illustration) {
        illustration.destroy();
      }
    });
  }

  // Shield
  if (brute.shield) {
    let sprite: Sprite | null = null;

    // Only affect the UI for main brutes
    if (!brute.master) {
      const texture = spritesheet.textures['weapons/shield.png'];
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      sprite = new Sprite(texture);

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
    }
  } else {
    brute.shieldIllustration = null;
  }

  // Active weapon
  if (weapon) {
    let sprite: Sprite | null = null;

    // Only affect the UI for main brutes
    if (!brute.master) {
      // Add new weapon
      const texture = spritesheet.textures[`weapons/${weapon}.png`];
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      sprite = new Sprite(texture);
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
    }

    // Remove old weapon
    if (brute.activeWeapon?.sprite) {
      brute.container.removeChild(brute.activeWeapon.sprite);
      brute.activeWeapon.sprite.destroy();
    }

    // Add new weapon
    const texture = spritesheet.textures[`${weapon}.png`];
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
    const realSprite = new Sprite(texture);
    realSprite.filters = [new BevelFilter()];
    realSprite.anchor.x = WEAPON_ANCHOR.x;
    realSprite.anchor.y = WEAPON_ANCHOR.y;
    realSprite.visible = false;
    brute.container.addChild(realSprite);

    updateWeaponFrame(brute);

    brute.activeWeapon = {
      name: weapon,
      animation: weapons.find((w) => w.name === weapon)?.animation || 'fist',
      illustration: sprite,
      sprite: realSprite,
    };
  } else {
    // Destroy sprite
    if (brute.activeWeapon?.sprite) {
      brute.activeWeapon.sprite.destroy();
    }

    brute.activeWeapon = null;
  }
};

export default updateWeapons;