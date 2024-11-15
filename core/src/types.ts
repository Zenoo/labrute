import { Achievement, Brute, BruteReport, Clan, DestinyChoice, DestinyChoiceSide, FightModifier, Gender, Notification, Tournament, User, WeaponName } from '@labrute/prisma';
import { Skill, SkillId } from './brute/skills';
import { Weapon, WeaponAnimation, WeaponId } from './brute/weapons';
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

export interface DetailedFighter {
  // Metadata
  id: string;
  eventId?: string;
  index: number;
  team: 'L' | 'R';
  name: string;
  gender?: Gender;
  body?: string;
  colors?: string;
  rank: BruteRanking;
  level: number;
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
  baseDamage: number,
  counter: number,
  reversal: number,
  combo: number,
  deflect: number,
  block: number,
  accuracy: number,
  armor: number,
  disarm: number,
  evasion: number,
  reach: number,
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
  // Reduce some weapons damage by 25%
  damagedWeapons: WeaponName[],
  // Keep track of consecutive hits for stun status
  hitBy: Record<number, number>,
  stunned?: boolean,
  hypnotized?: boolean,
  // Bare hand hit (for the fight modifier)
  bareHandHit?: boolean;
  // Damage immunity
  immune?: boolean;
}

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
  b: number;
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

export type FightStep = SaboteurStep | LeaveStep | ArriveStep
  | TrashStep | StealStep | TrapStep | HealStep | ResistStep
  | SurviveStep | HitStep | BombStep | HypnotiseStep | MoveStep | EatStep
  | MoveBackStep | EquipStep | AttemptHitStep | BlockStep | EvadeStep
  | SabotageStep | DisarmStep | DeathStep | ThrowStep | EndStep
  | CounterStep | SkillActivateStep | SkillExpireStep | SpyStep
  | VampirismStep | HasteStep | TreatStep | DropShieldStep;

export interface DetailedFight {
  modifiers: FightModifier[];
  fighters: DetailedFighter[];
  initialFighters: DetailedFighter[];
  steps: FightStep[];
  initiative: number;
  winner: string | null;
  loser: string | null;
}

export type AnimationModel =
  | 'bear'
  | 'dog'
  | 'panther'
  | 'male-brute'
  | 'female-brute';

export interface DestinyBranch extends DestinyChoice {
  level: number;
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
  brutes: Brute[];
  notifications: Notification[];
  following: Pick<Brute, 'id'>[];
};
export type UserWithAchievements = User & {
  achievements: Achievement[];
};

// Brute
export type HookBrute = Brute & {
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
  };
  users: {
    id: string;
    name: string;
  }[],
  handler: {
    id: string;
    name: string;
  } | null;
};
