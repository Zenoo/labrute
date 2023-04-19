import { SkillName } from '@labrute/prisma';
import { WeaponType } from './weapons';

export const FightStat = {
  REVERSAL: 'reversal',
  COUNTER: 'counter',
  EVASION: 'evasion',
  BLOCK: 'block',
  ACCURACY: 'accuracy',
  DISARM: 'disarm',
  COMBO: 'combo',
  ARMOR: 'armor',
  DAMAGE: 'damage',
  INTERVAL: 'interval',
  INITIATIVE: 'initiative',
  STRENGTH: 'strength',
  AGILITY: 'agility',
  SPEED: 'speed',
  ENDURANCE: 'endurance',
} as const;

export type FightStat = typeof FightStat[keyof typeof FightStat];

export interface SkillModifier {
  stat: FightStat,
  weaponType?: WeaponType | null,
  value: number,
  percent?: boolean,
}

export interface Skill {
  name: SkillName;
  odds: number;
  type: SkillType;
  toss?: number;
  uses?: number;
}
export type SkillType = 'passive' | 'booster' | 'super' | 'talent';

const skills: Skill[] = [
  {
    name: 'herculeanStrength',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'felineAgility',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'lightningBolt',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'vitality',
    odds: 60,
    type: 'booster',
  },
  {
    name: 'immortality',
    odds: 0.14,
    type: 'booster',
  },
  {
    name: 'weaponsMaster',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'martialArts',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'sixthSense',
    odds: 20,
    type: 'passive',
  },
  {
    name: 'hostility',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'fistsOfFury',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'shield',
    odds: 20,
    type: 'passive',
  },
  {
    name: 'armor',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'toughenedSkin',
    odds: 30,
    type: 'passive',
  },
  {
    name: 'untouchable',
    odds: 1,
    type: 'passive',
  },
  {
    name: 'sabotage',
    odds: 3,
    type: 'passive',
  },
  {
    name: 'shock',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'bodybuilder',
    odds: 5,
    type: 'passive',
  },
  {
    name: 'relentless',
    odds: 1,
    type: 'passive',
  },
  {
    name: 'survival',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'leadSkeleton',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'balletShoes',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'determination',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'firstStrike',
    odds: 8,
    type: 'passive',
  },
  {
    name: 'resistant',
    odds: 3,
    type: 'passive',
  },
  {
    name: 'reconnaissance',
    odds: 1,
    type: 'booster',
  },
  {
    name: 'counterAttack',
    odds: 10,
    type: 'passive',
  },
  {
    name: 'ironHead',
    odds: 4,
    type: 'passive',
  },
  {
    name: 'thief',
    odds: 2.5,
    type: 'super',
    toss: 8,
    uses: 2,
  },
  {
    name: 'fierceBrute',
    odds: 20,
    type: 'super',
    toss: 5,
    uses: 1,
  },
  {
    name: 'tragicPotion',
    odds: 8,
    type: 'super',
    toss: 10,
    uses: 1,
  },
  {
    name: 'net',
    odds: 16,
    type: 'super',
    toss: 10,
    uses: 1,
  },
  {
    name: 'bomb',
    odds: 6,
    type: 'super',
    toss: 2,
    uses: 2,
  },
  {
    name: 'hammer',
    odds: 1,
    type: 'super',
    toss: 2,
    uses: 1,
  },
  {
    name: 'cryOfTheDamned',
    odds: 4,
    type: 'super',
    toss: 8,
    uses: 2,
  },
  {
    name: 'hypnosis',
    odds: 0.5,
    type: 'super',
    toss: 3,
    uses: 1,
  },
  {
    name: 'flashFlood',
    odds: 0.5,
    type: 'super',
    toss: 2,
    uses: 1,
  },
  {
    name: 'tamer',
    odds: 4,
    type: 'super',
    toss: 20,
    uses: 4,
  },
  {
    name: 'regeneration',
    odds: 3,
    type: 'talent',
  },
  {
    name: 'chef',
    odds: 1,
    type: 'talent',
  },
  {
    name: 'spy',
    odds: 3,
    type: 'talent',
  },
  {
    name: 'saboteur',
    odds: 3,
    type: 'talent',
  },
  {
    name: 'backup',
    odds: 5,
    type: 'talent',
  },
  {
    name: 'hideaway',
    odds: 5,
    type: 'talent',
  },
  {
    name: 'monk',
    odds: 5,
    type: 'talent',
  },
];

