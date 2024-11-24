/* eslint-disable no-param-reassign */
import {
  AchievementsStore,
  ArriveStep,
  SkillActivateStep,
  BASE_FIGHTER_STATS,
  DetailedFight, DetailedFighter, FighterStat, FightStat, HitStep, LeaveStep,
  NO_WEAPON_TOSS,
  randomBetween, randomItem,
  Skill,
  SkillByName, SkillModifiers, StepType, TreatStep, updateAchievement, Weapon,
  WeaponByName,
  WeaponType,
} from '@labrute/core';
import { FightModifier, PetName, SkillName } from '@labrute/prisma';
import getDamage from './getDamage.js';

export type Stats = Record<string, {
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
  hpHealed?: number;
}>;

const skillTargetsFilter = (skill: SkillName) => {
  switch (skill) {
    case SkillName.tamer: {
      // Target non-eaten dead pets
      return (f: DetailedFighter) => f.type === 'pet' && f.hp <= 0 && !f.eaten;
    }
    default: {
      return () => true;
    }
  }
};

const getFighterStat = (
  fighter: DetailedFighter,
  stat: FighterStat,
  onlyStat?: 'fighter' | 'weapon',
) => {
  // Special case for dexterity as it only exists on weapons
  if (stat === 'dexterity') {
    if (onlyStat === 'fighter') return 0;

    if (fighter.activeWeapon) {
      const weaponStat = fighter.activeWeapon[stat];

      // BODYBUILDER
      if (fighter.bodybuilder && fighter.activeWeapon.types.includes(WeaponType.HEAVY)) {
        return weaponStat
          + (SkillModifiers[SkillName.bodybuilder][FightStat.DEXTERITY]?.percent ?? 0);
      }

      return weaponStat;
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
      total += fighter.type === 'brute'
        ? BASE_FIGHTER_STATS[stat]
        : fighter.type === 'boss'
          ? fighter[stat]
          : 0;
    }
  }

  return total;
};

const resetOthersStats = (stats: Stats, excludedFighter: string, stat: keyof Omit<Stats[string], 'userId'>) => {
  for (const [bruteId, bruteStats] of Object.entries(stats)) {
    if (bruteId !== excludedFighter) {
      bruteStats[stat] = 0;
    }
  }
};

