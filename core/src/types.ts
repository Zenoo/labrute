import type {
  Achievement, AchievementName, BossDamage, BossName, Brute,
  BruteReport, BruteReportReason, BruteReportStatus, BruteStat, ClanWarStatus, ClanWarType, Config, DestinyChoice, DestinyChoiceType,
  DestinyChoiceSide, Event, EventStatus, EventType, Fight, FightModifier, Gender, InventoryItem,
  InventoryItemType, Log, LogType, Notification, NotificationSeverity, PetName,
  Prisma, Release, ServerState, SkillName, Tournament, TournamentAchievement,
  TournamentGold, TournamentType, TournamentXp, User, UserLog, UserLogType, WeaponName, Clan,
  ClanPost, ClanThread, ClanWar, ClanWarFighters, ClanRole, ClanMemberRole, ClanPermission,
} from '@labrute/prisma';
export { ClanPermission } from '@labrute/prisma';
import { SkillId } from './brute/skills';
import { WeaponAnimation, WeaponId } from './brute/weapons';
import { BruteRanking } from './constants';

export interface AnimatedWeapon {
  name: WeaponName;
  animation: WeaponAnimation;
}

export type SuperName =
  'thief'
  | 'fierceBrute'
  | 'tragicPotion'
  | 'net'
  | 'bomb'
  | 'hammer'
  | 'cryOfTheDamned'
  | 'hypnosis'
  | 'flashFlood'
  | 'tamer';

export interface Stat {
  stat: number;
  modifier: number;
  value: number;
}

export type BruteBodyPart = 'p1' | 'p1a' | 'p1b' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7' | 'p7b' | 'p8';
export type BruteColor = 'col0' | 'col0a' | 'col0c' | 'col1' | 'col1a' | 'col1b' | 'col1c' | 'col1d' | 'col2' | 'col2a' | 'col2b' | 'col3' | 'col3b' | 'col4' | 'col4a' | 'col4b';

export interface Fighter {
  id: string;
  index: number
  team: 'L' | 'R';
  name: string;
  gender?: Gender;
  body?: string;
  colors?: string;
  rank: BruteRanking;
  level: number;
  strength: number,
  agility: number,
  speed: number,
  type: 'brute' | 'pet' | 'boss';
  master?: string;
  maxHp: number;
  hp: number,
  weapons: WeaponId[];
  skills: SkillId[];
  shield: boolean;
  eventId?: string;
}

export enum StepType {
  Saboteur,
  Leave,
  Arrive,
  Trash,
  Steal,
  Trap,
  Heal,
  Resist,
  Survive,
  Hit,
  FlashFlood,
  Hammer,
  Poison,
  Bomb,
  Hypnotise,
  Move,
  Eat,
  MoveBack,
  Equip,
  AttemptHit,
  Block,
  Evade,
  Sabotage,
  Disarm,
  Death,
  Throw,
  End,
  Counter,
  SkillActivate,
  SkillExpire,
  Spy,
  Vampirism,
  Haste,
  Treat,
  DropShield,
  Regeneration,
}

export interface SaboteurStep {
  /** Action */
  a: StepType.Saboteur;
  /** Brute ID */
  b: number;
  /** Weapon ID */
  w: WeaponId;
}

export interface LeaveStep {
  /** Action */
  a: StepType.Leave;
  /** Fighter ID */
  f: number;
}

export interface ArriveStep {
  /** Action */
  a: StepType.Arrive;
  /** Fighter ID */
  f: number;
  /** Current weapon ID */
  w?: WeaponId;
}

export interface TrashStep {
  /** Action */
  a: StepType.Trash;
  /** Brute ID */
  b: number;
  /** Weapon ID */
  w: WeaponId;
}

export interface StealStep {
  /** Action */
  a: StepType.Steal;
  /** Brute ID */
  b: number;
  /** Weapon ID */
  w: WeaponId;
  /** Target ID */
  t: number;
}

export interface TrapStep {
  /** Action */
  a: StepType.Trap;
  /** Brute ID */
  b: number;
  /** Target ID */
  t: number;
}

export interface HealStep {
  /** Action */
  a: StepType.Heal;
  /** Brute ID */
  b: number;
  /** Amount healed */
  h: number;
  /** Cured poison? */
  c?: 1 | 0;
}

export interface ResistStep {
  /** Action */
  a: StepType.Resist;
  /** Brute ID */
  b: number;
}

