
import { AnimationFighter, findFighter } from './utils/findFighter';
import { updateHp } from './updateHp';
import { updateWeapons } from './updateWeapons';
import { Application, Texture } from 'pixi.js';
import { createBustImage } from './utils/createBustImage';
import { RendererContextInterface } from '../../hooks/useRenderer';
import { updateSkills } from './updateSkills';
import { Spritesheets } from './utils/spritesheet';

export const setHUDFocus = async (
  app: Application,
  spritesheets: Spritesheets,
  renderer: RendererContextInterface,
  fighters: AnimationFighter[],
  fighterIndex: number | undefined,
  speed: React.RefObject<number>,
  isClanWar: boolean,
) => {
  const fighter = findFighter(fighters, fighterIndex);
  if (!fighter) {
    throw new Error('Fighter not found');
  }

  // Abort if not focused or not brute
  if (fighter.HUDFocused || fighter.type !== 'brute') return;

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
  // Don't update hp bar if clanwar
  if (!isClanWar) {
    updateHp(fighters, fighter, fighter.hp, speed, false, true);
  }

  updateWeapons(app, spritesheets, fighter);
  updateSkills(app, spritesheets, fighter);
};
