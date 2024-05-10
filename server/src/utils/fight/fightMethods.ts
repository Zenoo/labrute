/* eslint-disable no-param-reassign */
import {
  AchievementsStore,
  AttemptHitStep,
  BASE_FIGHTER_STATS,
  DetailedFight, DetailedFighter, FighterStat, LeaveStep,
  NO_WEAPON_TOSS,
  randomBetween, SHIELD_BLOCK_ODDS, Skill, SkillByName, StepType, updateAchievement, Weapon,
  WeaponByName,
} from '@labrute/core';
import { PetName } from '@labrute/prisma';
import getDamage from './getDamage.js';

export type Stats = Record<number, {
  userId: string | null;
  skillsUsed?: number;
  weaponsStolen?: number;
  hits?: number;
  counters?: number;
  countersTriggered?: number;
  evades?: number;
  blocks?: number;
  consecutiveCounters?: number;
  consecutiveReversals?: number;
  consecutiveBlocks?: number;
  consecutiveEvades?: number;
  consecutiveThrows?: number;
  disarms?: number;
  petsKilled?: number;
  maxDamage?: number;
  otherTeamMembersHits?: number;
}>;

const getFighterStat = (
  fighter: DetailedFighter,
  stat: FighterStat,
  onlyStat?: 'fighter' | 'weapon',
) => {
  // Special case for swiftness as it only exists on weapons
  if (stat === 'swiftness') {
    if (onlyStat === 'fighter') return 0;

    if (fighter.activeWeapon) {
      return fighter.activeWeapon[stat];
    }

    return fighter.type === 'brute' ? BASE_FIGHTER_STATS[stat] : 0;
  }

  // Special case for tempo as it's either weapon or base
  if (stat === 'tempo') {
    if (fighter.activeWeapon) {
      return fighter.activeWeapon[stat];
    }

    return BASE_FIGHTER_STATS[stat];
  }

  let total = onlyStat === 'weapon' ? 0 : fighter[stat];

  if (onlyStat !== 'fighter') {
    if (fighter.activeWeapon) {
      total += fighter.activeWeapon[stat];
    } else {
      total += fighter.type === 'brute' ? BASE_FIGHTER_STATS[stat] : 0;
    }
  }

  return total;
};

const resetOthersStats = (stats: Stats, excludedFighter: number, stat: keyof Omit<Stats[number], 'userId'>) => {
  for (const [bruteId, bruteStats] of Object.entries(stats)) {
    if (+bruteId !== excludedFighter) {
      bruteStats[stat] = 0;
    }
  }
};

const updateStats = (stats: Stats, bruteId: number, stat: keyof Omit<Stats[number], 'userId'>, value: number, masterId?: number) => {
  // Special case for hits, add to otherTeamMembersHits if not master
  if (stat === 'hits' && masterId) {
    const master = stats[masterId];

    if (master) {
      master.otherTeamMembersHits = (master.otherTeamMembersHits || 0) + value;
    }

    return;
  }

  const current = stats[bruteId];

  if (!current) return;

  if (value === 0) {
    current[stat] = 0;
  } else {
    current[stat] = (current[stat] || 0) + value;
  }
};

const checkAchievements = (
  stats: Stats,
  achievements: AchievementsStore,
) => {
  for (const [_bruteId, stat] of Object.entries(stats)) {
    const bruteId = +_bruteId;
    const achievement = achievements[bruteId];

    if (!achievement) {
      // eslint-disable-next-line no-continue
      continue;
    }

    // Consecutive counters
    if (stat.consecutiveCounters && stat.consecutiveCounters >= 4) {
      updateAchievement(achievements, 'counter4b2b', 1, bruteId);
      stat.consecutiveCounters = 0;
    }

    // Consecutive reversals
    if (stat.consecutiveReversals && stat.consecutiveReversals >= 4) {
      updateAchievement(achievements, 'reversal4b2b', 1, bruteId);
      stat.consecutiveReversals = 0;
    }

    // Consecutive blocks
    if (stat.consecutiveBlocks && stat.consecutiveBlocks >= 4) {
      updateAchievement(achievements, 'block4b2b', 1, bruteId);
      stat.consecutiveBlocks = 0;
    }

    // Consecutive evades
    if (stat.consecutiveEvades && stat.consecutiveEvades >= 4) {
      updateAchievement(achievements, 'evade4b2b', 1, bruteId);
      stat.consecutiveEvades = 0;
    }

    // Consecutive throws
    if (stat.consecutiveThrows && stat.consecutiveThrows >= 10) {
      updateAchievement(achievements, 'throw10b2b', 1, bruteId);
      stat.consecutiveThrows = 0;
    }
  }
};

const getMainOpponent = (fightData: DetailedFight, brute: DetailedFighter) => {
  const mainOpponent = fightData.fighters.find(
    (fighter) => (fighter.type === 'boss'
      || (fighter.type === 'brute'
        && !fighter.master && fighter.name !== brute.name))
      && fighter.hp > 0,
  );

  if (!mainOpponent) {
    throw new Error('No main opponent found');
  }

  return mainOpponent;
};

export const saboteur = (fightData: DetailedFight, achievements: AchievementsStore) => {
  fightData.fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master).forEach((brute) => {
    if (brute.saboteur) {
      const opponent = getMainOpponent(fightData, brute);

      if (opponent && opponent.weapons.length > 0) {
        const sabotagedWeapon = opponent.weapons[randomBetween(0, opponent.weapons.length - 1)];
        opponent.sabotagedWeapon = sabotagedWeapon;

        updateAchievement(achievements, 'saboteur', 1, brute.id);
      }
    }
  });
};