export interface SurviveStep {
  /** Action */
  a: StepType.Survive;
  /** Brute ID */
  b: number;
}

export interface HitStep {
  /** Action */
  a: StepType.Hit | StepType.FlashFlood | StepType.Hammer | StepType.Poison;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
  /** Weapon ID */
  w?: WeaponId;
  /** Damage */
  d: number;
  /** Stunned? */
  s?: 1 | 0;
  /** Critical hit? */
  c?: 1 | 0;
}

export interface BombStep {
  /** Action */
  a: StepType.Bomb;
  /** Fighter ID */
  f: number;
  /** Targets IDs */
  t: number[];
  /** Damage dealt per fighter ID */
  d: Record<string, number | undefined>;
}

export interface HypnotiseStep {
  /** Action */
  a: StepType.Hypnotise;
  /** Brute ID */
  b: number;
  /** Brutes hypnotized IDs */
  t: number[];
  /** Pets hypnotized IDs */
  p: number[];
}

export interface MoveStep {
  /** Action */
  a: StepType.Move;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
  /** Should occupy the same visual space? */
  s?: 1 | 0;
  /** Got countered? */
  c?: 1 | 0;
  /** Melee repositioning? */
  r?: 1 | 0;
}

export interface EatStep {
  /** Action */
  a: StepType.Eat;
  /** Brute ID */
  b: number;
  /** Target ID */
  t: number;
  /** HP healed */
  h: number;
}

export interface MoveBackStep {
  /** Action */
  a: StepType.MoveBack;
  /** Fighter ID */
  f: number;
}

export interface EquipStep {
  /** Action */
  a: StepType.Equip;
  /** Brute ID */
  b: number;
  /** Weapon ID */
  w: WeaponId;
}

export interface AttemptHitStep {
  /** Action */
  a: StepType.AttemptHit;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
  /** Weapon ID */
  w?: WeaponId;
  /** Broke shield? */
  // Necessary since dropShield was added later
  // TODO: Remove on release
  b?: 1 | 0;
}

export interface BlockStep {
  /** Action */
  a: StepType.Block;
  /** Fighter ID */
  f: number;
}

export interface EvadeStep {
  /** Action */
  a: StepType.Evade;
  /** Fighter ID */
  f: number;
}

export interface SabotageStep {
  /** Action */
  a: StepType.Sabotage;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
  /** Weapon ID */
  w: WeaponId;
}

export interface DisarmStep {
  /** Action */
  a: StepType.Disarm;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
  /** Weapon ID */
  w: WeaponId;
}

export interface DeathStep {
  /** Action */
  a: StepType.Death;
  /** Fighter ID */
  f: number;
}

export interface ThrowStep {
  /** Action */
  a: StepType.Throw;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
  /** Weapon ID */
  w: WeaponId;
  /** Should keep the weapon? */
  k?: 1 | 0;
  /** Is returning the weapon? */
  r?: 1 | 0;
}

export interface EndStep {
  /** Action */
  a: StepType.End;
  /** Winner ID */
  w: number;
  /** Loser ID */
  l: number;
}

export interface CounterStep {
  /** Action */
  a: StepType.Counter;
  /** Fighter ID */
  f: number;
  /** Target ID */
  t: number;
}

export interface SkillActivateStep {
  /** Action */
  a: StepType.SkillActivate;
  /** Brute ID */
  b: number;
  /** Skill ID */
  s: SkillId;
  /** Unafraid pets */
  p?: number[];
}

export interface SkillExpireStep {
  /** Action */
  a: StepType.SkillExpire;
  /** Brute ID */
  // Necessary since f was added later
  // TODO: Remove on release
  b?: number;
  /** Fighter ID */
  // ? is necessary since f was added later
  // TODO: Remove ? on release
  f?: number;
  /** Skill ID */
  s: SkillId;
}

export interface SpyStep {
  /** Action */
  a: StepType.Spy;
  /** Brute ID */
  b: number;
  /** Target ID */
  t: number;
  /** Weapon IDs sent */
  s: WeaponId[];
  /** Weapon IDs received */
  r: WeaponId[];
}

export interface VampirismStep {
  /** Action */
  a: StepType.Vampirism;
  /** Brute ID */
  b: number;
  /** Target ID */
  t: number;
  /** Damage done */
  d: number;
  /** HP healed */
  h: number;
}

