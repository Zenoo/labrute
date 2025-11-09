/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BASE_FIGHTER_STATS,
  BruteRanking,
  DetailedFighter, FightStat, getFinalHP, getFinalStat, getPetScaledStat,
  getPetStatSeed,
  getScaledStat,
  getSkillStatSeed,
  getTempSkill,
  getTempWeapon,
  pets,
  randomBetween, SkillModifiers, skills, weapons,
} from '@labrute/core';
import { Boss } from '@labrute/core/src/brute/bosses.js';
import {
  Brute, FightModifier, SkillName,
} from '@labrute/prisma';

interface Team {
  brutes: Brute[];
  backups: Brute[];
  bosses: (Boss & {
    startHP: number;
  })[]
}

const handleSkills = (chaos: boolean, brute: Brute, fighter: DetailedFighter) => {
  for (const skill of brute.skills) {
    // Stat changes
    for (const [unsafeStat, modifier] of Object.entries(SkillModifiers[skill])) {
      const stat = unsafeStat as FightStat;

      // Ignore conditional modifiers
      if (modifier.details || (typeof modifier.weaponType !== 'undefined')) continue;

      // Ignore some stats handled elsewhere
      if (stat === FightStat.DEXTERITY
        || stat === FightStat.DAMAGE
        || stat === FightStat.ENDURANCE
        || stat === FightStat.STRENGTH
        || stat === FightStat.AGILITY
        || stat === FightStat.SPEED) continue;

      if (modifier.flat) {
        const flat = getScaledStat(chaos, getSkillStatSeed(skill, stat, 'flat'), modifier.flat, 2);
        if (stat === FightStat.INITIATIVE) {
          fighter.initiative -= flat / 100;
        } else {
          fighter[stat] += flat;
        }
      }
      if (modifier.percent) {
        fighter[stat] += getScaledStat(chaos, getSkillStatSeed(skill, stat, 'percent'), modifier.percent, 2);
      }
    }

    // Passives
    switch (skill) {
      case SkillName.shield:
        fighter.shield = true;
        break;
      case SkillName.saboteur:
        fighter.saboteur = true;
        break;
      case SkillName.sabotage:
        fighter.sabotage = true;
        break;
      case SkillName.bodybuilder:
        fighter.bodybuilder = true;
        break;
      case SkillName.survival:
        fighter.survival = true;
        break;
      case SkillName.balletShoes:
        fighter.balletShoes = true;
        break;
      case SkillName.determination:
        fighter.determination = true;
        break;
      case SkillName.ironHead:
        fighter.ironHead = true;
        break;
      case SkillName.resistant:
        fighter.resistant = true;
        break;
      case SkillName.fastMetabolism:
        fighter.fastMetabolism = 0;
        break;
      case SkillName.fierceBrute: {
        // Add one fierceBrute use every 30 strength
        const fierceBruteSkill = fighter.skills.find((s) => s.name === skill);
        if (fierceBruteSkill && fierceBruteSkill.uses) {
          fierceBruteSkill.uses += Math.floor(fighter.strength / 30);
        }
        break;
      }
      default:
    }
  }
};

const handleModifiers = (
  brute: Brute,
  modifiers: FightModifier[],
) => {
  const randomWeaponName = getTempWeapon(brute, modifiers);

  if (randomWeaponName) {
    const randomWeapon = weapons.find((weapon) => weapon.name === randomWeaponName);

    if (!randomWeapon) {
      throw new Error('Random weapon not found');
    }

    brute.weapons.push(randomWeaponName);
  }

  const randomSkillName = getTempSkill(brute, modifiers);

  if (randomSkillName) {
    const randomSkill = skills.find((skill) => skill.name === randomSkillName);

    if (!randomSkill) {
      throw new Error('Random skill not found');
    }

    brute.skills.push(randomSkillName);
  }
};

const getTempo = (speed: number) => 0.10 + (20 / (10 + (speed * 1.5))) * 0.90;

type GetFightersParams = {
  team1: Team,
  team2: Team,
  modifiers: FightModifier[],
  clanFight?: boolean,
};

