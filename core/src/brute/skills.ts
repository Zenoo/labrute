import { SkillName } from '@labrute/prisma';
import { WeaponType } from './weapons';

export enum SkillId {
  herculeanStrength,
  felineAgility,
  lightningBolt,
  vitality,
  immortality,
  reconnaissance,
  weaponsMaster,
  martialArts,
  sixthSense,
  hostility,
  fistsOfFury,
  shield,
  armor,
  toughenedSkin,
  untouchable,
  sabotage,
  shock,
  bodybuilder,
  relentless,
  survival,
  leadSkeleton,
  balletShoes,
  determination,
  firstStrike,
  resistant,
  counterAttack,
  ironHead,
  thief,
  fierceBrute,
  tragicPotion,
  net,
  bomb,
  hammer,
  cryOfTheDamned,
  hypnosis,
  flashFlood,
  tamer,
  regeneration,
  chef,
  spy,
  saboteur,
  backup,
  hideaway,
  monk,
  vampirism,
  chaining,
  haste,
  treat,
  repulse,
}

export const SkillByName: Record<SkillName, SkillId> = {
  [SkillName.herculeanStrength]: SkillId.herculeanStrength,
  [SkillName.felineAgility]: SkillId.felineAgility,
  [SkillName.lightningBolt]: SkillId.lightningBolt,
  [SkillName.vitality]: SkillId.vitality,
  [SkillName.immortality]: SkillId.immortality,
  [SkillName.reconnaissance]: SkillId.reconnaissance,
  [SkillName.weaponsMaster]: SkillId.weaponsMaster,
  [SkillName.martialArts]: SkillId.martialArts,
  [SkillName.sixthSense]: SkillId.sixthSense,
  [SkillName.hostility]: SkillId.hostility,
  [SkillName.fistsOfFury]: SkillId.fistsOfFury,
  [SkillName.shield]: SkillId.shield,
  [SkillName.armor]: SkillId.armor,
  [SkillName.toughenedSkin]: SkillId.toughenedSkin,
  [SkillName.untouchable]: SkillId.untouchable,
  [SkillName.sabotage]: SkillId.sabotage,
  [SkillName.shock]: SkillId.shock,
  [SkillName.bodybuilder]: SkillId.bodybuilder,
  [SkillName.relentless]: SkillId.relentless,
  [SkillName.survival]: SkillId.survival,
  [SkillName.leadSkeleton]: SkillId.leadSkeleton,
  [SkillName.balletShoes]: SkillId.balletShoes,
  [SkillName.determination]: SkillId.determination,
  [SkillName.firstStrike]: SkillId.firstStrike,
  [SkillName.resistant]: SkillId.resistant,
  [SkillName.counterAttack]: SkillId.counterAttack,
  [SkillName.ironHead]: SkillId.ironHead,
  [SkillName.thief]: SkillId.thief,
  [SkillName.fierceBrute]: SkillId.fierceBrute,
  [SkillName.tragicPotion]: SkillId.tragicPotion,
  [SkillName.net]: SkillId.net,
  [SkillName.bomb]: SkillId.bomb,
  [SkillName.hammer]: SkillId.hammer,
  [SkillName.cryOfTheDamned]: SkillId.cryOfTheDamned,
  [SkillName.hypnosis]: SkillId.hypnosis,
  [SkillName.flashFlood]: SkillId.flashFlood,
  [SkillName.tamer]: SkillId.tamer,
  [SkillName.regeneration]: SkillId.regeneration,
  [SkillName.chef]: SkillId.chef,
  [SkillName.spy]: SkillId.spy,
  [SkillName.saboteur]: SkillId.saboteur,
  [SkillName.backup]: SkillId.backup,
  [SkillName.hideaway]: SkillId.hideaway,
  [SkillName.monk]: SkillId.monk,
  [SkillName.vampirism]: SkillId.vampirism,
  [SkillName.chaining]: SkillId.chaining,
  [SkillName.haste]: SkillId.haste,
  [SkillName.treat]: SkillId.treat,
  [SkillName.repulse]: SkillId.repulse,
};