export interface HasteStep {
  /** Action */
  a: StepType.Haste;
  /** Brute ID */
  b: number;
  /** Target ID */
  t: number;
  /** Damage done */
  d: number;
  /** Critical hit? */
  c?: 1 | 0;
}

export interface TreatStep {
  /** Action */
  a: StepType.Treat;
  /** Brute ID */
  b: number;
  /** Target ID */
  t: number;
  /** HP healed */
  h: number;
  /** Cured poison? */
  c?: 1 | 0;
}

export interface DropShieldStep {
  /** Action */
  a: StepType.DropShield;
  /** Fighter ID */
  b: number;
}

export interface RegenerationStep {
  /** Action */
  a: StepType.Regeneration;
  /** Fighter ID */
  f: number;
  /** HP healed */
  h: number;
  /** Delay */
  d?: 1 | 0;
}

export type FightStep = SaboteurStep | LeaveStep | ArriveStep
  | TrashStep | StealStep | TrapStep | HealStep | ResistStep
  | SurviveStep | HitStep | BombStep | HypnotiseStep | MoveStep | EatStep
  | MoveBackStep | EquipStep | AttemptHitStep | BlockStep | EvadeStep
  | SabotageStep | DisarmStep | DeathStep | ThrowStep | EndStep
  | CounterStep | SkillActivateStep | SkillExpireStep | SpyStep
  | VampirismStep | HasteStep | TreatStep | DropShieldStep | RegenerationStep;

export type AnimationModel =
  | 'bear'
  | 'dog'
  | 'panther'
  | 'male-brute'
  | 'female-brute';

export type DestinyBranch = Omit<DestinyChoice, 'path'> & {
  level: number;
  current: boolean;
  path: string;
  [DestinyChoiceSide.LEFT]: DestinyBranch | null;
  [DestinyChoiceSide.RIGHT]: DestinyBranch | null;
};

// MODEL EXPANSIONS

// User
export type UserWithBrutes = User & {
  brutes: Brute[];
};
export type UserWithBrutesBodyColor = User & {
  brutes: Brute[];
  notifications: Notification[];
  following: Pick<Brute, 'id'>[];
};
export type UserWithAchievements = User & {
  achievements: Achievement[];
};

// Brute
export type ServerHookBrute = Brute & {
  master: Pick<Brute, 'id' | 'name'> | null;
  clan: Pick<Clan, 'id' | 'name'> | null;
  user: Pick<User, 'id' | 'name' | 'lastSeen'> | null;
  tournaments: Tournament[];
};
export type HookBrute = CalculatedBrute & {
  master: Pick<Brute, 'id' | 'name'> | null;
  clan: Pick<Clan, 'id' | 'name'> | null;
  user: Pick<User, 'id' | 'name' | 'lastSeen'> | null;
  tournaments: Tournament[];
};
export type AdminPanelBrute = Brute & {
  user: User | null;
};

// Brute report
export type BruteReportWithNames = BruteReport & {
  brute: {
    id: string;
    name: string;
  } | null;
  users: {
    id: string;
    name: string;
  }[],
  handler: {
    id: string;
    name: string;
  } | null;
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
  fights: (Pick<Fight, 'id' | 'winner' | 'loser' | 'winnerId' | 'loserId' | 'tournamentStep' | 'fighters'> & {
    brute1: Brute | null,
    brute2: Brute | null,
  })[]
};
export type TournamentsUpdateStepWatchedResponse = {
  step: number,
};
export type TournamentsGetGlobalFight = Pick<Fight, 'id' | 'winner' | 'winnerId' | 'fighters' | 'brute1Id' | 'brute2Id' | 'tournamentStep'>;
export type TournamentsGetGlobalResponse = {
  tournament: (Pick<Tournament, 'id' | 'rounds' | 'type'> & {
    fights: TournamentsGetGlobalFight[];
  }) | null,
  lastRounds: TournamentsGetGlobalFight[],
  done: boolean,
  nextOpponent: string | null | undefined,
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
  user?: UserWithBrutesBodyColor,
  modifiers: Modifiers,
  currentEvent: Event | null,
  version: string,
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
    clanRoles: { role: ClanRole }[],
  })[],
  joinRequests: (Brute & {
    user: Pick<User, 'lastSeen'> | null,
  })[],
  bossDamages: (Pick<BossDamage, 'damage'> & {
    brute: Pick<Brute, 'id' | 'name'> | null,
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
    creator: Pick<Brute, 'id' | 'name'> | null,
    posts: (Pick<ClanPost, 'date'> & {
      author: Pick<Brute, 'id' | 'name'> | null,
    })[];
  })[],
};
export type ClanGetThreadResponse = ClanThread & {
  posts: (ClanPost & {
    author: Brute | null,
  })[],
  clan: Pick<Clan, 'masterId' | 'name'>,
};
export type ClanGetForAdminResponse = Clan & {
  brutes: Pick<Brute, 'id' | 'name'>[],
};

