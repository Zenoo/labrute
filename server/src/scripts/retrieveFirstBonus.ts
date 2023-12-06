/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import { getRandomBonus } from '@labrute/core';
import {
  DestinyChoiceType, PetName, PrismaClient, SkillName, WeaponName,
} from '@labrute/prisma';
import '../utils/Env.js';
import {LOGGER} from "../context.js";

const prisma = new PrismaClient();

async function main() {
  LOGGER.debug('WorkerStart');
  // Get all brutes with no first bonus stored
  const brutes = await prisma.brute.findMany({
    where: {
      userId: { not: null },
      deletedAt: null,
      destinyChoices: {
        none: {
          path: {
            equals: [],
          },
        },
      },
    },
    include: {
      destinyChoices: true,
    },
  });

  if (brutes.length) {
    LOGGER.log(`Found ${brutes.length} brutes with no first bonus stored`);
  }

  for (const brute of brutes) {
    const unregisteredSkill = brute.skills.find((skill) => brute.destinyChoices
      .every((choice) => choice.skill !== skill));

    if (unregisteredSkill) {
      // Store first bonus
      await prisma.destinyChoice.create({
        data: {
          type: DestinyChoiceType.skill,
          skill: unregisteredSkill,
          bruteId: brute.id,
          path: [],
        },
        select: { id: true },
      });

      LOGGER.log(`First bonus ${unregisteredSkill} found for brute ${brute.name}`);

      continue;
    }

    const unregisteredWeapon = brute.weapons.find((weapon) => brute.destinyChoices
      .every((choice) => choice.weapon !== weapon));

    if (unregisteredWeapon) {
      // Store first bonus
      await prisma.destinyChoice.create({
        data: {
          type: DestinyChoiceType.weapon,
          weapon: unregisteredWeapon,
          bruteId: brute.id,
          path: [],
        },
        select: { id: true },
      });

      LOGGER.log(`First bonus ${unregisteredWeapon} found for brute ${brute.name}`);

      continue;
    }

    const unregisteredPet = brute.pets.find((pet) => brute.destinyChoices
      .every((choice) => choice.pet !== pet));

    if (unregisteredPet) {
      // Store first bonus
      await prisma.destinyChoice.create({
        data: {
          type: DestinyChoiceType.pet,
          pet: unregisteredPet,
          bruteId: brute.id,
          path: [],
        },
        select: { id: true },
      });

      LOGGER.log(`First bonus ${unregisteredPet} found for brute ${brute.name}`);

      continue;
    }

    // Generate random first bonus if none found
    const firstBonus = getRandomBonus(
      brute,
      true,
      brute.skills,
      brute.weapons,
      brute.pets,
    );

    if (!firstBonus) {
      LOGGER.log(`No first bonus found for brute ${brute.name}`);
      continue;
    }

    // Store first bonus
    await prisma.destinyChoice.create({
      data: {
        type: firstBonus.type,
        pet: firstBonus.type === DestinyChoiceType.pet
          ? firstBonus.name as PetName : undefined,
        skill: firstBonus.type === DestinyChoiceType.skill
          ? firstBonus.name as SkillName : undefined,
        weapon: firstBonus.type === DestinyChoiceType.weapon
          ? firstBonus.name as WeaponName : undefined,
        bruteId: brute.id,
        path: [],
      },
      select: { id: true },
    });
  }
}
main()
  .then(async () => {
    LOGGER.debug("retrieveFirstBonus end");
    await prisma.$disconnect();
    LOGGER.debug("retrieveFirstBonus end - OK");
  })
  .catch(async (e) => {
    LOGGER.debug("retrieveFirstBonus end - ERROR");
    LOGGER.error(e);
    await prisma.$disconnect();
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
