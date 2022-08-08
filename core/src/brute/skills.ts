import { SkillName } from '../types.js';

export type SkillType = 'passive' | 'booster' | 'super' | 'talent';

export interface Skill {
  name: SkillName;
  icon: string;
  odds: number;
  type: SkillType;
}
const skills: Skill[] = [
  {
    name: 'herculeanStrength',
    icon: '1',
    odds: 67601,
    type: 'booster',
  },
  {
    name: 'felineAgility',
    icon: '2',
    odds: 67298,
    type: 'booster',
  },
  {
    name: 'lightningBolt',
    icon: '3',
    odds: 67599,
    type: 'booster',
  },
  {
    name: 'vitality',
    icon: '4',
    odds: 66979,
    type: 'booster',
  },
  {
    name: 'immortality',
    icon: '5',
    odds: 195,
    type: 'booster',
  },
  {
    name: 'weaponsMaster',
    icon: '6',
    odds: 11302,
    type: 'passive',
  },
  {
    name: 'martialArts',
    icon: '7',
    odds: 11261,
    type: 'passive',
  },
  {
    name: 'sixthSense',
    icon: '8',
    odds: 22455,
    type: 'passive',
  },
  {
    name: 'hostility',
    icon: '9',
    odds: 4528,
    type: 'passive',
  },
  {
    name: 'fistsOfFury',
    icon: '10',
    odds: 11196,
    type: 'passive',
  },
  {
    name: 'shield',
    icon: '11',
    odds: 22431,
    type: 'passive',
  },
  {
    name: 'armor',
    icon: '12',
    odds: 4480,
    type: 'passive',
  },
  {
    name: 'toughenedSkin',
    icon: '13',
    odds: 33442,
    type: 'passive',
  },
  {
    name: 'untouchable',
    icon: '14',
    odds: 1104,
    type: 'passive',
  },
  {
    name: 'sabotage',
    icon: '15',
    odds: 3444,
    type: 'passive',
  },
  {
    name: 'shock',
    icon: '16',
    odds: 11245,
    type: 'passive',
  },
  {
    name: 'bodybuilder',
    icon: '17',
    odds: 5644,
    type: 'passive',
  },
  {
    name: 'relentless',
    icon: '18',
    odds: 1110,
    type: 'passive',
  },
  {
    name: 'survival',
    icon: '19',
    odds: 3388,
    type: 'passive',
  },
  {
    name: 'leadSkeleton',
    icon: '20',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'balletShoes',
    icon: '21',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'determination',
    icon: '22',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'firstStrike',
    icon: '23',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'resistant',
    icon: '24',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'reconnaissance',
    icon: '25',
    odds: 10000,
    type: 'booster',
  },
  {
    name: 'counterAttack',
    icon: '26',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'ironHead',
    icon: '27',
    odds: 10000,
    type: 'passive',
  },
  {
    name: 'thief',
    icon: '28',
    odds: 3746,
    type: 'super',
  },
  {
    name: 'fierceBrute',
    icon: '29',
    odds: 22358,
    type: 'super',
  },
  {
    name: 'tragicPotion',
    icon: '30',
    odds: 8978,
    type: 'super',
  },
  {
    name: 'net',
    icon: '31',
    odds: 17924,
    type: 'super',
  },
  {
    name: 'bomb',
    icon: '32',
    odds: 6580,
    type: 'super',
  },
  {
    name: 'hammer',
    icon: '33',
    odds: 1134,
    type: 'super',
  },
  {
    name: 'cryOfTheDamned',
    icon: '34',
    odds: 4474,
    type: 'super',
  },
  {
    name: 'hypnosis',
    icon: '35',
    odds: 722,
    type: 'super',
  },
  {
    name: 'flashFlood',
    icon: '36',
    odds: 751,
    type: 'super',
  },
  {
    name: 'tamer',
    icon: '37',
    odds: 751,
    type: 'super',
  },
  {
    name: 'regeneration',
    icon: '38',
    odds: 10000,
    type: 'talent',
  },
  {
    name: 'chef',
    icon: '39',
    odds: 10000,
    type: 'talent',
  },
  {
    name: 'spy',
    icon: '40',
    odds: 10000,
    type: 'talent',
  },
  {
    name: 'saboteur',
    icon: '41',
    odds: 10000,
    type: 'talent',
  },
  {
    name: 'backup',
    icon: '42',
    odds: 10000,
    type: 'talent',
  },
  {
    name: 'hideaway',
    icon: '66',
    odds: 10000,
    type: 'talent',
  },
  {
    name: 'monk',
    icon: '67',
    odds: 10000,
    type: 'talent',
  },
];

export const SKILLS_TOTAL_ODDS = skills.reduce((acc, skill) => acc + skill.odds, 0);

export default skills;
