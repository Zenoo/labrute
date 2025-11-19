import {
  applySkillModifiers, getBruteToSave, getCalculatedBrute, getFightsLeft, getHP, LevelUpChoice,
  pets,
} from '@labrute/core';
import {
  Brute, BruteStat, DestinyChoice, PetName, SkillName, WeaponName,
} from '@labrute/prisma';

type BruteData = Pick<Brute, 'id' | 'level' | 'skills' | 'enduranceStat' | 'strengthStat'
  | 'agilityStat' | 'speedStat' | 'enduranceModifier' | 'strengthModifier'
  | 'agilityModifier' | 'speedModifier' | 'strengthValue' | 'agilityValue'
  | 'enduranceValue' | 'speedValue' | 'xp' | 'pets' | 'weapons' | 'hp' | 'fightsLeft' | 'lastFight' | 'eventId'>;

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

export const updateBruteData = (
  brute: BruteData,
  destinyChoice: DestinyChoice | LevelUpChoice,
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
    const skillName = destinyChoice.skill;

    if (!skillName) {
      throw new Error('No skill provided');
    }

    const calculatedBrute = getCalculatedBrute(updatedBrute, {});

    // Handle +2 fights for `regeneration`
    if (skillName === SkillName.regeneration && !brute.eventId) {
      updatedBrute.fightsLeft = getFightsLeft(calculatedBrute) + 2;
    }

    calculatedBrute.skills[skillName] = calculatedBrute.skills[skillName]
      ? calculatedBrute.skills[skillName] + 1
      : 1;

    // STATS MODIFIERS
    applySkillModifiers(calculatedBrute, skillName, calculatedBrute.skills[skillName]);

    updatedBrute = getBruteToSave(calculatedBrute);
  } else if (destinyChoice.type === 'weapon') {
    // New weapon
    updatedBrute.weapons.push(destinyChoice.weapon as WeaponName);
  } else if (destinyChoice.type === 'pet') {
    // New pet
    const pet = destinyChoice.pet && pets[destinyChoice.pet];
    if (!pet) {
      throw new Error('Pet not found');
    }

    updatedBrute.pets.push(destinyChoice.pet as PetName);

    // Take into account the endurance malus from the pet
    if (updatedBrute.pets.filter((p) => p === destinyChoice.pet).length === 1) {
      // Only apply the malus if it's the first time we get this pet
      updatedBrute.enduranceStat -= pet.enduranceMalus;
    }
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