export const orderFighters = (fightData: DetailedFight) => {
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

export const getOpponents = (
  fightData: DetailedFight,
  fighter: DetailedFighter,
  bruteOnly?: boolean,
  petOnly?: boolean,
) => {
  let opponents = [];

  // Remove backups not arrived yet and dead fighters
  opponents = fightData.fighters.filter((f) => !f.arrivesAtInitiative && f.hp > 0);

  // Fighter is a pet/backup
  if (fighter.master) {
    opponents = opponents.filter((f) => (f.master
      ? f.master !== fighter.master
      : f.id !== fighter.master));
  } else {
    // Fighter is a real brute
    opponents = opponents.filter((f) => (f.master
      ? f.master !== fighter.id
      : f.id !== fighter.id));
  }

  // Allow bosses too
  if (bruteOnly) {
    opponents = opponents.filter((f) => f.type === 'brute' || f.type === 'boss');
  }

  if (petOnly) {
    opponents = opponents.filter((f) => f.type === 'pet');
  }

  return opponents;
};

const getRandomOpponent = (
  fightData: DetailedFight,
  fighter: DetailedFighter,
  bruteOnly?: boolean,
  petOnly?: boolean,
  nonTrappedOnly?: boolean,
) => {
  let opponents = getOpponents(fightData, fighter, bruteOnly, petOnly);

  // Filter out trapped pets
  opponents = opponents.filter((f) => f.type !== 'pet' || !f.trapped);

  if (nonTrappedOnly) {
    // Filter out trapped brutes
    opponents = opponents.filter((f) => !f.trapped);
  }

  const random = randomBetween(0, opponents.length - 1);

  return opponents[random];
};

const randomlyGetSuper = (fightData: DetailedFight, brute: DetailedFighter) => {
  let supers = brute.skills.filter((skill) => skill.uses);

  if (!supers.length) return null;

  // Filter out tamer if no dead pets
  if (fightData.fighters.filter((fighter) => fighter.type === 'pet' && fighter.hp <= 0).length === 0) {
    supers = supers.filter((skill) => skill.name !== 'tamer');
  }

  // Filter out thief if opponents have no weapons in hand
  if (getOpponents(fightData, brute, true)
    .filter((fighter) => fighter.activeWeapon).length === 0) {
    supers = supers.filter((skill) => skill.name !== 'thief');
  }

  // Filter out tragicPotion if not poisoned or lost less than 50 HP
  if (!brute.poisoned && brute.hp > brute.maxHp / 2) {
    supers = supers.filter((skill) => skill.name !== 'tragicPotion');
  }

  // Filter out cryOfTheDamned and hypnosis if opponent has no non-trapped pets
  if (getOpponents(fightData, brute, false, true)
    .filter((fighter) => !fighter.trapped).length === 0) {
    supers = supers.filter((skill) => skill.name !== 'cryOfTheDamned' && skill.name !== 'hypnosis');
  }

  // Filter out flashFlood if less than 3 weapons
  if (brute.weapons.length < 3) {
    supers = supers.filter((skill) => skill.name !== 'flashFlood');
  }

  // Filter out net if no available pet and no non-trapped fighter
  if (getOpponents(fightData, brute, false, true).length === 0
    && getOpponents(fightData, brute, true).filter((b) => !b.trapped).length === 0) {
    supers = supers.filter((skill) => skill.name !== 'net');
  }

  if (!supers.length) return null;

  const NO_SUPER_TOSS = 10;
  const randomSuper = randomBetween(
    0,
    supers.reduce((acc, skill) => acc + (skill.toss || 0), 0) + NO_SUPER_TOSS,
  );

  let toss = 0;
  for (let i = 0; i < supers.length; i += 1) {
    toss += supers[i].toss || 0;
    if (randomSuper < toss) {
      return supers[i];
    }
  }

  return null;
};

const randomlyDrawWeapon = (weapons: Weapon[]) => {
  if (!weapons.length) return null;

  const randomWeapon = randomBetween(
    0,
    weapons.reduce((acc, weapon) => acc + (weapon.toss || 0), 0) + NO_WEAPON_TOSS,
  );

  let toss = 0;
  for (let i = 0; i < weapons.length; i += 1) {
    toss += weapons[i].toss || 0;
    if (randomWeapon < toss) {
      return weapons[i];
    }
  }

  return null;
};

const registerHit = (
  fightData: DetailedFight,
  stats: Stats,
  achievements: AchievementsStore,
  fighter: DetailedFighter,
  opponents: DetailedFighter[],
  damage: number,
  sourceName?: 'hammer' | 'flashFlood' | 'poison' | 'bomb',
  flashFloodWeapon?: Weapon,
) => {
  const bombDamageRangeOnPets: Record<PetName, [number, number]> = {
    [PetName.dog1]: [90, 150],
    [PetName.dog2]: [90, 150],
    [PetName.dog3]: [90, 150],
    [PetName.panther]: [40, 80],
    [PetName.bear]: [15, 30],
  };

  const actualDamage: Record<number, number> = opponents.reduce((acc, opponent) => ({
    ...acc,
    [opponent.id]: (sourceName === 'bomb' && opponent.type === 'pet')
      ? Math.round(
        randomBetween(...bombDamageRangeOnPets[opponent.name as PetName]) * opponent.maxHp,
      ) / 100
      : damage,
  }), {});

  opponents.forEach((opponent) => {
    // Remove the net and reset initiative
    if (opponent.trapped) {
      opponent.trapped = false;
      opponent.initiative = fightData.initiative + 0.5;
    }

    if (opponent.skills.find((sk) => sk.name === 'resistant')) {
      // Max damage to 20% of opponent's health if `resistant`
      actualDamage[opponent.id] = Math.min(damage, Math.floor(opponent.maxHp * 0.2));

      if (actualDamage[opponent.id] < damage) {
        // Add resist step
        fightData.steps.push({
          a: StepType.Resist,
          b: opponent.id,
        });
      }
    }

    // Reduce backup leave time instead of reducing hp
    if (opponent.leavesAtInitiative) {
      opponent.leavesAtInitiative -= actualDamage[opponent.id] * 0.05;
    } else {
      opponent.hp -= actualDamage[opponent.id];
    }
  });

  if (sourceName === 'bomb') {
    // Add bomb step
    fightData.steps.push({
      a: StepType.Bomb,
      f: fighter.id,
      t: opponents.map((opponent) => opponent.id),
      d: opponents.reduce((acc, curr) => {
        acc[curr.id] = actualDamage[curr.id];
        return acc;
      }, {} as Record<number, number>),
    });
  } else {
    opponents.forEach((opponent) => {
      const stepType = sourceName === 'hammer'
        ? StepType.Hammer
        : sourceName === 'flashFlood'
          ? StepType.FlashFlood
          : sourceName === 'poison'
            ? StepType.Poison
            : StepType.Hit;
      // Add hit step
      fightData.steps.push({
        a: stepType,
        f: fighter.id,
        t: opponent.id,
        w: sourceName
          ? (flashFloodWeapon
            ? WeaponByName[flashFloodWeapon.name]
            : undefined)
          : fighter.activeWeapon ? WeaponByName[fighter.activeWeapon.name] : undefined,
        d: actualDamage[opponent.id],
      });
    });
  }

  // 50 Damage achievement
  const moreThan50 = Object.values(actualDamage).filter((d) => d >= 50).length;
  if (moreThan50) {
    updateAchievement(achievements, 'damage50once', moreThan50, fighter.id);
  }

  // 100 Damage achievement
  const moreThan100 = Object.values(actualDamage).filter((d) => d >= 100).length;
  if (moreThan100) {
    updateAchievement(achievements, 'damage100once', moreThan100, fighter.id);
  }

  // Max damage achievement
  const maxDamage = Math.max(...Object.values(actualDamage));
  if ((stats[fighter.id]?.maxDamage || 0) < maxDamage) {
    updateStats(stats, fighter.id, 'maxDamage', maxDamage - (stats[fighter.id]?.maxDamage || 0));
  }

  opponents.forEach((opponent) => {
    // Survive with 1 HP if `survival` skill
    if (opponent.survival && opponent.hp <= 1) {
      opponent.survival = false;
      opponent.hp = 1;

      // Add survival step
      fightData.steps.push({
        a: StepType.Survive,
        b: opponent.id,
      });
    }
  });

  // Update stats
  updateStats(stats, fighter.id, 'hits', 1, fighter.master);
};

const activateSuper = (
  fightData: DetailedFight,
  skill: Skill,
  stats: Stats,
  achievements: AchievementsStore,
): boolean => {
  // No uses left (should never happen)
  if (!skill.uses) return false;

  // Get current fighter
  const fighter = fightData.fighters[0];

  switch (skill.name) {
    // Steal opponent's weapon if he has one
    case 'thief': {
      // Choose brute opponent
      const opponent = getRandomOpponent(fightData, fighter, true);

      // Abort if no weapon
      if (!opponent.activeWeapon) return false;

      // 20% chance to steal
      if (randomBetween(1, 5) === 1) {
        // Remove own weapon
        if (fighter.activeWeapon) {
          // Add trash step
          fightData.steps.push({
            a: StepType.Trash,
            b: fighter.id,
            w: WeaponByName[fighter.activeWeapon.name],
          });

          fighter.activeWeapon = null;
        }

        // Add steal step
        fightData.steps.push({
          a: StepType.Steal,
          b: fighter.id,
          w: WeaponByName[opponent.activeWeapon.name],
          t: opponent.id,
        });

        // Set own weapon
        fighter.activeWeapon = opponent.activeWeapon;

        // Force keep weapon for the next turn
        fighter.keepWeaponChance = 1;

        // Remove opponent's weapon
        opponent.activeWeapon = null;

        // Increase opponent initiative
        opponent.initiative += 0.3 + opponent.tempo;

        // Update stats
        updateStats(stats, fighter.id, 'weaponsStolen', 1);
      } else {
        return false;
      }
      break;
    }
    case 'fierceBrute': {
      // Add skill to active skills
      fighter.activeSkills.push(skill);

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.id,
        s: SkillByName[skill.name],
      });

      break;
    }
    case 'tragicPotion': {
      let hpHealed = Math.floor(fighter.maxHp * (0.25 + Math.random() * 0.25));
      let poisonHeal = false;

      // Limit hp to max
      hpHealed = Math.min(hpHealed, fighter.maxHp - fighter.hp);

      fighter.hp += hpHealed;

      if (fighter.poisoned) {
        fighter.poisoned = false;
        poisonHeal = true;
      }

      // Increas own initiative
      fighter.initiative += 0.15;

      // Add heal step
      fightData.steps.push({
        a: StepType.Heal,
        b: fighter.id,
        h: hpHealed,
        c: poisonHeal ? 1 : 0,
      });

      break;
    }
    case 'net': {
      // Target pet first
      let opponent = getRandomOpponent(fightData, fighter, false, true);

      if (!opponent) {
        // Choose brute opponent if no pet
        opponent = getRandomOpponent(fightData, fighter, true, false, true);
      }

      // Set opponent's trapped status
      opponent.trapped = true;

      // Increase opponent initiative
      opponent.initiative += 1000;

      // Increase own initiative
      fighter.initiative += 0.2 * fighter.tempo;

      // Add trap step
      fightData.steps.push({
        a: StepType.Trap,
        b: fighter.id,
        t: opponent.id,
      });

      break;
    }
    case 'bomb': {
      // Get opponents
      const opponents = getOpponents(fightData, fighter);

      // Set random bomb damage
      const damage = 15 + randomBetween(0, 10);

      // Hit every opponent
      registerHit(fightData, stats, achievements, fighter, opponents, damage, 'bomb');

      // Increase own initiative
      fighter.initiative += 0.5 * fighter.tempo;

      break;
    }
    case 'hammer': {
      // Only 20% to use the skill if fighter has a weapon
      if (fighter.activeWeapon) {
        if (randomBetween(1, 5) === 1) {
          // Add trash step
          fightData.steps.push({
            a: StepType.Trash,
            b: fighter.id,
            w: WeaponByName[fighter.activeWeapon.name],
          });

          fighter.activeWeapon = null;
        } else {
          return false;
        }
      }

      // Choose opponent
      const opponent = getRandomOpponent(fightData, fighter, true);

      // Add to active skills
      fighter.activeSkills.push(skill);

      // Get damage
      const damage = getDamage(fighter, opponent);

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.id,
        s: SkillByName[skill.name],
      });

      // Add move step
      fightData.steps.push({
        a: StepType.Move,
        f: fighter.id,
        t: opponent.id,
        s: 1,
      });

      registerHit(fightData, stats, achievements, fighter, [opponent], damage, 'hammer');

      // Add move back step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.id,
      });

      // Increase own initiative
      fighter.initiative += 1 * fighter.tempo;

      // Add skill expire step
      fightData.steps.push({
        a: StepType.SkillExpire,
        b: fighter.id,
        s: SkillByName[skill.name],
      });

      // Remove skill from active skills
      fighter.activeSkills = fighter.activeSkills.filter((s) => s.name !== skill.name);

      break;
    }
    case 'cryOfTheDamned': {
      // Get opponent's non trapped pets
      const opponentPets = getOpponents(fightData, fighter, false, true)
        .filter((f) => !f.trapped && f.hp > 0);

      // Abort if no pet
      if (opponentPets.length === 0) return false;

      // Keep track of fear steps
      const fearSteps: LeaveStep[] = [];

      for (let i = 0; i < opponentPets.length; i++) {
        const pet = opponentPets[i];

        // 50% chance to fear the pet
        if (randomBetween(0, 1) === 0) {
          fearSteps.push({
            a: StepType.Leave,
            f: pet.id,
          });

          // Remove pet from fight
          fightData.fighters = fightData.fighters
            .filter((f) => f.type === 'brute'
              || !(f.type === 'pet'
                && f.master === pet.master
                && f.name === pet.name
                && f.hypnotised === pet.hypnotised
              ));
        }
      }

      // Abort if no pet feared
      if (fearSteps.length === 0) return false;

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.id,
        s: SkillByName[skill.name],
      });

      // Add fear steps
      fightData.steps = fightData.steps.concat(fearSteps);

      break;
    }
    case 'hypnosis': {
      // Get main opponent
      const opponent = getMainOpponent(fightData, fighter);
      // Get opponent's non trapped pets
      const opponentPets = fightData.fighters.filter((f) => f.type === 'pet'
        && f.master === opponent.id
        && !f.trapped
        && f.hp > 0);

      // Keep track of hypnotised pets
      const hypnotisedPets: number[] = [];

      for (let i = 0; i < opponentPets.length; i++) {
        const pet = opponentPets[i];

        hypnotisedPets.push(pet.id);

        // Change pet owner
        pet.master = fighter.id;
        pet.hypnotised = true;
      }

      // Abort if no pet hypnotised
      if (hypnotisedPets.length === 0) return false;

      // Add hypnotise step
      fightData.steps.push({
        a: StepType.Hypnotise,
        b: fighter.id,
        p: hypnotisedPets,
      });

      break;
    }
    case 'flashFlood': {
      // Choose opponent
      const opponent = getRandomOpponent(fightData, fighter, true);

      // Shuffle weapons
      const shuffledWeapons = [...fighter.weapons].sort(() => Math.random() - 0.5);
      // Get half of the weapons
      const halfWeapons = shuffledWeapons.slice(0, Math.floor(shuffledWeapons.length / 2));

      // Add active weapon as first weapon if any
      if (fighter.activeWeapon) {
        halfWeapons.unshift(fighter.activeWeapon);
      }

      // Remove those weapons from the fighter
      halfWeapons.forEach((w) => {
        const weaponIndex = fighter.weapons.findIndex((weapon) => weapon.name === w.name);
        fighter.weapons.splice(weaponIndex, 1);
      });

      // Remove active weapon if any
      if (fighter.activeWeapon) {
        fighter.activeWeapon = null;
      }

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.id,
        s: SkillByName[skill.name],
      });

      // Get damages for each weapon
      const damages = [];
      halfWeapons.forEach((w) => {
        const damage = getDamage(fighter, opponent, w);
        damages.push(damage);

        registerHit(fightData, stats, achievements, fighter, [opponent], damage, 'flashFlood', w);
      });

      // Add skill expire step
      fightData.steps.push({
        a: StepType.SkillExpire,
        b: fighter.id,
        s: SkillByName[skill.name],
      });

      // Increase own initiative
      fighter.initiative += 2 * fighter.tempo;

      break;
    }
    case 'tamer': {
      // Get non eaten dead pets
      const deadPets = fightData.fighters.filter((f) => f.type === 'pet' && f.hp <= 0 && !f.eaten);

      // Abort if less than 20 HP lost or if no pet is dead
      if (fighter.hp > fighter.maxHp - 20 || !deadPets.length) return false;

      // Get random dead pet
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

      // Set pet as eaten
      pet.eaten = true;

      // Add move step
      fightData.steps.push({
        a: StepType.Move,
        f: fighter.id,
        t: pet.id,
      });

      // Add eat step
      fightData.steps.push({
        a: StepType.Eat,
        b: fighter.id,
        t: pet.id,
        h: heal,
      });

      // Add moveBack step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.id,
      });

      break;
    }
    default:
      return false;
  }

  // Spend one use
  skill.uses -= 1;

  // Update stats
  updateStats(stats, fighter.id, 'skillsUsed', 1);

  // Remove skill if no uses left
  if (!skill.uses) {
    fighter.skills.splice(fighter.skills.findIndex((s) => s.name === skill.name), 1);
  }

  return true;
};

