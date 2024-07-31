import { ClanWarCreateResponse, ClanWarUpdateFightersResponse, ExpectedError } from '@labrute/core';
import { ClanWarStatus, PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';
import isUuid from '../utils/uuid.js';

const ClanWars = {
  create: (prisma: PrismaClient) => async (
    req: Request<{ clan: string; opponent: string }>,
    res: Response<ClanWarCreateResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.clan || !req.params.opponent) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      // Check if user is the clan master
      const clan = await prisma.clan.findFirst({
        where: { id: req.params.clan, masterId: user.id },
        select: { id: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      // Check if the clan is already in a war
      const war = await prisma.clanWar.findFirst({
        where: {
          OR: [
            { attackerId: req.params.clan },
            { defenderId: req.params.clan },
          ],
          status: { not: ClanWarStatus.finished },
        },
        select: { id: true },
      });

      if (war) {
        throw new ExpectedError(translate('warOngoing', user));
      }

      // Check if the opponent clan exists
      const opponent = await prisma.clan.findFirst({
        where: { id: req.params.opponent },
        select: { id: true },
      });

      if (!opponent) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Create the war
      const newWar = await prisma.clanWar.create({
        data: {
          attackerId: req.params.clan,
          defenderId: req.params.opponent,
        },
        select: { id: true },
      });

      res.status(200).send(newWar);
    } catch (error) {
      sendError(res, error);
    }
  },
  reject: (prisma: PrismaClient) => async (
    req: Request<{ clan: string; war: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.clan || !req.params.war) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const war = await prisma.clanWar.findFirst({
        where: {
          id: req.params.war,
          defenderId: req.params.clan,
          status: ClanWarStatus.pending,
          defender: { masterId: user.id },
        },
        select: { id: true },
      });

      if (!war) {
        throw new ExpectedError(translate('warNotFound', user));
      }

      await prisma.clanWar.update({
        where: {
          id: war.id,
        },
        data: {
          status: ClanWarStatus.rejected,
        },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  accept: (prisma: PrismaClient) => async (
    req: Request<{ clan: string; war: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.clan || !req.params.war) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const war = await prisma.clanWar.findFirst({
        where: {
          id: req.params.war,
          defenderId: req.params.clan,
          status: ClanWarStatus.pending,
          defender: { masterId: user.id },
        },
        select: { id: true },
      });

      if (!war) {
        throw new ExpectedError(translate('warNotFound', user));
      }

      await prisma.clanWar.update({
        where: {
          id: war.id,
        },
        data: {
          status: ClanWarStatus.accepted,
        },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  updateFighters: (prisma: PrismaClient) => async (
    req: Request<{ clan: string; war: string; }, unknown, { day: number; fighters: string[] }>,
    res: Response<ClanWarUpdateFightersResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.clan
        || !req.params.war
        || !Array.isArray(req.body.fighters)
        || req.body.fighters.some((fighter) => !isUuid(fighter))
        || !req.body.day) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const war = await prisma.clanWar.findFirst({
        where: {
          id: req.params.war,
          status: { in: [ClanWarStatus.accepted, ClanWarStatus.ongoing] },
          OR: [
            { attackerId: req.params.clan },
            { defenderId: req.params.clan },
          ],
        },
        select: {
          id: true,
          duration: true,
          attackerId: true,
          defenderId: true,
        },
      });

      if (!war) {
        throw new ExpectedError(translate('warNotFound', user));
      }

      // Check if the user is the clan master
      const clan = await prisma.clan.findFirst({
        where: { id: req.params.clan, masterId: user.id },
        select: { id: true },
      });

      if (!clan) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      // Check if the day is valid
      if (req.body.day < 1 || req.body.day > war.duration) {
        throw new ExpectedError(translate('invalidParameters', user));
      }

      // Get the fighters
      const brutes = await prisma.brute.findMany({
        where: {
          id: { in: req.body.fighters },
          clanId: req.params.clan,
          deletedAt: null,
        },
        select: { id: true },
      });

      // Update the clan war fighters
      await prisma.clanWarFighters.upsert({
        where: {
          clanWarId_day: { clanWarId: war.id, day: req.body.day },
        },
        create: {
          clanWar: { connect: { id: war.id } },
          day: req.body.day,
          attackers: war.attackerId === req.params.clan
            ? { connect: brutes.map((brute) => ({ id: brute.id })) }
            : undefined,
          defenders: war.defenderId === req.params.clan
            ? { connect: brutes.map((brute) => ({ id: brute.id })) }
            : undefined,
        },
        update: {
          attackers: war.attackerId === req.params.clan
            ? { set: brutes.map((brute) => ({ id: brute.id })) }
            : undefined,
          defenders: war.defenderId === req.params.clan
            ? { set: brutes.map((brute) => ({ id: brute.id })) }
            : undefined,
        },
        select: { id: true },
      });

      res.status(200).send(brutes);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default ClanWars;