const updateStats = (stats: Stats, bruteId: string, stat: keyof Omit<Stats[number], 'userId'>, value: number, masterId?: string) => {
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
  for (const [bruteId, stat] of Object.entries(stats)) {
    const achievement = achievements[bruteId];

    if (!achievement) {
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

export const getOpponents = ({
  fightData,
  fighter,
  bruteAndBossOnly,
  petOnly,
}: {
  fightData: DetailedFight;
  fighter: DetailedFighter;
  bruteAndBossOnly?: boolean;
  petOnly?: boolean;
}) => {
  let opponents = [];

  // Remove backups not arrived yet and dead fighters
  opponents = fightData.fighters.filter((f) => !f.arrivesAtInitiative
    && f.hp > 0
    && f.team !== fighter.team);

  if (bruteAndBossOnly) {
    opponents = opponents.filter((f) => f.type === 'brute' || f.type === 'boss');
  }

  if (petOnly) {
    opponents = opponents.filter((f) => f.type === 'pet');
  }

  return opponents;
};

const getRandomOpponent = ({
  fightData,
  fighter,
  bruteAndBossOnly,
  petOnly,
  nonTrappedOnly,
}: {
  fightData: DetailedFight;
  fighter: DetailedFighter;
  bruteAndBossOnly?: boolean;
  petOnly?: boolean;
  nonTrappedOnly?: boolean;
}) => {
  const focusOpponent = fightData.modifiers.includes(FightModifier.focusOpponent);

  let opponents = getOpponents({
    fightData,
    fighter,
    bruteAndBossOnly: bruteAndBossOnly || focusOpponent,
    petOnly,
  });

  // Filter out trapped pets
  opponents = opponents.filter((f) => f.type !== 'pet' || !f.trapped);

  if (nonTrappedOnly) {
    // Filter out trapped brutes
    opponents = opponents.filter((f) => !f.trapped);
  }

  // Filter out backups if `focusOpponent` modifier
  if (focusOpponent) {
    opponents = opponents.filter((f) => !f.master);
  }

  if (!opponents.length) {
    return null;
  }

  return randomItem(opponents);
};

export const saboteur = (fightData: DetailedFight, achievements: AchievementsStore) => {
  fightData.fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master).forEach((fighter) => {
    if (fighter.saboteur) {
      const opponent = getRandomOpponent({ fightData, fighter, bruteAndBossOnly: true });
      if (opponent && opponent.weapons.length > 0) {
        const sabotagedWeapon = randomItem(opponent.weapons);
        opponent.sabotagedWeapon = sabotagedWeapon;
        updateAchievement(achievements, 'saboteur', 1, fighter.id);
      }
    }
  });
};

export const orderFighters = (fightData: DetailedFight) => {
  fightData.fighters = fightData.fighters.sort((a, b) => {
    // Last if hp <= 0
    if (a.hp <= 0) return 1;
    if (b.hp <= 0) return -1;
    // Last if stunned
    if (a.stunned) return 1;
    if (b.stunned) return -1;
    // Random is initiatives are equal
    if (a.initiative === b.initiative) {
      return Math.random() > 0.5 ? 1 : -1;
    }
    // Lower initiative first
    return a.initiative - b.initiative;
  });
};

const randomlyGetSuper = (fightData: DetailedFight, fighter: DetailedFighter) => {
  let supers = fighter.skills.filter((skill) => skill.uses);

  if (!supers.length) return null;

  // Filter out tamer if no valid target or lost less than 20% HP
  if (fightData.fighters.filter(skillTargetsFilter(SkillName.tamer)).length === 0
    || fighter.hp > fighter.maxHp * 0.8) {
    supers = supers.filter((skill) => skill.name !== SkillName.tamer);
  }

  // Filter out thief if non trapped opponents have no weapons in hand
  if (getOpponents({ fightData, fighter, bruteAndBossOnly: true })
    .filter((f) => !f.trapped && f.activeWeapon).length === 0) {
    supers = supers.filter((skill) => skill.name !== SkillName.thief);
  }

  // Filter out tragicPotion if not poisoned or lost less than 50 HP
  if (!fighter.poisoned && fighter.hp > fighter.maxHp / 2) {
    supers = supers.filter((skill) => skill.name !== SkillName.tragicPotion);
  }

  // Filter out cryOfTheDamned and hypnosis if opponent has no non-trapped pets
  if (getOpponents({ fightData, fighter, petOnly: true })
    .filter((f) => !f.trapped).length === 0) {
    supers = supers.filter((skill) => skill.name !== SkillName.cryOfTheDamned
      && skill.name !== SkillName.hypnosis);
  }

  // Filter out bomb if fighter has hypnosis
  if (supers.some((s) => s.name === SkillName.hypnosis)) {
    supers = supers.filter((skill) => skill.name !== SkillName.bomb);
  }

  // Filter out cryOfTheDamned if fighter has hypnosis and is not stunned
  if (supers.some((s) => s.name === SkillName.hypnosis) && !fighter.stunned) {
    supers = supers.filter((skill) => skill.name !== SkillName.cryOfTheDamned);
  }

  // Filter out flashFlood if less than 3 weapons
  if (fighter.weapons.length + (fighter.activeWeapon ? 1 : 0) < 3) {
    supers = supers.filter((skill) => skill.name !== SkillName.flashFlood);
  }

  // Filter out net if no non-trapped fighters
  if (getOpponents({ fightData, fighter }).filter((f) => !f.trapped).length === 0) {
    supers = supers.filter((skill) => skill.name !== SkillName.net);
  }

  // Filter out vampirism if more than 50% hp or no brute opponent
  if (fighter.hp > fighter.maxHp / 2
    || getOpponents({ fightData, fighter, bruteAndBossOnly: true }).length === 0) {
    supers = supers.filter((skill) => skill.name !== SkillName.vampirism);
  }

  // Filter out treat if no pets lost hp or no pet trapped
  if (fightData.fighters.filter((f) => f.type === 'pet' && f.team === fighter.team && ((f.hp < f.maxHp) || f.trapped)).length === 0) {
    supers = supers.filter((skill) => skill.name !== SkillName.treat);
  }

  if (!supers.length) return null;

  const NO_SUPER_TOSS = fightData.modifiers.includes(FightModifier.alwaysUseSupers) ? 0 : 10;
  const randomSuper = randomBetween(
    0,
    supers.reduce((acc, skill) => acc + (skill.toss || 0), -1) + NO_SUPER_TOSS,
  );

  let toss = 0;
  for (let i = 0; i < supers.length; i += 1) {
    toss += supers[i]?.toss || 0;
    if (randomSuper < toss) {
      return supers[i];
    }
  }

  return null;
};

export const randomlyDrawWeapon = (
  fightData: DetailedFight,
  weapons: Weapon[],
  forceDraw?: boolean,
) => {
  if (!weapons.length) return null;

  let totalToss = weapons.reduce((acc, weapon) => acc + (weapon.toss || 0), -1);

  if (!forceDraw && !fightData.modifiers.includes(FightModifier.drawEveryWeapon)) {
    totalToss += NO_WEAPON_TOSS;
  }

  const randomWeapon = randomBetween(0, totalToss);

  let toss = 0;
  for (let i = 0; i < weapons.length; i += 1) {
    toss += weapons[i]?.toss || 0;
    if (randomWeapon < toss) {
      return weapons[i];
    }
  }

  return null;
};

const healFighter = (
  stats: Stats,
  fighter: DetailedFighter,
  amount: number,
) => {
  fighter.hp += amount;

  // Heal stat
  updateStats(stats, fighter.id, 'hpHealed', amount);
};

const increaseInitiative = (fighter: DetailedFighter, multiplicator: number = 1) => {
  const random = randomBetween(0, 10);
  let tempo = getFighterStat(fighter, 'tempo')
    * fighter.tempo
    + (random / 100);

  // Reduce tempo lost if fighter has `bodybuilder` and is using a heavy weapon
  if (fighter.activeWeapon
    && fighter.bodybuilder
    && fighter.activeWeapon.types.includes(WeaponType.HEAVY)) {
    tempo *= 1 - (SkillModifiers[SkillName.bodybuilder][FightStat.HIT_SPEED]?.percent ?? 0);
  }

  // Increase tempo lost if fighter has `monk`
  if (fighter.monk) {
    tempo *= 1 - (SkillModifiers[SkillName.monk][FightStat.HIT_SPEED]?.percent ?? 0);
  }

  fighter.initiative += tempo * multiplicator;
};

export const fighterArrives = (
  fightData: DetailedFight,
  fighter: DetailedFighter,
) => {
  const arriveWithWeapon = fightData.modifiers.includes(FightModifier.startWithWeapon);

  const step: ArriveStep = {
    a: StepType.Arrive,
    f: fighter.index,
  };

  if (arriveWithWeapon) {
    // Randomly draw a weapon for the fighter
    const possibleWeapon = randomlyDrawWeapon(fightData, fighter.weapons, true);

    if (possibleWeapon) {
      // Equip weapon
      fighter.activeWeapon = possibleWeapon;
      fighter.keepWeaponChance = 0.5;

      // Remove weapon from possible weapons
      const weaponIndex = fighter.weapons.findIndex((w) => w.name === possibleWeapon.name);
      fighter.weapons.splice(weaponIndex, 1);

      // Add weapon to step
      step.w = WeaponByName[possibleWeapon.name];
    }
  }

  // Poison fighters (not on bosses) (doesn't trigger for backups)
  if (!fighter.master && fighter.skills.find((skill) => skill.name === SkillName.chef)) {
    getOpponents({ fightData, fighter }).forEach((opponent) => {
      if (opponent.type !== 'boss') {
        opponent.poisoned = true;
      }
    });
  }

  fightData.steps.push(step);
};

const registerHit = (
  fightData: DetailedFight,
  stats: Stats,
  achievements: AchievementsStore,
  fighter: DetailedFighter,
  opponents: DetailedFighter[],
  damage: number,
  thrown?: boolean,
  sourceName?: 'hammer' | 'flashFlood' | 'poison' | 'bomb' | 'vampirism' | 'haste',
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
    [opponent.index]: (sourceName === 'bomb' && opponent.type === 'pet')
      ? Math.round(
        ((randomBetween(
          ...bombDamageRangeOnPets[opponent.name as PetName],
        ) / 100) * opponent.maxHp),
      )
      : damage,
  }), {});

  const previousTrappedOpponents = opponents.filter((opponent) => opponent.trapped);

  opponents.forEach((opponent) => {
    // Remove the net and reset initiative
    if (opponent.trapped) {
      opponent.trapped = false;
      opponent.initiative = fightData.initiative + 0.5;

      // Stun brute opponents
      if (opponent.type === 'brute') {
        opponent.stunned = true;
      }
    }

    // Max damage to 20% of opponent's health if `resistant`
    if (opponent.skills.find((sk) => sk.name === 'resistant')) {
      actualDamage[opponent.index] = Math.min(damage, Math.floor(opponent.maxHp * 0.2));

      if ((actualDamage[opponent.index] ?? damage) < damage) {
        // Add resist step
        fightData.steps.push({
          a: StepType.Resist,
          b: opponent.index,
        });
      }
    }

    // 0 damage if immune
    if (opponent.immune) {
      actualDamage[opponent.index] = 0;

      // Remove immune status
      opponent.immune = false;

      // Add resist step
      fightData.steps.push({
        a: StepType.Resist,
        b: opponent.index,
      });
    }

    const opponentDamage = actualDamage[opponent.index] ?? damage;

    // Reduce backup leave time instead of reducing hp
    if (opponent.leavesAtInitiative) {
      opponent.leavesAtInitiative -= opponentDamage * 0.05;
    } else {
      opponent.hp -= opponentDamage;
    }
  });

  if (sourceName === 'bomb') {
    // Add bomb step
    fightData.steps.push({
      a: StepType.Bomb,
      f: fighter.index,
      t: opponents.map((opponent) => opponent.index),
      d: opponents.reduce((acc, curr) => {
        acc[curr.index] = actualDamage[curr.index] ?? damage;
        return acc;
      }, {} as Record<number, number>),
    });
  } else if (sourceName === 'vampirism') {
    const opponent = opponents[0];

    if (!opponent) {
      throw new Error('No opponent found');
    }

    // HP healed (100 - 200% of damage)
    const finalDamage = actualDamage[opponent.index] ?? damage;
    const heal = Math.floor(
      Math.min(finalDamage * (1 + Math.random()), fighter.maxHp - fighter.hp),
    );
    healFighter(stats, fighter, heal);

    // Add vampirism step
    fightData.steps.push({
      a: StepType.Vampirism,
      b: fighter.index,
      t: opponent.index,
      d: actualDamage[opponent.index] ?? damage,
      h: heal,
    });
  } else if (sourceName === 'haste') {
    const opponent = opponents[0];

    if (!opponent) {
      throw new Error('No opponent found');
    }

    // Add haste step
    fightData.steps.push({
      a: StepType.Haste,
      b: fighter.index,
      t: opponent.index,
      d: actualDamage[opponent.index] ?? damage,
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

      const step: HitStep = {
        a: stepType,
        f: fighter.index,
        t: opponent.index,
        w: sourceName
          ? (flashFloodWeapon
            ? WeaponByName[flashFloodWeapon.name]
            : undefined)
          : fighter.activeWeapon ? WeaponByName[fighter.activeWeapon.name] : undefined,
        d: actualDamage[opponent.index] ?? damage,
      };

      // Reset consecutive hits
      if (sourceName !== 'poison') {
        fighter.hitBy[opponent.index] = 0;
      }

      // Remove stun if normal hit while stunned
      if (opponent.stunned
        && stepType === StepType.Hit
        && !previousTrappedOpponents.some((o) => o.id === opponent.id)) {
        opponent.stunned = false;
      }

      if (!thrown && !sourceName && !flashFloodWeapon && opponent.type === 'brute') {
        // Update consecutive hits
        opponent.hitBy[fighter.index] = (opponent.hitBy[fighter.index] || 0) + 1;

        // Stun opponent if 3 hits in a row
        if (fighter.skills.find((s) => s.name === SkillName.chaining)
          && (opponent.hitBy[fighter.index] || 0) === 3) {
          step.s = 1;
          opponent.stunned = true;
          opponent.hitBy[fighter.index] = 0;
        }
      }

      // Add hit step
      fightData.steps.push(step);
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
        b: opponent.index,
      });
    }
  });

  // Update stats
  updateStats(stats, fighter.id, 'hits', 1, fighter.master);
};

