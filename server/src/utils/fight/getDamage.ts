import { DetailedFighter, SkillDamageModifiers, Weapon } from '@labrute/core';
import { SkillName, WeaponName } from '@labrute/prisma';

const getDamage = (
  fighter: DetailedFighter,
  opponent: DetailedFighter,
  thrown?: Weapon,
) => {
  const base = thrown
    ? thrown.damage
    : (fighter.activeWeapon?.damage || fighter.baseDamage);
  let skillsMultiplier = 1;

  // Using Piledriver ?
  const piledriver = fighter.activeSkills.find((sk) => sk.name === SkillName.hammer);

  // Fighter skill damage modifiers
  for (const modifier of SkillDamageModifiers) {
    // Ignore if fighter doesn't have the skill
    if (!fighter.skills.find((sk) => sk.name === modifier.skill)) {
      continue;
    }

    // Ignore if the modifier is for the opponent
    if (modifier.opponent) {
      continue;
    }

    // Ignore weaponsMaser, martialArts if thrown
    if (thrown) {
      if (modifier.skill === SkillName.weaponsMaster || modifier.skill === SkillName.martialArts) {
        continue;
      }
    }

    // Ignore martialArts if piledriver is active
    if (piledriver && modifier.skill === SkillName.martialArts) {
      continue;
    }

    // Damage specific to weapon type
    if (typeof modifier.weaponType !== 'undefined') {
      // If weapon type is null, it means the modifier applies to empty hands (or mug)
      if (modifier.weaponType === null) {
        if (!fighter.activeWeapon || fighter.activeWeapon.name === WeaponName.mug) {
          skillsMultiplier += modifier.percent ?? 0;
        }
      } else if (fighter.activeWeapon?.types.includes(modifier.weaponType)) {
        // If the weapon type is the same as the modifier, apply the damage
        skillsMultiplier += modifier.percent ?? 0;
      }
    } else {
      // Global damage modifier
      skillsMultiplier *= 1 + (modifier.percent ?? 0);
    }
  }

  // Opponent skill damage modifiers
  for (const modifier of SkillDamageModifiers) {
    // Ignore if opponent doesn't have the skill
    if (!opponent.skills.find((sk) => sk.name === modifier.skill)) {
      continue;
    }

    // Ignore if the modifier is not for the opponent
    if (!modifier.opponent) {
      continue;
    }

    // Ignore leadSkeleton if thrown
    if (thrown) {
      if (modifier.skill === SkillName.leadSkeleton) {
        continue;
      }
    }

    // Damage specific to weapon type
    if (typeof modifier.weaponType !== 'undefined') {
      // If weapon type is null, it means the modifier applies to empty hands (or mug)
      if (modifier.weaponType === null) {
        if (!fighter.activeWeapon || fighter.activeWeapon.name === WeaponName.mug) {
          skillsMultiplier += modifier.percent ?? 0;
        }
      } else if (fighter.activeWeapon?.types.includes(modifier.weaponType)) {
        // If the weapon type is the same as the modifier, apply the damage
        skillsMultiplier += modifier.percent ?? 0;
      }
    } else {
      // Global damage modifier
      skillsMultiplier *= 1 + (modifier.percent ?? 0);
    }
  }

  // x2 damage for if skill `fierceBrute` is active
  if (fighter.activeSkills.find((sk) => sk.name === 'fierceBrute')) {
    skillsMultiplier *= 2;
  }

  // x4 damage for `piledriver`
  if (piledriver) {
    skillsMultiplier *= 4;
  }

  let damage = 0;

  if (thrown) {
    damage = Math.floor(
      (base + fighter.strength * 0.1 + fighter.agility * 0.15)
      * (1 + Math.random() * 0.5) * skillsMultiplier,
    );
  } else if (piledriver) {
    damage = Math.floor(
      (10 + opponent.strength * 0.6)
      * (0.8 + Math.random() * 0.4) * skillsMultiplier,
    );
  } else {
    damage = Math.floor(
      (base + fighter.strength * (0.2 + base * 0.05))
      * (0.8 + Math.random() * 0.4) * skillsMultiplier,
    );
  }

  // -25% damage if fighter uses a damaged weapon
  if (fighter.activeWeapon && fighter.damagedWeapons.includes(fighter.activeWeapon.name)) {
    damage = Math.floor(damage * 0.75);
  }

  // Reduce damage with opponent's armor if not thrown
  if (!thrown) {
    damage = Math.ceil(damage * (1 - opponent.armor));
  }

  // Set minimum damage to 1
  if (damage < 1) {
    damage = 1;
  }

  return damage;
};

export default getDamage;