// Clan Roles Types
export type ClanRoleWithMemberCount = ClanRole & {
  memberCount: number;
};

export type ClanGetRolesResponse = ClanRoleWithMemberCount[];

export type ClanCreateRoleRequest = Pick<ClanRole, 'name' | 'permissions'>;
export type ClanCreateRoleResponse = Pick<ClanRole, 'id' | 'name' | 'permissions' | 'clanId'>;
export type ClanUpdateRoleRequest = Partial<Pick<ClanRole, 'name' | 'permissions'>>;
export type ClanUpdateRoleResponse = Pick<ClanRole, 'id' | 'name' | 'permissions' | 'clanId'>;

export type ClanAssignRoleResponse = { success: boolean };
export type ClanRemoveRoleResponse = { success: boolean };
export type ClanDeleteRoleResponse = { success: boolean };


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
    'weapons' |
    'pets' |
    'eventId'
  >[],
  achievements: Pick<Achievement, 'name' | 'count'>[],
  favoriteFights: (Pick<Fight, 'id' | 'date' | 'fighters'> & {
    brute1: Pick<Brute, 'id' | 'name'> | null,
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
export type UserGetNextModifiersResponse = Modifiers;

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
  fights?: (Pick<Fight, 'id' | 'date' | 'winner' | 'winnerId'> & {
    brute1?: Pick<Brute, 'id' | 'name'> | null,
  })[],
  fighters?: (ClanWarFighters & {
    attackers?: Pick<Brute, 'id' | 'name'>[],
    defenders?: Pick<Brute, 'id' | 'name'>[],
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
    tournament: Pick<Tournament, 'id' | 'rounds'> | null,
  },
  fights: Pick<Fight, 'id' | 'tournamentStep' | 'winner' | 'winnerId' | 'fighters' | 'brute1Id' | 'brute2Id'>[],
  lastRounds: Pick<Fight, 'id' | 'tournamentStep' | 'winner' | 'winnerId' | 'fighters' | 'brute1Id' | 'brute2Id'>[],
  participants: number,
};
export type EventListCurrentResponse = (Event & {
  tournament: Pick<Tournament, 'rounds'> | null,
} & {
  bruteCount: number,
})[];
export type EventGetRoundResponse = Event & {
  tournament: {
    fights: (Pick<Fight, 'id' | 'fighters'> & {
      brute1: Pick<Brute, 'id' | 'name'> | null,
      brute2: Pick<Brute, 'id' | 'name'> | null,
    })[],
  } | null,
};

export type NotificationListResponse = Notification[];

export type ConfigsListResponse = Config[];
export type ConfigsSetRequest = {
  key: string,
  value: string,
};
export type ConfigsSetResponse = Config;
export type ConfigsDecryptRequest = {
  value: string,
};
export type ConfigsDecryptResponse = {
  decrypted: string,
};

export type UserLogsListRequest = {
  userIds: string[],
  page: number,
};
export type UserLogsListResponse = (UserLog & {
  user: Pick<User, 'name'>,
  brute: Pick<Brute, 'name'> | null,
})[];

export type Tiered<T> = T & {
  tier: number;
};

export type TieredPerks = {
  weapons: Partial<Record<WeaponName, number>>;
  skills: Partial<Record<SkillName, number>>;
  pets: Partial<Record<PetName, number>>;
  /* Only used to display the random weapon differently in the brute cell */
  randomWeapon?: WeaponName;
  /* Only used to display the random skill differently in the brute cell */
  randomSkill?: SkillName;
};

export type CalculatedBrute = Omit<Brute, 'weapons' | 'skills' | 'pets'> & TieredPerks;

export type Modifiers = Partial<Record<FightModifier, true>>;
