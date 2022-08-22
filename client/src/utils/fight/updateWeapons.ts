/* eslint-disable no-param-reassign */
import { OutlineFilter } from '@pixi/filter-outline';
import { Application, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter.js';

const updateWeapons = (app: Application, brute: AnimationFighter) => {
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Empty list
  brute.weaponsIllustrations.forEach((illustration) => {
    illustration.destroy();
  });
  brute.weaponsIllustrations = [];

  // Generate new list
  brute.weapons.forEach((weapon, index) => {
    const sprite = new Sprite(spritesheet.textures[`weapons/${weapon.name}.png`]);
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
};

export default updateWeapons;