import { Brute, SkillName } from '@labrute/prisma';

type BruteStats = Pick<Brute, 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityStat' | 'agilityModifier' | 'agilityValue' | 'speedStat' | 'speedModifier' | 'speedValue'>;

const applySkillModifiers = <T extends BruteStats>(brute: T, skill: SkillName) => {
  const updatedBrute = { ...brute };

  // Vitality modifier
  if (skill === 'vitality') {
    updatedBrute.enduranceModifier *= 1.5;
    updatedBrute.enduranceStat += 3;
  }

  // Immortality modifier
  if (skill === 'immortality') {
    updatedBrute.enduranceModifier *= 3.5;
    updatedBrute.strengthModifier *= 0.75;
    updatedBrute.agilityModifier *= 0.75;
    updatedBrute.speedModifier *= 0.75;
  }

  // Herculean strength modifier
  if (skill === 'herculeanStrength') {
    updatedBrute.strengthModifier *= 1.5;
    updatedBrute.strengthStat += 3;
  }

  // Feline agility modifier
  if (skill === 'felineAgility') {
    updatedBrute.agilityModifier *= 1.5;
    updatedBrute.agilityStat += 3;
  }

  // Lightning bolt modifier
  if (skill === 'lightningBolt') {
    updatedBrute.speedModifier *= 1.5;
    updatedBrute.speedStat += 3;
  }

  // Reconnaissance modifier
  if (skill === 'reconnaissance') {
    updatedBrute.speedModifier *= 2.5;
    updatedBrute.speedStat += 5;
  }

  // Armor modifier
  if (skill === 'armor') {
    updatedBrute.speedModifier *= 0.9;
  }

  return updatedBrute;
};

export default applySkillModifiers;