export const getFighters = ({
  team1,
  team2,
  modifiers,
  clanFight,
}: GetFightersParams): DetailedFighter[] => {
  const chaos = modifiers.includes(FightModifier.chaos);
  let spawnedPets = 0;
  const fighters: DetailedFighter[] = [];
  let positiveIndex = 0;
  [team1, team2].forEach((team, teamIndex) => {
    const { brutes } = team;

    for (const brute of brutes) {
      const teamSide = teamIndex === 0 ? 'L' : 'R';

      // Restore endurance lost by pets for clan fights, which do not have pets
      if (clanFight) {
        for (const petName of brute.pets) {
          const pet = pets.find((p) => p.name === petName);
          if (!pet) {
            throw new Error(`Pet ${petName} not found`);
          }

          brute.enduranceStat += getScaledStat(
            chaos,
            getPetStatSeed(pet, FightStat.ENDURANCE),
            pet.enduranceMalus,
          );
          brute.enduranceValue = Math.floor(brute.enduranceStat * brute.enduranceModifier);
        }
      }

      // Fetch brute stats before handling modifiers,
      // as both depend on the skills, which get modified
      const bruteHP = getFinalHP(chaos, brute, modifiers);
      const bruteSpeed = getFinalStat(chaos, brute, 'speed', modifiers);
      const bruteStrength = getFinalStat(chaos, brute, 'strength', modifiers);
      const bruteAgility = getFinalStat(chaos, brute, 'agility', modifiers);

      handleModifiers(brute, modifiers);

      // Brute stats
      positiveIndex++;
      const fighter: DetailedFighter = {
        id: brute.id,
        eventId: brute.eventId ?? undefined,
        index: positiveIndex,
        team: teamSide,
        name: brute.name,
        // Add minimal visual data to still be able to display the fight if the brute was deleted
        gender: brute.gender,
        colors: brute.colors,
        body: brute.body,
        rank: brute.ranking as BruteRanking,
        level: brute.level,
        type: 'brute',
        maxHp: bruteHP,
        hp: bruteHP,
        strength: bruteStrength,
        agility: bruteAgility,
        speed: bruteSpeed,
        criticalChance: BASE_FIGHTER_STATS.criticalChance,
        criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
        regeneration: 0,
        initiative: (randomBetween(0, 10) - bruteSpeed) / 100,
        hitSpeed: 0,
        tempo: getTempo(bruteSpeed),
        baseDamage: BARE_HANDS_DAMAGE,
        counter: 0,
        combo: 0,
        deflect: 0,
        reversal: 0,
        block: 0,
        accuracy: 0,
        armor: 0,
        disarm: 0,
        evasion: 0,
        reach: 0,
        sabotage: false,
        bodybuilder: false,
        survival: false,
        balletShoes: false,
        determination: false,
        retryAttack: false,
        ironHead: false,
        resistant: false,
        fastMetabolism: null,
        skills: skills
          .filter((skill) => brute.skills.includes(skill.name))
          .map((skill) => ({ ...skill })),
        weapons: weapons
          .filter((weapon) => brute.weapons.includes(weapon.name)),
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        saboteur: false,
        sabotagedWeapon: null,
        poisonedBy: null,
        trapped: false,
        damagedWeapons: [],
        hitBy: {},
      };

      handleSkills(chaos, brute, fighter);

      fighters.push(fighter);

      // No pets in clan fights
      if (clanFight) {
        continue;
      }

      // Pets stats
      for (const petName of brute.pets) {
        const pet = pets.find((p) => p.name === petName);
        if (!pet) {
          throw new Error(`Pet ${petName} not found`);
        }

        spawnedPets++;

        fighters.push({
          id: `${-spawnedPets}`,
          index: -spawnedPets,
          team: teamSide,
          name: petName,
          rank: 0,
          level: 0,
          type: 'pet' as const,
          master: brute.id,
          maxHp: getPetScaledStat(chaos, brute, pet, 'hp'),
          hp: getPetScaledStat(chaos, brute, pet, 'hp'),
          strength: getPetScaledStat(chaos, brute, pet, 'strength'),
          agility: getPetScaledStat(chaos, brute, pet, 'agility'),
          speed: getPetScaledStat(chaos, brute, pet, 'speed'),
          criticalChance: BASE_FIGHTER_STATS.criticalChance,
          criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
          regeneration: 0,
          initiative: getPetScaledStat(chaos, brute, pet, 'initiative', 2) + randomBetween(0, 10) / 100,
          hitSpeed: 0,
          tempo: getTempo(getPetScaledStat(chaos, brute, pet, 'speed')),
          baseDamage: getPetScaledStat(chaos, brute, pet, 'damage'),
          counter: getPetScaledStat(chaos, brute, pet, 'counter', 2),
          combo: getPetScaledStat(chaos, brute, pet, 'combo', 2),
          deflect: 0,
          reversal: getPetScaledStat(chaos, brute, pet, 'counter', 2),
          block: getPetScaledStat(chaos, brute, pet, 'block', 2),
          accuracy: getPetScaledStat(chaos, brute, pet, 'accuracy', 2),
          reach: 0,
          armor: 0,
          disarm: getPetScaledStat(chaos, brute, pet, 'disarm', 2),
          evasion: getPetScaledStat(chaos, brute, pet, 'evasion', 2),
          sabotage: false,
          bodybuilder: false,
          survival: false,
          balletShoes: false,
          determination: false,
          retryAttack: false,
          ironHead: false,
          resistant: false,
          fastMetabolism: null,
          skills: [],
          weapons: [],
          shield: false,
          activeSkills: [],
          activeWeapon: null,
          keepWeaponChance: 0,
          saboteur: false,
          sabotagedWeapon: null,
          poisonedBy: null,
          trapped: false,
          damagedWeapons: [],
          hitBy: {},
        });
      }
    }

    // Backup stats
    for (const backup of team.backups) {
      const backupMaster = team.brutes[0];

      if (!backupMaster) {
        throw new Error('Backup master not found');
      }

      // Arrives at a random time
      const arrivesAt = randomBetween(1, 500) / 100;

      // Fetch backup stats before handling modifiers,
      // as both depend on the skills, which get modified
      const backupHP = getFinalHP(chaos, backup, modifiers);
      const backupSpeed = getFinalStat(chaos, backup, 'speed', modifiers);
      const backupStrength = getFinalStat(chaos, backup, 'strength', modifiers);
      const backupAgility = getFinalStat(chaos, backup, 'agility', modifiers);

      handleModifiers(backup, modifiers);

      spawnedPets++;
      const backupFighter: DetailedFighter = {
        id: `${-spawnedPets}`,
        index: -spawnedPets,
        team: teamIndex === 0 ? 'L' : 'R',
        name: backup.name,
        // Add minimal visual data to still be able to display the fight if the brute was deleted
        gender: backup.gender,
        colors: backup.colors,
        body: backup.body,
        rank: backup.ranking as BruteRanking,
        level: backup.level,
        type: 'brute' as const,
        master: backupMaster.id,
        arrivesAtInitiative: arrivesAt,
        leavesAtInitiative: arrivesAt + 2.8,
        maxHp: backupHP,
        hp: backupHP,
        strength: backupStrength,
        agility: backupAgility,
        speed: backupSpeed,
        criticalChance: BASE_FIGHTER_STATS.criticalChance,
        criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
        regeneration: 0,
        initiative: arrivesAt,
        hitSpeed: 0,
        tempo: getTempo(backupSpeed),
        baseDamage: BARE_HANDS_DAMAGE,
        counter: 0,
        combo: 0,
        deflect: 0,
        reversal: 0,
        block: 0,
        accuracy: 0,
        armor: 0,
        disarm: 0,
        evasion: 0,
        reach: 0,
        sabotage: false,
        bodybuilder: false,
        survival: false,
        balletShoes: false,
        determination: false,
        retryAttack: false,
        ironHead: false,
        resistant: false,
        fastMetabolism: null,
        skills: skills
          .filter((skill) => backup.skills.includes(skill.name))
          .map((skill) => ({ ...skill })),
        weapons: weapons.filter((weapon) => backup.weapons.includes(weapon.name)),
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        saboteur: false,
        sabotagedWeapon: null,
        poisonedBy: null,
        trapped: false,
        damagedWeapons: [],
        hitBy: {},
      };

      handleSkills(chaos, backup, backupFighter);

      // Reset initiative to arrive at the desired time
      backupFighter.initiative = arrivesAt;

      fighters.push(backupFighter);
    }

    // Boss
    for (const boss of team.bosses) {
      positiveIndex++;
      spawnedPets++;

      fighters.push({
        id: `${-spawnedPets}`,
        index: positiveIndex,
        team: teamIndex === 0 ? 'L' : 'R',
        name: boss.name,
        rank: 0,
        level: 0,
        type: 'boss' as const,
        maxHp: boss.hp,
        hp: boss.startHP,
        strength: boss.strength,
        agility: boss.agility,
        speed: boss.speed,
        criticalChance: BASE_FIGHTER_STATS.criticalChance,
        criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
        regeneration: 0,
        initiative: boss.initiative + randomBetween(0, 10) / 100,
        hitSpeed: 0,
        tempo: getTempo(boss.speed),
        baseDamage: boss.damage,
        counter: boss.counter,
        combo: boss.combo,
        deflect: 0,
        reversal: boss.counter,
        block: boss.block,
        accuracy: boss.accuracy,
        reach: boss.reach,
        armor: 0,
        disarm: boss.disarm,
        evasion: boss.evasion,
        sabotage: false,
        bodybuilder: false,
        survival: false,
        balletShoes: false,
        determination: false,
        retryAttack: false,
        ironHead: false,
        resistant: false,
        fastMetabolism: null,
        skills: [],
        weapons: [],
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        saboteur: false,
        sabotagedWeapon: null,
        poisonedBy: null,
        trapped: false,
        damagedWeapons: [],
        hitBy: {},
      });
    }
  });

  return fighters;
};