const dropShield = ({
  fightData,
  fighter,
  addStep = true,
}: {
  fightData: DetailedFight;
  fighter: DetailedFighter;
  addStep?: boolean;
}) => {
  // Remove brute's shield
  fighter.shield = false;
  fighter.skills = fighter.skills.filter((sk) => sk.name !== SkillName.shield);
  fighter.block -= SkillModifiers[SkillName.shield][FightStat.BLOCK]?.percent ?? 0;

  if (addStep) {
    fightData.steps.push({
      a: StepType.DropShield,
      b: fighter.index,
    });
  }
};

const activateSuper = (
  fightData: DetailedFight,
  fighter: DetailedFighter,
  skill: Skill,
  stats: Stats,
  achievements: AchievementsStore,
): boolean => {
  // No uses left (should never happen)
  if (!skill.uses) return false;

  // Can't use super while hypnotized
  if (fighter.hypnotized) return false;

  switch (skill.name) {
    // Steal opponent's weapon if he has one
    case SkillName.thief: {
      // Choose brute opponent
      const opponents = getOpponents({ fightData, fighter, bruteAndBossOnly: true })
        .filter((f) => !f.trapped && f.activeWeapon);

      if (!opponents.length) {
        return false;
      }

      const opponent = randomItem(opponents);

      if (!opponent) {
        return false;
      }

      // Abort if no weapon
      if (!opponent.activeWeapon) {
        throw new Error('No weapon to steal');
      }

      // 20% chance to steal if fighter already has a weapon
      if (fighter.activeWeapon && randomBetween(1, 5) !== 1) {
        return false;
      }

      // Remove own weapon
      if (fighter.activeWeapon) {
        // Add trash step
        fightData.steps.push({
          a: StepType.Trash,
          b: fighter.index,
          w: WeaponByName[fighter.activeWeapon.name],
        });

        fighter.activeWeapon = null;
      }

      // Add steal step
      fightData.steps.push({
        a: StepType.Steal,
        b: fighter.index,
        w: WeaponByName[opponent.activeWeapon.name],
        t: opponent.index,
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

      break;
    }
    case SkillName.fierceBrute: {
      // Add skill to active skills
      fighter.activeSkills.push(skill);

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.index,
        s: SkillByName[skill.name],
      });

      break;
    }
    case SkillName.tragicPotion: {
      let hpHealed = Math.floor(fighter.maxHp * (0.25 + Math.random() * 0.25));
      let poisonHeal = false;

      // Limit hp to max
      hpHealed = Math.min(hpHealed, fighter.maxHp - fighter.hp);
      healFighter(stats, fighter, hpHealed);

      if (fighter.poisoned) {
        fighter.poisoned = false;
        poisonHeal = true;
      }

      // Increas own initiative
      fighter.initiative += 0.15;

      // Add heal step
      fightData.steps.push({
        a: StepType.Heal,
        b: fighter.index,
        h: hpHealed,
        c: poisonHeal ? 1 : 0,
      });

      break;
    }
    case SkillName.net: {
      // Target pet first
      let opponent = getRandomOpponent({
        fightData, fighter, petOnly: true, nonTrappedOnly: true,
      });

      // Does fighter has anti-pet skills
      const fighterHasAntiPet = fighter.skills.some((s) => s.name === SkillName.hypnosis
          || s.name === SkillName.cryOfTheDamned
          || s.name === SkillName.bomb);

      // Chose brute opponent
      if (!opponent || fighterHasAntiPet) {
        opponent = getRandomOpponent({
          fightData, fighter, bruteAndBossOnly: true, nonTrappedOnly: true,
        });
        // Can happen in edge multiBrute and pet fights
        if (!opponent) {
          return false;
        }
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
        b: fighter.index,
        t: opponent.index,
      });

      break;
    }
    case SkillName.bomb: {
      // Get opponents
      const opponents = getOpponents({ fightData, fighter });

      // Set random bomb damage
      const damage = 15 + randomBetween(0, 10);

      // Hit every opponent
      registerHit(fightData, stats, achievements, fighter, opponents, damage, true, 'bomb');

      // Increase own initiative
      fighter.initiative += 0.5 * fighter.tempo;

      break;
    }
    case SkillName.hammer: {
      // Only 20% to use the skill if fighter has a weapon
      if (fighter.activeWeapon) {
        if (randomBetween(1, 5) === 1) {
          // Add trash step
          fightData.steps.push({
            a: StepType.Trash,
            b: fighter.index,
            w: WeaponByName[fighter.activeWeapon.name],
          });

          fighter.activeWeapon = null;
        } else {
          return false;
        }
      }

      // Drop shield
      if (fighter.shield) {
        dropShield({ fightData, fighter });
      }

      // Choose opponent
      const opponent = getRandomOpponent({ fightData, fighter, bruteAndBossOnly: true });

      if (!opponent) {
        return false;
      }

      // Add to active skills
      fighter.activeSkills.push(skill);

      // Get damage
      const damage = getDamage(fighter, opponent);

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.index,
        s: SkillByName[skill.name],
      });

      // Add move step
      fightData.steps.push({
        a: StepType.Move,
        f: fighter.index,
        t: opponent.index,
        s: 1,
      });

      registerHit(fightData, stats, achievements, fighter, [opponent], damage, false, 'hammer');

      // Disarm opponent's shield
      if (opponent.shield) {
        dropShield({ fightData, fighter: opponent });

        // Update disarm stat
        updateStats(stats, fighter.id, 'disarms', 1);
      }

      // Add disarm step
      if (opponent.activeWeapon) {
        fightData.steps.push({
          a: StepType.Disarm,
          f: fighter.index,
          t: opponent.index,
          w: WeaponByName[opponent.activeWeapon.name],
        });

        opponent.activeWeapon = null;

        // Update disarm stat
        updateStats(stats, fighter.id, 'disarms', 1);
      }

      // Add move back step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.index,
      });

      // Increase own initiative
      fighter.initiative += 1 * fighter.tempo;

      // Add skill expire step
      fightData.steps.push({
        a: StepType.SkillExpire,
        b: fighter.index,
        s: SkillByName[skill.name],
      });

      // Remove skill from active skills
      fighter.activeSkills = fighter.activeSkills.filter((s) => s.name !== skill.name);

      break;
    }
    case SkillName.cryOfTheDamned: {
      // Get opponent's non trapped pets
      const opponentPets = getOpponents({ fightData, fighter, petOnly: true })
        .filter((f) => !f.trapped);

      // Keep track of fear steps
      const fearSteps: LeaveStep[] = [];
      // Keep track of unafraid pets indexes
      const unafraidPetIndexes = [];

      for (const pet of opponentPets) {
        // 50% chance to fear the pet
        if (randomBetween(0, 1) === 0) {
          fearSteps.push({
            a: StepType.Leave,
            f: pet.index,
          });
          // Remove pet from fight
          fightData.fighters = fightData.fighters
            .filter((f) => f.index !== pet.index);
        } else {
          // Set remaining pets to play just after
          pet.initiative = fighter.initiative - 0.01;
          unafraidPetIndexes.push(pet.index);
        }
      }

      // Increase opponents initiative
      getOpponents({ fightData, fighter, bruteAndBossOnly: true })
        .forEach((opponent) => {
          opponent.initiative += 0.15;
        });

      // Add fear steps
      fightData.steps = fightData.steps.concat(fearSteps);

      // Prepare skill activation step
      const cryStep: SkillActivateStep = {
        a: StepType.SkillActivate,
        b: fighter.index,
        s: SkillByName[skill.name],
      };

      // Add unafraid pets
      if (unafraidPetIndexes.length) {
        cryStep.p = unafraidPetIndexes;
      }

      // Add skill activation step
      fightData.steps.push(cryStep);

      break;
    }
    case SkillName.hypnosis: {
      // Get opponent's non trapped pets
      const opponentPets = getOpponents({ fightData, fighter, petOnly: true })
        .filter((f) => !f.trapped);

      // Keep track of hypnotised pets
      const hypnotisedPets: number[] = [];

      for (const pet of opponentPets) {
        hypnotisedPets.push(pet.index);

        // Change pet owner
        pet.master = fighter.id;
        pet.team = fighter.team;
        // Set pet initiative to fighter initiative (to act right after)
        pet.initiative = fighter.initiative - 0.01;
      }

      // Hypnotize opponent's brutes and bosses
      const opponents = getOpponents({ fightData, fighter, bruteAndBossOnly: true });
      opponents.forEach((opponent) => {
        opponent.hypnotized = true;
      });

      // Add hypnotise step
      fightData.steps.push({
        a: StepType.Hypnotise,
        b: fighter.index,
        t: opponents.map((opponent) => opponent.index),
        p: hypnotisedPets,
      });

      break;
    }
    case SkillName.flashFlood: {
      // Choose opponent
      const opponent = getRandomOpponent({ fightData, fighter, bruteAndBossOnly: true });

      if (!opponent) {
        return false;
      }

      let throwShield = false;
      // Check if this is the last flashFlood cast, either by lack of uses or weapons
      if (fighter.shield && (skill.uses === 1 || fighter.weapons.length < 6)) {
        // Then throw shield
        throwShield = true;
        dropShield({ fightData, fighter, addStep: false });
      }

      // Shuffle weapons
      const shuffledWeapons = [...fighter.weapons].sort(() => Math.random() - 0.5);
      // Get 3 weapons
      const weaponsToThrow = shuffledWeapons.slice(0, fighter.activeWeapon ? 2 : 3);

      // Remove those weapons from the fighter
      weaponsToThrow.forEach((w) => {
        const weaponIndex = fighter.weapons.findIndex((weapon) => weapon.name === w.name);
        fighter.weapons.splice(weaponIndex, 1);
      });

      // Add active weapon as first weapon if any
      if (fighter.activeWeapon) {
        weaponsToThrow.unshift(fighter.activeWeapon);
        fighter.activeWeapon = null;
      }

      // Add skill activation step
      fightData.steps.push({
        a: StepType.SkillActivate,
        b: fighter.index,
        s: SkillByName[skill.name],
      });

      // Get damages for each weapon
      const damages = [];
      weaponsToThrow.forEach((w) => {
        const damage = Math.floor(getDamage(fighter, opponent, w) * 1.5);
        damages.push(damage);

        registerHit(fightData, stats, achievements, fighter, [opponent], damage, true, 'flashFlood', w);
      });

      if (throwShield) {
        // Stun brute opponent
        if (opponent.type === 'brute') opponent.stunned = true;
        // Add throw shield step
        fightData.steps.push({
          a: StepType.FlashFlood,
          f: fighter.index,
          t: opponent.index,
          d: 0,
          s: 1,
        });
      }

      // Add skill expire step
      fightData.steps.push({
        a: StepType.SkillExpire,
        b: fighter.index,
        s: SkillByName[skill.name],
      });

      // Increase own initiative
      fighter.initiative += 2 * fighter.tempo;

      break;
    }
    case SkillName.tamer: {
      // Get targets
      const deadPets = fightData.fighters.filter(skillTargetsFilter(SkillName.tamer));

      if (deadPets.length === 0) return false;

      // Get random dead pet
      const pet = randomItem(deadPets);

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
      healFighter(stats, fighter, heal);

      // Increase own initiative
      fighter.initiative += 0.15;

      // Set pet as eaten
      pet.eaten = true;

      // Add move step
      fightData.steps.push({
        a: StepType.Move,
        f: fighter.index,
        t: pet.index,
        s: 1,
      });

      // Add eat step
      fightData.steps.push({
        a: StepType.Eat,
        b: fighter.index,
        t: pet.index,
        h: heal,
      });

      // Add moveBack step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.index,
      });

      break;
    }
    case SkillName.vampirism: {
      // Choose opponent
      const opponent = getRandomOpponent({ fightData, fighter, bruteAndBossOnly: true });

      if (!opponent) {
        return false;
      }

      // Damage done (25% own missing hp)
      const damage = Math.floor((fighter.maxHp - fighter.hp) * 0.25);

      registerHit(fightData, stats, achievements, fighter, [opponent], damage, false, 'vampirism');

      // Increase own initiative
      fighter.initiative += 0.3 + fighter.tempo;
      break;
    }
    case SkillName.haste: {
      // Choose random opponent
      const opponent = getRandomOpponent({ fightData, fighter });

      if (!opponent) {
        return false;
      }

      // Damage done (usual + speed)
      const damage = getDamage(fighter, opponent) + fighter.speed;

      registerHit(fightData, stats, achievements, fighter, [opponent], damage, false, 'haste');

      // Increase own initiative
      fighter.initiative += 0.3 + fighter.tempo;
      break;
    }
    case SkillName.treat: {
      // Choose random ally pet
      const pets = fightData.fighters.filter((f) => f.type === 'pet' && f.team === fighter.team && f.hp > 0);
      const pet = pets.find((p) => (p.hp < p.maxHp) || p.trapped);

      if (!pet) {
        return false;
      }

      // HP healed (max 50%)
      const heal = Math.min(
        Math.floor(pet.maxHp * 0.5),
        pet.maxHp - pet.hp,
      );
      pet.hp += heal;

      let poisonHeal = false;

      if (pet.poisoned) {
        pet.poisoned = false;
        poisonHeal = true;
      }

      // Untrap pet
      if (pet.trapped) {
        pet.trapped = false;
      }

      // Set pet initiative to fighter initiative (to act right after)
      pet.initiative = fighter.initiative - 0.01;

      // Give immunity to pet
      pet.immune = true;

      // Add move step
      fightData.steps.push({
        a: StepType.Move,
        f: fighter.index,
        t: pet.index,
        s: 1,
      });

      // Add treat step
      const step: TreatStep = {
        a: StepType.Treat,
        b: fighter.index,
        t: pet.index,
        h: heal,
      };

      if (poisonHeal) {
        step.c = 1;
      }

      fightData.steps.push(step);

      // Add moveBack step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.index,
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

  // No counter attack if opponent is trapped
  if (opponent.trapped) return false;

  // No counter attack if opponent is stunned
  if (opponent.stunned) return false;

  // No counter attack if opponent is hypnotized
  if (opponent.hypnotized) return false;

  const random = Math.random();

  const valueToBeat = (
    opponent.counter * 10
    + (
      (opponent.reach + (opponent.activeWeapon?.reach || 0))
      - (fighter.reach + (fighter.activeWeapon?.reach || 0))
    )
  ) * 0.1;

  return random < valueToBeat;
};

