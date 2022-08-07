import { Skill } from '@eternaltwin/labrute-core/brute/skills';
import { Weapon } from '@eternaltwin/labrute-core/brute/weapons';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import { FightStats } from './getBruteFightStats.js';

const getDamage = (brute: FightStats, opponent: FightStats, skills: Skill[], weapon?: Weapon) => {
  const base = weapon?.damage || 0;
  const { strength } = brute;
  const weaponStrength = 1; // What is this ?
  let skillsMultiplier = 1;

  // +50% damage for `weaponsMaster` on sharp weapons
  if (weapon?.types.includes('sharp') && brute.skills.find((sk) => sk.name === 'weaponsMaster')) {
    skillsMultiplier += 0.5;
  }

  // +100% damage for `martialArts` without a weapon or with a mug
  if ((!weapon || weapon.name === 'mug') && brute.skills.find((sk) => sk.name === 'martialArts')) {
    skillsMultiplier += 1;
  }

  // // -30% damage if opponent has `leadSkeleton` LB v2
  // if (opponent.data.skills.includes('leadSkeleton')) {
  //   skillsMultiplier -= 0.3;
  // }

  const random = randomBetween(1, 1.5);
  const { armor } = opponent;
  let hammerMultiplier = 1;

  // x4 damage for `hammer`
  if (skills.find((sk) => sk.name === 'hammer')) {
    hammerMultiplier = 4;
  }

  // floor((B + N*K) * S * R - A) * H
  const damage = Math.floor(
    (base + strength * weaponStrength) * skillsMultiplier * random - armor,
  ) * hammerMultiplier;

  // // Max damage to 20% of opponent's health if `resistant` LB v2
  // if (opponent.skills.find((sk) => sk.name === 'resistant')) {
  //   damage = Math.min(damage, Math.floor(opponent.hp * 0.2));
  // }

  // x2 damage for if skill `fierceBrute` is active and the weapon is not a thrown weapon
  if (skills.find((sk) => sk.name === 'fierceBrute') && !weapon?.types.includes('thrown')) {
    return damage * 2;
  }

  return damage;
};

export default getDamage;