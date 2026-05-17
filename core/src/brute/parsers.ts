import { BruteBodyPart, BruteColor } from '../types.js';
import { colorableBodyParts } from './colors.js';

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

export const readColorString = (
  colorsString: string
): Record<BruteColor, string> => {
  const result = colorsString
    .match(/.{1,6}/g)
    ?.reduce((acc, color, index) => {
      const colorName = colorableBodyParts[index];

      if (!colorName) return acc;

      acc[colorName] = `#${color}`;
      return acc;
    }, {} as Record<BruteColor, string>);

  if (!result) {
    throw new Error('Invalid colors string');
  }

  return result;
};

export const generateColorString = (colorObject: Record<BruteColor, string>) => colorableBodyParts
  .map((colorName) => colorObject[colorName].replace('#', ''))
  .join('');
