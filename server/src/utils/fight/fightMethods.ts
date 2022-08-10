/* eslint-disable no-param-reassign */
import {
  Fight, Fighter, Skill, SuperName,
} from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import getDamage from './getDamage.js';

const getMainOpponent = (fightData: Fight['data'], brute: Fighter) => {
  const mainOpponent = fightData.fighters.find(
    (fighter) => fighter.type === 'brute' && !fighter.master && fighter.name !== brute.name,
  );

  if (!mainOpponent) {
    throw new Error('No main opponent found');
  }

  return mainOpponent;
};

export const sabotage = (fightData: Fight['data']) => {
  fightData.fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master).forEach((brute) => {
    if (brute.sabotage) {
      const opponent = getMainOpponent(fightData, brute);

      if (opponent && opponent.weapons.length > 0) {
        const sabotagedWeapon = opponent.weapons[randomBetween(0, opponent.weapons.length - 1)];
        opponent.sabotagedWeapon = sabotagedWeapon;

        // Add sabotage step
        fightData.steps.push({
          action: 'sabotage',
          brute: brute.name,
          target: opponent.name,
          weapon: sabotagedWeapon.name,
        });
      }
    }
  });
};

export const isSomeoneDead = (fightData: Fight['data']) => fightData.fighters.some(
  (fighter) => fighter.type === 'brute' && !fighter.master && fighter.hp <= 0,
);

export const orderFighters = (fightData: Fight['data']) => {
  fightData.fighters = fightData.fighters.sort((a, b) => {
    // Last if hp <= 0
    if (a.hp <= 0) return 1;
    if (b.hp <= 0) return -1;
    // Random is initiatives are equal
    if (a.initiative === b.initiative) {
      return Math.random() > 0.5 ? 1 : -1;
    }
    // Lower initiative first
    return a.initiative - b.initiative;
  });
};

const randomlyGetSuper = (skills: Skill[]) => {
  if (!skills.length) return null;

  const NO_SUPER_TOSS = 10;
  const randomSuper = randomBetween(
    0,
    skills.reduce((acc, skill) => acc + (skill.toss || 0), 0) + NO_SUPER_TOSS,
  );
  let toss = 0;

  for (let i = 0; i < skills.length; i += 1) {
    toss += skills[i].toss || 0;
    if (randomSuper < toss) {
      return skills[i];
    }
  }

  return null;
};

const getOpponents = (fightData: Fight['data'], bruteOnly?: boolean) => {
  const fighter = fightData.fighters[0];

  let opponents = fightData.fighters.filter(
    (f) => f.name !== fighter.name && f.master !== fighter.name,
  );
  if (bruteOnly) {
    opponents = opponents.filter((f) => f.type === 'brute');
  }

  return opponents;
};

const getRandomOpponent = (fightData: Fight['data'], bruteOnly?: boolean) => {
  const opponents = getOpponents(fightData, bruteOnly);
  return opponents[randomBetween(0, opponents.length - 1)];
};

const registerHit = (
  fightData: Fight['data'],
  fighter: Fighter,
  damage: number,
  sourceName?: SuperName,
) => {
  let actualDamage = damage;

  // Max damage to 20% of fighter's health if `resistant`
  if (fighter.skills.find((sk) => sk.name === 'resistant')) {
    actualDamage = Math.min(damage, Math.floor(fighter.maxHp * 0.2));

    // Add resist step
    fightData.steps.push({
      action: 'resist',
      brute: fighter.name,
    });
  }

  // Reduce backup leave time instead of reducing hp
  if (fighter.leavesAtInitiative) {
    fighter.leavesAtInitiative -= actualDamage * 0.05;
  } else {
    fighter.hp -= actualDamage;
  }

  // Survive with 1 HP if `survival` skill
  if (fighter.survival) {
    fighter.survival = false;
    fighter.hp = 1;

    // Add survival step
    fightData.steps.push({
      action: 'survive',
      brute: fighter.name,
    });
  }

  // Add hit step
  fightData.steps.push({
    action: sourceName || 'hit',
    brute: fightData.fighters[0].name,
    target: fighter.name,
    weapon: sourceName || fightData.fighters[0].activeWeapon?.name || null,
    damage: actualDamage,
  });
};

