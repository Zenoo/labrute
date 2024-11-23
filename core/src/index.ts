import { Achievement, AchievementName, BossDamage, Brute, BruteReportReason, BruteReportStatus, Clan, ClanPost, ClanThread, ClanWar, ClanWarFighters, DestinyChoice, Event, Fight, FightModifier, InventoryItem, Lang, Log, Notification, Prisma, Tournament, User } from '@labrute/prisma';
import Version from './Version';
import applySkillModifiers from './brute/applySkillModifiers';
import availableBodyParts from './brute/availableBodyParts';
import bosses, { Boss } from './brute/bosses';
import canLevelUp from './brute/canLevelUp';
import createRandomBruteStats from './brute/createRandomBruteStats';
import getFightsLeft from './brute/getFightsLeft';
import { getGoldNeededForNewBrute } from './brute/getGoldNeededForNewBrute';
import getLevelUpChoices from './brute/getLevelUpChoices';
import getMaxFightsPerDay from './brute/getMaxFightsPerDay';
import getRandomBody from './brute/getRandomBody';
import getRandomBonus from './brute/getRandomBonus';
import getRandomColors from './brute/getRandomColors';
import { isNameValid } from './brute/isNameValid';
import updateBruteData from './brute/updateBruteData';
import weapons from './brute/weapons';
import { BruteReportWithNames, DestinyBranch, UserWithBrutesBodyColor } from './types';
import ExpectedError from './utils/ExpectedError';
import adjustColor from './utils/adjustColor';
import formatLargeNumber from './utils/formatLargeNumber';
import hexToRgba from './utils/hexToRgba';
import pad from './utils/pad';
import randomBetween from './utils/randomBetween';
import weightedRandom from './utils/weightedRandom';

export * from './Achievements';
export * from './Titles';
export * from './brute/colors';
export * from './brute/getBruteGoldValue';
export * from './brute/getFinalStats';
export * from './brute/getHP';
export * from './brute/getRandomStartingStats';
export * from './brute/getResetCost';
export * from './brute/getTempSkill';
export * from './brute/getTempWeapon';
export * from './brute/getXPNeeded';
export * from './brute/getWinsNeededToRankUp';
export * from './brute/parsers';
export * from './brute/pets';
export * from './brute/skills';
export * from './brute/weapons';
export * from './constants';
export * from './fight/backgrounds';
export * from './releases';
export * from './types';
export * from './utils/isUuid';
export * from './utils/randomItem';
export * from './Elo';
export * from './knownIssues';
export {
  adjustColor, applySkillModifiers,
  availableBodyParts, Boss, bosses, canLevelUp,
  createRandomBruteStats, ExpectedError, formatLargeNumber,
  getFightsLeft, getGoldNeededForNewBrute,
  getLevelUpChoices,
  getMaxFightsPerDay,
  getRandomBody,
  getRandomBonus,
  getRandomColors, hexToRgba, isNameValid, pad, randomBetween,
  updateBruteData, Version, weapons,
  weightedRandom
};

export const DEFAULT_LANGUAGE = Lang.en;

export type PrismaInclude = {
  [key: string]: boolean | PrismaInclude;
};

// Server return types
export type BruteForRender = Pick<Brute, 'id' | 'gender' | 'name' | 'body' | 'colors'>;
export type BrutesGetForRankResponse = {
  topBrutes: Pick<Brute, 'id' | 'name' | 'body' | 'colors' | 'gender' | 'ranking' | 'level' | 'ascensions'>[],
  nearbyBrutes: Pick<Brute, 'id' | 'name' | 'body' | 'colors' | 'gender' | 'ranking' | 'level' | 'ascensions'>[],
  position: number,
  total: number,
};
export type BrutesGetRankingResponse = {
  ranking: number,
};
export type BrutesGetForVersusResponse = Pick<Brute, 'id' | 'name' | 'body' | 'colors' | 'gender' | 'level'>;
export type BrutesGetOpponentsResponse = Pick<Brute,
  'id' | 'name' | 'ranking' | 'gender' | 'level' | 'deletedAt' | 'hp' |
  'enduranceStat' |
  'enduranceModifier' |
  'enduranceValue' |
  'strengthStat' |
  'strengthModifier' |
  'strengthValue' |
  'agilityStat' |
  'agilityModifier' |
  'agilityValue' |
  'speedStat' |
  'speedModifier' |
  'speedValue' | 'body' | 'colors' | 'skills' | 'weapons' | 'pets' | 'eventId'>[];
export type BrutesExistsResponse = {
  exists: false
} | {
  exists: true,
  name: string,
};
export type BrutesGetClanIdAsMasterResponse = {
  id: string | null,
};

