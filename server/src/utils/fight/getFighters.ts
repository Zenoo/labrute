/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BruteRanking,
  DetailedFighter, getFinalHP, getFinalStat, getPetStat,
  getTempSkill,
  getTempWeapon,
  pets, randomBetween, SHIELD_BLOCK_ODDS, skills, weapons,
} from '@labrute/core';
import { Boss } from '@labrute/core/src/brute/bosses.js';
import {
  Brute, FightModifier, PrismaClient, SkillName,
} from '@labrute/prisma';
import ServerState from '../ServerState.js';

interface Team {
  brute: Brute | null;
  backup: Brute | null;
  boss?: Boss
}

const handleSkills = (brute: Brute, fighter: DetailedFighter) => {
  /* INITIATIVE */

  // -2 initiative for `firstStrike`
  if (brute.skills.includes(SkillName.firstStrike)) {
    fighter.initiative -= 2;
  }
  // +2 initiative for `reconnaissance`
  if (brute.skills.includes(SkillName.reconnaissance)) {
    fighter.initiative += 2;
  }

  /* COUNTER */

  // +10% counter for `sixthSense`
  if (brute.skills.includes(SkillName.sixthSense)) {
    fighter.counter += 0.1;
  }

  // +40% counter / +2 initiative for `monk`
  if (brute.skills.includes(SkillName.monk)) {
    fighter.counter += 0.4;
    fighter.initiative += 2;
  }

  /* COMBO */

  // +20% combo for `fistsOfFury`
  if (brute.skills.includes(SkillName.fistsOfFury)) {
    fighter.combo += 0.2;
  }

  /* REVERSAL */

  // +30% reversal for `hostility`
  if (brute.skills.includes(SkillName.hostility)) {
    fighter.reversal += 0.30;
  }

  /* BLOCK */

  // +XX% block for `shield`
  if (brute.skills.includes(SkillName.shield)) {
    fighter.block += SHIELD_BLOCK_ODDS;
    fighter.shield = true;
  }

  // +10% block for `counterAttack`
  if (brute.skills.includes(SkillName.counterAttack)) {
    fighter.block += 0.1;
  }

  /* ACCURACY */

  // +30% accuracy for `relentless`
  if (brute.skills.includes(SkillName.relentless)) {
    fighter.accuracy += 0.3;
  }

  /* ARMOR */

  // +25% armor for `armor`
  if (brute.skills.includes(SkillName.armor)) {
    fighter.armor += 0.25;
  }

  // +10% armor for `toughenedSkin`
  if (brute.skills.includes(SkillName.toughenedSkin)) {
    fighter.armor += 0.1;
  }

  /* DISARM */

  // +50% disarm for `shock`
  if (brute.skills.includes(SkillName.shock)) {
    fighter.disarm += 0.5;
  }

  /* EVASION */

  // +30% evasion for `untouchable`
  if (brute.skills.includes(SkillName.untouchable)) {
    fighter.evasion += 0.3;
  }

  /* DEFLECT */

  // +30% deflect for `repulse`
  if (brute.skills.includes(SkillName.repulse)) {
    fighter.reversal += 0.30;
  }

  /* PASSIVES */

  if (brute.skills.includes(SkillName.saboteur)) {
    fighter.saboteur = true;
  }
  if (brute.skills.includes(SkillName.sabotage)) {
    fighter.sabotage = true;
  }
  if (brute.skills.includes(SkillName.bodybuilder)) {
    fighter.bodybuilder = true;
  }
  if (brute.skills.includes(SkillName.survival)) {
    fighter.survival = true;
  }
  if (brute.skills.includes(SkillName.balletShoes)) {
    fighter.balletShoes = true;
  }
  if (brute.skills.includes(SkillName.determination)) {
    fighter.determination = true;
  }
  if (brute.skills.includes(SkillName.ironHead)) {
    fighter.ironHead = true;
  }
  if (brute.skills.includes(SkillName.resistant)) {
    fighter.resistant = true;
  }
  if (brute.skills.includes(SkillName.monk)) {
    fighter.monk = true;
  }
};

const handleModifiers = (
  brute: Brute,
  modifiers: FightModifier[],
  randomWeaponIndex: number | null,
  randomSkillIndex: number | null,
) => {
  if (modifiers.includes(FightModifier.doubleAgility)) {
    brute.agilityValue *= 2;
  }

  const randomWeaponName = getTempWeapon(brute, randomWeaponIndex);

  if (randomWeaponName) {
    const randomWeapon = weapons.find((weapon) => weapon.name === randomWeaponName);

    if (!randomWeapon) {
      throw new Error('Random weapon not found');
    }

    brute.weapons.push(randomWeaponName);
  }

  const randomSkillName = getTempSkill(brute, randomSkillIndex);

  if (randomSkillName) {
    const randomSkill = skills.find((skill) => skill.name === randomSkillName);

    if (!randomSkill) {
      throw new Error('Random skill not found');
    }

    brute.skills.push(randomSkillName);
  }
};

