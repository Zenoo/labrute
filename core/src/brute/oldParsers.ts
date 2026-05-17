import { Gender } from '@labrute/prisma';
import { BruteColor } from '../types.js';
import { colors } from './colors.js';

// TODO: Remove this on release
// The fights stored before the new colors format still use
// 32 sized strings
export const OLD_getColor = (gender: Gender, part: BruteColor, color: number) => {
  const skinParts = ['col0', 'col0a', 'col0c'];
  const hairParts = ['col1', 'col1a', 'col1b', 'col1c', 'col1d'];
  const clothingParts = ['col2', 'col2a', 'col2b', 'col3', 'col3b', 'col4', 'col4a', 'col4b'];
  let colorArray: string[] = [];

  if (skinParts.includes(part)) colorArray = colors[gender].skin;
  else if (hairParts.includes(part)) colorArray = colors[gender].hair;
  else if (clothingParts.includes(part)) colorArray = colors[gender].clothing;

  const normalColor = colorArray[color];
  if (normalColor) return normalColor;

  return colors.special[99 - color] || '#ffffff';
};

export const OLD_readColorString = (
  gender: Gender,
  colorsString: string
): Record<BruteColor, string> => ({
  col0: OLD_getColor(gender, 'col0', +colorsString.slice(0, 2)),
  col0a: OLD_getColor(gender, 'col0a', +colorsString.slice(2, 4)),
  col0c: OLD_getColor(gender, 'col0c', +colorsString.slice(4, 6)),
  col1: OLD_getColor(gender, 'col1', +colorsString.slice(6, 8)),
  col1a: OLD_getColor(gender, 'col1a', +colorsString.slice(8, 10)),
  col1b: OLD_getColor(gender, 'col1b', +colorsString.slice(10, 12)),
  col1c: OLD_getColor(gender, 'col1c', +colorsString.slice(12, 14)),
  col1d: OLD_getColor(gender, 'col1d', +colorsString.slice(14, 16)),
  col2: OLD_getColor(gender, 'col2', +colorsString.slice(16, 18)),
  col2a: OLD_getColor(gender, 'col2a', +colorsString.slice(18, 20)),
  col2b: OLD_getColor(gender, 'col2b', +colorsString.slice(20, 22)),
  col3: OLD_getColor(gender, 'col3', +colorsString.slice(22, 24)),
  col3b: OLD_getColor(gender, 'col3b', +colorsString.slice(24, 26)),
  col4: OLD_getColor(gender, 'col4', +colorsString.slice(26, 28)),
  col4a: OLD_getColor(gender, 'col4a', +colorsString.slice(28, 30)),
  col4b: OLD_getColor(gender, 'col4b', +colorsString.slice(30, 32)),
});
