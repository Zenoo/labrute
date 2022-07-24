import { SkillName } from '@backend/types';

export interface Skill {
  name: SkillName;
  icon: string;
  odds: number;
}
const skills: Skill[] = [
  { name: 'herculeanStrength', icon: '1', odds: 67601 / 483369 },
  { name: 'felinAgility', icon: '2', odds: 67298 / 483369 },
  { name: 'lightningBolt', icon: '3', odds: 67599 / 483369 },
  { name: 'vitality', icon: '4', odds: 66979 / 483369 },
  { name: 'immortality', icon: '5', odds: 195 / 483369 },
  { name: 'weaponsMaster', icon: '6', odds: 11302 / 483369 },
  { name: 'martialArts', icon: '7', odds: 11261 / 483369 },
  { name: 'sixthSense', icon: '8', odds: 22455 / 483369 },
  { name: 'hostility', icon: '9', odds: 4528 / 483369 },
  { name: 'fistsOfFury', icon: '10', odds: 11196 / 483369 },
  { name: 'shield', icon: '11', odds: 22431 / 483369 },
  { name: 'armor', icon: '12', odds: 4480 / 483369 },
  { name: 'toughenedSkin', icon: '13', odds: 33442 / 483369 },
  { name: 'untouchable', icon: '14', odds: 1104 / 483369 },
  { name: 'sabotage', icon: '15', odds: 3444 / 483369 },
  { name: 'shock', icon: '16', odds: 11245 / 483369 },
  { name: 'bodybuilder', icon: '17', odds: 5644 / 483369 },
  { name: 'relentless', icon: '18', odds: 1110 / 483369 },
  { name: 'survival', icon: '19', odds: 3388 / 483369 },
  { name: 'thief', icon: '28', odds: 3746 / 483369 },
  { name: 'fierceBrute', icon: '29', odds: 22358 / 483369 },
  { name: 'tragicPotion', icon: '30', odds: 8978 / 483369 },
  { name: 'net', icon: '31', odds: 17924 / 483369 },
  { name: 'bomb', icon: '32', odds: 6580 / 483369 },
  { name: 'hammer', icon: '33', odds: 1134 / 483369 },
  { name: 'cryOfTheDamned', icon: '34', odds: 4474 / 483369 },
  { name: 'hypnosis', icon: '35', odds: 722 / 483369 },
  { name: 'flashFlood', icon: '36', odds: 751 / 483369 },
];

export default skills;