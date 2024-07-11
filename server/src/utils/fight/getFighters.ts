/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BruteRanking,
  DetailedFighter, getPetStat,
  pets, randomBetween, SHIELD_BLOCK_ODDS, skills, weapons,
} from '@labrute/core';
import { Boss } from '@labrute/core/src/brute/bosses.js';
import { Brute, FightModifier, PrismaClient } from '@labrute/prisma';
import ServerState from '../ServerState.js';

interface Team {
  brute: Brute | null;
  backup: Brute | null;
  boss?: Boss
}

const handleSkills = (brute: Brute, fighter: DetailedFighter) => {
  /* INITIATIVE */

  // -2 initiative for `firstStrike`
  if (brute.skills.includes('firstStrike')) {
    fighter.initiative -= 2;
  }
  // +2 initiative for `reconnaissance`
  if (brute.skills.includes('reconnaissance')) {
    fighter.initiative += 2;
  }

  /* COUNTER */

  // +10% counter for `sixthSense`
  if (brute.skills.includes('sixthSense')) {
    fighter.counter += 0.1;
  }

  // +40% counter / +2 initiative for `monk`
  if (brute.skills.includes('monk')) {
    fighter.counter += 0.4;
    fighter.initiative += 2;
  }

  /* COMBO */

  // +20% combo for `fistsOfFury`
  if (brute.skills.includes('fistsOfFury')) {
    fighter.combo += 0.2;
  }

  /* REVERSAL */

  // +30% reversal for `hostility`
  if (brute.skills.includes('hostility')) {
    fighter.reversal += 0.30;
  }

  /* BLOCK */

  // +XX% block for `shield`
  if (brute.skills.includes('shield')) {
    fighter.block += SHIELD_BLOCK_ODDS;
    fighter.shield = true;
  }

  // +10% block for `counterAttack`
  if (brute.skills.includes('counterAttack')) {
    fighter.block += 0.1;
  }

  /* ACCURACY */

  // +30% accuracy for `relentless`
  if (brute.skills.includes('relentless')) {
    fighter.accuracy += 0.3;
  }

  /* ARMOR */

  // +25% armor for `armor`
  if (brute.skills.includes('armor')) {
    fighter.armor += 0.25;
  }

  // +10% armor for `toughenedSkin`
  if (brute.skills.includes('toughenedSkin')) {
    fighter.armor += 0.1;
  }

  /* DISARM */

  // +50% disarm for `shock`
  if (brute.skills.includes('shock')) {
    fighter.disarm += 0.5;
  }

  /* EVASION */

  // +30% evasion for `untouchable`
  if (brute.skills.includes('untouchable')) {
    fighter.evasion += 0.3;
  }

  /* PASSIVES */

  if (brute.skills.includes('saboteur')) {
    fighter.saboteur = true;
  }
  if (brute.skills.includes('sabotage')) {
    fighter.sabotage = true;
  }
  if (brute.skills.includes('bodybuilder')) {
    fighter.bodybuilder = true;
  }
  if (brute.skills.includes('survival')) {
    fighter.survival = true;
  }
  if (brute.skills.includes('balletShoes')) {
    fighter.balletShoes = true;
  }
  if (brute.skills.includes('determination')) {
    fighter.determination = true;
  }
  if (brute.skills.includes('ironHead')) {
    fighter.ironHead = true;
  }
  if (brute.skills.includes('resistant')) {
    fighter.resistant = true;
  }
  if (brute.skills.includes('monk')) {
    fighter.monk = true;
  }
};

const handleModifiers = (
  fighter: DetailedFighter,
  modifiers: FightModifier[],
  randomWeaponIndex: number | null,
  randomSkillIndex: number | null,
) => {
  if (modifiers.includes(FightModifier.doubleAgility)) {
    fighter.agility *= 2;
  }

  if (modifiers.includes(FightModifier.randomWeapon)) {
    if (randomWeaponIndex === null) {
      throw new Error('Random weapon not found');
    }

    const unownedWeapons = weapons.filter((weapon) => !fighter.weapons.some(
      (w) => w.name === weapon.name,
    ));

    const randomWeapon = unownedWeapons[randomWeaponIndex % unownedWeapons.length];

    if (randomWeapon) {
      fighter.weapons.push(randomWeapon);
    }
  }

  if (modifiers.includes(FightModifier.randomSkill)) {
    if (randomSkillIndex === null) {
      throw new Error('Random skill not found');
    }

    const unownedSkills = skills.filter((skill) => !fighter.skills.some(
      (s) => s.name === skill.name,
    ));

    const randomSkill = unownedSkills[randomSkillIndex % unownedSkills.length];

    if (randomSkill) {
      fighter.skills.push(randomSkill);
    }
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
        maxHp: brute.hp,
        hp: brute.hp,
        strength: brute.strengthValue,
        agility: brute.agilityValue,
        speed: brute.speedValue,
        initiative: randomBetween(0, 10) / 100,
        tempo: getTempo(brute.speedValue),
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
      handleModifiers(fighter, modifiers, randomWeaponIndex, randomSkillIndex);

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
          maxHp: backup.hp,
          hp: backup.hp,
          strength: backup.strengthValue,
          agility: backup.agilityValue,
          speed: backup.speedValue,
          initiative: arrivesAt,
          tempo: getTempo(backup.speedValue),
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
        handleModifiers(backupFighter, modifiers, randomWeaponIndex, randomSkillIndex);

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
