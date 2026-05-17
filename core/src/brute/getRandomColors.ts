import { Gender, UnlockedColors } from '@labrute/prisma';
import { randomBetween } from '../utils/index.js';
import { colors } from './colors.js';
import { generateColorString } from './parsers.js';
import { BruteColor } from '../types.js';

const colorNamesByBodyPart: Partial<Record<string, BruteColor[]>> = {
  skin: ['col0', 'col0a', 'col0c'],
  hair: ['col1', 'col1a', 'col1b', 'col1c', 'col1d'],
  clothing: ['col2', 'col2a', 'col2b', 'col3', 'col3b', 'col4', 'col4a', 'col4b'],
};

export const getRandomColors = (
  gender: Gender,
  unlockedColors?: Pick<UnlockedColors, 'bodyPart' | 'colors'>[]
) => {
  const unlockedColorsMap = unlockedColors?.reduce((acc, uc) => {
    acc[uc.bodyPart] = uc.colors;
    return acc;
  }, {} as Partial<Record<string, string[]>>) ?? {};

  // Since col0, col0a and col0c should be the same color, we only add unlocked colors that all three share
  const sharedCol0Unlocked = unlockedColorsMap.col0
    ?.filter(color => unlockedColorsMap.col0a?.includes(color)
      && unlockedColorsMap.col0c?.includes(color)) ?? [];
  unlockedColorsMap.col0 = sharedCol0Unlocked;
  unlockedColorsMap.col0a = sharedCol0Unlocked;
  unlockedColorsMap.col0c = sharedCol0Unlocked;

  // Same for col1, col1a, col1b, col1c and col1d
  const sharedCol1Unlocked = unlockedColorsMap.col1
    ?.filter(color => unlockedColorsMap.col1a?.includes(color)
      && unlockedColorsMap.col1b?.includes(color)
      && unlockedColorsMap.col1c?.includes(color)
      && unlockedColorsMap.col1d?.includes(color)) ?? [];
  unlockedColorsMap.col1 = sharedCol1Unlocked;
  unlockedColorsMap.col1a = sharedCol1Unlocked;
  unlockedColorsMap.col1b = sharedCol1Unlocked;
  unlockedColorsMap.col1c = sharedCol1Unlocked;
  unlockedColorsMap.col1d = sharedCol1Unlocked;

  // Add base game colors to the unlocked colors for each body part
  for (const part of ['skin', 'hair', 'clothing'] as const) {
    const colorsNames = colorNamesByBodyPart[part] ?? [];

    for (const colorName of colorsNames) {
      unlockedColorsMap[colorName] = (unlockedColorsMap[colorName] ?? [])
        .concat(colors[gender][part]);
    }
  }

  const col0 = unlockedColorsMap.col0?.[
    randomBetween(0, (unlockedColorsMap.col0?.length ?? 0) - 1)
  ];
  const col0a = col0;
  const col0c = col0;
  const col1 = unlockedColorsMap.col1?.[
    randomBetween(0, (unlockedColorsMap.col1?.length ?? 0) - 1)
  ];
  const col1a = col1;
  const col1b = col1;
  const col1c = col1;
  const col1d = col1;
  const col3 = unlockedColorsMap.col3?.[
    randomBetween(0, (unlockedColorsMap.col3?.length ?? 0) - 1)
  ];
  const col2 = unlockedColorsMap.col2?.[
    randomBetween(0, (unlockedColorsMap.col2?.length ?? 0) - 1)
  ];
  const col2b = unlockedColorsMap.col2b?.[
    randomBetween(0, (unlockedColorsMap.col2b?.length ?? 0) - 1)
  ];
  const col3b = unlockedColorsMap.col3b?.[
    randomBetween(0, (unlockedColorsMap.col3b?.length ?? 0) - 1)
  ];
  const col2a = unlockedColorsMap.col2a?.[
    randomBetween(0, (unlockedColorsMap.col2a?.length ?? 0) - 1)
  ];
  const col4 = unlockedColorsMap.col4?.[
    randomBetween(0, (unlockedColorsMap.col4?.length ?? 0) - 1)
  ];
  const col4a = unlockedColorsMap.col4a?.[
    randomBetween(0, (unlockedColorsMap.col4a?.length ?? 0) - 1)
  ];
  const col4b = unlockedColorsMap.col4b?.[
    randomBetween(0, (unlockedColorsMap.col4b?.length ?? 0) - 1)
  ];

  if (!col0 || !col0a || !col0c || !col1 || !col1a || !col1b
    || !col1c || !col1d || !col2 || !col2a || !col2b || !col3
    || !col3b || !col4 || !col4a || !col4b) {
    throw new Error('Not enough colors to generate a random color set');
  }

  return generateColorString({
    col0,
    col0a,
    col0c,
    col1,
    col1a,
    col1b,
    col1c,
    col1d,
    col2,
    col2a,
    col2b,
    col3,
    col3b,
    col4,
    col4a,
    col4b,
  });
};
