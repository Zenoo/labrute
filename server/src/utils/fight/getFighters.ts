/* eslint-disable no-param-reassign */
import {
  BARE_HANDS_DAMAGE,
  BASE_FIGHTER_STATS,
  BruteRanking,
  CalculatedBrute,
  entries,
  ExtraTieredSkillData,
  FightStat, getBruteHP, getPetScaledStat,
  getScaledStat,
  keys,
  Modifiers,
  pets,
  randomBetween,
  randomItem,
  Skill,
  SkillModifiers,
  skills,
  Tiered,
  Weapon,
  weapons,
} from '@labrute/core';
import { Boss } from '@labrute/core/src/brute/bosses.js';
import {
  FightModifier, SkillName,
  WeaponName,
} from '@labrute/prisma';
import { DetailedFighter } from './generateFight.js';

interface Team {
  brutes: CalculatedBrute[];
  backups: CalculatedBrute[];
  bosses: (Boss & {
    startHP: number;
  })[]
}

const handleSkills = (
  chaos: boolean,
  fighter: DetailedFighter,
) => {
  Object.values(fighter.skills).forEach((skill) => {
    // Stat changes
    for (const [unsafeStat, modifier] of Object.entries(SkillModifiers[skill.name])) {
      const stat = unsafeStat as FightStat;

      // Ignore conditional modifiers
      if (modifier.details || (typeof modifier.weaponType !== 'undefined')) continue;

      // Ignore some stats handled elsewhere
      if (stat === FightStat.DEXTERITY
        || stat === FightStat.DAMAGE
        || stat === FightStat.HP
        || stat === FightStat.STRENGTH
        || stat === FightStat.AGILITY
        || stat === FightStat.SPEED) continue;

      if (modifier.flat) {
        const flat = getScaledStat({
          chaos,
          skill: skill.name,
          type: 'flat',
          stat,
          value: modifier.flat[skill.tier - 1] ?? 0,
          precision: 2,
        });
        if (stat === FightStat.INITIATIVE) {
          fighter.initiative -= flat / 100;
        } else {
          fighter[stat] += flat;
        }
      }
      if (modifier.percent) {
        fighter[stat] += getScaledStat({
          chaos,
          skill: skill.name,
          type: 'percent',
          stat,
          value: modifier.percent[skill.tier - 1] ?? 0,
          precision: 2,
        });
      }
    }

    // Extra handling for specific skills
    if (ExtraTieredSkillData[skill.name]) {
      switch (skill.name) {
        case SkillName.determination:
        case SkillName.resistant:
        case SkillName.ironHead:
          fighter[skill.name] = ExtraTieredSkillData[skill.name]?.[skill.tier - 1] ?? 0;
          break;
        case SkillName.saboteur:
          // Nothing to do, the sabotage is applied in fightMethods
          break;
        case SkillName.chef:
          // Nothing to do, the poison is applied in fightMethods
          break;
        case SkillName.spy:
          // Nothing to do, the damage reduction is applied in generateFight
          break;
        case SkillName.backup:
          // Nothing to do, the intitiative is handled when creating the backup fighter
          break;
        case SkillName.mimic:
          // Nothing to do, the mimic skill is handled after creating all fighters to be able to copy skills from all fighters
          break;
        default:
          throw new Error(`No extra handling defined for skill ${skill.name}`);
      }
    }

    // Passives
    switch (skill.name) {
      case SkillName.shield:
        fighter.shield = true;
        break;
      case SkillName.bodybuilder:
        fighter.bodybuilder = true;
        break;
      case SkillName.survival:
        fighter.survival = true;
        break;
      case SkillName.balletShoes:
        fighter.balletShoes = true;
        break;
      case SkillName.fastMetabolism:
        fighter.fastMetabolism = 0;
        break;
      case SkillName.fierceBrute: {
        // Add one fierceBrute use every 30 strength
        skill.uses = skill.uses?.map(
          (use) => use + Math.floor(fighter.strength / 30),
        ) as [number, number, number];
        break;
      }
      default:
    }
  });
};

const getTempo = (speed: number) => 0.10 + (20 / (10 + (speed * 1.5))) * 0.90;

