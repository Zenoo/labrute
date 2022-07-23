export type Gender = 'male' | 'female';

export interface BodyParts {
  longHair: number,
  lowerRightArm: number,
  rightHand: number,
  upperRightArm: number,
  rightShoulder: number,
  rightFoot: number,
  lowerRightLeg: number,
  upperRightLeg: number,
  leftFoot: number,
  lowerLeftLeg: number,
  pelvis: number,
  upperLeftLeg: number,
  tummy: number,
  torso: number,
  head: number,
  leftHand: number,
  upperLeftArm: number,
  lowerLeftArm: number,
  leftShoulder: number,
}

export interface BodyColors {
  skin: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  hair: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  primary: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  secondary: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  accent: {
    color: `#${string}`;
    shade: `#${string}`;
  };
}

export interface Pets {
  dog: 0 | 1 | 2 | 3;
  panther: 0 | 1;
  bear: 0 | 1;
}

export type Weapon = 'fan' | 'keyboard' | 'knife'
  | 'leek' | 'mug' | 'sai'
  | 'racquet' | 'axe' | 'bumps'
  | 'flail' | 'fryingPan' | 'hatchet'
  | 'mammothBone' | 'morningStar'
  | 'trombone' | 'baton' | 'halbard'
  | 'lance' | 'trident' | 'whip'
  | 'noodleBowl' | 'piopio' | 'shuriken'
  | 'broadsword' | 'scimitar' | 'sword';

export type Skill = 'herculeanStrength' | 'felinAgility' | 'lightningBolt'
  | 'vitality' | 'immortality' | 'weaponsMaster'
  | 'martialArts' | 'sixthSense' | 'hostility'
  | 'fistsOfFury' | 'shield' | 'armor'
  | 'toughenedSkin' | 'untouchable' | 'sabotage'
  | 'shock' | 'bodybuilder' | 'relentless'
  | 'survival' | 'thief' | 'fierceBrute'
  | 'tragicPotion' | 'net' | 'bomb'
  | 'hammer' | 'cryOfTheDamned' | 'hypnosis' | 'flashFlood';

export interface Brute {
  id: number;
  rank: number;
  data: {
    user: string;
    name: string;
    level: number;
    xp: number;
    stats: {
      hp: number;
      endurance: number;
      strength: number;
      agility: number;
      speed: number;
    }
    ranking: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    gender: Gender;
    body: BodyParts;
    colors: BodyColors;
    weapons: Weapon[];
    skills: Skill[];
    pets: Pets;
    master: {
      id: number;
      name: string;
    }
    victories: number;
    pupils: number;
  };
}

export interface User {
  id: string;
  name: string;
  token: string;
  brutes?: Brute[];
}

export interface Log {
  id: number;
  type: 'win' | 'lose' | 'child' | 'childup'
  | 'up' | 'lvl' | 'survive';
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  brute?: string;
  fight?: number;
  xp?: number;
}