const counterAttack = (fighter: DetailedFighter, opponent: DetailedFighter) => {
  // No counter attack if opponent is dead
  if (opponent.hp <= 0) return false;

  const random = Math.random();

  const valueToBeat = (
    opponent.counter * 10
    + (
      (opponent.activeWeapon?.reach || 0)
      - (fighter.activeWeapon?.reach || 0)
    )
  ) * 0.1;

  return random < valueToBeat;
};

// Returns true if weapon was sabotaged
const drawWeapon = (fightData: DetailedFight): boolean => {
  // Get current fighter
  const fighter = fightData.fighters[0];

  // Don't always draw a weapon if the fighter is already holding a weapon
  if (fighter.activeWeapon && randomBetween(0, fighter.weapons.length * 2) === 0) return false;

  // Draw a weapon
  const possibleWeapon = randomlyDrawWeapon(fighter.weapons);

  // Decrease `keepWeaponChance` each turn and abort until true
  if (Math.random() < fighter.keepWeaponChance) {
    fighter.keepWeaponChance *= 0.5;
    return false;
  }

  // Abort if no weapon drawn
  if (!possibleWeapon) return false;

  // Trash old weapon if there is one
  if (fighter.activeWeapon) {
    // Add trash step
    fightData.steps.push({
      a: StepType.Trash,
      b: fighter.id,
      w: WeaponByName[fighter.activeWeapon.name],
    });

    // Remove weapon from fighter
    fighter.activeWeapon = null;
  }
  // Equip new weapon
  fighter.activeWeapon = possibleWeapon;

  // Set the chance to keep the weapon to 50%
  fighter.keepWeaponChance = 0.5;

  // Remove weapon from possible weapons
  const weaponIndex = fighter.weapons.findIndex((w) => w.name === possibleWeapon.name);
  fighter.weapons.splice(weaponIndex, 1);

  // Add equip step
  fightData.steps.push({
    a: StepType.Equip,
    b: fighter.id,
    w: WeaponByName[possibleWeapon.name],
  });

  // Check if weapon was sabotaged
  if (fighter.sabotagedWeapon?.name === possibleWeapon.name) {
    // Add saboteur step
    fightData.steps.push({
      a: StepType.Saboteur,
      b: fighter.id,
      w: WeaponByName[possibleWeapon.name],
    });

    // Remove weapon from fighter
    fighter.activeWeapon = null;
    fighter.sabotagedWeapon = null;

    // Increase own initiative
    fighter.initiative += 1;

    return true;
  }

  return false;
};

