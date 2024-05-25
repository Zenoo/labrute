import { Achievement, AchievementName, BossDamage, Brute, BruteReportReason, BruteReportStatus, Clan, ClanPost, ClanThread, DestinyChoice, Fight, Lang, Prisma, Tournament, User } from '@labrute/prisma';
import Version from './Version';
import applySkillModifiers from './brute/applySkillModifiers';
import availableBodyParts from './brute/availableBodyParts';
import bosses, { Boss } from './brute/bosses';
import canLevelUp from './brute/canLevelUp';
import createRandomBruteStats from './brute/createRandomBruteStats';
import getBruteGoldValue from './brute/getBruteGoldValue';
import getFightsLeft from './brute/getFightsLeft';
import { getGoldNeededForNewBrute } from './brute/getGoldNeededForNewBrute';
import getHP from './brute/getHP';
import getLevelUpChoices from './brute/getLevelUpChoices';
import getMaxFightsPerDay from './brute/getMaxFightsPerDay';
import getRandomBody from './brute/getRandomBody';
import getRandomBonus from './brute/getRandomBonus';
import getRandomColors from './brute/getRandomColors';
import getXPNeeded from './brute/getXPNeeded';
import { isNameValid } from './brute/isNameValid';
import skills from './brute/skills';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import { BruteReportWithNames, DestinyBranch } from './types';
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
export * from './brute/parsers';
export * from './brute/colors';
export * from './brute/getWinsNeededToRankUp';
export * from './brute/getRandomStartingStats';
export * from './utils/isUuid';
export * from './utils/randomItem';
export {
  Boss, ExpectedError, Version, adjustColor, applySkillModifiers,
  availableBodyParts, bosses, canLevelUp,
  createRandomBruteStats, formatLargeNumber, getBruteGoldValue,
  getFightsLeft, getGoldNeededForNewBrute, getHP,
  getLevelUpChoices,
  getMaxFightsPerDay,
  getRandomBody,
  getRandomBonus,
  getRandomColors, getXPNeeded, hexToRgba, isNameValid, pad, promiseBatch, randomBetween, skills,
  updateBruteData, weapons,
  weightedRandom
};

export const DEFAULT_LANGUAGE = Lang.en;

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};

// Server return types
export type BrutesGetForRankResponse = {
  topBrutes: Brute[],
  nearbyBrutes: Brute[],
  position: number,
  total: number,
};
export type BrutesGetRankingResponse = {
  ranking: number,
};
export type BrutesGetOpponentsResponse = Pick<Brute, 'id' | 'name' | 'gender' | 'level' | 'deletedAt' | 'hp' | 'strengthValue' | 'agilityValue' | 'speedValue' | 'body' | 'colors'>[];
export type BrutesExistsResponse = {
  exists: false
} | {
  exists: true,
  name: string,
};

export type TournamentsGetDailyResponse = Tournament & {
  fights: (Pick<Fight, 'id' | 'winner' | 'loser' | 'tournamentStep' | 'fighters'> & {
    brute1: Brute,
    brute2: Brute | null,
  })[]
};
export type TournamentsGetGlobalFight = Pick<Fight, 'id' | 'winner' | 'fighters' | 'brute1Id' | 'brute2Id' | 'tournamentStep'>;
export type TournamentsGetGlobalResponse = {
  tournament: (Pick<Tournament, 'id' | 'rounds'> & {
    fights: TournamentsGetGlobalFight[];
  }) | null,
  lastRounds: TournamentsGetGlobalFight[],
  done: boolean,
  nextOpponent: string | null,
  nextRound?: number,
};
export type TournementsUpdateGlobalRoundWatchedResponse = Pick<Brute, 'globalTournamentRoundWatched' | 'globalTournamentWatchedDate'>;
export type BrutesGetDestinyResponse = DestinyBranch;
export type BrutesGetFightsLeftResponse = {
  fightsLeft: number,
};
export type BrutesCreateResponse = {
  brute: Brute,
  goldLost: number,
  newLimit: number,
};
export type BrutesGetLevelUpChoicesResponse = {
  choices: [DestinyChoice, DestinyChoice],
};

export type ServerReadyResponse = {
  ready: boolean,
};
export type BruteRestoreResponse = {
  success: boolean,
};
export type UsersAdminUpdateRequest = {
  user: Prisma.UserUncheckedUpdateInput,
  achievements: Pick<Achievement, 'count' | 'name'>[],
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
  place: number,
})[];

export type ClanListResponse = (Clan & {
  brutes: Pick<Brute, 'id'>[],
  master: Pick<Brute, 'name'>,
})[];
export type ClanCreateResponse = Pick<Clan, 'id' | 'name'>;
export type ClanGetResponse = Clan & {
  brutes: Brute[],
  joinRequests: Brute[],
  bossDamages: (Pick<BossDamage, 'damage'> & {
    brute: Pick<Brute, 'id' | 'name'>,
  })[],
};
export type ClanGetThreadsResponse = {
  masterId: string,
  threads: (ClanThread & {
    creator: Pick<Brute, 'id' | 'name'>,
    posts: (Pick<ClanPost, 'date'> & {
      author: Pick<Brute, 'id' | 'name'>,
    })[];
  })[],
};
export type ClanGetThreadResponse = ClanThread & {
  posts: (ClanPost & {
    author: Brute,
  })[],
  clan: Pick<Clan, 'masterId' | 'name'>,
};

export type UserGetAdminResponse = User & {
  achievements: Pick<Achievement, 'name' | 'count'>[],
};
export type UserGetProfileResponse = Pick<User, 'id' | 'name' | 'gold' | 'lang'> & {
  brutes: Pick<
    Brute,
    'id' |
    'name' |
    'gender' |
    'level' |
    'strengthValue' |
    'agilityValue' |
    'speedValue' |
    'hp' |
    'ranking' |
    'body' |
    'colors'
  >[],
  achievements: Pick<Achievement, 'name' | 'count'>[],
};

export type AchievementGetRankingsResponse = {
  name: AchievementName,
  user: Pick<User, 'name' | 'id'> | null,
  brute: Pick<Brute, 'name' | 'id'> | null,
  count: number,
}[];

export type AchievementsGetResponse = {
  name: AchievementName,
  count: number,
}[];

export type FightCreateResponse = {
  id: string,
  fightsLeft: number,
  xpWon: number,
  victories: number,
};
export type ClanChallengeBossResponse = {
  id: string,
  xp?: number,
  gold?: number,
};
