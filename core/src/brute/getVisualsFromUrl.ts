import { BruteSpritesheet, Gender } from '@labrute/prisma';
import adjustColor from '../utils/adjustColor';
import colors from './colors';

export type BruteVisuals = Omit<BruteSpritesheet, 'id' | 'image' | 'json'>;

const getVisualsFromUrl = (gender: Gender, query: Record<string, string>): BruteVisuals => ({
  gender,
  longHair: query.lh ? +query.lh : gender === Gender.male ? 0 : 1,
  lowerRightArm: +query.lra || 1,
  rightHand: +query.rh || 1,
  upperRightArm: +query.ura || 1,
  rightShoulder: +query.rs || 1,
  rightFoot: +query.rf || 1,
  lowerRightLeg: +query.lrl || 1,
  upperRightLeg: +query.url || 1,
  leftFoot: +query.lf || 1,
  lowerLeftLeg: +query.lll || 1,
  pelvis: +query.p || 1,
  upperLeftLeg: +query.ull || 1,
  tummy: +query.t || 1,
  torso: +query.to || 1,
  head: +query.h || 1,
  leftHand: +query.lha || 1,
  upperLeftArm: +query.ula || 1,
  lowerLeftArm: +query.lla || 1,
  leftShoulder: +query.ls || 1,
  skinColor: query.sc || colors[gender].skin[0],
  skinShade: query.ss || adjustColor(colors[gender].skin[0], -20),
  hairColor: query.hc || colors[gender].hair[0],
  hairShade: query.hs || adjustColor(colors[gender].hair[0], -20),
  primaryColor: query.pc || colors[gender].clothing[0],
  primaryShade: query.ps || adjustColor(colors[gender].clothing[0], -20),
  secondaryColor: query.sec || colors[gender].clothing[0],
  secondaryShade: query.ses || adjustColor(colors[gender].clothing[0], -20),
  accentColor: query.ac || colors[gender].clothing[0],
  accentShade: query.as || adjustColor(colors[gender].clothing[0], -20),
});

export default getVisualsFromUrl;