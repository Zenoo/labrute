import { Brute, SkillName } from '../types';

const applySkillModifiers = (brute: Brute, skill: SkillName) => {
  const updatedBrute = { ...brute };

  // Vitality modifier
  if (skill === 'vitality') {
    updatedBrute.data.stats.endurance.modifier *= 1.5;
    updatedBrute.data.stats.endurance.stat += 3;
  }

  // Immortality modifier
  if (skill === 'immortality') {
    updatedBrute.data.stats.endurance.modifier *= 3.5;
    updatedBrute.data.stats.strength.modifier *= 0.75;
    updatedBrute.data.stats.agility.modifier *= 0.75;
    updatedBrute.data.stats.speed.modifier *= 0.75;
  }

  // Herculean strength modifier
  if (skill === 'herculeanStrength') {
    updatedBrute.data.stats.strength.modifier *= 1.5;
    updatedBrute.data.stats.strength.stat += 3;
  }

  // Feline agility modifier
  if (skill === 'felineAgility') {
    updatedBrute.data.stats.agility.modifier *= 1.5;
    updatedBrute.data.stats.agility.stat += 3;
  }

  // Lightning bolt modifier
  if (skill === 'lightningBolt') {
    updatedBrute.data.stats.speed.modifier *= 1.5;
    updatedBrute.data.stats.speed.stat += 3;
  }

  // Reconnaissance modifier
  if (skill === 'reconnaissance') {
    updatedBrute.data.stats.speed.modifier *= 2.5;
    updatedBrute.data.stats.speed.stat += 5;
  }

  // Armor modifier
  if (skill === 'armor') {
    updatedBrute.data.stats.speed.modifier *= 0.9;
  }

  return updatedBrute;
};

export default applySkillModifiers;