const activateSuper = (fightData: Fight['data'], skill: Skill): boolean => {
  // No uses left (should never happen)
  if (!skill.uses) return false;

  const fighter = fightData.fighters[0];

  switch (skill.name) {
    // Steal opponent's weapon if he has one
    case 'thief': {
      // Choose brute opponent
      const opponent = getRandomOpponent(fightData, true);

      // Abort if no weapon
      if (!opponent.activeWeapon) return false;

      // 20% chance to steal
      if (randomBetween(0, 4) === 0) {
        // Remove own weapon
        if (fighter.activeWeapon) {
          // Add trash step
          fightData.steps.push({
            action: 'trash',
            brute: fighter.name,
            name: fighter.activeWeapon.name,
          });

          fighter.activeWeapon = null;
        }

        // Add steal step
        fightData.steps.push({
          action: 'steal',
          brute: fighter.name,
          name: opponent.activeWeapon.name,
          target: opponent.name,
        });

        // Set own weapon
        fighter.activeWeapon = opponent.activeWeapon;

        // Remove opponent's weapon
        opponent.activeWeapon = null;

        // Increase opponent initiative
        opponent.initiative += 0.3 + opponent.tempo;
      } else {
        return false;
      }
      break;
    }
    case 'fierceBrute': {
      // Add skill to active skills
      fighter.activeSkills.push(skill);
      break;
    }
    case 'tragicPotion': {
      // Abort if not poisoned or lost less than 50 HP
      const lostHp = fighter.maxHp - fighter.hp;
      if (!fighter.poisoned || lostHp < 50) return false;

      const hpHealed = Math.floor(lostHp * (0.25 + Math.random() * 0.25));
      fighter.hp += hpHealed;
      fighter.poisoned = false;

      // Increas own initiative
      fighter.initiative += 0.15;

      // Add heal step
      fightData.steps.push({
        action: 'heal',
        brute: fighter.name,
        amount: hpHealed,
      });
      break;
    }
    case 'net': {
      // Choose opponent
      const opponent = getRandomOpponent(fightData);

      // Set opponent's trapped status
      opponent.trapped = true;

      // Increase opponent initiative
      if (!fightData.fighters.find((f) => f.master === opponent.name)) {
        // Less increase if opponent is solo
        opponent.initiative += Math.floor(
          Math.max(
            2.6 - (opponent.strength ** 0.5) * 0.1,
            0.5,
          ),
        );
      } else {
        opponent.initiative += 1000;
      }

      // Increase own initiative
      fighter.initiative += 0.2 * fighter.tempo;

      // Add trap step
      fightData.steps.push({
        action: 'trap',
        brute: fighter.name,
        target: opponent.name,
      });
      break;
    }
    case 'bomb': {
      // Get opponents
      const opponents = getOpponents(fightData);

      // Set random bomb damage
      const damage = 15 + randomBetween(0, 10);

      // Hit every opponent
      opponents.forEach((opponent) => {
        registerHit(fightData, opponent, damage);
      });

      // Increase own initiative
      fighter.initiative += 0.5 * fighter.tempo;
      break;
    }
    case 'hammer': {
      // Only 20% to use the skill if fighter has a weapon
      if (fighter.activeWeapon) {
        if (randomBetween(0, 4) === 0) {
          // Add trash step
          fightData.steps.push({
            action: 'trash',
            brute: fighter.name,
            name: fighter.activeWeapon.name,
          });

          fighter.activeWeapon = null;
        } else {
          return false;
        }
      }

      // Choose opponent
      const opponent = getRandomOpponent(fightData, true);

      // Add to active skills
      fighter.activeSkills.push(skill);

      // Get damage
      const damage = getDamage(fighter, opponent);
      registerHit(fightData, opponent, damage, 'hammer');

      // Increase own initiative
      fighter.initiative += 1 * fighter.tempo;
      break;
    }
    case 'cryOfTheDamned': {
      // Get main opponent
      const opponent = getMainOpponent(fightData, fighter);
      // Get opponent's pets
      const opponentPets = fightData.fighters.filter((f) => f.type === 'pet' && f.master === opponent.name);

      // Abort if no pet
      if (opponentPets.length === 0) return false;

      // Keep track of feared pets
      const fearedPets = [];

      for (let i = 0; i < opponentPets.length; i++) {
        const pet = opponentPets[i];

        // 33% chance to fear the pet
        if (randomBetween(0, 2) === 0) {
          // Add leave step
          fightData.steps.push({
            action: 'leave',
            type: 'pet',
            name: pet.name,
          });

          fearedPets.push(pet);

          // Remove pet from fight
          fightData.fighters = fightData.fighters.filter((f) => f.type === 'pet' && f.name !== pet.name);
        }
      }

      // Abort if no pet feared
      if (fearedPets.length === 0) return false;
      break;
    }
    case 'hypnosis': {
      // Get main opponent
      const opponent = getMainOpponent(fightData, fighter);
      // Get opponent's pets
      const opponentPets = fightData.fighters.filter((f) => f.type === 'pet' && f.master === opponent.name);

      // Keep track of hypnotised pets
      const hypnotisedPets = [];

      for (let i = 0; i < opponentPets.length; i++) {
        const pet = opponentPets[i];

        // Don't hypnotise trapped pets
        if (!pet.trapped) {
          // Add hypnotise step
          fightData.steps.push({
            action: 'hypnotise',
            brute: fighter.name,
            pet: pet.name,
          });

          hypnotisedPets.push(pet);

          // Change pet owner
          pet.master = fighter.name;
        }
      }

      // Abort if no pet hypnotised
      if (hypnotisedPets.length === 0) return false;
      break;
    }
    case 'flashFlood': {
      // Abort if less than 3 weapons are available
      if (fighter.weapons.length < 3) return false;

      // Choose opponent
      const opponent = getRandomOpponent(fightData, true);

      // Shuffle weapons
      const shuffledWeapons = [...fighter.weapons].sort(() => Math.random() - 0.5);
      // Get half of the weapons
      const halfWeapons = shuffledWeapons.slice(0, Math.floor(shuffledWeapons.length / 2));

      // Remove those weapons from the fighter
      fighter.weapons = fighter.weapons.filter(
        (w) => !halfWeapons.find((hw) => hw.name === w.name),
      );

      // Get damages for each weapon
      const damages = [];
      halfWeapons.forEach((w) => {
        const damage = getDamage(fighter, opponent, w);
        damages.push(damage);

        registerHit(fightData, opponent, damage, 'flashFlood');
      });

      // Increase own initiative
      fighter.initiative += 2 * fighter.tempo;

      break;
    }
    case 'tamer': {
      // Get dead pets
      const deadPets = fightData.fighters.filter((f) => f.type === 'pet' && f.hp <= 0);

      // Abort if less than 20 HP lost or if no pet is dead
      if (fighter.hp > fighter.maxHp - 20 || !deadPets.length) return false;

      // Get random dedd pet
      const pet = deadPets[randomBetween(0, deadPets.length - 1)];

      let healPercentage = 0;
      switch (pet.name) {
        case 'dog1':
        case 'dog2':
        case 'dog3':
          // Heal 20% for a dog
          healPercentage = 0.2;
          break;
        case 'panther':
          // Heal 30% for a panther
          healPercentage = 0.3;
          break;
        case 'bear':
          // Heal 50% for a bear
          healPercentage = 0.5;
          break;
        default:
          return false;
      }

      // Don't overheal
      const heal = Math.min(
        fighter.maxHp - fighter.hp,
        Math.floor(fighter.maxHp * healPercentage),
      );

      // Heal fighter
      fighter.hp += heal;

      // Increase own initiative
      fighter.initiative += 0.15;

      // Add moveTo step
      fightData.steps.push({
        action: 'moveTo',
        fighter: fighter.name,
        fighterType: fighter.type,
        target: pet.name,
        targetType: pet.type,
      });
      // Add eat step
      fightData.steps.push({
        action: 'eat',
        brute: fighter.name,
        target: pet.name,
        heal,
      });
      // Add moveBack step
      fightData.steps.push({
        action: 'moveBack',
        fighter: fighter.name,
      });

      break;
    }
    default:
      return false;
  }

  // Spend one use
  skill.uses -= 1;

  // Remove skill if no uses left
  if (!skill.uses) {
    fighter.skills.splice(fighter.skills.findIndex((s) => s.name === skill.name), 1);
  }

  return true;
};

export const playFighterTurn = (fightData: Fight['data'], turn: number) => {
  const fighter = fightData.fighters[0];
  console.log(`${fighter.name} turn ${turn}`);

  // Check if backup should leave
  if (fighter.leavesAtInitiative && fighter.leavesAtInitiative <= fightData.initiative) {
    // Add backup leave step
    fightData.steps.push({
      action: 'leave',
      type: 'brute',
      name: fighter.name,
    });

    fightData.fighters.shift();
    return;
  }

  // Check if backup should arrive
  if (fighter.arrivesAtInitiative && fighter.arrivesAtInitiative <= fightData.initiative) {
    fighter.arrivesAtInitiative = undefined;

    // Add backup arrive step
    fightData.steps.push({
      action: 'arrive',
      type: 'brute',
      name: fighter.name,
    });
  }

  // Super activation
  const possibleSuper = randomlyGetSuper(fighter.skills);
  if (possibleSuper) {
    // End turn if super activated
    if (activateSuper(fightData, possibleSuper)) {
      return;
    }
  }

  // Draw weapon
  console.log(fightData);
};

export const endFight = (fightData: Fight['data']) => {
  console.log(fightData);
};