export const SkillById: Record<SkillId, SkillName> = {
  [SkillId.herculeanStrength]: SkillName.herculeanStrength,
  [SkillId.felineAgility]: SkillName.felineAgility,
  [SkillId.lightningBolt]: SkillName.lightningBolt,
  [SkillId.vitality]: SkillName.vitality,
  [SkillId.immortality]: SkillName.immortality,
  [SkillId.reconnaissance]: SkillName.reconnaissance,
  [SkillId.weaponsMaster]: SkillName.weaponsMaster,
  [SkillId.martialArts]: SkillName.martialArts,
  [SkillId.sixthSense]: SkillName.sixthSense,
  [SkillId.hostility]: SkillName.hostility,
  [SkillId.fistsOfFury]: SkillName.fistsOfFury,
  [SkillId.shield]: SkillName.shield,
  [SkillId.armor]: SkillName.armor,
  [SkillId.toughenedSkin]: SkillName.toughenedSkin,
  [SkillId.untouchable]: SkillName.untouchable,
  [SkillId.sabotage]: SkillName.sabotage,
  [SkillId.shock]: SkillName.shock,
  [SkillId.bodybuilder]: SkillName.bodybuilder,
  [SkillId.relentless]: SkillName.relentless,
  [SkillId.survival]: SkillName.survival,
  [SkillId.leadSkeleton]: SkillName.leadSkeleton,
  [SkillId.balletShoes]: SkillName.balletShoes,
  [SkillId.determination]: SkillName.determination,
  [SkillId.firstStrike]: SkillName.firstStrike,
  [SkillId.resistant]: SkillName.resistant,
  [SkillId.counterAttack]: SkillName.counterAttack,
  [SkillId.ironHead]: SkillName.ironHead,
  [SkillId.thief]: SkillName.thief,
  [SkillId.fierceBrute]: SkillName.fierceBrute,
  [SkillId.tragicPotion]: SkillName.tragicPotion,
  [SkillId.net]: SkillName.net,
  [SkillId.bomb]: SkillName.bomb,
  [SkillId.hammer]: SkillName.hammer,
  [SkillId.cryOfTheDamned]: SkillName.cryOfTheDamned,
  [SkillId.hypnosis]: SkillName.hypnosis,
  [SkillId.flashFlood]: SkillName.flashFlood,
  [SkillId.tamer]: SkillName.tamer,
  [SkillId.regeneration]: SkillName.regeneration,
  [SkillId.chef]: SkillName.chef,
  [SkillId.spy]: SkillName.spy,
  [SkillId.saboteur]: SkillName.saboteur,
  [SkillId.backup]: SkillName.backup,
  [SkillId.hideaway]: SkillName.hideaway,
  [SkillId.monk]: SkillName.monk,
  [SkillId.vampirism]: SkillName.vampirism,
  [SkillId.chaining]: SkillName.chaining,
  [SkillId.haste]: SkillName.haste,
  [SkillId.treat]: SkillName.treat,
  [SkillId.repulse]: SkillName.repulse,
};

export const FightStat = {
  REVERSAL: 'reversal',
  COUNTER: 'counter',
  EVASION: 'evasion',
  DEXTERITY: 'dexterity',
  BLOCK: 'block',
  ACCURACY: 'accuracy',
  DISARM: 'disarm',
  COMBO: 'combo',
  DEFLECT: 'deflect',
  ARMOR: 'armor',
  DAMAGE: 'damage',
  HIT_SPEED: 'hitSpeed',
  INITIATIVE: 'initiative',
  STRENGTH: 'strength',
  AGILITY: 'agility',
  SPEED: 'speed',
  ENDURANCE: 'endurance',
} as const;

export type FightStat = typeof FightStat[keyof typeof FightStat];

export interface Skill {
  name: SkillName;
  odds: number;
  type: SkillType;
  toss?: number;
  uses?: number;
}
export type SkillType = 'passive' | 'booster' | 'super' | 'talent';

export const skills: Skill[] = [
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
    odds: 10,
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
    odds: 4,
    type: 'passive',
  },
  {
    name: 'bodybuilder',
    odds: 5,
    type: 'passive',
  },
  {
    name: 'relentless',
    odds: 4,
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
    uses: 3,
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
  {
    name: 'vampirism',
    odds: 10,
    type: 'super',
    uses: 1,
    toss: 5,
  },
  {
    name: 'chaining',
    odds: 5,
    type: 'passive',
  },
  {
    name: 'haste',
    odds: 5,
    type: 'super',
    uses: 1,
    toss: 3,
  },
  {
    name: 'treat',
    odds: 20,
    type: 'super',
    uses: 4,
    toss: 5,
  },
  {
    name: 'repulse',
    odds: 10,
    type: 'passive',
  },
];

export const SKILLS_TOTAL_ODDS = skills.reduce((acc, skill) => acc + skill.odds, 0);

export interface SkillModifier {
  flat?: number;
  percent?: number;
  weaponType?: WeaponType | null;
  details?: string;
  opponent?: boolean;
}

export const SkillModifiers: Record<
  SkillName,
  Partial<Record<FightStat, SkillModifier>>
