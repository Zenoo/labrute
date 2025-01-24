import { Gender } from '@labrute/prisma';
import { BruteBodyPart, BruteColor } from '../types';
import { colors } from './colors';
import { pad } from '../utils/pad';

export const readBodyString = (bodyString: string): Record<BruteBodyPart, number> => ({
  p1: parseInt(bodyString[0] || '0', 16),
  p1a: parseInt(bodyString[1] || '0', 16),
  p1b: parseInt(bodyString[2] || '0', 16),
  p2: parseInt(bodyString[3] || '0', 16),
  p3: parseInt(bodyString[4] || '0', 16),
  p4: parseInt(bodyString[5] || '0', 16),
  p5: parseInt(bodyString[6] || '0', 16),
  p6: parseInt(bodyString[7] || '0', 16),
  p7: parseInt(bodyString[8] || '0', 16),
  p7b: parseInt(bodyString[9] || '0', 16),
  p8: parseInt(bodyString[10] || '0', 16),
});

export const generateBodyString = (body: Record<BruteBodyPart, number>): string => [
  body.p1.toString(16),
  body.p1a.toString(16),
  body.p1b.toString(16),
  body.p2.toString(16),
  body.p3.toString(16),
  body.p4.toString(16),
  body.p5.toString(16),
  body.p6.toString(16),
  body.p7.toString(16),
  body.p7b.toString(16),
  body.p8.toString(16),
].join('');

export const getColor = (gender: Gender, part: BruteColor, color: number) => {
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

export const readColorString = (
  gender: Gender,
  colorsString: string
): Record<BruteColor, string> => ({
  col0: getColor(gender, 'col0', +colorsString.slice(0, 2)),
  col0a: getColor(gender, 'col0a', +colorsString.slice(2, 4)),
  col0c: getColor(gender, 'col0c', +colorsString.slice(4, 6)),
  col1: getColor(gender, 'col1', +colorsString.slice(6, 8)),
  col1a: getColor(gender, 'col1a', +colorsString.slice(8, 10)),
  col1b: getColor(gender, 'col1b', +colorsString.slice(10, 12)),
  col1c: getColor(gender, 'col1c', +colorsString.slice(12, 14)),
  col1d: getColor(gender, 'col1d', +colorsString.slice(14, 16)),
  col2: getColor(gender, 'col2', +colorsString.slice(16, 18)),
  col2a: getColor(gender, 'col2a', +colorsString.slice(18, 20)),
  col2b: getColor(gender, 'col2b', +colorsString.slice(20, 22)),
  col3: getColor(gender, 'col3', +colorsString.slice(22, 24)),
  col3b: getColor(gender, 'col3b', +colorsString.slice(24, 26)),
  col4: getColor(gender, 'col4', +colorsString.slice(26, 28)),
  col4a: getColor(gender, 'col4a', +colorsString.slice(28, 30)),
  col4b: getColor(gender, 'col4b', +colorsString.slice(30, 32)),
});

export const generateColorString = (colorObject: Record<BruteColor, number>) => [
  pad(colorObject.col0, 2),
  pad(colorObject.col0a, 2),
  pad(colorObject.col0c, 2),
  pad(colorObject.col1, 2),
  pad(colorObject.col1a, 2),
  pad(colorObject.col1b, 2),
  pad(colorObject.col1c, 2),
  pad(colorObject.col1d, 2),
  pad(colorObject.col2, 2),
  pad(colorObject.col2a, 2),
  pad(colorObject.col2b, 2),
  pad(colorObject.col3, 2),
  pad(colorObject.col3b, 2),
  pad(colorObject.col4, 2),
  pad(colorObject.col4a, 2),
  pad(colorObject.col4b, 2),
].join('');
