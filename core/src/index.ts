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
import getBruteGoldValue from './brute/getBruteGoldValue';
import getGoldNeededForNewBrute from './brute/getGoldNeededForNewBrute';
import getXPNeeded from './brute/getXPNeeded';
import pets from './brute/pets';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import { BruteReportWithNames, BruteWithBodyColors, DestinyBranch, FullTournament, FullTournamentStep } from './types';
import ExpectedError from './utils/ExpectedError';
import adjustColor from './utils/adjustColor';
import hexToRgba from './utils/hexToRgba';
import pad from './utils/pad';
import promiseBatch from './utils/promiseBatch';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';
import Version from './Version';
import { Achievement, Brute, BruteReportReason, BruteReportStatus, Clan, ClanPost, ClanThread, Prisma, Tournament, TournamentStep } from '@labrute/prisma';
import canLevelUp from './brute/canLevelUp';
import formatLargeNumber from './utils/formatLargeNumber';
import getBruteVisuals, { BruteVisuals } from './brute/getBruteVisuals';
import getVisualsFromUrl from './brute/getVisualsFromUrl';

export * from './Achievements';
export * from './Titles';
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
  getBruteGoldValue,
  getGoldNeededForNewBrute,
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
  canLevelUp,
  formatLargeNumber,
  getBruteVisuals,
  BruteVisuals,
  getVisualsFromUrl,
};

export const LANGUAGES = ['fr', 'en', 'es', 'de', 'ru'] as const;
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
  goldLost: number,
  newLimit: number,
};

export type ServerReadyResponse = {
  ready: boolean,
};
export type BruteRestoreResponse = {
  success: boolean,
};
export type UsersAdminUpdateRequest = {
  user: Prisma.UserUncheckedUpdateInput,
  achievements: Achievement[],
};

export type BruteReportsListRequest = {
  status: BruteReportStatus,
};
export type BruteReportsListResponse = BruteReportWithNames[];

export type BruteReportsSendRequest = {
  name: string,
  reason: BruteReportReason,
};

export type TournamentHistoryResponse = (Tournament & {
  steps: Pick<TournamentStep, 'step'>[],
})[];

export type ClanListResponse = (Clan & {
  brutes: Pick<Brute, 'id'>[],
  master: Pick<Brute, 'name'>,
})[];
export type ClanCreateResponse = Pick<Clan, 'id' | 'name'>;
export type ClanGetResponse = Clan & {
  brutes: BruteWithBodyColors[],
  joinRequests: BruteWithBodyColors[],
};
export type ClanGetThreadsResponse = {
  masterId: number,
  threads: (ClanThread & {
    posts: (Pick<ClanPost, 'date'> & {
      author: Pick<Brute, 'id' | 'name'>,
    })[];
  })[],
};
export type ClanGetThreadResponse = ClanThread & {
  posts: (ClanPost & {
    author: BruteWithBodyColors,
  })[],
  clan: Pick<Clan, 'masterId' | 'name'>,
};