> = {
  [SkillName.herculeanStrength]: {
    [FightStat.STRENGTH]: { flat: 3, percent: 0.5 },
  },
  [SkillName.felineAgility]: {
    [FightStat.AGILITY]: { flat: 3, percent: 0.5 },
  },
  [SkillName.lightningBolt]: {
    [FightStat.SPEED]: { flat: 3, percent: 0.5 },
  },
  [SkillName.vitality]: {
    [FightStat.ENDURANCE]: { flat: 3, percent: 0.5 },
  },
  [SkillName.immortality]: {
    [FightStat.ENDURANCE]: { percent: 2.5 },
    [FightStat.STRENGTH]: { percent: -0.25 },
    [FightStat.AGILITY]: { percent: -0.25 },
    [FightStat.SPEED]: { percent: -0.25 },
  },
  [SkillName.weaponsMaster]: {
    [FightStat.DAMAGE]: { percent: 0.5, weaponType: WeaponType.SHARP },
  },
  [SkillName.martialArts]: {
    [FightStat.DAMAGE]: { percent: 1, weaponType: null },
  },
  [SkillName.sixthSense]: {
    [FightStat.COUNTER]: { percent: 0.1 },
  },
  [SkillName.hostility]: {
    [FightStat.REVERSAL]: { percent: 0.3 },
  },
  [SkillName.fistsOfFury]: {
    [FightStat.COMBO]: { percent: 0.2 },
  },
  [SkillName.shield]: {
    [FightStat.BLOCK]: { percent: 0.45 },
    [FightStat.DAMAGE]: { percent: -0.25 },
  },
  [SkillName.armor]: {
    [FightStat.ARMOR]: { percent: 0.25 },
    [FightStat.SPEED]: { percent: -0.1 },
  },
  [SkillName.toughenedSkin]: {
    [FightStat.ARMOR]: { percent: 0.1 },
  },
  [SkillName.untouchable]: {
    [FightStat.EVASION]: { percent: 0.3 },
  },
  [SkillName.sabotage]: {},
  [SkillName.shock]: {
    [FightStat.DISARM]: { percent: 0.5 },
  },
  [SkillName.bodybuilder]: {
    [FightStat.HIT_SPEED]: { percent: 0.25, weaponType: WeaponType.HEAVY },
    [FightStat.DEXTERITY]: { percent: 0.1, weaponType: WeaponType.HEAVY },
  },
  [SkillName.relentless]: {
    [FightStat.ACCURACY]: { percent: 0.3 },
  },
  [SkillName.survival]: {},
  [SkillName.leadSkeleton]: {
    [FightStat.DAMAGE]: { percent: -0.3, weaponType: WeaponType.BLUNT, opponent: true },
  },
  [SkillName.balletShoes]: {
    [FightStat.EVASION]: { percent: 0.1 },
  },
  [SkillName.determination]: {},
  [SkillName.firstStrike]: {
    [FightStat.INITIATIVE]: { flat: 200 },
  },
  [SkillName.resistant]: {},
  [SkillName.reconnaissance]: {
    [FightStat.INITIATIVE]: { flat: -200 },
    [FightStat.SPEED]: { flat: 5, percent: 1.5 },
  },
  [SkillName.counterAttack]: {
    [FightStat.BLOCK]: { percent: 0.1 },
    [FightStat.REVERSAL]: { percent: 0.9, details: 'afterBlock' },
  },
  [SkillName.ironHead]: {},
  [SkillName.thief]: {},
  [SkillName.fierceBrute]: {},
  [SkillName.tragicPotion]: {},
  [SkillName.net]: {},
  [SkillName.bomb]: {},
  [SkillName.hammer]: {},
  [SkillName.cryOfTheDamned]: {},
  [SkillName.hypnosis]: {},
  [SkillName.flashFlood]: {},
  [SkillName.tamer]: {},
  [SkillName.regeneration]: {},
  [SkillName.chef]: {},
  [SkillName.spy]: {},
  [SkillName.saboteur]: {},
  [SkillName.backup]: {},
  [SkillName.hideaway]: {
    [FightStat.BLOCK]: { percent: 0.25, details: 'againstThrows' },
  },
  [SkillName.monk]: {
    [FightStat.COUNTER]: { percent: 0.4 },
    [FightStat.INITIATIVE]: { flat: -200 },
    [FightStat.HIT_SPEED]: { percent: -1 },
  },
  [SkillName.vampirism]: {},
  [SkillName.chaining]: {},
  [SkillName.haste]: {},
  [SkillName.treat]: {},
  [SkillName.repulse]: {
    [FightStat.DEFLECT]: { percent: 0.3 },
  },
};

export const SkillDamageModifiers = Object.entries(SkillModifiers)
  .filter(([_, modifiers]) => modifiers[FightStat.DAMAGE])
  .map(([skill, modifiers]) => ({
    skill: skill as SkillName,
    ...modifiers[FightStat.DAMAGE],
  }));
