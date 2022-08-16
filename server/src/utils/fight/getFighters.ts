/* eslint-disable no-param-reassign */
import { Brute, DetailedFighter, PetName } from '@eternaltwin/labrute-core/types';
import { SHIELD_BLOCK_ODDS } from '@eternaltwin/labrute-core/constants';
import pets from '@eternaltwin/labrute-core/brute/pets';
import skills from '@eternaltwin/labrute-core/brute/skills';
import weapons from '@eternaltwin/labrute-core/brute/weapons';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';

interface BruteAndBackup {
  brute: Brute;
  backup: Brute | null;
}

const handleSkills = (brute: Brute, fighter: DetailedFighter) => {
  /* INITIATIVE */

  // -2 initiative for `firstStrike`
  if (brute.data.skills.includes('firstStrike')) {
    fighter.initiative -= 2;
  }
  // +2 initiative for `reconnaissance`
  if (brute.data.skills.includes('reconnaissance')) {
    fighter.initiative += 2;
  }

  /* COUNTER */

  // +10% counter for `sixthSense`
  if (brute.data.skills.includes('sixthSense')) {
    fighter.counter += 0.1;
  }

  // +40% counter / -2 initiative for `monk`
  if (brute.data.skills.includes('monk')) {
    fighter.counter += 0.4;
    fighter.initiative -= 2;
  }

  // Automatic counter on block for `counterAttack`
  if (brute.data.skills.includes('counterAttack')) {
    fighter.autoReversalOnBlock = true;
    fighter.block += 0.1;
  }

  /* COMBO */

  // +20% combo for `fistsOfFury`
  if (brute.data.skills.includes('fistsOfFury')) {
    fighter.combo += 0.2;
  }

  /* REVERSAL */

  // +33% reversal for `hostility`
  if (brute.data.skills.includes('hostility')) {
    fighter.reversal += 0.33;
  }

  /* BLOCK */

  // +XX% block for `shield`
  if (brute.data.skills.includes('shield')) {
    fighter.block += SHIELD_BLOCK_ODDS;
    fighter.shield = true;
  }

  // +10% block for `counterAttack`
  if (brute.data.skills.includes('counterAttack')) {
    fighter.block += 0.1;
  }

  /* ACCURACY */

  // +30% accuracy for `relentless`
  if (brute.data.skills.includes('relentless')) {
    fighter.accuracy += 0.3;
  }

  /* ARMOR */

  // +5 armor for `armor`
  if (brute.data.skills.includes('armor')) {
    fighter.armor += 5;
  }

  // +2 armor for `toughenedSkin`
  if (brute.data.skills.includes('toughenedSkin')) {
    fighter.armor += 2;
  }

  /* DISARM */

  // +50% disarm for `shock`
  if (brute.data.skills.includes('shock')) {
    fighter.disarm += 0.5;
  }

  /* EVASION */

  // +30% evasion for `untouchable`
  if (brute.data.skills.includes('untouchable')) {
    fighter.evasion += 0.3;
  }

  /* PASSIVES */

  if (brute.data.skills.includes('sabotage')) {
    fighter.sabotage = true;
  }
  if (brute.data.skills.includes('bodybuilder')) {
    fighter.bodybuilder = true;
  }
  if (brute.data.skills.includes('survival')) {
    fighter.survival = true;
  }
  if (brute.data.skills.includes('balletShoes')) {
    fighter.balletShoes = true;
  }
  if (brute.data.skills.includes('determination')) {
    fighter.determination = true;
  }
  if (brute.data.skills.includes('ironHead')) {
    fighter.ironHead = true;
  }
  if (brute.data.skills.includes('resistant')) {
    fighter.resistant = true;
  }
  if (brute.data.skills.includes('monk')) {
    fighter.monk = true;
  }
};

const getFighters = (team1: BruteAndBackup, team2: BruteAndBackup): DetailedFighter[] => {
  const fighters: DetailedFighter[] = [];
  [team1, team2].forEach((team) => {
    const { brute } = team;

    // Brute stats
    const fighter: DetailedFighter = {
      name: brute.name,
      // Add minimal visual data to still be able to display the fight if the brute was deleted
      data: {
        gender: brute.data.gender,
        colors: brute.data.colors,
        body: brute.data.body,
      },
      type: 'brute' as const,
      maxHp: brute.data.stats.hp,
      hp: brute.data.stats.hp,
      strength: brute.data.stats.strength.value,
      agility: brute.data.stats.agility.value,
      speed: brute.data.stats.speed.value,
      initiative: randomBetween(0, 10) / 100,
      tempo: 0.25 + (20 / (10 + brute.data.stats.speed.value)) * 0.75,
      baseDamage: 5,
      counter: 0,
      autoReversalOnBlock: false,
      triggerReversal: false,
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
      skills: skills.filter((skill) => brute.data.skills.includes(skill.name)),
      weapons: weapons.filter((weapon) => brute.data.weapons.includes(weapon.name)),
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
    Object.entries(brute.data.pets).forEach((entry) => {
      const petName = entry[0] as PetName;
      const hasPet = entry[1] as boolean;

      if (hasPet) {
        const pet = pets.find((p) => p.name === petName);
        if (!pet) {
          throw new Error(`Pet ${petName} not found`);
        }

        fighters.push({
          name: petName,
          type: 'pet' as const,
          master: brute.name,
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
          triggerReversal: false,
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
        });
      }
    });

    // Backup stats
    if (team.backup) {
      const { backup } = team;

      // Arrives at a random time
      const arrivesAt = randomBetween(0, 500) / 100;

      const backupFighter: DetailedFighter = {
        name: backup.name,
        // Add minimal visual data to still be able to display the fight if the brute was deleted
        data: {
          gender: backup.data.gender,
          colors: backup.data.colors,
          body: backup.data.body,
        },
        type: 'brute' as const,
        master: brute.name,
        arrivesAtInitiative: arrivesAt,
        leavesAtInitiative: arrivesAt + 2.8,
        maxHp: backup.data.stats.hp,
        hp: backup.data.stats.hp,
        strength: backup.data.stats.strength.value,
        agility: backup.data.stats.agility.value,
        speed: backup.data.stats.speed.value,
        initiative: arrivesAt,
        tempo: (0.25 + (20 / (10 + backup.data.stats.speed.value)) * 0.75),
        baseDamage: 5,
        counter: 0,
        autoReversalOnBlock: false,
        triggerReversal: false,
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
        skills: skills.filter((skill) => backup.data.skills.includes(skill.name)),
        weapons: weapons.filter((weapon) => backup.data.weapons.includes(weapon.name)),
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