const block = (fighter: DetailedFighter, opponent: DetailedFighter, ease = 1) => {
  // No block if opponent is dead
  if (opponent.hp <= 0) return false;

  // No block if opponent is trapped
  if (opponent.trapped) return false;

  // No block for pets and bosses
  if (opponent.type === 'pet' || opponent.type === 'boss') return false;

  return Math.random() * ease
    < (getFighterStat(opponent, 'block')
      - getFighterStat(fighter, 'accuracy', 'weapon'));
};

const evade = (fighter: DetailedFighter, opponent: DetailedFighter, difficulty = 1) => {
  // No evasion if opponent is dead
  if (opponent.hp <= 0) return false;

  // No evasion if opponent is trapped
  if (opponent.trapped) return false;

  // Automatically evade if `balletShoes`
  if (opponent.balletShoes) {
    // Disable ballet shoes
    opponent.balletShoes = false;
    return true;
  }

  // Get agility difference (-40 > diff > 40)
  const agilityDifference = Math.min(
    Math.max(
      -40,
      (opponent.agility - fighter.agility) * 2,
    ),
    40,
  );

  const random = Math.random();

  return random * difficulty
    < Math.min(
      (getFighterStat(opponent, 'evasion')
        + agilityDifference * 0.01
        - getFighterStat(fighter, 'accuracy', 'fighter')
        - getFighterStat(fighter, 'swiftness')),
      0.9,
    );
};

