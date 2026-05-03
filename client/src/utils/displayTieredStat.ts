import { convertEnduranceToHP, FightStat, getScaledStat, TieredNumberKeysOf, Weapon } from '@labrute/core';
import { SkillName } from '@labrute/prisma';

// Convert endurance to HP
const statValue = (stat: FightStat | null, value: number) => {
  if (stat === 'endurance') return convertEnduranceToHP({ enduranceModifier: 1 }, value);

  return value;
};

type DisplayTieredStatParams = {
  chaos: boolean;
  skill: SkillName;
  type: 'flat' | 'percent';
  stat: FightStat;
  values: number[];
  tier: number;
};

export const displaySkillTieredStat = ({
  chaos,
  skill,
  type,
  stat,
  values,
  tier,
}: DisplayTieredStatParams) => {
  const getValue = (value?: number) => (type === 'flat' ? getScaledStat({
    chaos,
    skill,
    type,
    stat,
    value: Math.abs(statValue(stat, value ?? 0))
  }) : (getScaledStat({
    chaos,
    skill,
    type,
    stat,
    value: Math.abs(statValue(stat, value ?? 0)),
    precision: 2
  }) * 100).toFixed(0));

  if (values.every((v) => v === values[0])) {
    return getValue(values[0]);
  }

  return /* HTML */ `<span class="tiered-stat"><span class="tier-wrapper">[</span>${values.map((value, index) => /* HTML */`<span class="${index === tier - 1 ? 'current-tier' : 'locked-tier'}">${getValue(value)}</span>`).join('<span class="tier-wrapper">/</span>')}<span class="tier-wrapper">]</span></span>`;
};

type DisplayTieredWeaponStatParams = {
  weapon: Weapon;
  stat: TieredNumberKeysOf<Weapon>;
  tier: number;
  formatter: (currentTier: number) => number;
};

export const displayTieredWeaponStat = ({
  weapon,
  stat,
  tier,
  formatter,
}: DisplayTieredWeaponStatParams) => {
  const tieredWeapon = { ...weapon, tier };
  const uniqueValue = tieredWeapon[stat].every((v) => v === tieredWeapon[stat]?.[0]);

  if (uniqueValue) {
    return formatter(tier);
  }

  return /* HTML */ `<span class="tiered-stat"><span class="tier-wrapper">[</span>${tieredWeapon[stat].map((_, index) => /* HTML */`<span class="${index === tier - 1 ? 'current-tier' : 'locked-tier'}">${formatter(index + 1)}</span>`).join('<span class="tier-wrapper">/</span>')}<span class="tier-wrapper">]</span></span>`;
};
