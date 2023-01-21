import {
  DetailedFight, Fighter, getFightsLeft, randomBetween,
} from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import moment from 'moment';
import auth from '../utils/auth';
import {
  checkDeaths, getOpponents, orderFighters, playFighterTurn, saboteur, stepFighter,
} from '../utils/fight/fightMethods';
import getFighters from '../utils/fight/getFighters';
import sendError from '../utils/sendError';

const Fights = {
  get: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name || !req.params.id) {
        throw new Error('Invalid parameters');
      }

      // Get fight
      const fight = await prisma.fight.findFirst({
        where: {
          id: +req.params.id,
          OR: [
            { brute1: { name: req.params.name } },
            { brute2: { name: req.params.name } },
          ],
        },
      });

      if (!fight) {
        throw new Error('Fight not found');
      }

      res.send(fight);
    } catch (error) {
      sendError(res, error);
    }
  },
  create: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { brute1: string, brute2: string }>,
    res: Response,
  ) => {
    try {
      await auth(prisma, req);

      if (!req.body.brute1 || !req.body.brute2) {
        throw new Error('Invalid parameters');
      }

      // Get brutes
      const brute1 = await prisma.brute.findFirst({
        where: {
          name: req.body.brute1,
          deleted: false,
        },
        include: {
          body: true,
          colors: true,
        },
      });
      if (!brute1) {
        throw new Error('Brute 1 not found');
      }
      const brute2 = await prisma.brute.findFirst({
        where: {
          name: req.body.brute2,
          deleted: false,
        },
        include: {
          body: true,
          colors: true,
        },
      });
      if (!brute2) {
        throw new Error('Brute 2 not found');
      }

      // Cancel if brute1 has no fights left
      if (getFightsLeft(brute1) <= 0) {
        throw new Error('No fights left');
      }

      // Get brute backups
      const brute1Backups = await prisma.brute.findMany({
        where: {
          skills: { has: 'backup' },
          level: { lt: brute1.level },
          userId: brute1.userId,
          deleted: false,
        },
        include: {
          body: true,
          colors: true,
        },
      });
      const brute2Backups = await prisma.brute.findMany({
        where: {
          skills: { has: 'backup' },
          level: { lt: brute2.level },
          userId: brute2.userId,
          deleted: false,
        },
        include: {
          body: true,
          colors: true,
        },
      });

      const brute1Backup = brute1Backups.length
        ? brute1Backups[randomBetween(0, brute1Backups.length - 1)]
        : null;
      const brute2Backup = brute2Backups.length
        ? brute2Backups[randomBetween(0, brute2Backups.length - 1)]
        : null;

      // Global fight data
      const fightData: DetailedFight['data'] = {
        fighters: getFighters(
          { brute: brute1, backup: brute1Backup },
          { brute: brute2, backup: brute2Backup },
        ),
        initialFighters: getFighters(
          { brute: brute1, backup: brute1Backup },
          { brute: brute2, backup: brute2Backup },
        ),
        steps: [],
        initiative: 0,
        winner: null,
        loser: null,
      };

      // Pre-fight saboteur
      saboteur(fightData);

      // Poison fighters
      [brute1, brute2].forEach((brute) => {
        if (brute.skills.includes('chef')) {
          const fighter = fightData.fighters.find(({ type, name }) => type === 'brute' && name === brute.name);

          if (!fighter) {
            throw new Error('Fighter 1 not found');
          }
          getOpponents(fightData, fighter).forEach((opponent) => {
            // eslint-disable-next-line no-param-reassign
            opponent.poisoned = true;
          });
        }
      });

      const mainFighters = fightData.fighters.filter(({ master }) => !master);
      const petFighters = fightData.fighters.filter(({ type }) => type === 'pet');

      if (mainFighters.length !== 2) {
        throw new Error('Invalid number of fighters');
      }

      // Add arrive step for all fighters
      [...mainFighters, ...petFighters].forEach((fighter) => {
        fightData.steps.push({
          action: 'arrive',
          fighter: stepFighter(fighter),
        });
      });

      // Fight loop
      while (!fightData.loser) {
        if (!fightData.fighters.length) {
          // No fighters left
          return;
        }

        // Order fighters by initiative (random if equal)
        orderFighters(fightData);

        // Set current initiative to first fighter
        fightData.initiative = fightData.fighters[0].initiative;

        // Play fighter turn
        playFighterTurn(fightData);

        // Check deaths
        checkDeaths(fightData);
      }

      if (!fightData.loser) {
        throw new Error('Fight not finished');
      }

      const { loser } = fightData;

      // Get winner
      const winner = fightData.fighters.find((fighter) => fighter.name !== loser.name
        && fighter.type === 'brute'
        && !fighter.master);

      if (!winner) {
        throw new Error('No winner found');
      }

      // Set fight winner and loser
      fightData.winner = stepFighter(winner);

      // Add end step
      fightData.steps.push({
        action: 'end',
        winner: fightData.winner,
        loser: fightData.loser,
      });

      // Reduce the size of the fighters data
      const fighters: Fighter[] = fightData.initialFighters.map((fighter) => ({
        id: fighter.id,
        name: fighter.name,
        data: fighter.data,
        type: fighter.type,
        master: fighter.master,
        maxHp: fighter.maxHp,
        hp: fighter.hp,
        weapons: fighter.weapons.map((weapon) => ({
          name: weapon.name,
          animation: weapon.animation,
        })),
        skills: fighter.skills.map((skill) => skill.name),
        shield: fighter.shield,
      }));

      // Save important fight data
      const { id: fightId } = await prisma.fight.create({
        data: {
          brute1: { connect: { id: brute1.id } },
          brute2: { connect: { id: brute2.id } },
          winner: winner.name,
          loser: loser.name,
          steps: fightData.steps as unknown as Prisma.JsonArray,
          fighters: fighters as unknown as Prisma.JsonArray,
        },
        select: { id: true },
      });

      // Get XP gained
      // (+2 for a win against a brute at least 2 level below you)
      // (+1 for a win against a brute at least 10 level below you)
      // (+0 otherwise)
      const levelDifference = brute1.level - brute2.level;
      const xpGained = winner.name === brute1.name
        ? levelDifference > 10 ? 0 : levelDifference > 2 ? 1 : 2
        : levelDifference > 10 ? 0 : 1;

      // Update brute XP, last fight and fights left
      await prisma.brute.update({
        where: { id: brute1.id },
        data: {
          xp: { increment: xpGained },
          lastFight: moment().format('DD/MM/YYYY'),
          fightsLeft: getFightsLeft(brute1) - 1,
        },
      });

      // Add fighter log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute1.id } },
          type: winner.name === brute1.name ? 'win' : 'lose',
          brute: brute2.name,
          fight: { connect: { id: fightId } },
          xp: xpGained,
        },
      });

      // Add opponent log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute2.id } },
          type: winner.name === brute2.name ? 'survive' : 'lose',
          brute: brute1.name,
          fight: { connect: { id: fightId } },
        },
      });

      // Send fight id to client
      res.send({ id: fightId });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Fights;
