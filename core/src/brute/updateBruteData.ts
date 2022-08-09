import {
  Brute, LevelUpChoice, SkillName, WeaponName, Stats,
} from '../types.js';
import applySkillModifiers from './applySkillModifiers.js';
import getStandardHP from './getStandardHP.js';
import getXPNeeded from './getXPNeeded.js';
import pets, { Pet } from './pets.js';

const updateBruteData = (brute: Brute, levelUpChoice: LevelUpChoice) => {
  let updatedBrute: Brute = {
    ...brute,
    data: {
      ...brute.data,
      xp: getXPNeeded(brute.data.level + 2), // TODO: Set to 0 when I implement XP gains
      level: brute.data.level + 1,
    },
  };

  // New skill
  if (levelUpChoice.type === 'skill') {
    updatedBrute.data.skills.push(levelUpChoice.name as SkillName);

    // STATS MODIFIERS
    updatedBrute = applySkillModifiers(updatedBrute, levelUpChoice.name as SkillName);
  } else if (levelUpChoice.type === 'weapon') {
    // New weapon
    updatedBrute.data.weapons.push(levelUpChoice.name as WeaponName);
  } else if (levelUpChoice.type === 'pet') {
    // New pet
    const pet = pets.find((p: Pet) => p.name === levelUpChoice.name);
    if (!pet) {
      throw new Error('Pet not found');
    }

    updatedBrute.data.pets[pet.name] = true;

    // Take into account the endurance malus from the pet
    updatedBrute.data.stats.endurance.stat -= pet.enduranceMalus;
  } else if (typeof levelUpChoice.name === 'string') {
    // +3 stat
    const stat = levelUpChoice.name as Stats;
    updatedBrute.data.stats[stat].stat += levelUpChoice.stats as number;
  } else {
    // +2/+1
    const {
      name: {
        0: stat1,
        1: stat2,
      },
    } = levelUpChoice;

    if (!levelUpChoice.stats) {
      throw new Error('No stats provided');
    }

    updatedBrute.data.stats[stat1].stat += (levelUpChoice.stats as [number, number])[0];
    updatedBrute.data.stats[stat2].stat += (levelUpChoice.stats as [number, number])[1];
  }

  // Final stat values
  updatedBrute.data.stats.endurance.value = Math.floor(
    updatedBrute.data.stats.endurance.stat * updatedBrute.data.stats.endurance.modifier,
  );
  updatedBrute.data.stats.strength.value = Math.floor(
    updatedBrute.data.stats.strength.stat * updatedBrute.data.stats.strength.modifier,
  );
  updatedBrute.data.stats.agility.value = Math.floor(
    updatedBrute.data.stats.agility.stat * updatedBrute.data.stats.agility.modifier,
  );
  updatedBrute.data.stats.speed.value = Math.floor(
    updatedBrute.data.stats.speed.stat * updatedBrute.data.stats.speed.modifier,
  );

  // Final HP
  const standardHP = getStandardHP(brute.data.level);
  // If endurance is negative, use 0 instead to not go under 51 HP
  const hp = standardHP + Math.max(updatedBrute.data.stats.endurance.value, 0) * 6;
  updatedBrute.data.stats.hp = hp;

  return updatedBrute.data;
};

export default updateBruteData;
