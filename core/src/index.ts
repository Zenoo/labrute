import { Brute, BruteBody, BruteColors, Clan, Fight, Tournament, TournamentStep, User } from '@labrute/prisma';
import applySkillModifiers from './brute/applySkillModifiers';
import availableBodyParts from './brute/availableBodyParts';
import colors from './brute/colors';
import createRandomBruteStats from './brute/createRandomBruteStats';
import getFightsLeft from './brute/getFightsLeft';
import getHP from './brute/getHP';
import getLevelUpChoices from './brute/getLevelUpChoices';
import getMaxFightsPerDay from './brute/getMaxFightsPerDay';
import getRandomBody from './brute/getRandomBody';
import getRandomColors from './brute/getRandomColors';
import getSacriPoints from './brute/getSacriPoints';
import getXPNeeded from './brute/getXPNeeded';
import pets from './brute/pets';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import adjustColor from './utils/adjustColor';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';
import weapons from './brute/weapons';
import promiseBatch from './utils/promiseBatch';
import pad from './utils/pad';

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
  getRandomColors,
  getSacriPoints,
  getXPNeeded,
  pets,
  skills,
  updateBruteData,
  adjustColor,
  randomBetween,
  weapons,
  weightedRandom,
  promiseBatch,
  pad,
};
export * from './types';
export * from './constants';
export * from './brute/weapons';

export const LANGUAGES = ['fr', 'en', 'es', 'de'] as const;
export const DEFAULT_LANGUAGE = LANGUAGES[0];
export type Language = typeof LANGUAGES[number];

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};

// User
export type UserWithBrutesBodyColor = User & {
  brutes: BruteWithBodyColors[];
};

// Brute
export type BruteWithBodyColors = Brute & {
  body: BruteBody | null;
  colors: BruteColors | null;
};
export type BruteWithMaster = Brute & {
  master: Brute | null;
};
export type BruteWithMasterBodyColors = BruteWithBodyColors & BruteWithMaster;
export type BruteWithClan = Brute & {
  clan: Clan | null;
};
export type BruteWithMasterBodyColorsClan = BruteWithMasterBodyColors & BruteWithClan;
export type BruteWithMasterBodyColorsClanTournament = BruteWithMasterBodyColorsClan & {
  tournaments: Tournament[];
};

// Tournament
export type FullTournament = Tournament & {
  steps: (TournamentStep & {
    fight: Fight & {
      brute1: BruteWithBodyColors;
      brute2: BruteWithBodyColors;
    };
  })[];
};

// Fight
export type FightWithBrutes = Fight & {
  brute1: Brute;
  brute2: Brute;
};

// Server return types
export type BrutesGetForRankResponse = {
  topBrutes: BruteWithBodyColors[],
  nearbyBrutes: BruteWithBodyColors[],
  position: number,
};
export type BrutesGetRankingResponse = {
  ranking: number,
};