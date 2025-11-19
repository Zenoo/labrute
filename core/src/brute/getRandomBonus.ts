import { Brute, DestinyChoiceType, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { keys, randomBetween } from '../utils';
import { weightedRandom } from '../utils/weightedRandom';
import { petList, pets } from './pets';
import { skillList, skills } from './skills';
import { MAX_LIMITED_WEAPONS, limitedWeapons, weaponList } from './weapons';
import { getTieredPets, getTieredSkills, getTieredWeapons } from './calculatedBrute';

const preventSomeBonuses = (
  brute: Pick<Brute, 'level' | 'pets' | 'skills' | 'weapons'>,
  perkType: string,
  perkName: string,
) => {
  let preventPerk = false;

  // Check if the perk should be prevented
  if (perkType === 'pet') {
    const brutePets = getTieredPets(brute);
    const dogsUnlocked = (brutePets[PetName.dog1] ?? 0)
      + (brutePets[PetName.dog2] ?? 0)
      + (brutePets[PetName.dog3] ?? 0);
    const dogTier = dogsUnlocked <= 3 ? 1 : dogsUnlocked - 2;
    const higherDogTierLocked = dogsUnlocked < 3 || dogTier >= 3;
    switch (perkName) {
      case 'dog1':
        preventPerk = !!brutePets[PetName.dog1] && higherDogTierLocked;
        break;
      case 'dog2':
        preventPerk = !brutePets[PetName.dog1]
          || !!brutePets[PetName.dog2];
        break;
      case 'dog3':
        preventPerk = !brutePets[PetName.dog1]
          || !brutePets[PetName.dog2]
          || !!brutePets[PetName.dog3];
        break;
      case 'panther':
        // Allow for both panther and bear at a 1/1000 chance
        preventPerk = (brutePets[PetName.panther] ?? 0) >= pets[PetName.panther].hp.length
          || (randomBetween(1, 1000) > 1 ? !!brutePets[PetName.bear] : false);
        break;
      case 'bear':
        // Allow for both panther and bear at a 1/1000 chance
        preventPerk = (brutePets[PetName.bear] ?? 0) >= pets[PetName.bear].hp.length
          || (randomBetween(1, 1000) > 1 ? !!brutePets[PetName.panther] : false);
        break;
      default:
        break;
    }
  } else if (perkType === 'skill') {
    const bruteSkills = getTieredSkills({ ...brute, id: '' }, {});
    const selectedSkill = skills[perkName as SkillName];
    const hasMaxSkill = (bruteSkills[perkName as SkillName] ?? 0) >= 3;
    if (hasMaxSkill) {
      preventPerk = true;
    } else if (selectedSkill?.type === 'booster') {
      // Decrease booster chances
      const boosters = skillList.filter((skill) => skill.type === 'booster');
      const gottenBoosters = keys(bruteSkills).filter(
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
    const bruteWeapons = getTieredWeapons({ ...brute, id: '' }, {});
    const gottenLimitedWeapons = keys(bruteWeapons).filter(
      (weapon) => limitedWeapons.includes(weapon),
    );

    if (limitedWeapons.find((w) => w === perkName)
      && gottenLimitedWeapons.length >= MAX_LIMITED_WEAPONS) {
      preventPerk = true;
    } else {
      // Prevent unlocking a weapon if the brute already has it maxed
      preventPerk = (bruteWeapons[perkName as WeaponName] ?? 0) >= 3;
    }
  }

  return preventPerk;
};

export const getRandomBonus = (
  brute: Pick<Brute, 'level' | 'pets' | 'skills' | 'weapons'>,
  rerollUntilFound = false,
  disabledSkills: SkillName[] = [],
  disabledWeapons: WeaponName[] = [],
  disabledPets: PetName[] = [],
) => {
  const enabledSkills = skillList.filter((skill) => !disabledSkills.includes(skill.name));
  const enabledWeapons = weaponList.filter((weapon) => !disabledWeapons.includes(weapon.name));
  const enabledPets = petList.filter((pet) => !disabledPets.includes(pet.name));

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
    ? weightedRandom(petList).name
    : perkType === 'skill'
      ? weightedRandom(skillList).name
      : weightedRandom(weaponList).name;

  // Prevent some perks
  let found = !preventSomeBonuses(brute, perkType, perkName);

  while (rerollUntilFound && !found) {
    // Reroll perk type
    perkType = weightedRandom(enabledPerksOdds).name;

    // Reroll perk name
    perkName = perkType === 'pet'
      ? weightedRandom(petList).name
      : perkType === 'skill'
        ? weightedRandom(skillList).name
        : weightedRandom(weaponList).name;

    // Prevent some perks
    found = !preventSomeBonuses(brute, perkType, perkName);
  }

  return found ? {
    type: perkType as DestinyChoiceType,
    name: perkName,
  } : null;
};