const breakShield = (fighter: DetailedFighter, opponent: DetailedFighter) => {
  // Can't break someone's shield if they are not holding a shield >.>
  if (!opponent.shield) return false;

  return getFighterStat(fighter, 'disarm') * 100 >= randomBetween(1, 300);
};

const disarm = (fighter: DetailedFighter, opponent: DetailedFighter) => {
  // Can't disarm someone if they are not holding a weapon >.>
  if (!opponent.activeWeapon) return false;

  return getFighterStat(fighter, 'disarm') * 100 >= randomBetween(1, 100);
};

const disarmAttacker = (fighter: DetailedFighter, opponent: DetailedFighter) => {
  // Can't disarm someone if they are not holding a weapon >.>
  if (!fighter.activeWeapon) return false;

  // Only disarm if opponent has `ironHead`
  if (!opponent.ironHead) return false;

  // 30% chance to disarm the attacker
  return Math.random() < 0.3;
};

const reversal = (opponent: DetailedFighter) => {
  const random = Math.random();

  return random < getFighterStat(opponent, 'reversal');
};

const attack = (
  fightData: DetailedFight,
  fighter: DetailedFighter,
  opponent: DetailedFighter,
  stats: Stats,
  achievements: AchievementsStore,
) => {
  // Abort if fighter is dead
  if (fighter.hp <= 0) return { blocked: false };

  // Get damage
  let damage = getDamage(fighter, opponent);

  const blocked = block(fighter, opponent);
  const evaded = evade(fighter, opponent);
  const brokeShield = breakShield(fighter, opponent);

  // Prepare attempt step
  const attemptStep: AttemptHitStep = {
    a: StepType.AttemptHit,
    f: fighter.id,
    t: opponent.id,
    w: fighter.activeWeapon ? WeaponByName[fighter.activeWeapon.name] : undefined,
  };

  // Check if opponent evaded
  if (evaded) {
    // Add attempt step as is
    fightData.steps.push(attemptStep);

    damage = 0;

    // Add evade step
    fightData.steps.push({
      a: StepType.Evade,
      f: opponent.id,
    });

    // Update evasion stat
    updateStats(stats, opponent.id, 'evades', 1);
    updateStats(stats, opponent.id, 'consecutiveEvades', 1);
    checkAchievements(stats, achievements);
  } else {
    // Reset evasion stat
    updateStats(stats, opponent.id, 'consecutiveEvades', 0);

    // Check if the opponent shield broke
    if (brokeShield) {
      // Update disarm stat
      updateStats(stats, fighter.id, 'disarms', 1);

      // Add attempt step with shield break
      attemptStep.b = 1;
      fightData.steps.push(attemptStep);

      // Remove shield from opponent
      opponent.shield = false;
      opponent.block -= SHIELD_BLOCK_ODDS;
    } else {
      // Add attempt step as is
      fightData.steps.push(attemptStep);
    }

    // Check if opponent blocked
    if (blocked) {
      damage = 0;

      // Add block step
      fightData.steps.push({
        a: StepType.Block,
        f: opponent.id,
      });

      // Update block stat
      updateStats(stats, opponent.id, 'blocks', 1);
      updateStats(stats, opponent.id, 'consecutiveBlocks', 1);
      checkAchievements(stats, achievements);
    } else {
      // Reset block stat
      updateStats(stats, opponent.id, 'consecutiveBlocks', 0);
    }
  }

  // Check if the fighter sabotages an opponent's weapon
  if (damage && fighter.sabotage) {
    if (opponent.weapons.length) {
      // Remove a random weapon
      const weapon = opponent.weapons.splice(randomBetween(0, opponent.weapons.length - 1), 1)[0];

      // Add sabotage step
      fightData.steps.push({
        a: StepType.Sabotage,
        f: fighter.id,
        t: opponent.id,
        w: WeaponByName[weapon.name],
      });
    }
  }

  // Check if the fighter disarms the opponent
  if (damage && disarm(fighter, opponent)) {
    if (opponent.activeWeapon) {
      // Add disarm step
      fightData.steps.push({
        a: StepType.Disarm,
        f: fighter.id,
        t: opponent.id,
        w: WeaponByName[opponent.activeWeapon.name],
      });

      // Remove weapon from opponent
      opponent.activeWeapon = null;

      // Update disarm stat
      updateStats(stats, fighter.id, 'disarms', 1);
    }
  }

  // Register hit if damage was done
  if (damage) {
    registerHit(fightData, stats, achievements, fighter, [opponent], damage);
  }

  // Check if the fighter gets disarmed
  if (damage && disarmAttacker(fighter, opponent)) {
    if (fighter.activeWeapon) {
      // Add disarm step
      fightData.steps.push({
        a: StepType.Disarm,
        f: opponent.id,
        t: fighter.id,
        w: WeaponByName[fighter.activeWeapon.name],
      });

      // Remove weapon from fighter
      fighter.activeWeapon = null;

      // Update disarm stat
      updateStats(stats, opponent.id, 'disarms', 1);
    }
  }

  // Randomly trigger another attack if the fighter has `determination`
  if (!damage && fighter.determination && Math.random() < 0.7) {
    fighter.retryAttack = true;
  }

  const reversed = reversal(opponent);

  return {
    blocked: !evaded && blocked,
    reversed: (!evaded && reversed) || (!evaded && blocked && opponent.autoReversalOnBlock),
  };
};

