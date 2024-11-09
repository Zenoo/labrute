import { Brute, DestinyChoiceType, PetName, SkillName, WeaponName } from '@labrute/prisma';
import randomBetween from '../utils/randomBetween';
import weightedRandom from '../utils/weightedRandom';
import { pets } from './pets';
import { skills } from './skills';
import weapons, { MAX_LIMITED_WEAPONS, limitedWeapons } from './weapons';

const preventSomeBonuses = (
  brute: Pick<Brute, 'level' | 'pets' | 'skills' | 'weapons'>,
  perkType: string,
  perkName: string,
) => {
  let preventPerk = false;

  // Check if the perk should be prevented
  if (perkType === 'pet') {
    switch (perkName) {
      case 'dog1':
        preventPerk = brute.pets.includes('dog1');
        break;
      case 'dog2':
        preventPerk = !brute.pets.includes('dog1') || brute.pets.includes('dog2');
        break;
      case 'dog3':
        preventPerk = !brute.pets.includes('dog1') || !brute.pets.includes('dog2') || brute.pets.includes('dog3');
        break;
      case 'panther':
        // Allow for both panther and bear at a 1/1000 chance
        preventPerk = brute.pets.includes('panther')
          || (randomBetween(1, 1000) > 1 ? brute.pets.includes('bear') : false);
        break;
      case 'bear':
        // Allow for both panther and bear at a 1/1000 chance
        preventPerk = brute.pets.includes('bear')
          || (randomBetween(1, 1000) > 1 ? brute.pets.includes('panther') : false);
        break;
      default:
        break;
    }
  } else if (perkType === 'skill') {
    const selectedSkill = skills.find((skill) => skill.name === perkName);
    const hasSkill = brute.skills.includes(perkName as SkillName);
    if (hasSkill) {
      preventPerk = true;
    } else if (selectedSkill?.type === 'booster') {
      // Decrease booster chances
      const boosters = skills.filter((skill) => skill.type === 'booster');
      const gottenBoosters = brute.skills.filter(
        (skill) => boosters.find((booster) => booster.name === skill),
      );

      switch (gottenBoosters.length) {
        case 0:
          preventPerk = false;
          break;
        case 1:
          // 5% chance of getting a second booster
          preventPerk = randomBetween(1, 100) < 95;
          break;
        case 2:
          // 2% chance of getting a third booster
          preventPerk = randomBetween(1, 100) < 98;
          break;
        case 3:
          // 0.1% chance of getting a fourth booster
          preventPerk = randomBetween(1, 1000) < 999;
          break;
        case 4:
          // 0.1% chance of getting a fifth booster
          preventPerk = randomBetween(1, 1000) < 999;
          break;
        case 5:
          // 0.1% chance of getting a sixth booster
          preventPerk = randomBetween(1, 1000) < 999;
          break;
        default:
          preventPerk = false;
          break;
      }
    } else {
      preventPerk = false;
    }
  } else {
    // Limit some weapons
    const gottenLimitedWeapons = brute.weapons.filter(
      (weapon) => limitedWeapons.includes(weapon),
    );

    if (limitedWeapons.find((w) => w === perkName)
      && gottenLimitedWeapons.length >= MAX_LIMITED_WEAPONS) {
      preventPerk = true;
    } else {
      // Prevent unlocking a weapon if the brute already has it
      preventPerk = brute.weapons.includes(perkName as WeaponName);
    }
  }

  return preventPerk;
};

const getRandomBonus = (
  brute: Pick<Brute, 'level' | 'pets' | 'skills' | 'weapons'>,
  rerollUntilFound = false,
  disabledSkills: SkillName[] = [],
  disabledWeapons: WeaponName[] = [],
  disabledPets: PetName[] = [],
) => {
  const enabledSkills = skills.filter((skill) => !disabledSkills.includes(skill.name));
  const enabledWeapons = weapons.filter((weapon) => !disabledWeapons.includes(weapon.name));
  const enabledPets = pets.filter((pet) => !disabledPets.includes(pet.name));

  const enabledPerksOdds = [
    { name: 'pet', odds: enabledPets.reduce((acc, pet) => acc + pet.odds, 0) },
    { name: 'skill', odds: enabledSkills.reduce((acc, skill) => acc + skill.odds, 0) },
    { name: 'weapon', odds: enabledWeapons.reduce((acc, weapon) => acc + weapon.odds, 0) },
  ];

  let perkName: null | PetName | SkillName | WeaponName = null;
  let perkType = null;

  // Weapon/Skill/Pet ?
  perkType = weightedRandom(enabledPerksOdds).name;

  // Perk name ?
  perkName = perkType === 'pet'
    ? weightedRandom(pets).name
    : perkType === 'skill'
      ? weightedRandom(skills).name
      : weightedRandom(weapons).name;

  // Prevent some perks
  let found = !preventSomeBonuses(brute, perkType, perkName);

  while (rerollUntilFound && !found) {
    // Reroll perk type
    perkType = weightedRandom(enabledPerksOdds).name;

    // Reroll perk name
    perkName = perkType === 'pet'
      ? weightedRandom(pets).name
      : perkType === 'skill'
        ? weightedRandom(skills).name
        : weightedRandom(weapons).name;

    // Prevent some perks
    found = !preventSomeBonuses(brute, perkType, perkName);
  }

  return found ? {
    type: perkType as DestinyChoiceType,
    name: perkName,
  } : null;
};

export default getRandomBonus;
