/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BruteRanking,
  DetailedFighter, getPetStat,
  pets, randomBetween, SHIELD_BLOCK_ODDS, skills, weapons,
} from '@labrute/core';
import { Boss } from '@labrute/core/src/brute/bosses.js';
import { Brute } from '@labrute/prisma';

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

  // Automatic counter on block for `counterAttack`
  if (brute.skills.includes('counterAttack')) {
    fighter.autoReversalOnBlock = true;
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

  // +5 armor for `armor`
  if (brute.skills.includes('armor')) {
    fighter.armor += 5;
  }

  // +2 armor for `toughenedSkin`
  if (brute.skills.includes('toughenedSkin')) {
    fighter.armor += 2;
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

const getTempo = (speed: number) => 0.10 + (20 / (10 + (speed * 1.5))) * 0.90;

const getFighters = (team1: Team, team2: Team): DetailedFighter[] => {
  let spawnedPets = 0;
  const fighters: DetailedFighter[] = [];
  [team1, team2].forEach((team) => {
    const { brute } = team;

    if (brute) {
      if (!brute.body || !brute.colors) {
        throw new Error('Brute body or colors are missing');
      }

      // Brute stats
      const fighter: DetailedFighter = {
        id: brute.id,
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
        autoReversalOnBlock: false,
        combo: 0,
        reversal: 0,
        block: 0,
        accuracy: 0,
        armor: 0,
        disarm: 0,
        evasion: 0,
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
          id: -spawnedPets,
          name: petName,
          rank: 0,
          level: 0,
          type: 'pet' as const,
          master: brute.id,
          maxHp: pet.hp,
          hp: getPetStat(brute, pet, 'hp'),
          strength: getPetStat(brute, pet, 'strength'),
          agility: getPetStat(brute, pet, 'agility'),
          speed: getPetStat(brute, pet, 'speed'),
          initiative: pet.initiative + randomBetween(0, 10) / 100,
          tempo: getTempo(getPetStat(brute, pet, 'speed')),
          baseDamage: pet.damage,
          counter: pet.counter,
          autoReversalOnBlock: false,
          combo: pet.combo,
          reversal: pet.counter,
          block: pet.block,
          accuracy: pet.accuracy,
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
          id: -spawnedPets,
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
          autoReversalOnBlock: false,
          combo: 0,
          reversal: 0,
          block: 0,
          accuracy: 0,
          armor: 0,
          disarm: 0,
          evasion: 0,
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
        };

        handleSkills(backup, backupFighter);

        // Reset initiative to arrive at the desired time
        backupFighter.initiative = arrivesAt;

        fighters.push(backupFighter);
      }
    }

    // Boss
    if (team.boss) {
      spawnedPets++;

      fighters.push({
        id: -spawnedPets,
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
        autoReversalOnBlock: false,
        combo: team.boss.combo,
        reversal: team.boss.counter,
        block: team.boss.block,
        accuracy: team.boss.accuracy,
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
      });
    }
  });

  return fighters;
};

export default getFighters;
