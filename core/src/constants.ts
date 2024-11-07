import { FightModifier, PetName } from '@labrute/prisma';
import { PETS_TOTAL_ODDS } from './brute/pets';
import { SKILLS_TOTAL_ODDS } from './brute/skills';
import { WEAPONS_TOTAL_ODDS, WeaponAnimations } from './brute/weapons';

export const FIGHTS_PER_DAY = 6;

export const ARENA_OPPONENTS_COUNT = 6;
export const ARENA_OPPONENTS_MAX_GAP = 2;

export const BRUTE_STARTING_POINTS = 11;
export const PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;

export const NO_WEAPON_TOSS = 10;

export const Animations = [
  'arrive', 'attack', 'block', 'death', 'drink', 'eat',
  'equip', 'evade', 'grab', 'grabbed', 'hit', 'hit-0', 'hit-1', 'hit-2',
  'idle', 'launch', 'monk', 'prepare-throw', 'run',
  'stolen', 'steal', 'strengthen', 'throw', 'train', 'train2', 'trapped',
  'trash', 'win', ...WeaponAnimations,
] as const;
export type Animation = typeof Animations[number];

export const BruteRankings = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;
export type BruteRanking = typeof BruteRankings[number];

export const GLOBAL_TOURNAMENT_START_HOUR = 6;

export interface Perk {
  name: 'pet' | 'skill' | 'weapon';
  odds: number;
}

export const PERK_ODDS: Perk[] = [
  { name: 'pet', odds: PETS_TOTAL_ODDS },
  { name: 'skill', odds: SKILLS_TOTAL_ODDS },
  { name: 'weapon', odds: WEAPONS_TOTAL_ODDS },
];

export const NEW_BRUTE_BASE_COST = 500;

export const FIGHTER_HEIGHT = {
  brute: 80,
  [PetName.bear]: 130,
  [PetName.panther]: 60,
  dog: 40,
} as const;
export const FIGHTER_WIDTH = {
  brute: 50,
  [PetName.bear]: 100,
  [PetName.panther]: 80,
  dog: 60,
} as const;

export const FIGHTER_HIT_ANCHOR = {
  brute: { x: 5, y: 40 },
  [PetName.bear]: { x: 60, y: 100 },
  [PetName.panther]: { x: 45, y: 45 },
  dog: { x: 30, y: 30 },
} as const;

export const MAX_FAVORITE_BRUTES = 30;

export const BASE_FIGHTER_STATS = {
  reversal: 0,
  evasion: 0.1,
  dexterity: 0.2,
  block: -0.25,
  accuracy: 0,
  disarm: 0.05,
  combo: 0,
  deflect: 0,
  tempo: 1.2,
} as const;

export type FighterStat = keyof typeof BASE_FIGHTER_STATS;

export const BARE_HANDS_DAMAGE = 5;

export const RESET_PRICE = 100;

export const CLAN_SIZE_LIMIT = 50;
export const BOSS_XP_REWARD = 500;
export const BOSS_GOLD_REWARD = 500;

export enum BruteDeletionReason {
  DUPLICATE_NAME = 'DUPLICATE_NAME',
  INNAPROPRIATE_NAME = 'INNAPROPRIATE_NAME',
  BANNED_USER = 'BANNED_USER',
  EVENT_LOSS = 'EVENT_LOSS',
}

export const DailyModifierOdds = [
  { modifier: FightModifier.noThrows, odds: 1 },
  { modifier: FightModifier.focusOpponent, odds: 1 },
  { modifier: FightModifier.alwaysUseSupers, odds: 1 },
  { modifier: FightModifier.drawEveryWeapon, odds: 1 },
  { modifier: FightModifier.doubleAgility, odds: 1 },
  { modifier: FightModifier.randomSkill, odds: 1 },
  { modifier: FightModifier.randomWeapon, odds: 1 },
  { modifier: FightModifier.bareHandsFirstHit, odds: 1 },
  { modifier: FightModifier.startWithWeapon, odds: 1 },
];

export const DailyModifierCountOdds = [
  { count: 1, odds: 50 },
  { count: 2, odds: 25 },
  { count: 3, odds: 15 },
  { count: 4, odds: 10 },
];

export const DailyModifierSpawnChance = 4 / 30;

export enum BanReason {
  INNAPROPRIATE_NAME = 'innapropriateName',
  INNAPROPRIATE_BRUTE_NAME = 'innapropriateBruteName',
  MULTIPLE_ACCOUNTS = 'multipleAccounts',
}

export const FightLogTemplateCount = 48;

export const ClanWarMaxParticipants = 7;
export const ClanWarPointReward = 1000;

export const EventPauseDuration = 3;
export const EventFightsPerDay = 10;
export const EventFreeResets = 3;

export const DailyTournamentGoldReward = 100;
export const DailyTournamentXpReward = 1;
export const GlobalTournamentGoldReward = 150;
export const GlobalTournamentXpReward = 1;
