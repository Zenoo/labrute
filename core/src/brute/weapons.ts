import { WeaponName } from '../types.js';

export interface Weapon {
  name: WeaponName;
  odds: number;
  types: ('fast' | 'sharp' | 'heavy' | 'long' | 'thrown' | 'blunt')[];
  interval: number;
  reach: number;
}

const weapons: Weapon[] = [
  {
    name: 'axe',
    odds: 3213 / 480838,
    types: ['heavy', 'blunt'],
    interval: 230,
    reach: 10,
  },
  {
    name: 'baton',
    odds: 73373 / 480838,
    types: ['long'],
    interval: 100,
    reach: 30,
  },
  {
    name: 'broadsword',
    odds: 104757 / 480838,
    types: ['sharp'],
    interval: 120,
    reach: 10,
  },
  {
    name: 'bumps',
    odds: 52353 / 480838,
    types: ['heavy', 'blunt'],
    interval: 200,
    reach: 10,
  },
  {
    name: 'fan',
    odds: 2087 / 480838,
    types: ['fast'],
    interval: 28,
    reach: 0,
  },
  {
    name: 'flail',
    odds: 4275 / 480838,
    types: ['heavy', 'blunt'],
    interval: 220,
    reach: 10,
  },
  {
    name: 'fryingPan',
    odds: 604 / 480838,
    types: ['heavy', 'blunt'],
    interval: 120,
    reach: 10,
  },
  {
    name: 'halbard',
    odds: 2200 / 480838,
    types: ['long', 'sharp'],
    interval: 180,
    reach: 40,
  },
  {
    name: 'hatchet',
    odds: 41922 / 480838,
    types: ['heavy'],
    interval: 150,
    reach: 10,
  },
  {
    name: 'keyboard',
    odds: 544 / 480838,
    types: ['fast', 'blunt'],
    interval: 100,
    reach: 10,
  },
  {
    name: 'knife',
    odds: 84097 / 480838,
    types: ['fast', 'sharp'],
    interval: 60,
    reach: 0,
  },
  {
    name: 'lance',
    odds: 41739 / 480838,
    types: ['long'],
    interval: 120,
    reach: 30,
  },
  {
    name: 'leek',
    odds: 613 / 480838,
    types: ['fast', 'blunt'],
    interval: 110,
    reach: 10,
  },
  {
    name: 'mammothBone',
    odds: 20831 / 480838,
    types: ['heavy', 'blunt'],
    interval: 160,
    reach: 10,
  },
  {
    name: 'morningStar',
    odds: 6345 / 480838,
    types: ['heavy', 'blunt'],
    interval: 150,
    reach: 10,
  },
  {
    name: 'mug',
    odds: 551 / 480838,
    types: ['fast'],
    interval: 90,
    reach: 10,
  },
  {
    name: 'noodleBowl',
    odds: 601 / 480838,
    types: ['thrown'],
    interval: 45,
    reach: 0,
  },
  {
    name: 'piopio',
    odds: 562 / 480838,
    types: ['thrown'],
    interval: 32,
    reach: 0,
  },
  {
    name: 'racquet',
    odds: 572 / 480838,
    types: ['fast', 'blunt'],
    interval: 80,
    reach: 10,
  },
  {
    name: 'sai',
    odds: 6645 / 480838,
    types: ['fast'],
    interval: 60,
    reach: 0,
  },
  {
    name: 'scimitar',
    odds: 6277 / 480838,
    types: ['sharp'],
    interval: 80,
    reach: 10,
  },
  {
    name: 'shuriken',
    odds: 8451 / 480838,
    types: ['thrown'],
    interval: 12,
    reach: 0,
  },
  {
    name: 'sword',
    odds: 4125 / 480838,
    types: ['sharp'],
    interval: 180,
    reach: 20,
  },
  {
    name: 'trident',
    odds: 10415 / 480838,
    types: ['long'],
    interval: 140,
    reach: 30,
  },
  {
    name: 'trombone',
    odds: 557 / 480838,
    types: ['heavy', 'blunt'],
    interval: 250,
    reach: 20,
  },
  {
    name: 'whip',
    odds: 3130 / 480838,
    types: ['long'],
    interval: 150,
    reach: 50,
  },
];

export default weapons;
