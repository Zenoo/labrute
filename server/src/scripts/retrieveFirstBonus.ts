/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
import { getRandomBonus } from '@labrute/core';
import {
  DestinyChoiceType, PetName, SkillName, WeaponName,
} from '@labrute/prisma';
import '../utils/Env.js';
import { GLOBAL, ServerContext } from '../context.js';

async function main(cx: ServerContext) {
  cx.logger.info('retrieveFirstBonus: start');
  // Get all brutes with no first bonus stored
  const brutes = await cx.prisma.brute.findMany({
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
    cx.logger.log(`Found ${brutes.length} brutes with no first bonus stored`);
  }

  for (const brute of brutes) {
    const unregisteredSkill = brute.skills.find((skill) => brute.destinyChoices
      .every((choice) => choice.skill !== skill));

    if (unregisteredSkill) {
      // Store first bonus
      await cx.prisma.destinyChoice.create({
        data: {
          type: DestinyChoiceType.skill,
          skill: unregisteredSkill,
          bruteId: brute.id,
          path: [],
        },
        select: { id: true },
      });

      cx.logger.log(`First bonus ${unregisteredSkill} found for brute ${brute.name}`);

      continue;
    }

    const unregisteredWeapon = brute.weapons.find((weapon) => brute.destinyChoices
      .every((choice) => choice.weapon !== weapon));

    if (unregisteredWeapon) {
      // Store first bonus
      await cx.prisma.destinyChoice.create({
        data: {
          type: DestinyChoiceType.weapon,
          weapon: unregisteredWeapon,
          bruteId: brute.id,
          path: [],
        },
        select: { id: true },
      });

      cx.logger.log(`First bonus ${unregisteredWeapon} found for brute ${brute.name}`);

      continue;
    }

    const unregisteredPet = brute.pets.find((pet) => brute.destinyChoices
      .every((choice) => choice.pet !== pet));

    if (unregisteredPet) {
      // Store first bonus
      await cx.prisma.destinyChoice.create({
        data: {
          type: DestinyChoiceType.pet,
          pet: unregisteredPet,
          bruteId: brute.id,
          path: [],
        },
        select: { id: true },
      });

      cx.logger.log(`First bonus ${unregisteredPet} found for brute ${brute.name}`);

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
      cx.logger.log(`No first bonus found for brute ${brute.name}`);
      continue;
    }

    // Store first bonus
    await cx.prisma.destinyChoice.create({
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

/**
 * Initialize the global context, then run `main`
 */
async function mainWrapper() {
  await using context = GLOBAL;
  await main(context);
}

await mainWrapper();
