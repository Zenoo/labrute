import applySkillModifiers from './brute/applySkillModifiers';
import availableBodyParts from './brute/availableBodyParts';
import colors from './brute/colors';
import createRandomBruteStats from './brute/createRandomBruteStats';
import getFightsLeft from './brute/getFightsLeft';
import getHP from './brute/getHP';
import getLevelUpChoices from './brute/getLevelUpChoices';
import getMaxFightsPerDay from './brute/getMaxFightsPerDay';
import getRandomBody from './brute/getRandomBody';
import getRandomBonus from './brute/getRandomBonus';
import getRandomColors from './brute/getRandomColors';
import getSacriPoints from './brute/getSacriPoints';
import getSacriPointsNeeded from './brute/getSacriPointsNeeded';
import getXPNeeded from './brute/getXPNeeded';
import pets from './brute/pets';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import { BruteWithBodyColors, DestinyBranch, FullTournament, FullTournamentStep } from './types';
import ExpectedError from './utils/ExpectedError';
import adjustColor from './utils/adjustColor';
import hexToRgba from './utils/hexToRgba';
import pad from './utils/pad';
import promiseBatch from './utils/promiseBatch';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';
import Version from './Version';

export * from './Achievements';
export * from './brute/pets';
export * from './brute/skills';
export * from './brute/weapons';
export * from './constants';
export * from './types';
export {
  applySkillModifiers,
  availableBodyParts,
  colors,
  createRandomBruteStats,
  getFightsLeft,
  getHP,
  getLevelUpChoices,
  getMaxFightsPerDay,
  getRandomBody,
  getRandomBonus,
  getRandomColors,
  getSacriPoints,
  getSacriPointsNeeded,
  getXPNeeded,
  ExpectedError,
  hexToRgba,
  pets,
  skills,
  updateBruteData,
  adjustColor,
  randomBetween,
  weapons,
  weightedRandom,
  promiseBatch,
  pad,
  Version,
};

export const LANGUAGES = ['fr', 'en', 'es', 'de'] as const;
export const DEFAULT_LANGUAGE = LANGUAGES[0];
export type Language = typeof LANGUAGES[number];

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};

// Server return types
export type BrutesGetForRankResponse = {
  topBrutes: BruteWithBodyColors[],
  nearbyBrutes: BruteWithBodyColors[],
  position: number,
  total: number,
};
export type BrutesGetRankingResponse = {
  ranking: number,
};
export type BrutesGetOpponentsResponse = BruteWithBodyColors[];
export type BrutesExistsResponse = {
  exists: false
} | {
  exists: true,
  name: string,
};
export type TournamentsGetGlobalResponse = {
  tournament: FullTournament,
  lastRounds: FullTournamentStep[],
  done: boolean,
  rounds: number,
  nextOpponent: string | null,
};
export type BrutesGetDestinyResponse = DestinyBranch;
export type BrutesGetFightsLeftResponse = {
  fightsLeft: number,
};
export type BrutesCreateResponse = {
  brute: BruteWithBodyColors,
  pointsLost: number,
  newLimit: number,
};

export type ServerReadyResponse = {
  ready: boolean,
};