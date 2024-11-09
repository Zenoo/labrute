import { BossName, PetName } from '@labrute/prisma';
import { pets, Pet } from './pets';

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

const bear = pets.find((p) => p.name === PetName.bear) as Pet;
const panther = pets.find((p) => p.name === PetName.panther) as Pet;
const dog1 = pets.find((p) => p.name === PetName.dog1) as Pet;

const bosses: Boss[] = [
  {
    name: BossName.GoldClaw,
    base: PetName.bear,
    scale: 2,
    initiative: -0.5,
    strength: bear.strength * 10,
    agility: bear.agility,
    speed: bear.speed,
    hp: 100000,
    counter: bear.counter,
    combo: bear.combo,
    block: bear.block,
    evasion: bear.evasion,
    accuracy: 0.75,
    disarm: bear.disarm,
    damage: bear.damage,
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
    strength: panther.strength * 2,
    agility: panther.agility,
    speed: panther.speed * 10,
    hp: 50000,
    counter: panther.counter,
    combo: panther.combo,
    block: panther.block,
    evasion: panther.evasion,
    accuracy: 0.75,
    disarm: panther.disarm,
    damage: panther.damage,
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
    strength: dog1.strength * 7.5,
    agility: dog1.agility,
    speed: dog1.speed * 1.2,
    hp: 10000,
    counter: dog1.counter,
    combo: 0,
    block: dog1.block,
    evasion: -0.2,
    accuracy: 0.75,
    disarm: dog1.disarm,
    damage: dog1.damage,
    reach: 1,
    count: 3,
    reward: 0.2,
    odds: 1,
  },
];

export default bosses;
