import {
  Achievement,
  Brute,
  BruteBody,
  BruteColors,
  BruteInventoryItem,
  BruteReport,
  Clan,
  DestinyChoice,
  DestinyChoiceSide,
  Fight,
  Gender,
  SkillName,
  Tournament,
  TournamentStep,
  User,
  WeaponName,
} from '@labrute/prisma';
import { Skill } from './brute/skills';
import { Weapon, WeaponAnimation } from './brute/weapons';
import { BruteRanking } from './constants';

export interface AnimatedWeapon {
  name: WeaponName;
  animation: WeaponAnimation;
}

export type SuperName =
  | 'thief'
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

export interface DetailedFighter {
  // Metadata
  id: string;
  name: string;
  gender?: Gender;
  rank: BruteRanking;
  level: number;
  data?: {
    gender: Gender;
    body: BruteBody;
    colors: BruteColors;
  };
  type: 'brute' | 'pet' | 'boss';
  // Follower/Backup variables
  master?: string;
  arrivesAtInitiative?: number;
  leavesAtInitiative?: number;
  // Pet variables
  eaten?: boolean;
  // Raw stats
  maxHp: number;
  hp: number;
  strength: number;
  agility: number;
  speed: number;
  // Initiative
  initiative: number; // Lower attacks next
  tempo: number; // Lower is better
  // hit stats
  baseDamage: number;
  counter: number;
  autoReversalOnBlock: boolean;
  reversal: number;
  combo: number;
  block: number;
  accuracy: number;
  armor: number;
  disarm: number;
  evasion: number;
  // Passives
  // Destroys one enemy's weapon per hit
  sabotage: boolean;
  // tempo -25% for heavy weapons
  bodybuilder: boolean;
  // Survive with 1 HP on first death
  survival: boolean;
  // First hit of the fight is evaded
  balletShoes: boolean;
  // 70% chance of re-attacking on misses (evasion or block)
  determination: boolean;
  retryAttack: boolean;
  // 30% chance of disarming when being hit
  ironHead: boolean;
  // Max 20% max HP per hit
  resistant: boolean;
  // tempo +100%
  monk: boolean;
  // Available skills
  skills: Skill[];
  // Available weapons
  weapons: Weapon[];
  // Shield state
  shield: boolean;
  // Active skills
  activeSkills: Skill[];
  // Active weapon
  activeWeapon: Weapon | null;
  keepWeaponChance: number;
  // Pre fight sabotage
  saboteur: boolean;
  sabotagedWeapon: Weapon | null;
  // Status effects
  poisoned: boolean;
  trapped: boolean;
  hypnotised?: boolean;
  // Reduce some weapons damage by 25%
  damagedWeapons: WeaponName[];
}

export interface Fighter {
  id: string;
  name: string;
  gender?: Gender;
  rank: BruteRanking;
  level: number;
  strength: number;
  agility: number;
  speed: number;
  data?: {
    gender: Gender;
    body: BruteBody;
    colors: BruteColors;
  };
  type: 'brute' | 'pet' | 'boss';
  master?: string;
  maxHp: number;
  hp: number;
  weapons: AnimatedWeapon[];
  skills: SkillName[];
  shield: boolean;
}

export interface StepFighter {
  name: string;
  type: 'brute' | 'pet' | 'boss';
  master?: number | string;
  hypnotised?: boolean;
}

export interface SaboteurStep {
  action: 'saboteur';
  brute: StepFighter;
  weapon: WeaponName;
}

export interface LeaveStep {
  action: 'leave';
  fighter: StepFighter;
}

export interface ArriveStep {
  action: 'arrive';
  fighter: StepFighter;
}

export interface TrashStep {
  action: 'trash';
  brute: StepFighter;
  name: WeaponName;
}

export interface StealStep {
  action: 'steal';
  brute: StepFighter;
  name: WeaponName;
  target: StepFighter;
}

export interface TrapStep {
  action: 'trap';
  brute: StepFighter;
  target: StepFighter;
}

export interface HealStep {
  action: 'heal';
  brute: StepFighter;
  amount: number;
  poisonHeal?: boolean;
}

export interface ResistStep {
  action: 'resist';
  brute: StepFighter;
}

export interface SurviveStep {
  action: 'survive';
  brute: StepFighter;
}

export interface HitStep {
  action: 'hit' | 'flashFlood' | 'hammer' | 'poison';
  fighter: StepFighter;
  target: StepFighter;
  weapon: WeaponName | null;
  damage: number;
}

export interface BombStep {
  action: 'bomb';
  fighter: StepFighter;
  targets: StepFighter[];
  damage: (StepFighter & { damage: number })[];
}

export interface HypnotiseStep {
  action: 'hypnotise';
  brute: StepFighter;
  pets: StepFighter[];
}

