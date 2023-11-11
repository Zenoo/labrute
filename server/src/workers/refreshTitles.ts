/* eslint-disable no-await-in-loop */
import { PrismaClient } from '@labrute/prisma';
import DiscordUtils from '../utils/DiscordUtils.js';

const prisma = new PrismaClient();

try {
  // Get all brutes
  const brutes = await prisma.brute.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      achievements: true,
    },
  });

  for (const brute of brutes) {
    // Go through all achievements
    for (const achievement of brute.achievements) {
      console.log(achievement);
    }
  }
} catch (error) {
  await DiscordUtils.sendError(error);
}