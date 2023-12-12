import { Achievement, Brute, BruteBody, BruteColors, BruteReportReason, BruteReportStatus, Clan, ClanPost, ClanThread, Fight, Lang, Prisma, Tournament, TournamentStep } from '@labrute/prisma';
import Version from './Version';
import applySkillModifiers from './brute/applySkillModifiers';
import availableBodyParts from './brute/availableBodyParts';
import bosses, { Boss } from './brute/bosses';
import canLevelUp from './brute/canLevelUp';
import colors from './brute/colors';
import createRandomBruteStats from './brute/createRandomBruteStats';
import getBruteGoldValue from './brute/getBruteGoldValue';
import getBruteVisuals, { BruteVisuals } from './brute/getBruteVisuals';
import getFightsLeft from './brute/getFightsLeft';
import getGoldNeededForNewBrute from './brute/getGoldNeededForNewBrute';
import getHP from './brute/getHP';
import getLevelUpChoices from './brute/getLevelUpChoices';
import getMaxFightsPerDay from './brute/getMaxFightsPerDay';
import getRandomBody from './brute/getRandomBody';
import getRandomBonus from './brute/getRandomBonus';
import getRandomColors from './brute/getRandomColors';
import getVisualsFromUrl from './brute/getVisualsFromUrl';
import getXPNeeded from './brute/getXPNeeded';
import pets from './brute/pets';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import { BruteReportWithNames, BruteWithBodyColors, DestinyBranch } from './types';
import ExpectedError from './utils/ExpectedError';
import adjustColor from './utils/adjustColor';
import formatLargeNumber from './utils/formatLargeNumber';
import hexToRgba from './utils/hexToRgba';
import pad from './utils/pad';
import promiseBatch from './utils/promiseBatch';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';

export * from './Achievements';
export * from './Titles';
export * from './brute/pets';
export * from './brute/skills';
export * from './brute/weapons';
export * from './constants';
export * from './types';
export {
  Boss, BruteVisuals, ExpectedError, Version, adjustColor, applySkillModifiers,
  availableBodyParts, bosses, canLevelUp, colors,
  createRandomBruteStats, formatLargeNumber, getBruteGoldValue,
  getBruteVisuals, getFightsLeft, getGoldNeededForNewBrute, getHP,
  getLevelUpChoices,
  getMaxFightsPerDay,
  getRandomBody,
  getRandomBonus,
  getRandomColors, getVisualsFromUrl, getXPNeeded, hexToRgba,
  pad, pets, promiseBatch, randomBetween, skills,
  updateBruteData, weapons,
  weightedRandom
};

export const DEFAULT_LANGUAGE = Lang.en;

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

type TournamentsGetGlobalStep = Pick<TournamentStep, 'id' | 'step' | 'fightId'> & {
  fight: Pick<Fight, 'winner' | 'fighters'> & {
    brute1: Pick<
      Brute,
      'name' |
      'hp' |
      'level' |
      'strengthValue' |
      'agilityValue' |
      'speedValue' |
      'gender'
    > & {
      body: BruteBody | null,
      colors: BruteColors | null,
    },
    brute2: (Pick<
      Brute,
      'name' |
      'hp' |
      'level' |
      'strengthValue' |
      'agilityValue' |
      'speedValue' |
      'gender'
    > & {
      body: BruteBody | null,
      colors: BruteColors | null,
    }) | null,
  },
};
export type TournamentsGetGlobalResponse = {
  tournament: Pick<Tournament, 'id' | 'rounds'> & {
    steps: TournamentsGetGlobalStep[];
  },
  lastRounds: TournamentsGetGlobalStep[],
  done: boolean,
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

export type TournamentHistoryResponse = (Pick<
  Tournament,
  'id' |
  'date' |
  'type' |
  'rounds'
> & {
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
    creator: Pick<Brute, 'id' | 'name'>,
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