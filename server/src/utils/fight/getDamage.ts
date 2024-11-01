import { DetailedFighter, Weapon, WeaponType } from '@labrute/core';
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

  // +50% damage for `weaponsMaster` on sharp weapons
  if (fighter.activeWeapon?.types.includes(WeaponType.SHARP)
    && fighter.skills.find((sk) => sk.name === SkillName.weaponsMaster)
    && !thrown) {
    skillsMultiplier += 0.5;
  }

  if (!piledriver) {
    // +100% damage for `martialArts` without a weapon or with a mug
    if ((!fighter.activeWeapon || fighter.activeWeapon.name === WeaponName.mug)
      && fighter.skills.find((sk) => sk.name === SkillName.martialArts)
      && !thrown) {
      skillsMultiplier += 1;
    }
  }

  // -30% damage if opponent has `leadSkeleton` and weapon is blunt
  if (opponent.skills.find((sk) => sk.name === 'leadSkeleton') && fighter.activeWeapon?.types.includes('blunt') && !thrown) {
    skillsMultiplier -= 0.3;
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

  // -25% damage for `shield`
  if (fighter.shield) {
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
