/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import {
  PrismaClient,
} from '@labrute/prisma';
import '../utils/Env.js';

const prisma = new PrismaClient();

async function main() {
  // Grant beta achievement to all brutes who don't have it yet
  const brutes = await prisma.brute.findMany({
    where: {
      userId: { not: null },
      deletedAt: null,
      achievements: {
        none: {
          name: {
            equals: 'beta',
          },
        },
      },
    },
  });

  console.log(`Found ${brutes.length} brutes witout beta achievement`);

  // Grant beta achievement
  await prisma.achievement.createMany({
    data: brutes.map((brute) => ({
      name: 'beta',
      bruteId: brute.id,
      userId: brute.userId,
      count: 1,
    })),
  });
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