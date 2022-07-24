import { WeaponName } from '@backend/types';

export interface Weapon {
  name: WeaponName;
  odds: number;
  types: ('fast' | 'sharp' | 'heavy' | 'long' | 'thrown')[];
}

const weapons: Weapon[] = [
  // FAST
  { name: 'fan', odds: 2087 / 480838, types: ['fast'] },
  { name: 'keyboard', odds: 544 / 480838, types: ['fast'] },
  { name: 'knife', odds: 84097 / 480838, types: ['fast', 'sharp'] },
  { name: 'leek', odds: 613 / 480838, types: ['fast'] },
  { name: 'mug', odds: 551 / 480838, types: ['fast'] },
  { name: 'sai', odds: 6645 / 480838, types: ['fast'] },
  { name: 'racquet', odds: 572 / 480838, types: ['fast'] },
  { name: 'axe', odds: 3213 / 480838, types: ['heavy'] },
  { name: 'bumps', odds: 52353 / 480838, types: ['heavy'] },
  { name: 'flail', odds: 4275 / 480838, types: ['heavy'] },
  { name: 'fryingPan', odds: 604 / 480838, types: ['heavy'] },
  { name: 'hatchet', odds: 41922 / 480838, types: ['heavy'] },
  { name: 'mammothBone', odds: 20831 / 480838, types: ['heavy'] },
  { name: 'morningStar', odds: 6345 / 480838, types: ['heavy'] },
  { name: 'trombone', odds: 557 / 480838, types: ['heavy'] },
  { name: 'baton', odds: 73373 / 480838, types: ['long'] },
  { name: 'halbard', odds: 2200 / 480838, types: ['long', 'sharp'] },
  { name: 'lance', odds: 41739 / 480838, types: ['long'] },
  { name: 'trident', odds: 10415 / 480838, types: ['long'] },
  { name: 'whip', odds: 3130 / 480838, types: ['long'] },
  { name: 'noodleBowl', odds: 601 / 480838, types: ['thrown'] },
  { name: 'piopio', odds: 562 / 480838, types: ['thrown'] },
  { name: 'shuriken', odds: 8451 / 480838, types: ['thrown'] },
  { name: 'broadsword', odds: 4125 / 480838, types: ['sharp'] },
  { name: 'scimitar', odds: 6277 / 480838, types: ['sharp'] },
  { name: 'sword', odds: 104757 / 480838, types: ['sharp'] },
];

export default weapons;