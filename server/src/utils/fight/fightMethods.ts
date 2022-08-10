/* eslint-disable no-param-reassign */
import { Fight, Fighter, Skill } from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';

export const sabotage = (fightData: Fight['data']) => {
  fightData.fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master).forEach((brute) => {
    if (brute.sabotage) {
      const opponent = fightData.fighters.find(
        (fighter) => fighter.type === 'brute'
          && !fighter.master
          && fighter.name !== brute.name,
      );

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
    if (a.initiative === b.initiative) {
      return Math.random() > 0.5 ? 1 : -1;
    }
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

const registerHit = (fightData: Fight['data'], fighter: Fighter, damage: number) => {
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
    action: 'hit',
    brute: fightData.fighters[0].name,
    target: fighter.name,
    weapon: fightData.fighters[0].activeWeapon?.name || null,
    damage: actualDamage,
  });
};

const activateSuper = (fightData: Fight['data'], skill: Skill) => {
  // No uses left (should never happen)
  if (!skill.uses) return;

  const fighter = fightData.fighters[0];

  switch (skill.name) {
    // Steal opponent's weapon if he has one
    case 'thief': {
      // Choose brute opponent
      const opponent = getRandomOpponent(fightData, true);

      // Abort if no weapon
      if (!opponent.activeWeapon) return;

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
        return;
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
      if (!fighter.poisoned || lostHp < 50) return;

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
      break;
    }
    case 'hammer': {
      break;
    }
    case 'cryOfTheDamned': {
      break;
    }
    case 'hypnosis': {
      break;
    }
    case 'flashFlood': {
      break;
    }
    case 'tamer': {
      break;
    }
    default:
      return;
  }

  // Spend one use
  skill.uses -= 1;

  // Remove skill if no uses left
  if (!skill.uses) {
    fighter.skills.splice(fighter.skills.findIndex((s) => s.name === skill.name), 1);
  }
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
    activateSuper(fightData, possibleSuper);
  }
};

export const endFight = (fightData: Fight['data']) => {
  console.log(fightData);
};