export const SKILLS_TOTAL_ODDS = skills.reduce((acc, skill) => acc + skill.odds, 0);

export const SkillModifiers: Record<string, SkillModifier[]> = {
  herculeanStrength: [
    { stat: FightStat.STRENGTH, value: 3 },
    { stat: FightStat.STRENGTH, value: 50, percent: true },
  ],
  felineAgility: [
    { stat: FightStat.AGILITY, value: 3 },
    { stat: FightStat.AGILITY, value: 50, percent: true },
  ],
  lightningBolt: [
    { stat: FightStat.SPEED, value: 3 },
    { stat: FightStat.SPEED, value: 50, percent: true },
  ],
  vitality: [
    { stat: FightStat.ENDURANCE, value: 3 },
    { stat: FightStat.ENDURANCE, value: 50, percent: true },
  ],
  immortality: [
    { stat: FightStat.ENDURANCE, value: 250, percent: true },
    { stat: FightStat.STRENGTH, value: -25, percent: true },
    { stat: FightStat.AGILITY, value: -25, percent: true },
    { stat: FightStat.SPEED, value: -25, percent: true },
  ],
  weaponsMaster: [
    { stat: FightStat.DAMAGE, weaponType: WeaponType.SHARP, value: 50, percent: true },
  ],
  martialArts: [
    { stat: FightStat.DAMAGE, weaponType: null, value: 100, percent: true },
  ],
  sixthSense: [
    { stat: FightStat.COUNTER, value: 10, percent: true },
  ],
  hostility: [
    { stat: FightStat.REVERSAL, value: 30, percent: true },
  ],
  fistsOfFury: [
    { stat: FightStat.COMBO, value: 20, percent: true },
  ],
  shield: [
    { stat: FightStat.BLOCK, value: 45, percent: true },
  ],
  armor: [
    { stat: FightStat.ARMOR, value: 5 },
    { stat: FightStat.SPEED, value: -10, percent: true },
  ],
  toughenedSkin: [
    { stat: FightStat.ARMOR, value: 2 },
  ],
  untouchable: [
    { stat: FightStat.EVASION, value: 30, percent: true },
  ],
  sabotage: [],
  shock: [
    { stat: FightStat.DISARM, value: 50, percent: true },
  ],
  bodybuilder: [
    { stat: FightStat.INTERVAL, weaponType: WeaponType.HEAVY, value: -25, percent: true },
  ],
  relentless: [
    { stat: FightStat.ACCURACY, value: 30, percent: true },
  ],
  survival: [],
  leadSkeleton: [],
  balletShoes: [],
  determination: [],
  firstStrike: [
    { stat: FightStat.INITIATIVE, value: 200 },
  ],
  resistant: [],
  reconnaissance: [
    { stat: FightStat.INITIATIVE, value: -200 },
    { stat: FightStat.SPEED, value: 5 },
    { stat: FightStat.SPEED, value: 150, percent: true },
  ],
  counterAttack: [
    { stat: FightStat.COUNTER, value: 10, percent: true },
  ],
  ironHead: [],
  thief: [],
  fierceBrute: [],
  tragicPotion: [],
  net: [],
  bomb: [],
  hammer: [],
  cryOfTheDamned: [],
  hypnosis: [],
  flashFlood: [],
  tamer: [],
  regeneration: [],
  chef: [],
  spy: [],
  saboteur: [],
  backup: [],
  hideaway: [],
  monk: [
    { stat: FightStat.COUNTER, value: 40, percent: true },
    { stat: FightStat.INITIATIVE, value: -200 },
    { stat: FightStat.INTERVAL, value: 100, percent: true },
  ],
};

export default skills;
