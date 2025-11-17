import { BossName, PetName } from '@labrute/prisma';
import { pets } from './pets';

export interface Boss {
  name: BossName;
  base: PetName;
  scale: number;
  initiative: number;
  strength: number;
  agility: number;
  speed: number;
  hp: number;
  counter: number;
  combo: number;
  block: number;
  evasion: number;
  accuracy: number;
  disarm: number;
  damage: number;
  reach: number;
  count: number;
  reward: number;
  odds: number;
}

const bear = pets[PetName.bear];
const panther = pets[PetName.panther];
const dog1 = pets[PetName.dog1];

export const bosses: Boss[] = [
  {
    name: BossName.GoldClaw,
    base: PetName.bear,
    scale: 2,
    initiative: -0.5,
    strength: bear.strength[0] * 10,
    agility: bear.agility[0],
    speed: bear.speed[0],
    hp: 100000,
    counter: bear.counter[0],
    combo: bear.combo[0],
    block: bear.block[0],
    evasion: bear.evasion[0],
    accuracy: 0.75,
    disarm: bear.disarm[0],
    damage: bear.damage[0],
    reach: 3,
    count: 1,
    reward: 1,
    odds: 10,
  },
  {
    name: BossName.EmberFang,
    base: PetName.panther,
    scale: 3,
    initiative: -0.5,
    strength: panther.strength[0] * 2,
    agility: panther.agility[0],
    speed: panther.speed[0] * 10,
    hp: 50000,
    counter: panther.counter[0],
    combo: panther.combo[0],
    block: panther.block[0],
    evasion: panther.evasion[0],
    accuracy: 0.75,
    disarm: panther.disarm[0],
    damage: panther.damage[0],
    reach: 3,
    count: 1,
    reward: 1,
    odds: 10,
  },
  {
    name: BossName.Cerberus,
    base: PetName.dog1,
    scale: 2.15,
    initiative: 1.3,
    strength: dog1.strength[0] * 7.5,
    agility: dog1.agility[0],
    speed: dog1.speed[0] * 1.2,
    hp: 10000,
    counter: dog1.counter[0],
    combo: 0,
    block: dog1.block[0],
    evasion: -0.2,
    accuracy: 0.75,
    disarm: dog1.disarm[0],
    damage: dog1.damage[0],
    reach: 1,
    count: 3,
    reward: 0.2,
    odds: 1,
  },
];
