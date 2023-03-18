import { DestinyChoiceType, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { BruteRankings, BRUTE_STARTING_POINTS, PERKS_TOTAL_ODDS, PERK_ODDS } from '../constants';
import randomBetween from '../utils/randomBetween';
import weightedRandom from '../utils/weightedRandom';
import applySkillModifiers from './applySkillModifiers';
import getHP from './getHP';
import { default as availablePets, Pet, PETS_TOTAL_ODDS } from './pets';
import { default as availableSkills, SKILLS_TOTAL_ODDS } from './skills';
import { default as availableWeapons, WEAPONS_TOTAL_ODDS } from './weapons';

const createRandomBruteStats = (perkType?: DestinyChoiceType, perkName?: string | null) => {
  let brute = {
    level: 1,
    xp: 0,
    hp: 0,
    enduranceStat: 0,
    enduranceModifier: 1,
    enduranceValue: 0,
    strengthStat: 0,
    strengthModifier: 1,
    strengthValue: 0,
    agilityStat: 0,
    agilityModifier: 1,
    agilityValue: 0,
    speedStat: 0,
    speedModifier: 1,
    speedValue: 0,
    skills: [] as SkillName[],
    pets: [] as PetName[],
    ranking: BruteRankings[0],
    weapons: [] as WeaponName[],
  };

  // Starting budget
  let availablePoints = BRUTE_STARTING_POINTS;

  let pet: Pet | null = null;
  let perk;

  // Predefined perk
  if (perkType && perkName) {
    perk = { name: perkName, odds: 1 };

    if (perkType === DestinyChoiceType.pet) {
      brute.pets = [perkName as PetName];
      pet = availablePets.find((p) => p.name === perkName) || null;
    } else if (perkType === DestinyChoiceType.skill) {
      brute.skills = [perkName as SkillName];
    } else {
      brute.weapons = [perkName as WeaponName];
    }
  } else {
    // Random perk type
    perk = weightedRandom(PERK_ODDS, PERKS_TOTAL_ODDS);

    // Pet
    if (perk.name === 'pet') {
      pet = weightedRandom(availablePets, PETS_TOTAL_ODDS);
      brute.pets = [pet.name];
    }
    // Skill
    brute.skills = perk.name === 'skill' ? [weightedRandom(availableSkills, SKILLS_TOTAL_ODDS).name] : [];
    // Weapon
    brute.weapons = perk.name === 'weapon' ? [weightedRandom(availableWeapons, WEAPONS_TOTAL_ODDS).name] : [];
  }

  // Stats boosters
  if (perk.name === 'skill') {
    brute = applySkillModifiers(brute, brute.skills[0]);
  }

  // Enrudance (2 to 5)
  const endurancePoints = randomBetween(2, 5);
  brute.enduranceStat += endurancePoints;
  availablePoints -= endurancePoints;

  // Take into account the endurance malus from the pet
  if (pet) {
    // Can go into negatives
    brute.enduranceStat -= pet.enduranceMalus;
  }

  // Strength (2 to 5)
  const strengthPoints = Math.min(randomBetween(2, 5), availablePoints - 2 * 2);
  brute.strengthStat += strengthPoints;
  availablePoints -= strengthPoints;

  // Agility (2 to 5)
  const agilityPoints = Math.min(randomBetween(2, 5), availablePoints - 2 * 1);
  brute.agilityStat += agilityPoints;
  availablePoints -= agilityPoints;

  // Speed (2 to 5)
  brute.speedStat += availablePoints;

  // Final stat values
  brute.enduranceValue = Math.floor(
    brute.enduranceStat * brute.enduranceModifier,
  );
  brute.strengthValue = Math.floor(
    brute.strengthStat * brute.strengthModifier,
  );
  brute.agilityValue = Math.floor(
    brute.agilityStat * brute.agilityModifier,
  );
  brute.speedValue = Math.floor(
    brute.speedStat * brute.speedModifier,
  );

  // Final HP
  brute.hp = getHP(1, brute.enduranceValue);

  return brute;
};

export default createRandomBruteStats;
