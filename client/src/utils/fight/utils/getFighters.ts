import {
  Fighter, WeaponId, SkillId
} from "@labrute/core";

export const getFighters = (json: string) => {
  const fighters = JSON.parse(json) as Fighter[];

  // TODO: Remove on release, weapons are now a Record instead of an array
  // but this converts old fights with array of weapons to the new format, so it has to stay for a while
  for (const fighter of fighters) {
    if (Array.isArray(fighter.weapons)) {
      fighter.weapons = (fighter.weapons as WeaponId[])
        .reduce<Partial<Record<WeaponId, number>>>((acc, weapon) => {
          acc[weapon] = (acc[weapon] ?? 0) + 1;
          return acc;
        }, {});
    }

    // TODO: Remove on release, skills are now a Record instead of an array
    if (Array.isArray(fighter.skills)) {
      fighter.skills = (fighter.skills as SkillId[])
        .reduce<Partial<Record<SkillId, number>>>((acc, skill) => {
          acc[skill] = (acc[skill] ?? 0) + 1;
          return acc;
        }, {});
    }
  }

  return fighters;
};