export const checkDeaths = (
  fightData: DetailedFight,
  stats: Stats,
) => {
  for (let i = 0; i < fightData.fighters.length; i++) {
    const fighter = fightData.fighters[i];

    // Only add death step if fighter is dead and hasn't died yet
    if (fighter.hp <= 0 && fightData.steps.filter((step) => step.a === StepType.Death
      && step.f === fighter.id).length === 0) {
      // Add death step
      fightData.steps.push({
        a: StepType.Death,
        f: fighter.id,
      });

      // Update pet kills stat
      if (fighter.type === 'pet') {
        const { master } = fighter;

        if (!master) {
          throw new Error('Pet without master');
        }

        const opponent = fightData.fighters.find((f) => f.id !== master && !f.master);

        if (opponent) {
          updateStats(stats, opponent.id, 'petsKilled', 1);
        }
      }

      // Set loser if fighter is a main brute or a boss
      if (fighter.type === 'boss' || (fighter.type === 'brute' && !fighter.master)) {
        fightData.loser = fighter.id;
      }
    }
  }
};

const startAttack = (
  fightData: DetailedFight,
  stats: Stats,
  achievements: AchievementsStore,
  fighter: DetailedFighter,
  opponent: DetailedFighter,
  isCounter?: boolean,
) => {
  // Keep track of initial fighter HP
  const initialFighterHp = fighter.hp;

  // Was opponent trapped ?
  let opponentWasTrapped = opponent.trapped;

  const attackResult = {
    blocked: false,
    reversed: false,
  };

  // Trigger fighter attack
  const { blocked, reversed } = attack(fightData, fighter, opponent, stats, achievements);

  // Keep track of attack status
  if (blocked) attackResult.blocked = true;
  if (reversed) attackResult.reversed = true;

  // Keep track of attacks
  let attacksCount = 1;

  // Get combo chances
  let combo = getFighterStat(fighter, 'combo') + (fighter.agility * 0.01);

  // Repeat attack only if not countering
  if (!isCounter) {
    let random = Math.random();
    while (!attackResult.reversed && (random < combo || fighter.retryAttack)) {
      // Reset retry attack flag
      fighter.retryAttack = false;

      // Stop the combo if the fighter took a hit
      if (fighter.hp < initialFighterHp) {
        break;
      }

      // Decrease combo chances
      combo *= 0.5;

      // Trigger fighter attack
      const {
        blocked: comboBlocked,
        reversed: comboReversed,
      } = attack(fightData, fighter, opponent, stats, achievements);
      attacksCount++;

      // Keep track of attack status
      if (comboBlocked) attackResult.blocked = true;
      if (comboReversed) attackResult.reversed = true;

      // Opponent cannot be trapped starting from the second attack
      opponentWasTrapped = false;

      random = Math.random();
    }

    // Check if the opponent reverses the attack
    if (!opponentWasTrapped && attackResult.reversed) {
      // Update reversal stat
      updateStats(stats, opponent.id, 'consecutiveReversals', 1);
      checkAchievements(stats, achievements);

      // Trigger fighter attack
      attack(fightData, opponent, fighter, stats, achievements);
    } else {
      // Reset reversal stat
      updateStats(stats, opponent.id, 'consecutiveReversals', 0);
    }

    // Achievement for combos
    if (attacksCount === 3) {
      updateAchievement(achievements, 'combo3', 1, fighter.id);
    } else if (attacksCount === 4) {
      updateAchievement(achievements, 'combo4', 1, fighter.id);
    } else if (attacksCount >= 5) {
      updateAchievement(achievements, 'combo5', 1, fighter.id);
    }
  }

  // Reset retry attack flag
  fighter.retryAttack = false;

  // Check if a fighter is dead
  checkDeaths(fightData, stats);
};

