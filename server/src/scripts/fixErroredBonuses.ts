/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import {
  PrismaClient,
} from '@labrute/prisma';
import '../utils/Env.js';
import { LOGGER } from '../context.js';

const prisma = new PrismaClient();

async function main() {
  LOGGER.debug('fixErroredBonuses start');
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
    LOGGER.log(`Found ${brutes.length} brutes with dog2 or dog3 and without dog1`);
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
      select: { id: true },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
    LOGGER.debug('fixErroredBonuses end - OK');
  })
  .catch(async (e) => {
    LOGGER.debug('fixErroredBonuses end - ERROR');
    LOGGER.error(e);
    await prisma.$disconnect();
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
