/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import {
  PrismaClient,
} from '@labrute/prisma';
import '../utils/Env.js';
import DiscordUtils from '../utils/DiscordUtils.js';

const prisma = new PrismaClient();

async function main() {
  // Get all brutes with dog2 or dog3 and without dog1
  const brutes = await prisma.brute.findMany({
    where: {
      userId: { not: null },
      deletedAt: null,
      OR: [
        { pets: { has: 'dog2' } },
        { pets: { has: 'dog3' } },
      ],
      NOT: {
        pets: { has: 'dog1' },
      },
    },
  });

  if (brutes.length) {
    await DiscordUtils.sendLog(`Found ${brutes.length} brutes with dog2 or dog3 and without dog1`);
  }

  for (const brute of brutes) {
    // Replace dog2 or dog3 with dog1
    await prisma.brute.update({
      where: {
        id: brute.id,
      },
      data: {
        pets: [...brute.pets.filter((pet) => pet !== 'dog2' && pet !== 'dog3'), 'dog1'],
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });