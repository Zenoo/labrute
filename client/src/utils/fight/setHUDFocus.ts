/* eslint-disable no-param-reassign */
import findFighter, { AnimationFighter } from './utils/findFighter';
import updateHp from './updateHp';
import updateWeapons from './updateWeapons';
import { Application, Texture } from 'pixi.js';
import createBustImage from './utils/createBustImage';
import { RendererContextInterface } from '../../hooks/useRenderer';

const setHUDFocus = async (
  app: Application,
  renderer: RendererContextInterface,
  fighters: AnimationFighter[],
  fighterIndex: number,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  const fighter = findFighter(fighters, fighterIndex);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

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

  if (!fighter.bustImage && fighter.type === 'brute') {
    fighter.bustImage = await createBustImage(fighter, renderer);
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