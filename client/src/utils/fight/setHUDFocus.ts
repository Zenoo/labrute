/* eslint-disable no-param-reassign */
import { AnimationFighter } from './utils/findFighter';
import updateHp from './updateHp';
import updateWeapons from './updateWeapons';
import { Application, Texture } from 'pixi.js';

const setHUDFocus = (
  app: Application,
  fighters: AnimationFighter[],
  fighter: AnimationFighter,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  if (fighter.HUDFocused || fighter.master) return;

  fighters.forEach((f) => {
    if (f.team === fighter.team) {
      f.HUDFocused = false;
    }
  });
  fighter.HUDFocused = true;

  if (fighter.text) {
    fighter.text.text = fighter.name.toLocaleUpperCase();
  }

  if (fighter.bust && fighter.bustImage) {
    fighter.bust.texture = Texture.from(fighter.bustImage);
  }

  if (!isClanWar) {
    updateHp(fighters, fighter, fighter.hp, speed, false, true);
  }

  updateWeapons(app, fighter);
};

export default setHUDFocus;