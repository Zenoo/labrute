import { ExtraTieredSkillData, FightStat, getScaledStat, Pet, TieredNumberKeysOf, Weapon } from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import { TieredStatProps } from '../components/TieredStat';

// Helper function to generate the tiered stat HTML structure
const displayTieredStatHTML = <T>(
  values: T[],
  tier: number,
  formatter: (value: T, index: number) => string | number
): string | number | undefined => {
  if (values.every((v) => v === values[0])) {
    const firstValue = values[0];

    if (typeof firstValue === 'undefined') {
      return undefined;
    }

    return formatter(firstValue, 0);
  }

  return /* HTML */ `<span class="tiered-stat"><span class="tier-wrapper">[</span>${values.map((value, index) => /* HTML */`<span class="${index === tier - 1 ? 'current-tier' : 'locked-tier'}">${formatter(value, index)}</span>`).join('<span class="tier-wrapper">/</span>')}<span class="tier-wrapper">]</span></span>`;
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
    value: Math.abs(value ?? 0)
  }) : (getScaledStat({
    chaos,
    skill,
    type,
    stat,
    value: Math.abs(value ?? 0),
    precision: 2
  }) * 100).toFixed(0));

  return displayTieredStatHTML(values, tier, (value) => getValue(value));
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
}: DisplayTieredWeaponStatParams) => displayTieredStatHTML(
  weapon[stat],
  tier,
  (_, index) => formatter(index + 1)
);

type DisplayTieredPetStatParams = {
  pet: Pet;
  stat: TieredNumberKeysOf<Pet>;
  tier: number;
  formatter: (currentTier: number) => number;
};

export const displayTieredPetStat = ({
  pet,
  stat,
  tier,
  formatter,
}: DisplayTieredPetStatParams) => displayTieredStatHTML(
  pet[stat],
  tier,
  (_, index) => formatter(index + 1)
);

type DisplayExtraTieredSkillStatParams = {
  skill: SkillName;
  tier: number;
};

export const displayExtraTieredSkillStat = ({
  skill,
  tier,
}: DisplayExtraTieredSkillStatParams) => {
  const extraData = ExtraTieredSkillData[skill];

  if (!extraData) {
    return undefined;
  }

  // Map percentages
  const values = extraData.map((value) => ((value > -1 && value < 1)
    ? (value * 100).toFixed(0)
    : value));

  return displayTieredStatHTML(values, tier, (value) => value);
};

type DisplayTieredSkillUsesParams = {
  uses: number[] | undefined;
  tier: number;
};

export const displayTieredSkillUses = ({ uses, tier }: DisplayTieredSkillUsesParams) => {
  if (!uses) return undefined;

  return displayTieredStatHTML(uses, tier, (value) => value);
};

// React component-friendly versions that return TieredStatProps

export const getSkillTieredStatProps = ({
  chaos,
  skill,
  type,
  stat,
  values,
  tier,
}: DisplayTieredStatParams): TieredStatProps<number> => {
  const getValue = (value?: number) => (type === 'flat' ? getScaledStat({
    chaos,
    skill,
    type,
    stat,
    value: Math.abs(value ?? 0)
  }) : (getScaledStat({
    chaos,
    skill,
    type,
    stat,
    value: Math.abs(value ?? 0),
    precision: 2
  }) * 100).toFixed(0));

  return {
    values,
    tier,
    formatter: (value) => getValue(value),
  };
};

export const getExtraTieredSkillStatProps = ({
  skill,
  tier,
}: DisplayExtraTieredSkillStatParams) => {
  const extraData = ExtraTieredSkillData[skill];

  if (!extraData) {
    return undefined;
  }

  // Map percentages
  const values = extraData.map((value) => ((value > -1 && value < 1)
    ? (value * 100).toFixed(0)
    : value));

  return {
    values,
    tier,
  };
};
