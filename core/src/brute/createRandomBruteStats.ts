import { Brute, BruteStat, DestinyChoiceType, PetName, PrismaClient, SkillName, WeaponName } from '@labrute/prisma';
import { BruteRankings, BRUTE_STARTING_POINTS, PERKS_TOTAL_ODDS, PERK_ODDS } from '../constants';
import randomBetween from '../utils/randomBetween';
import weightedRandom from '../utils/weightedRandom';
import applySkillModifiers from './applySkillModifiers';
import getHP from './getHP';
import { default as availablePets, PETS_TOTAL_ODDS } from './pets';
import { default as availableSkills, SKILLS_TOTAL_ODDS } from './skills';
import updateBruteData from './updateBruteData';
import { default as availableWeapons, WEAPONS_TOTAL_ODDS } from './weapons';

const createRandomBruteStats = async (prisma?: PrismaClient, initialBrute?: Brute) => {
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

  const perk = weightedRandom(PERK_ODDS, PERKS_TOTAL_ODDS);

  // Pet
  const pet = perk.name === 'pet' ? weightedRandom(availablePets, PETS_TOTAL_ODDS) : null;
  // Skill
  brute.skills = perk.name === 'skill' ? [weightedRandom(availableSkills, SKILLS_TOTAL_ODDS).name] : [];
  // Weapon
  brute.weapons = perk.name === 'weapon' ? [weightedRandom(availableWeapons, WEAPONS_TOTAL_ODDS).name] : [];

  // If creating from a brute, disallow perks already in its destiny
  if (initialBrute && prisma) {
    const alreadyChosen = await prisma.destinyChoice.count({
      where: {
        bruteId: initialBrute.id,
        skill: perk.name === 'skill' ? brute.skills[0] : null,
        pet: perk.name === 'pet' ? brute.pets[0] : null,
        weapon: perk.name === 'weapon' ? brute.weapons[0] : null,
      },
    });

    // Get a +2 stat boost instead
    if (alreadyChosen) {
      const stat = Object.values(BruteStat)[randomBetween(0, Object.values(BruteStat).length - 1)];
      brute = {
        ...updateBruteData(brute, {
          type: DestinyChoiceType.stats,
          stat1: stat,
          stat1Value: 2,
        }),
        ranking: brute.ranking,
        level: 1,
      };
    }
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