export interface MoveStep {
  action: 'moveTo';
  fighter: StepFighter;
  target: StepFighter;
  sameSpace?: boolean;
  countered?: boolean;
}

export interface EatStep {
  action: 'eat';
  brute: StepFighter;
  target: StepFighter;
  heal: number;
}

export interface MoveBackStep {
  action: 'moveBack';
  fighter: StepFighter;
}

export interface EquipStep {
  action: 'equip';
  brute: StepFighter;
  name: WeaponName;
}

export interface AttemptHitStep {
  action: 'attemptHit';
  fighter: StepFighter;
  target: StepFighter;
  weapon: WeaponName | null;
  brokeShield?: boolean;
}

export interface BlockStep {
  action: 'block';
  fighter: StepFighter;
}

export interface EvadeStep {
  action: 'evade';
  fighter: StepFighter;
}

export interface SabotageStep {
  action: 'sabotage';
  fighter: StepFighter;
  opponent: StepFighter;
  weapon: WeaponName;
}

export interface DisarmStep {
  action: 'disarm';
  fighter: StepFighter;
  opponent: StepFighter;
  weapon: WeaponName;
}

export interface DeathStep {
  action: 'death';
  fighter: StepFighter;
}

export interface ThrowStep {
  action: 'throw';
  fighter: StepFighter;
  opponent: StepFighter;
  weapon: WeaponName;
  keep: boolean;
}

export interface EndStep {
  action: 'end';
  winner: StepFighter;
  loser: StepFighter;
}

export interface CounterStep {
  action: 'counter';
  fighter: StepFighter;
  opponent: StepFighter;
}

export interface SkillActivateStep {
  action: 'skillActivate';
  brute: StepFighter;
  skill: SkillName;
}

export interface SkillExpireStep {
  action: 'skillExpire';
  brute: StepFighter;
  skill: SkillName;
}

export interface SpyStep {
  action: 'spy';
  brute: StepFighter;
  opponent: StepFighter;
  sent: WeaponName[];
  received: WeaponName[];
}

export type FightStep =
  | SaboteurStep
  | LeaveStep
  | ArriveStep
  | TrashStep
  | StealStep
  | TrapStep
  | HealStep
  | ResistStep
  | SurviveStep
  | HitStep
  | BombStep
  | HypnotiseStep
  | MoveStep
  | EatStep
  | MoveBackStep
  | EquipStep
  | AttemptHitStep
  | BlockStep
  | EvadeStep
  | SabotageStep
  | DisarmStep
  | DeathStep
  | ThrowStep
  | EndStep
  | CounterStep
  | SkillActivateStep
  | SkillExpireStep
  | SpyStep;

export interface DetailedFight {
  brute_1: string;
  brute_2: string;
  data: {
    fighters: DetailedFighter[];
    initialFighters: DetailedFighter[];
    steps: FightStep[];
    initiative: number;
    winner: StepFighter | null;
    loser: StepFighter | null;
  };
}

export type AnimationModel =
  | 'bear'
  | 'dog'
  | 'panther'
  | 'male-brute'
  | 'female-brute';

export interface FrameProps {
  colors: Omit<BruteColors, 'id' | 'bruteId'>;
  body: Omit<BruteBody, 'id' | 'bruteId'>;
}

export interface DestinyBranch extends DestinyChoice {
  current: boolean;
  [DestinyChoiceSide.LEFT]: DestinyBranch | null;
  [DestinyChoiceSide.RIGHT]: DestinyBranch | null;
}

// MODEL EXPANSIONS

// User
export type UserWithBrutes = User & {
  brutes: Brute[];
};
export type UserWithBrutesBodyColor = User & {
  brutes: BruteWithBodyColors[];
};
export type UserWithAchievements = User & {
  achievements: Achievement[];
};

// Brute
export type BruteWithBodyColors = Brute & {
  body: BruteBody | null;
  colors: BruteColors | null;
};
export type HookBrute = Brute & {
  master: Pick<Brute, 'id' | 'name'> | null;
  body: BruteBody | null;
  colors: BruteColors | null;
  clan: Pick<Clan, 'id' | 'name'> | null;
  user: Pick<User, 'id' | 'name'> | null;
  tournaments: Tournament[];
  inventory: BruteInventoryItem[];
};
export type AdminPanelBrute = BruteWithBodyColors & {
  user: User | null;
};

// Tournament
export type FullTournamentStep = TournamentStep & {
  fight: Fight & {
    brute1: BruteWithBodyColors;
    brute2: BruteWithBodyColors | null;
  };
};
export type FullTournament = Tournament & {
  steps: FullTournamentStep[];
};

// Fight
export type FightWithBrutes = Fight & {
  brute1: Brute;
  brute2: Brute | null;
};

// Brute report
export type BruteReportWithNames = BruteReport & {
  brute: {
    id: string;
    name: string;
  };
  users: {
    id: string;
    name: string;
  }[];
};
