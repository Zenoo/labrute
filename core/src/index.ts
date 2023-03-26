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
import getRandomBonus from './brute/getRandomBonus';
import getRandomColors from './brute/getRandomColors';
import getSacriPoints from './brute/getSacriPoints';
import getXPNeeded from './brute/getXPNeeded';
import pets from './brute/pets';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import { DestinyBranch } from './types';
import adjustColor from './utils/adjustColor';
import ExpectedError from './utils/ExpectedError';
import hexToRgba from './utils/hexToRgba';
import pad from './utils/pad';
import promiseBatch from './utils/promiseBatch';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';

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
};

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
export type FullTournamentStep = TournamentStep & {
  fight: Fight & {
    brute1: BruteWithBodyColors;
    brute2: BruteWithBodyColors;
  };
};
export type FullTournament = Tournament & {
  steps: FullTournamentStep[];
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