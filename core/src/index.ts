import applySkillModifiers from './brute/applySkillModifiers';
import availableBodyParts from './brute/availableBodyParts';
import colors from './brute/colors';
import createRandomBruteStats from './brute/createRandomBruteStats';
import generateBrute from './brute/generateBrute';
import getFightsLeft from './brute/getFightsLeft';
import getHP from './brute/getHP';
import getLevelUpChoices from './brute/getLevelUpChoices';
import getRandomBody from './brute/getRandomBody';
import getRandomColors from './brute/getRandomColors';
import getSacriPoints from './brute/getSacriPoints';
import getXPNeeded from './brute/getXPNeeded';
import pets from './brute/pets';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import adjustColor from './utils/adjustColor';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';

export {
  applySkillModifiers,
  availableBodyParts,
  colors,
  createRandomBruteStats,
  generateBrute,
  getFightsLeft,
  getHP,
  getLevelUpChoices,
  getRandomBody,
  getRandomColors,
  getSacriPoints,
  getXPNeeded,
  pets,
  skills,
  updateBruteData,
  weapons,
  adjustColor,
  randomBetween,
  weightedRandom,
};
export * from './types';
export * from './constants';

export const LANGUAGES = ['en', 'fr'] as const;
export const DEFAULT_LANGUAGE = LANGUAGES[0];
export type Language = typeof LANGUAGES[number];

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};