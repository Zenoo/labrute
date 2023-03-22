import { SkillName } from '@labrute/prisma';

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

export default skills;
