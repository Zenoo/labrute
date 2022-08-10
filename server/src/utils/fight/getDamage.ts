import { Fighter, Skill, Weapon } from '@eternaltwin/labrute-core/types';

const getDamage = (
  fighter: Fighter,
  opponent: Fighter,
  skills: Skill[],
  weapon?: Weapon,
  thrown?: boolean,
) => {
  const base = weapon?.damage || fighter.baseDamage;
  let skillsMultiplier = 1;

  // +50% damage for `weaponsMaster` on sharp weapons
  if (weapon?.types.includes('sharp') && fighter.skills.find((sk) => sk.name === 'weaponsMaster')) {
    skillsMultiplier += 0.5;
  }

  // +100% damage for `martialArts` without a weapon or with a mug
  if ((!weapon || weapon.name === 'mug') && fighter.skills.find((sk) => sk.name === 'martialArts')) {
    skillsMultiplier += 1;
  }

  // -30% damage if opponent has `leadSkeleton` and weapon is blunt
  if (opponent.skills.find((sk) => sk.name === 'leadSkeleton') && weapon?.types.includes('blunt')) {
    skillsMultiplier -= 0.3;
  }

  // x2 damage for if skill `fierceBrute` is active and not thrown
  if (skills.find((sk) => sk.name === 'fierceBrute') && !thrown) {
    skillsMultiplier *= 2;
  }

  // x4 damage for `hammer`
  if (skills.find((sk) => sk.name === 'hammer')) {
    skillsMultiplier *= 4;
  }

  let damage = 0;

  if (thrown) {
    damage = Math.floor(
      (base + fighter.strength * 0.1 + fighter.agility * 0.15)
      * (1 + Math.random() * 0.5),
    );
  } else if (skills.find((sk) => sk.name === 'hammer')) {
    damage = Math.floor(
      (10 + fighter.strength * 0.6)
      * (0.8 + Math.random() * 0.4) * skillsMultiplier,
    );
  } else {
    damage = Math.floor(
      (base + fighter.strength * (0.2 + base * 0.05))
      * (0.8 + Math.random() * 0.4) * skillsMultiplier,
    );
  }

  // Reduce damage with opponent's armor
  damage -= opponent.armor;

  // Set minimum damage to 1
  if (damage < 1) {
    damage = 1;
  }

  return damage;
};

export default getDamage;