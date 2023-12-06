/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
import '../utils/Env.js';
import { GLOBAL, ServerContext } from '../context.js';

async function main(cx: ServerContext) {
  cx.logger.debug('fixErroredBonuses start');
  // Get all brutes with dog2 or dog3 and without dog1
  const brutes = await cx.prisma.brute.findMany({
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
    cx.logger.log(`Found ${brutes.length} brutes with dog2 or dog3 and without dog1`);
  }

  for (const brute of brutes) {
    // Replace dog2 or dog3 with dog1
    await cx.prisma.brute.update({
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

/**
 * Initialize the global context, then run `main`
 */
async function mainWrapper() {
  await using context = GLOBAL;
  await main(context);
}

await mainWrapper();