export type TournamentsGetDailyResponse = Tournament & {
  fights: (Pick<Fight, 'id' | 'winner' | 'loser' | 'tournamentStep' | 'fighters'> & {
    brute1: Brute,
    brute2: Brute | null,
  })[]
};
export type TournamentsUpdateStepWatchedResponse = {
  step: number,
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
export type UsersAuthenticateResponse = {
  user: UserWithBrutesBodyColor,
  modifiers: FightModifier[],
  currentEvent: Event | null,
};

export type BruteReportsListRequest = {
  status: BruteReportStatus,
  page: string,
};
export type BruteReportsListResponse = BruteReportWithNames[];

export type BruteReportsSendRequest = {
  name: string,
  reason: BruteReportReason,
};
export type BruteGetInventoryResponse = InventoryItem[];
export type BruteUpdateEventRoundWatchedResponse = Pick<Brute, 'eventTournamentRoundWatched' | 'eventTournamentWatchedDate'>;

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
  master: BruteForRender | null,
  brutes: (Brute & {
    user: Pick<User, 'lastSeen'> | null,
  })[],
  joinRequests: (Brute & {
    user: Pick<User, 'lastSeen'> | null,
  })[],
  bossDamages: (Pick<BossDamage, 'damage'> & {
    brute: Pick<Brute, 'id' | 'name'>,
  })[],
  attacks: (Pick<ClanWar, 'id' | 'status' | 'type'> & {
    defender: Pick<Clan, 'id' | 'name'> & {
      master: BruteForRender | null;
    },
  })[],
  defenses: (Pick<ClanWar, 'id' | 'status' | 'type'> & {
    attacker: Pick<Clan, 'id' | 'name'> & {
      master: BruteForRender | null;
    },
  })[],
};
export type ClanGetThreadsResponse = {
  masterId: string | null,
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
export type UserGetProfileResponse = Pick<User, 'id' | 'name' | 'gold' | 'lang' | 'lastSeen'> & {
  brutes: Pick<
    Brute,
    'id' |
    'name' |
    'gender' |
    'level' |
    'enduranceStat' |
    'enduranceModifier' |
    'enduranceValue' |
    'strengthStat' |
    'strengthModifier' |
    'strengthValue' |
    'agilityStat' |
    'agilityModifier' |
    'agilityValue' |
    'speedStat' |
    'speedModifier' |
    'speedValue' |
    'hp' |
    'ranking' |
    'body' |
    'colors' |
    'skills' |
    'eventId'
  >[],
  achievements: Pick<Achievement, 'name' | 'count'>[],
  favoriteFights: (Pick<Fight, 'id' | 'date'> & {
    brute1: Pick<Brute, 'id' | 'name'>,
    brute2: Pick<Brute, 'id' | 'name'> | null,
  })[],
};
export type UserBannedListResponse = Pick<User, 'id' | 'name' | 'bannedAt' | 'banReason'>[];
export type UserMultipleAccountsListResponse = { ip: string, users: string[] }[];
export type UserUpdateSettingsRequest = Pick<User, 'fightSpeed' | 'backgroundMusic' | 'displayVersusPage' | 'displayOpponentDetails'>;

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
  losses: number,
};
export type FightGetResponse = Fight & {
  favoritedBy: Pick<Brute, 'id'>[],
};
export type ClanChallengeBossResponse = {
  id: string,
  xp?: number,
  gold?: number,
};
export type UserGetNextModifiersResponse = FightModifier[];

export type LogListResponse = (Log & {
  currentBrute: Pick<Brute, 'name'>,
})[];
export type LogGetForUserFeedResponse = {
  brutes: BruteForRender[],
  logs: (Log & {
    currentBrute: Pick<Brute, 'name'>,
    destinyChoice: DestinyChoice | null,
  })[],
};

export type ClanWarCreateResponse = Pick<ClanWar, 'id'>;
export type ClanWarUpdateFightersResponse = Pick<Brute, 'id'>[];
export type ClanWarGetResponse = ClanWar & {
  attacker: Pick<Clan, 'id' | 'name'>,
  defender: Pick<Clan, 'id' | 'name'>,
  fights: (Pick<Fight, 'id' | 'date' | 'winner'> & {
    brute1: Pick<Brute, 'id' | 'name'>,
  })[],
  fighters: (ClanWarFighters & {
    attackers: Pick<Brute, 'id' | 'name'>[],
    defenders: Pick<Brute, 'id' | 'name'>[],
  })[],
};
export type ClanWarGetHistoryResponse = (ClanWar & {
  attacker: Pick<Clan, 'id' | 'name'>,
  defender: Pick<Clan, 'id' | 'name'>,
})[];
export type ClanWarGetAvailableFightersResponse = (BruteForRender & Pick<Brute, 'ranking' | 'level'>)[];
export type ClanWarGetUsedFightersResponse = (BruteForRender & Pick<Brute, 'ranking' | 'level'>)[];

export enum ClanSort {
  points,
  elo,
}

export type EventListResponse = (Event & {
  winner: Pick<Brute, 'name'> | null,
})[];
export type EventGetResponse = {
  event: Event & {
    tournament: Pick<Tournament, 'id'> | null,
  },
  fights: Pick<Fight, 'id' | 'tournamentStep' | 'winner' | 'fighters' | 'brute1Id' | 'brute2Id'>[],
  lastRounds: Pick<Fight, 'id' | 'tournamentStep' | 'winner' | 'fighters' | 'brute1Id' | 'brute2Id'>[],
};

export type NotificationListResponse = Notification[];
