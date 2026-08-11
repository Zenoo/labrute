import {
  createRandomBruteStats, FIGHTS_PER_DAY,
  getBruteToSave, getLevelUpChoices, getRandomBody, getRandomColors
} from "@labrute/core";
import { Gender, Prisma } from "@labrute/prisma";
import dayjs from "dayjs";
import { updateBruteData } from "./updateBruteData.js";


export const generateBot = (
  level: number,
  name: string,
): Prisma.BruteCreateInput => {
  if (level < 1) {
    throw new Error('Level must be at least 1');
  }

  // 50% change male
  const gender: Gender = Math.random() > 0.5 ? 'male' : 'female';

  // Level 1 stats
  const data = {
    id: undefined,
    name,
    gender,
    body: getRandomBody(gender),
    colors: getRandomColors(gender),
    victories: 0,
    losses: 0,
    pupilsCount: 0,
    lastFight: dayjs.utc().toDate() as Date | null,
    fightsLeft: FIGHTS_PER_DAY,
    ...createRandomBruteStats(),
  };

  let bruteData = getBruteToSave(data);

  // Level the brute to desired level
  for (let j = 1; j < level; j++) {
    // NOTE: Destiny is ignored for now

    // Get level up choices
    const levelUpChoices = getLevelUpChoices(bruteData);

    // Randomly choose one of the choices
    const levelUpChoice = Math.random() > 0.5 ? levelUpChoices[0] : levelUpChoices[1];

    // Update the brute data
    bruteData = {
      ...bruteData,
      ...updateBruteData(
        { ...bruteData, id: '', eventId: null },
        levelUpChoice,
      ),
      id: undefined,
    };
  }

  return bruteData;
};