export const playFighterTurn = (
  fightData: DetailedFight,
  stats: Stats,
  achievements: AchievementsStore,
) => {
  const fighter = fightData.fighters[0];

  // Reset throw counter
  resetOthersStats(stats, fighter.id, 'consecutiveThrows');

  // Check if backup should leave
  if (fighter.leavesAtInitiative && fighter.leavesAtInitiative <= fightData.initiative) {
    // Add backup leave step
    fightData.steps.push({
      a: StepType.Leave,
      f: fighter.id,
    });

    fightData.fighters.shift();
    return;
  }

  // Check if backup should arrive
  if (fighter.arrivesAtInitiative) {
    fighter.arrivesAtInitiative = undefined;

    // Add backup arrive step
    fightData.steps.push({
      a: StepType.Arrive,
      f: fighter.id,
    });
  }

  // Super activation
  const possibleSuper = randomlyGetSuper(fightData, fighter);
  if (possibleSuper) {
    // End turn if super activated
    if (activateSuper(fightData, possibleSuper, stats, achievements)) {
      return;
    }
  }

  // Draw weapon
  const sabotaged = drawWeapon(fightData);

  // End turn if weapon was sabotaged
  if (sabotaged) {
    return;
  }

  // Get attack type (more chances to throw a weapon the less damage it does)
  const attackType = fighter.activeWeapon?.types.includes('thrown')
    ? 'thrown'
    : fighter.activeWeapon
      ? fighter.skills.find((s) => s.name === 'hideaway')
        // 50% chance to throw a weapon if the fighter has `hideaway`
        ? randomBetween(0, 1) === 0
          ? 'thrown'
          : 'melee'
        : randomBetween(0, fighter.activeWeapon.damage) === 0
          ? 'thrown' : 'melee'
      : 'melee';

  // Get opponent
  const opponent = getRandomOpponent(fightData, fighter);

  // Melee attack
  if (attackType === 'melee') {
    const countered = !opponent.trapped && counterAttack(fighter, opponent);

    // Add move step
    fightData.steps.push({
      a: StepType.Move,
      f: fighter.id,
      t: opponent.id,
      c: countered ? 1 : 0,
    });

    // Check if opponent is not trapped and countered
    if (countered) {
      // Update counter stat
      updateStats(stats, opponent.id, 'counters', 1);
      updateStats(stats, fighter.id, 'countersTriggered', 1);
      updateStats(stats, opponent.id, 'consecutiveCounters', 1);
      checkAchievements(stats, achievements);

      // Add counter step
      fightData.steps.push({
        a: StepType.Counter,
        f: opponent.id,
        t: fighter.id,
      });

      // Opponent attacks fighter
      startAttack(fightData, stats, achievements, opponent, fighter, true);
    } else {
      // Reset counter stat
      updateStats(stats, opponent.id, 'consecutiveCounters', 0);

      // Fighter attacks opponent
      startAttack(fightData, stats, achievements, fighter, opponent);
    }

    // Check if fighter is not dead
    if (fighter.hp > 0) {
      // Add moveBack step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.id,
      });
    }
  } else {
    // Throw attack
    if (!fighter.activeWeapon) {
      throw new Error('Trying to throw a weapon but no weapon is active');
    }

    // Keep weapon if it's a thrown weapon or the fighter has `hideaway`
    const keepWeapon = fighter.activeWeapon.types.includes('thrown') || !!fighter.skills.find((s) => s.name === 'hideaway');

    let firstThrow = true;

    // Get combo chances
    let combo = getFighterStat(fighter, 'combo') + (fighter.agility * 0.01);
    let random = Math.random();

    while (firstThrow || (keepWeapon && random < combo)) {
      if (!fighter.activeWeapon) {
        throw new Error('Trying to throw a weapon but no weapon is active');
      }

      // Get damage
      let damage = getDamage(fighter, opponent, fighter.activeWeapon);

      // Add throw step
      fightData.steps.push({
        a: StepType.Throw,
        f: fighter.id,
        t: opponent.id,
        w: WeaponByName[fighter.activeWeapon.name],
        k: keepWeapon ? 1 : 0,
      });

      // Update consecutive throw stat
      updateStats(stats, fighter.id, 'consecutiveThrows', 1);
      checkAchievements(stats, achievements);

      // Check if opponent blocked (harder than melee)
      if (block(fighter, opponent, 2)) {
        damage = 0;

        // Add block step
        fightData.steps.push({
          a: StepType.Block,
          f: opponent.id,
        });

        // Update block stat
        updateStats(stats, opponent.id, 'blocks', 1);
        updateStats(stats, opponent.id, 'consecutiveBlocks', 1);
        checkAchievements(stats, achievements);
      } else {
        // Reset block stat
        updateStats(stats, opponent.id, 'consecutiveBlocks', 0);
      }

      // Check if opponent evaded (harder than melee)
      if (damage && evade(fighter, opponent, 2)) {
        damage = 0;

        // Add evade step
        fightData.steps.push({
          a: StepType.Evade,
          f: opponent.id,
        });

        // Update evade stat
        updateStats(stats, opponent.id, 'consecutiveEvades', 1);
        checkAchievements(stats, achievements);
      } else {
        // Reset evade stat
        updateStats(stats, opponent.id, 'consecutiveEvades', 0);
      }

      // Register hit if damage was done
      if (damage) {
        registerHit(fightData, stats, achievements, fighter, [opponent], damage);
      }

      // Remove fighter weapon
      if (!keepWeapon) {
        fighter.activeWeapon = null;
      }

      firstThrow = false;
      combo *= 0.5;
      random = Math.random();
    }

    // Check if a fighter is dead
    checkDeaths(fightData, stats);
  }

  // Check if fighter is poisoned
  if (!fightData.loser && fighter.hp > 0 && fighter.poisoned) {
    // Get poison damage
    const poisonDamage = Math.ceil(fighter.maxHp / 50);

    // Register the hit
    registerHit(fightData, stats, achievements, getMainOpponent(fightData, fighter), [fighter], poisonDamage, 'poison');
  }

  // Increase own initiative
  const random = randomBetween(0, 10);
  let tempo = getFighterStat(fighter, 'tempo')
    * fighter.tempo
    + (random / 100);

  // Reduce tempo lost if fighter has `bodybuilder` and is using a heavy weapon
  if (fighter.activeWeapon && fighter.bodybuilder && fighter.activeWeapon.types.includes('heavy')) {
    tempo *= 0.75;
  }

  // Increase tempo lost if fighter has `monk`
  if (fighter.monk) {
    tempo *= 2;
  }

  fighter.initiative += tempo;

  // Remove active skills
  fighter.activeSkills.forEach((skill) => {
    // Add skill expire step
    fightData.steps.push({
      a: StepType.SkillExpire,
      b: fighter.id,
      s: SkillByName[skill.name],
    });
  });
  fighter.activeSkills = [];
};
