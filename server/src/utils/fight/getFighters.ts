/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BruteRanking,
  BruteWithBodyColors, DetailedFighter, pets, randomBetween, SHIELD_BLOCK_ODDS, skills, weapons,
} from '@labrute/core';

interface BruteAndBackup {
  brute: BruteWithBodyColors;
  backup: BruteWithBodyColors | null;
}

const handleSkills = (brute: BruteWithBodyColors, fighter: DetailedFighter) => {
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

  // +33% reversal for `hostility`
  if (brute.skills.includes('hostility')) {
    fighter.reversal += 0.33;
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

const getFighters = (team1: BruteAndBackup, team2: BruteAndBackup): DetailedFighter[] => {
  const fighters: DetailedFighter[] = [];
  [team1, team2].forEach((team) => {
    const { brute } = team;

    if (!brute.body || !brute.colors) {
      throw new Error('Brute body or colors are missing');
    }

    // Brute stats
    const fighter: DetailedFighter = {
      id: brute.id,
      name: brute.name,
      gender: brute.gender,
      rank: brute.ranking as BruteRanking,
      level: brute.level,
      // Add minimal visual data to still be able to display the fight if the brute was deleted
      data: {
        gender: brute.gender,
        colors: brute.colors,
        body: brute.body,
      },
      type: 'brute' as const,
      maxHp: brute.hp,
      hp: brute.hp,
      strength: brute.strengthValue,
      agility: brute.agilityValue,
      speed: brute.speedValue,
      initiative: randomBetween(0, 10) / 100,
      tempo: 0.25 + (20 / (10 + brute.speedValue)) * 0.75,
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
      spied: false,
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
    };

    handleSkills(brute, fighter);

    fighters.push(fighter);

    // Pets stats
    brute.pets.forEach((petName) => {
      const pet = pets.find((p) => p.name === petName);
      if (!pet) {
        throw new Error(`Pet ${petName} not found`);
      }

      fighters.push({
        id: 0,
        name: petName,
        rank: 0,
        level: 0,
        type: 'pet' as const,
        master: brute.id,
        maxHp: pet.hp,
        hp: pet.hp,
        strength: pet.strength,
        agility: pet.agility,
        speed: pet.speed,
        initiative: pet.initiative + randomBetween(0, 10) / 100,
        tempo: 0.25 + (20 / (10 + pet.speed)) * 0.75,
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
        spied: false,
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

      const backupFighter: DetailedFighter = {
        id: backup.id,
        name: backup.name,
        gender: backup.gender,
        rank: backup.ranking as BruteRanking,
        level: backup.level,
        // Add minimal visual data to still be able to display the fight if the brute was deleted
        data: {
          gender: backup.gender,
          colors: backup.colors,
          body: backup.body,
        },
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
        tempo: (0.25 + (20 / (10 + backup.speedValue)) * 0.75),
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
        spied: false,
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
      };

      handleSkills(backup, backupFighter);

      // Reset initiative to arrive at the desired time
      backupFighter.initiative = arrivesAt;

      fighters.push(backupFighter);
    }
  });

  return fighters;
};

export default getFighters;