/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BruteRanking,
  DetailedFighter, FightStat, getFinalHP, getFinalStat, getPetStat,
  getTempSkill,
  getTempWeapon,
  pets, randomBetween, SkillModifiers, skills, weapons,
} from '@labrute/core';
import { Boss } from '@labrute/core/src/brute/bosses.js';
import {
  Brute, FightModifier, PrismaClient, SkillName,
} from '@labrute/prisma';

interface Team {
  brutes: Brute[];
  backups: Brute[];
  bosses: (Boss & {
    startHP: number;
  })[]
}

const handleSkills = (brute: Brute, fighter: DetailedFighter) => {
  for (const skill of brute.skills) {
    // Stat changes
    for (const [unsafeStat, modifier] of Object.entries(SkillModifiers[skill])) {
      const stat = unsafeStat as FightStat;

      // Ignore conditional modifiers
      if (modifier.details) continue;

      // Ignore some stats handled elsewhere
      if (stat === FightStat.DEXTERITY
        || stat === FightStat.DAMAGE
        || stat === FightStat.HIT_SPEED
        || stat === FightStat.ENDURANCE
        || stat === FightStat.STRENGTH
        || stat === FightStat.AGILITY
        || stat === FightStat.SPEED) continue;

      if (modifier.flat) {
        if (stat === FightStat.INITIATIVE) {
          fighter.initiative -= modifier.flat / 100;
        } else {
          fighter[stat] += modifier.flat;
        }
      }
      if (modifier.percent) {
        fighter[stat] += modifier.percent;
      }
    }

    // Passives
    if (skill === SkillName.shield) {
      fighter.shield = true;
    }

    if (skill === SkillName.saboteur) {
      fighter.saboteur = true;
    }

    if (skill === SkillName.sabotage) {
      fighter.sabotage = true;
    }

    if (skill === SkillName.bodybuilder) {
      fighter.bodybuilder = true;
    }

    if (skill === SkillName.survival) {
      fighter.survival = true;
    }

    if (skill === SkillName.balletShoes) {
      fighter.balletShoes = true;
    }

    if (skill === SkillName.determination) {
      fighter.determination = true;
    }

    if (skill === SkillName.ironHead) {
      fighter.ironHead = true;
    }

    if (skill === SkillName.resistant) {
      fighter.resistant = true;
    }

    if (skill === SkillName.monk) {
      fighter.monk = true;
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
  prisma: PrismaClient,
  team1: Team,
  team2: Team,
  modifiers: FightModifier[],
  clanFight?: boolean,
};

const getFighters = ({
  team1,
  team2,
  modifiers,
  clanFight,
}: GetFightersParams): DetailedFighter[] => {
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

          brute.enduranceStat += pet.enduranceMalus;
          brute.enduranceValue = Math.floor(brute.enduranceStat * brute.enduranceModifier);
        }
      }

      // Fetch brute stats before handling modifiers,
      // as both depend on the skills, which get modified
      const bruteHP = getFinalHP(brute, modifiers);
      const bruteSpeed = getFinalStat(brute, 'speed', modifiers);
      const bruteStrength = getFinalStat(brute, 'strength', modifiers);
      const bruteAgility = getFinalStat(brute, 'agility', modifiers);

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
        initiative: (randomBetween(0, 10) - bruteSpeed) / 100,
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
        monk: false,
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
        poisoned: false,
        trapped: false,
        damagedWeapons: [],
        hitBy: {},
      };

      handleSkills(brute, fighter);

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
          maxHp: getPetStat(brute, pet, 'hp'),
          hp: getPetStat(brute, pet, 'hp'),
          strength: getPetStat(brute, pet, 'strength'),
          agility: getPetStat(brute, pet, 'agility'),
          speed: getPetStat(brute, pet, 'speed'),
          initiative: pet.initiative + randomBetween(0, 10) / 100,
          tempo: getTempo(getPetStat(brute, pet, 'speed')),
          baseDamage: pet.damage,
          counter: pet.counter,
          combo: pet.combo,
          deflect: 0,
          reversal: pet.counter,
          block: pet.block,
          accuracy: pet.accuracy,
          reach: 0,
          armor: 0,
          disarm: pet.disarm,
          evasion: pet.evasion,
          sabotage: false,
          bodybuilder: false,
          survival: false,
          balletShoes: false,
          determination: false,
          retryAttack: false,
          ironHead: false,
          resistant: false,
          monk: false,
          skills: [],
          weapons: [],
          shield: false,
          activeSkills: [],
          activeWeapon: null,
          keepWeaponChance: 0,
          saboteur: false,
          sabotagedWeapon: null,
          poisoned: false,
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
      const backupHP = getFinalHP(backup, modifiers);
      const backupSpeed = getFinalStat(backup, 'speed', modifiers);
      const backupStrength = getFinalStat(backup, 'strength', modifiers);
      const backupAgility = getFinalStat(backup, 'agility', modifiers);

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
        initiative: arrivesAt,
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
        monk: false,
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
        poisoned: false,
        trapped: false,
        damagedWeapons: [],
        hitBy: {},
      };

      handleSkills(backup, backupFighter);

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
        initiative: boss.initiative + randomBetween(0, 10) / 100,
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
        monk: false,
        skills: [],
        weapons: [],
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        saboteur: false,
        sabotagedWeapon: null,
        poisoned: false,
        trapped: false,
        damagedWeapons: [],
        hitBy: {},
      });
    }
  });
  return fighters;
};

export default getFighters;