const getTempo = (speed: number) => 0.10 + (20 / (10 + (speed * 1.5))) * 0.90;

const getFighters = async (
  prisma: PrismaClient,
  team1: Team,
  team2: Team,
  modifiers: FightModifier[],
): Promise<DetailedFighter[]> => {
  const randomWeaponIndex = await ServerState.getRandomWeapon(prisma);
  const randomSkillIndex = await ServerState.getRandomSkill(prisma);

  let spawnedPets = 0;
  const fighters: DetailedFighter[] = [];
  let positiveIndex = 0;
  [team1, team2].forEach((team) => {
    const { brute } = team;

    if (brute) {
      if (!brute.body || !brute.colors) {
        throw new Error('Brute body or colors are missing');
      }

      // Fetch brute stats before handling modifiers,
      // as both depend on the skills, which get modified
      const bruteHP = getFinalHP(brute, randomSkillIndex);
      const bruteSpeed = getFinalStat(brute, 'speed', randomSkillIndex);
      const bruteStrength = getFinalStat(brute, 'strength', randomSkillIndex);
      const bruteAgility = getFinalStat(brute, 'agility', randomSkillIndex);

      handleModifiers(brute, modifiers, randomWeaponIndex, randomSkillIndex);

      // Brute stats
      positiveIndex++;
      const fighter: DetailedFighter = {
        id: brute.id,
        index: positiveIndex,
        name: brute.name,
        // Add minimal visual data to still be able to display the fight if the brute was deleted
        gender: brute.gender,
        colors: brute.colors,
        body: brute.body,
        rank: brute.ranking as BruteRanking,
        level: brute.level,
        type: 'brute' as const,
        maxHp: bruteHP,
        hp: bruteHP,
        strength: bruteStrength,
        agility: bruteAgility,
        speed: bruteSpeed,
        initiative: randomBetween(0, 10) / 100,
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

      // Pets stats
      brute.pets.forEach((petName) => {
        const pet = pets.find((p) => p.name === petName);
        if (!pet) {
          throw new Error(`Pet ${petName} not found`);
        }

        spawnedPets++;

        fighters.push({
          id: `${-spawnedPets}`,
          index: -spawnedPets,
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
      });

      // Backup stats
      if (team.backup) {
        const { backup } = team;

        if (!backup.body || !backup.colors) {
          throw new Error('Backup body or colors are missing');
        }

        // Arrives at a random time
        const arrivesAt = randomBetween(1, 500) / 100;

        // Fetch backup stats before handling modifiers,
        // as both depend on the skills, which get modified
        const backupHP = getFinalHP(backup, randomSkillIndex);
        const backupSpeed = getFinalStat(backup, 'speed', randomSkillIndex);
        const backupStrength = getFinalStat(backup, 'strength', randomSkillIndex);
        const backupAgility = getFinalStat(backup, 'agility', randomSkillIndex);

        handleModifiers(backup, modifiers, randomWeaponIndex, randomSkillIndex);

        spawnedPets++;
        const backupFighter: DetailedFighter = {
          id: `${-spawnedPets}`,
          index: -spawnedPets,
          name: backup.name,
          // Add minimal visual data to still be able to display the fight if the brute was deleted
          gender: backup.gender,
          colors: backup.colors,
          body: backup.body,
          rank: backup.ranking as BruteRanking,
          level: backup.level,
          type: 'brute' as const,
          master: brute.id,
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
    }

    // Boss
    positiveIndex++;
    if (team.boss) {
      spawnedPets++;

      fighters.push({
        id: `${-spawnedPets}`,
        index: positiveIndex,
        name: team.boss.name,
        rank: 0,
        level: 0,
        type: 'boss' as const,
        maxHp: team.boss.hp,
        hp: team.boss.hp,
        strength: team.boss.strength,
        agility: team.boss.agility,
        speed: team.boss.speed,
        initiative: team.boss.initiative + randomBetween(0, 10) / 100,
        tempo: getTempo(team.boss.speed),
        baseDamage: team.boss.damage,
        counter: team.boss.counter,
        combo: team.boss.combo,
        deflect: 0,
        reversal: team.boss.counter,
        block: team.boss.block,
        accuracy: team.boss.accuracy,
        reach: team.boss.reach,
        armor: 0,
        disarm: team.boss.disarm,
        evasion: team.boss.evasion,
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
