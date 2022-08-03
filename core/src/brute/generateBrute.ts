import { Gender, Brute } from '../types.js';
import createRandomBruteStats from './createRandomBruteStats.js';
import getLevelUpChoices from './getLevelUpChoices.js';
import getRandomBody from './getRandomBody.js';
import getRandomColors from './getRandomColors.js';
import updateBruteData from './updateBruteData.js';

const generateBrute = (level: number) => {
  if (level < 1) {
    throw new Error('Level must be at least 1');
  }

  // 50% change male
  const gender: Gender = Math.random() > 0.5 ? 'male' : 'female';

  // Level 1 stats
  let data: Brute['data'] = {
    user: '',
    gender,
    body: getRandomBody(gender),
    colors: getRandomColors(gender),
    master: '',
    victories: 0,
    pupils: 0,
    ...createRandomBruteStats(),
  };

  // Level the brute to desired level
  for (let j = 1; j < level; j++) {
    // NOTE: Destiny is ignored for now

    // Get level up choices
    const levelUpChoices = getLevelUpChoices({ data } as Brute);

    // Randomly choose one of the choices
    const levelUpChoice = Math.random() > 0.5 ? levelUpChoices[0] : levelUpChoices[1];

    // Update the brute data
    data = {
      ...data,
      ...updateBruteData(
        { data } as Brute,
        levelUpChoice,
      ),
    };
  }

  return data;
};

export default generateBrute;