type GetFightersParams = {
  team1: Team,
  team2: Team,
  modifiers: Modifiers,
  clanFight?: boolean,
};

export const getFighters = ({
  team1,
  team2,
  modifiers,
  clanFight,
}: GetFightersParams): DetailedFighter[] => {
  const chaos = modifiers[FightModifier.chaos] === true;

  let spawnedPets = 0;
  const fighters: DetailedFighter[] = [];
  let positiveIndex = 0;
  [team1, team2].forEach((team, teamIndex) => {
    const { brutes } = team;

    for (const brute of brutes) {
      const teamSide = teamIndex === 0 ? 'L' : 'R';

      // Restore HP lost by pets for clan fights, which do not have pets
      if (clanFight) {
        for (const petName of keys(brute.pets)) {
          const pet = pets[petName];
          const petTier = brute.pets[petName] ?? 1;

          brute.hpModifier /= 1 - (pet.hpMalus[petTier - 1] ?? 0);
          brute.hpValue = getBruteHP(brute);
        }
      }
      // Skills
      const tieredSkills: Partial<Record<SkillName, Tiered<Skill>>> = {};
      for (const [skillName, tier] of entries(brute.skills)) {
        tieredSkills[skillName] = {
          ...structuredClone(skills[skillName]),
          tier,
        };
      }

      // Weapons
      const tieredWeapons: Partial<Record<WeaponName, Tiered<Weapon>>> = {};
      for (const [weaponName, tier] of entries(brute.weapons)) {
        tieredWeapons[weaponName] = {
          ...structuredClone(weapons[weaponName]),
          tier,
        };
      }

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
        maxHp: brute.hpValue,
        hp: brute.hpValue,
        strength: brute.strengthValue,
        agility: brute.agilityValue,
        speed: brute.speedValue,
        criticalChance: BASE_FIGHTER_STATS.criticalChance,
        criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
        regeneration: 0,
        initiative: (randomBetween(0, 10) - brute.speedValue) / 100,
        hitSpeed: 0,
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
        weaponGrip: 0,
        sabotage: 0,
        evasion: 0,
        reach: 0,
        determination: 0,
        resistant: 0,
        ironHead: 0,
        size: 1,
        bodybuilder: false,
        survival: false,
        balletShoes: false,
        retryAttack: false,
        fastMetabolism: null,
        skills: tieredSkills,
        weapons: tieredWeapons,
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        poisonedBy: null,
        trapped: false,
        hitBy: {},
      };

      handleSkills(chaos, fighter);

      fighters.push(fighter);

      // No pets in clan fights
      if (clanFight) {
        continue;
      }

      // Pets stats
      for (const [petName, tier] of entries(brute.pets)) {
        const pet = {
          ...pets[petName],
          tier,
        };

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
          maxHp: getPetScaledStat(chaos, brute, pet, 'hp'),
          hp: getPetScaledStat(chaos, brute, pet, 'hp'),
          strength: getPetScaledStat(chaos, brute, pet, 'strength'),
          agility: getPetScaledStat(chaos, brute, pet, 'agility'),
          speed: getPetScaledStat(chaos, brute, pet, 'speed'),
          criticalChance: BASE_FIGHTER_STATS.criticalChance,
          criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
          regeneration: 0,
          initiative: getPetScaledStat(chaos, brute, pet, 'initiative', 2) + randomBetween(0, 10) / 100,
          hitSpeed: 0,
          tempo: getTempo(getPetScaledStat(chaos, brute, pet, 'speed')),
          baseDamage: getPetScaledStat(chaos, brute, pet, 'damage'),
          counter: getPetScaledStat(chaos, brute, pet, 'counter', 2),
          combo: getPetScaledStat(chaos, brute, pet, 'combo', 2),
          deflect: 0,
          reversal: getPetScaledStat(chaos, brute, pet, 'counter', 2),
          block: getPetScaledStat(chaos, brute, pet, 'block', 2),
          accuracy: getPetScaledStat(chaos, brute, pet, 'accuracy', 2),
          reach: 0,
          armor: 0,
          disarm: getPetScaledStat(chaos, brute, pet, 'disarm', 2),
          weaponGrip: 0,
          sabotage: 0,
          evasion: getPetScaledStat(chaos, brute, pet, 'evasion', 2),
          determination: 0,
          resistant: 0,
          ironHead: 0,
          size: 1,
          bodybuilder: false,
          survival: false,
          balletShoes: false,
          retryAttack: false,
          fastMetabolism: null,
          skills: {},
          weapons: {},
          shield: false,
          activeSkills: [],
          activeWeapon: null,
          keepWeaponChance: 0,
          poisonedBy: null,
          trapped: false,
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
      // Skills
      const tieredSkills: Partial<Record<SkillName, Tiered<Skill>>> = {};
      for (const [skillName, tier] of entries(backup.skills)) {
        tieredSkills[skillName] = {
          ...structuredClone(skills[skillName]),
          tier,
        };
      }

      // Weapons
      const tieredWeapons: Partial<Record<WeaponName, Tiered<Weapon>>> = {};
      for (const [weaponName, tier] of entries(backup.weapons)) {
        tieredWeapons[weaponName] = {
          ...structuredClone(weapons[weaponName]),
          tier,
        };
      }

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
        leavesAtInitiative: arrivesAt + (ExtraTieredSkillData[SkillName.backup]?.[
          (backupMaster.skills[SkillName.backup] ?? 0) - 1
        ] ?? 0),
        maxHp: backup.hpValue,
        hp: backup.hpValue,
        strength: backup.strengthValue,
        agility: backup.agilityValue,
        speed: backup.speedValue,
        criticalChance: BASE_FIGHTER_STATS.criticalChance,
        criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
        regeneration: 0,
        initiative: arrivesAt,
        hitSpeed: 0,
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
        weaponGrip: 0,
        sabotage: 0,
        evasion: 0,
        reach: 0,
        determination: 0,
        resistant: 0,
        ironHead: 0,
        size: 1,
        bodybuilder: false,
        survival: false,
        balletShoes: false,
        retryAttack: false,
        fastMetabolism: null,
        skills: tieredSkills,
        weapons: tieredWeapons,
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        poisonedBy: null,
        trapped: false,
        hitBy: {},
      };

      handleSkills(chaos, backupFighter);

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
        criticalChance: BASE_FIGHTER_STATS.criticalChance,
        criticalDamage: BASE_FIGHTER_STATS.criticalDamage,
        regeneration: 0,
        initiative: boss.initiative + randomBetween(0, 10) / 100,
        hitSpeed: 0,
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
        weaponGrip: 0,
        sabotage: 0,
        evasion: boss.evasion,
        determination: 0,
        resistant: 0,
        ironHead: 0,
        size: 1,
        bodybuilder: false,
        survival: false,
        balletShoes: false,
        retryAttack: false,
        fastMetabolism: null,
        skills: {},
        weapons: {},
        shield: false,
        activeSkills: [],
        activeWeapon: null,
        keepWeaponChance: 0,
        poisonedBy: null,
        trapped: false,
        hitBy: {},
      });
    }
  });

  // Handle mimic skill after creating all fighters to be able to copy skills from all fighters, including backups and bosses
  fighters.forEach((fighter) => {
    const mimicSkill = fighter.skills[SkillName.mimic];
    if (!mimicSkill) return;

    // Get all skills from all ennemies
    const possibleSkills: Tiered<Skill>[] = [];
    fighters.forEach((otherFighter) => {
      if (otherFighter.team === fighter.team) {
        return;
      }

      Object.values(otherFighter.skills).forEach((skill) => {
        if (!skill.uses) return;

        possibleSkills.push(skill);
      });
    });

    // Select a random skill from the possible skills
    if (possibleSkills.length > 0) {
      const randomSkill = randomItem(possibleSkills);

      const existingSkill = fighter.skills[randomSkill.name];
      if (!existingSkill) {
        fighter.skills[randomSkill.name] = {
          ...structuredClone(randomSkill),
          uses: ExtraTieredSkillData[SkillName.mimic],
        };
      } else {
        // If the fighter already has the skill, just add uses
        existingSkill.uses = (existingSkill.uses?.map(
          (use, index) => use + (ExtraTieredSkillData[SkillName.mimic]?.[index] ?? 0),
        ) as [number, number, number] | undefined) ?? existingSkill.uses;
      }
    }
  });

  return fighters;
};
