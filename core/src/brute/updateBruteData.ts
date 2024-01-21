import { Brute, BruteStat, DestinyChoice, PetName, SkillName, WeaponName } from '@labrute/prisma';
import applySkillModifiers from './applySkillModifiers';
import getHP from './getHP';
import { LevelUpChoice } from './getLevelUpChoices';
import { pets, Pet } from './pets';

type BruteData = Pick<Brute, 'level' | 'skills' | 'enduranceStat' | 'strengthStat'
| 'agilityStat' | 'speedStat' | 'enduranceModifier' | 'strengthModifier'
| 'agilityModifier' | 'speedModifier' | 'strengthValue' | 'agilityValue'
| 'enduranceValue' | 'speedValue' | 'xp' | 'pets' | 'weapons' | 'hp'>;

const updateStat = (brute: BruteData, stat: BruteStat, value: number) => {
  switch (stat) {
    case 'endurance':
      return {
        ...brute,
        enduranceStat: brute.enduranceStat + value,
      };
    case 'strength':
      return {
        ...brute,
        strengthStat: brute.strengthStat + value,
      };
    case 'agility':
      return {
        ...brute,
        agilityStat: brute.agilityStat + value,
      };
    case 'speed':
      return {
        ...brute,
        speedStat: brute.speedStat + value,
      };
    default:
      throw new Error('Invalid stat');
  }
};

const updateBruteData = (
  brute: BruteData,
  destinyChoice: DestinyChoice | LevelUpChoice
) => {
  let updatedBrute = {
    ...brute,
    pets: [...brute.pets],
    skills: [...brute.skills],
    weapons: [...brute.weapons],
    xp: 0,
    level: brute.level + 1,
  };

  // New skill
  if (destinyChoice.type === 'skill') {
    updatedBrute.skills.push(destinyChoice.skill as SkillName);

    // STATS MODIFIERS
    updatedBrute = applySkillModifiers(updatedBrute, destinyChoice.skill as SkillName);
  } else if (destinyChoice.type === 'weapon') {
    // New weapon
    updatedBrute.weapons.push(destinyChoice.weapon as WeaponName);
  } else if (destinyChoice.type === 'pet') {
    // New pet
    const pet = pets.find((p: Pet) => p.name === destinyChoice.pet);
    if (!pet) {
      throw new Error('Pet not found');
    }

    updatedBrute.pets.push(destinyChoice.pet as PetName);

    // Take into account the endurance malus from the pet
    updatedBrute.enduranceStat -= pet.enduranceMalus;
  } else if (destinyChoice.stat1 && !destinyChoice.stat2) {
    // +X stat
    const stat = destinyChoice.stat1;
    updatedBrute = updateStat(updatedBrute, stat, destinyChoice.stat1Value as number);
  } else {
    // +X/+X

    if (!destinyChoice.stat1 || !destinyChoice.stat2
      || !destinyChoice.stat1Value || !destinyChoice.stat2Value) {
      throw new Error('No stats provided');
    }

    updatedBrute = updateStat(
      updatedBrute,
      destinyChoice.stat1,
      destinyChoice.stat1Value,
    );
    updatedBrute = updateStat(
      updatedBrute,
      destinyChoice.stat2,
      destinyChoice.stat2Value,
    );
  }

  // Final stat values
  updatedBrute.enduranceValue = Math.floor(
    updatedBrute.enduranceStat * updatedBrute.enduranceModifier,
  );
  updatedBrute.strengthValue = Math.floor(
    updatedBrute.strengthStat * updatedBrute.strengthModifier,
  );
  updatedBrute.agilityValue = Math.floor(
    updatedBrute.agilityStat * updatedBrute.agilityModifier,
  );
  updatedBrute.speedValue = Math.floor(
    updatedBrute.speedStat * updatedBrute.speedModifier,
  );

  // Final HP
  updatedBrute.hp = getHP(updatedBrute.level, updatedBrute.enduranceValue);

  return updatedBrute;
};

export default updateBruteData;