// Returns true if weapon was sabotaged
const drawWeapon = (fightData: DetailedFight, fighter: DetailedFighter): boolean => {
  const bareHandsFirstHit = fightData.modifiers.includes(FightModifier.bareHandsFirstHit);

  // Don't draw a weapon if the fighter hasn't hit yet
  if (bareHandsFirstHit && !fighter.bareHandHit) {
    return false;
  }

  const drawEveryWeapon = fightData.modifiers.includes(FightModifier.drawEveryWeapon);

  // Don't always draw a weapon if the fighter is already holding a weapon
  if (fighter.activeWeapon
    && !drawEveryWeapon
    && randomBetween(0, fighter.weapons.length * 2) === 0) return false;

  // Draw a weapon
  const possibleWeapon = randomlyDrawWeapon(fightData, fighter.weapons);

  // Decrease `keepWeaponChance` each turn and abort until true
  if (fighter.activeWeapon && !drawEveryWeapon && Math.random() < fighter.keepWeaponChance) {
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
      b: fighter.index,
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
    b: fighter.index,
    w: WeaponByName[possibleWeapon.name],
  });

  // Check if weapon was sabotaged
  if (fighter.sabotagedWeapon?.name === possibleWeapon.name) {
    // Add saboteur step
    fightData.steps.push({
      a: StepType.Saboteur,
      b: fighter.index,
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

const block = ({
  fighter,
  opponent,
  thrown = false,
  ease = 1,
}: {
  fighter: DetailedFighter,
  opponent: DetailedFighter,
  thrown?: boolean,
  ease?: number,
}) => {
  // No block if opponent is dead
  if (opponent.hp <= 0) return false;

  // No block if opponent is trapped
  if (opponent.trapped) return false;

  // No block if opponent is stunned
  if (opponent.stunned) return false;

  // No block for pets and bosses
  if (opponent.type === 'pet' || opponent.type === 'boss') return false;

  let opponentBlock = getFighterStat(opponent, 'block');

  // increase block if blocking a throwing a weapon with `Hideaway`
  if (thrown && opponent.skills.find((sk) => sk.name === SkillName.hideaway)) {
    opponentBlock += SkillModifiers[SkillName.hideaway][FightStat.BLOCK]?.percent ?? 0;
  }

  return Math.random() * ease
    < (opponentBlock - getFighterStat(fighter, 'accuracy'));
};

const evade = (fighter: DetailedFighter, opponent: DetailedFighter, difficulty = 1) => {
  // No evasion if opponent is dead
  if (opponent.hp <= 0) return false;

  // No evasion if opponent is trapped
  if (opponent.trapped) return false;

  // No evasion if opponent is stunned
  if (opponent.stunned) return false;

  // Automatically evade if fighter is hypnotized
  if (fighter.hypnotized) return true;

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
        - getFighterStat(fighter, 'accuracy')
        - getFighterStat(fighter, 'dexterity')),
      0.9,
    );
};

const breakShield = (fighter: DetailedFighter, opponent: DetailedFighter) => {
  // Can't break someone's shield if they are not holding a shield >.>
  if (!opponent.shield) return false;

  return getFighterStat(fighter, 'disarm') * 100 >= randomBetween(1, 300);
};

const disarm = (
  fighter: DetailedFighter,
  opponent: DetailedFighter,
  thrown?: boolean,
) => {
  // Can't disarm someone if they are not holding a weapon >.>
  if (!opponent.activeWeapon) return false;

  return getFighterStat(fighter, 'disarm', thrown ? 'weapon' : undefined) * 100 >= randomBetween(1, 100);
};

const disarmAttacker = (fighter: DetailedFighter, opponent: DetailedFighter) => {
  // Can't disarm someone if they are not holding a weapon >.>
  if (!fighter.activeWeapon) return false;

  // Only disarm if opponent has `ironHead`
  if (!opponent.ironHead) return false;

  // 50% chance to disarm the attacker
  return Math.random() < 0.5;
};

const reversal = (opponent: DetailedFighter, blocked: boolean) => {
  // No reversal if stunned
  if (opponent.stunned) return false;

  const random = Math.random();

  let reversalStat = getFighterStat(opponent, 'reversal');

  // Incrase reversal when blocking with counterAttack
  if (blocked && opponent.skills.find((sk) => sk.name === SkillName.counterAttack)) {
    reversalStat += SkillModifiers[SkillName.counterAttack][FightStat.REVERSAL]?.percent ?? 0;
  }

  return random < reversalStat;
};

const deflectProjectile = (fighter: DetailedFighter) => {
  // No deflect if dead
  if (fighter.hp <= 0) return false;

  // No deflect if trapped
  if (fighter.trapped) return false;

  // No deflect if stunned
  if (fighter.stunned) return false;

  const random = Math.random();

  return random < getFighterStat(fighter, 'deflect');
};

const attack = (
  fightData: DetailedFight,
  fighter: DetailedFighter,
  opponent: DetailedFighter,
  stats: Stats,
  achievements: AchievementsStore,
  isCounter = false,
) => {
  // Abort if fighter is dead
  if (fighter.hp <= 0) return { blocked: false, lostReach: 0 };

  // Remove hypnotized from opponent
  if (opponent.hypnotized) {
    opponent.hypnotized = false;

    // Add hypnosis expire step
    fightData.steps.push({
      a: StepType.SkillExpire,
      b: opponent.index,
      s: SkillByName[SkillName.hypnosis],
    });
  }

  // Get damage
  let damage = getDamage(fighter, opponent);

  const blocked = block({ fighter, opponent });
  const evaded = evade(fighter, opponent);
  const brokeShield = breakShield(fighter, opponent);

  // Add attempt step
  fightData.steps.push({
    a: StepType.AttemptHit,
    f: fighter.index,
    t: opponent.index,
    w: fighter.activeWeapon ? WeaponByName[fighter.activeWeapon.name] : undefined,
  });
  // Check if opponent evaded
  if (evaded) {
    damage = 0;

    // Add evade step
    fightData.steps.push({
      a: StepType.Evade,
      f: opponent.index,
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

      // Remove shield from opponent
      dropShield({ fightData, fighter: opponent });
    }

    // Check if opponent blocked
    if (blocked) {
      damage = 0;

      // Add block step
      fightData.steps.push({
        a: StepType.Block,
        f: opponent.index,
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
    // 90% chance to sabotage
    if (opponent.weapons.length && Math.random() < 0.9) {
      // Remove a random weapon
      const weapon = opponent.weapons.splice(randomBetween(0, opponent.weapons.length - 1), 1)[0];

      if (!weapon) {
        throw new Error('No weapon found');
      }

      // Add sabotage step
      fightData.steps.push({
        a: StepType.Sabotage,
        f: fighter.index,
        t: opponent.index,
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
        f: fighter.index,
        t: opponent.index,
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

    // Register first bare hands hit
    if (!fighter.activeWeapon && !fighter.bareHandHit) {
      fighter.bareHandHit = true;
    }
  }

  let lostReach = 0;
  // Check if the fighter gets disarmed
  if (damage && disarmAttacker(fighter, opponent)) {
    if (fighter.activeWeapon) {
      // Add disarm step
      fightData.steps.push({
        a: StepType.Disarm,
        f: opponent.index,
        t: fighter.index,
        w: WeaponByName[fighter.activeWeapon.name],
      });

      // Store the lost reach
      lostReach = fighter.activeWeapon.reach;

      // Remove weapon from fighter
      fighter.activeWeapon = null;

      // Update disarm stat
      updateStats(stats, opponent.id, 'disarms', 1);
    }
  }

  // Randomly trigger another attack if the fighter has `determination`
  if (!isCounter
    && !damage
    && fighter.determination
    && !fighter.hypnotized
    && Math.random() < 0.7) {
    fighter.retryAttack = true;
  }

  const reversed = reversal(opponent, blocked);

  return {
    blocked: !evaded && blocked,
    reversed: !evaded && reversed,
    lostReach,
  };
};

export const checkDeaths = (
  fightData: DetailedFight,
  stats: Stats,
) => {
  for (const fighter of fightData.fighters) {
    // Only add death step if fighter is dead and hasn't died yet
    if (fighter.hp <= 0 && fightData.steps.filter((step) => step.a === StepType.Death
      && step.f === fighter.index).length === 0) {
      // Add death step
      fightData.steps.push({
        a: StepType.Death,
        f: fighter.index,
      });

      // If fighter is pet, update pet kills stat
      if (fighter.type === 'pet') {
        const { master } = fighter;

        if (!master) {
          throw new Error('Pet without master');
        }

        const opponents = getOpponents({ fightData, fighter, bruteAndBossOnly: true });

        opponents.forEach((opponent) => {
          updateStats(stats, opponent.id, 'petsKilled', 1);
        });
      // Else, set loser to fighter if team has no brutes or bosses alive
      } else if (!fightData.loser && fightData.fighters.filter((f) => f.team === fighter.team
        && !f.master
        && f.hp > 0).length === 0) {
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
    lostReach: 0,
  };

  // Trigger fighter attack
  const {
    blocked,
    reversed,
    lostReach,
  } = attack(fightData, fighter, opponent, stats, achievements, isCounter);

  // Keep track of attack status
  if (blocked) attackResult.blocked = true;
  if (reversed) attackResult.reversed = true;
  attackResult.lostReach = lostReach;

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

      // If fighter has less reach than when combo started, move them closer
      // Do this only if more than 1 reach has been lost as it would elsewise look gimmical
      if (attackResult.lostReach > 1) {
        // Add move melee reposition step
        fightData.steps.push({
          a: StepType.Move,
          f: fighter.index,
          t: opponent.index,
          r: 1,
        });
      }

      // Decrease combo chances
      combo *= 0.5;

      // Trigger fighter attack
      const {
        blocked: comboBlocked,
        reversed: comboReversed,
        lostReach: comboLostReach,
      } = attack(fightData, fighter, opponent, stats, achievements);
      attacksCount++;

      // Keep track of attack status
      if (comboBlocked) attackResult.blocked = true;
      if (comboReversed) attackResult.reversed = true;
      attackResult.lostReach = comboLostReach;

      // Opponent cannot be trapped starting from the second attack
      opponentWasTrapped = false;

      random = Math.random();
    }

    // Check if the opponent reverses the attack
    if (!opponentWasTrapped && attackResult.reversed && opponent.hp > 0) {
      // Update reversal stat
      updateStats(stats, opponent.id, 'consecutiveReversals', 1);
      checkAchievements(stats, achievements);

      // Check if the opponent has less reach than the fighter, and move them closer
      const opponentReach = opponent.activeWeapon?.reach ?? 0;
      const fighterReach = fighter.activeWeapon?.reach ?? 0;
      if (opponentReach < fighterReach) {
        // Add move melee reposition step
        fightData.steps.push({
          a: StepType.Move,
          f: opponent.index,
          t: fighter.index,
          r: 1,
        });
      }

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

  if (!fighter) {
    throw new Error('No fighter found');
  }

  // Reset throw counter
  resetOthersStats(stats, fighter.id, 'consecutiveThrows');

  // Check if backup should leave
  if (fighter.leavesAtInitiative && fighter.leavesAtInitiative <= fightData.initiative) {
    // Add backup leave step
    fightData.steps.push({
      a: StepType.Leave,
      f: fighter.index,
    });

    fightData.fighters.shift();
    return;
  }

  // Check if backup should arrive
  if (fighter.arrivesAtInitiative) {
    fighter.arrivesAtInitiative = undefined;

    // Add backup arrive step
    fighterArrives(fightData, fighter);
  }

  // Super activation
  const possibleSuper = randomlyGetSuper(fightData, fighter);
  if (possibleSuper) {
    // End turn if super activated
    if (activateSuper(fightData, fighter, possibleSuper, stats, achievements)) {
      return;
    }
  }

  // Draw weapon
  const sabotaged = drawWeapon(fightData, fighter);

  // End turn if weapon was sabotaged
  if (sabotaged) {
    return;
  }

  // Get attack type (more chances to throw a weapon the less damage it does)
  let attackType = fighter.activeWeapon?.types.includes('thrown')
    ? 'thrown'
    : fighter.activeWeapon
      ? fighter.skills.find((s) => s.name === 'hideaway')
        // 50% chance to throw a weapon if the fighter has `hideaway`
        ? randomBetween(0, 1) === 0
          ? 'thrown'
          : 'melee'
        // 1/33 chance to throw a weapon otherwise
        // (influenced by weapon hit speed)
        : randomBetween(0, Math.round(33 - fighter.activeWeapon.tempo * 5)) === 0
          ? 'thrown' : 'melee'
      : 'melee';

  if (attackType === 'thrown' && fightData.modifiers.includes(FightModifier.noThrows)) {
    attackType = 'melee';
  }

  // Get opponent
  const opponent = getRandomOpponent({ fightData, fighter });

  if (!opponent) {
    return;
  }

  // Opponnent uses hypnosis if low hp
  if (opponent.hp < opponent.maxHp * 0.15
    && !opponent.stunned
    && !opponent.trapped
    && !fighter.hypnotized) {
    const opponentHypnosis = opponent.skills.find((skill) => skill.name === SkillName.hypnosis);
    if (opponentHypnosis) {
      // Activate hypnosis
      if (activateSuper(fightData, opponent, opponentHypnosis, stats, achievements)) {
        // Cancel turn if fighter is pet as it has a new master
        if (fighter.type === 'pet') return;
      }
    }
  }

  // Melee attack
  if (attackType === 'melee') {
    const countered = counterAttack(fighter, opponent);
    // Add move step
    fightData.steps.push({
      a: StepType.Move,
      f: fighter.index,
      t: opponent.index,
      c: countered ? 1 : 0,
    });

    // Check if opponent countered
    if (countered) {
      // Update counter stat
      updateStats(stats, opponent.id, 'counters', 1);
      updateStats(stats, fighter.id, 'countersTriggered', 1);
      updateStats(stats, opponent.id, 'consecutiveCounters', 1);
      checkAchievements(stats, achievements);

      // Add counter step
      fightData.steps.push({
        a: StepType.Counter,
        f: opponent.index,
        t: fighter.index,
      });

      // Opponent attacks fighter
      startAttack(fightData, stats, achievements, opponent, fighter, true);
    } else {
      // Reset counter stat
      updateStats(stats, opponent.id, 'consecutiveCounters', 0);

      if (opponent.stunned && !opponent.trapped) {
        // Check if opponent can use cryOfTheDamned
        const opponentCry = opponent.skills.find(
          (skill) => skill.name === SkillName.cryOfTheDamned,
        );
        if (opponentCry && randomBetween(0, 1) === 0) {
          // Activate cryOfTheDamned
          if (activateSuper(fightData, opponent, opponentCry, stats, achievements)) {
            // If successfull, opponent wakes up
            opponent.stunned = false;

            // Check if fighter didn't leave
            if (fightData.fighters.includes(fighter)) {
              // Fighter moves back
              fightData.steps.push({
                a: StepType.MoveBack,
                f: fighter.index,
              });
            }
            // Fighter only loses half a turn of initiative
            increaseInitiative(fighter, 0.5);
            // Cancel turn
            return;
          }
        }
      }

      // Fighter attacks opponent
      startAttack(fightData, stats, achievements, fighter, opponent);
    }

    // Check if fighter is not dead or stunned
    if (fighter.hp > 0 && !fighter.stunned) {
      // Add moveBack step
      fightData.steps.push({
        a: StepType.MoveBack,
        f: fighter.index,
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
        break;
      }

      // Check if fighter is not dead (hit by a deflected weapond for example)
      if (fighter.hp <= 0) {
        break;
      }

      const thrownWeapon = fighter.activeWeapon;

      let deflected: boolean | null = null;
      let currentFighter = fighter;
      let currentOpponent = opponent;
      let timesDeflected = 0;

      while (deflected === null || deflected) {
        // Remove hypnotized from opponent
        if (currentOpponent.hypnotized) {
          currentOpponent.hypnotized = false;

          // Add hypnosis expire step
          fightData.steps.push({
            a: StepType.SkillExpire,
            b: currentOpponent.index,
            s: SkillByName[SkillName.hypnosis],
          });
        }

        // Add throw step
        fightData.steps.push({
          a: StepType.Throw,
          f: currentFighter.index,
          t: currentOpponent.index,
          w: WeaponByName[thrownWeapon.name],
          k: keepWeapon ? 1 : 0,
          r: deflected ? 1 : 0,
        });

        deflected = deflectProjectile(currentOpponent);

        let damage = 0;

        // Get damage
        if (!deflected) {
          damage = getDamage(currentFighter, currentOpponent, thrownWeapon);

          // Increase damage by 50% for each deflection
          damage = Math.floor(damage * (1.5 ** timesDeflected));
        }

        // Update consecutive throw stat
        updateStats(stats, currentFighter.id, 'consecutiveThrows', 1);
        checkAchievements(stats, achievements);

        // Check if opponent blocked (harder than melee)
        if (!deflected && block({
          fighter: currentFighter,
          opponent: currentOpponent,
          thrown: true,
          ease: 2,
        })) {
          damage = 0;
          // Add block step
          fightData.steps.push({
            a: StepType.Block,
            f: currentOpponent.index,
          });

          // Update block stat
          updateStats(stats, currentOpponent.id, 'blocks', 1);
          updateStats(stats, currentOpponent.id, 'consecutiveBlocks', 1);
          checkAchievements(stats, achievements);
        } else {
          // Reset block stat
          updateStats(stats, currentOpponent.id, 'consecutiveBlocks', 0);
        }
        // Check if opponent evaded (harder than melee)
        if (damage && evade(currentFighter, currentOpponent, 2)) {
          damage = 0;

          // Add evade step
          fightData.steps.push({
            a: StepType.Evade,
            f: currentOpponent.index,
          });

          // Update evade stat
          updateStats(stats, currentOpponent.id, 'consecutiveEvades', 1);
          checkAchievements(stats, achievements);
        } else {
          // Reset evade stat
          updateStats(stats, currentOpponent.id, 'consecutiveEvades', 0);
        }

        // Register hit if damage was done
        if (damage) {
          registerHit(
            fightData,
            stats,
            achievements,
            currentFighter,
            [currentOpponent],
            damage,
            true,
          );

          // Disarm
          if (disarm(currentFighter, currentOpponent, true)) {
            if (currentOpponent.activeWeapon) {
              // Add disarm step
              fightData.steps.push({
                a: StepType.Disarm,
                f: currentFighter.index,
                t: currentOpponent.index,
                w: WeaponByName[currentOpponent.activeWeapon.name],
              });

              // Remove weapon from opponent
              currentOpponent.activeWeapon = null;

              // Update disarm stat
              updateStats(stats, currentFighter.id, 'disarms', 1);
            }
          }
        }

        // Swap fighters if the weapon was returned
        if (deflected) {
          [currentFighter, currentOpponent] = [currentOpponent, currentFighter];
          timesDeflected++;
        }
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

    // Get poisoner
    const poisoner = getOpponents({ fightData, fighter, bruteAndBossOnly: true })
      .find((f) => f.skills.find((s) => s.name === SkillName.chef))
      || getRandomOpponent({ fightData, fighter, bruteAndBossOnly: true });

    if (poisoner) {
      // Register the hit
      registerHit(fightData, stats, achievements, poisoner, [fighter], poisonDamage, false, 'poison');
    }
  }

  increaseInitiative(fighter);

  // Remove active skills
  fighter.activeSkills.forEach((skill) => {
    // Add skill expire step
    fightData.steps.push({
      a: StepType.SkillExpire,
      b: fighter.index,
      s: SkillByName[skill.name],
    });
  });
  fighter.activeSkills = [];
};
