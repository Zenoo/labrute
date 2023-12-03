import {
  ClanCreateResponse, ClanGetResponse, ClanListResponse, ExpectedError,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const Clans = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<ClanListResponse>,
  ) => {
    try {
      if (!req.query.page) {
        throw new ExpectedError('Missing page number');
      }

      const page = +req.query.page;

      if (page < 1) {
        throw new ExpectedError('Page number must be greater than 0');
      }

      const clans = await prisma.clan.findMany({
        skip: (page - 1) * 15,
        take: 15,
        orderBy: { points: 'desc' },
        include: {
          brutes: { select: { id: true } },
          master: { select: { name: true } },
        },
      });

      res.status(200).send(clans);
    } catch (error) {
      sendError(res, error);
    }
  },
  create: (prisma: PrismaClient) => async (
    req: Request<{ brute: string }>,
    res: Response<ClanCreateResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.brute || !req.query.name) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      const brute = user.brutes.find((b) => b.name === req.params.brute);
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      const clanName = req.query.name.toString().trim();

      // Check for clan name length
      if (clanName.length < 3 || clanName.length > 50) {
        throw new ExpectedError(translate('clanNameLength', user));
      }

      // Check if clan name is available
      const clanExists = await prisma.clan.count({
        where: { name: clanName },
      });

      if (clanExists) {
        throw new ExpectedError(translate('clanNameAlreadyTaken', user));
      }

      // Check name for banned words
      const server = await prisma.serverState.findFirst({
        where: { id: 1 },
        select: { banWords: true },
      });

      if (!server) {
        throw new Error('Server state not found');
      }

      if (server.banWords.some((word) => clanName.includes(word))) {
        throw new ExpectedError(translate('nameContainsBannedWord', user));
      }

      const clan = await prisma.clan.create({
        data: {
          name: clanName,
          master: { connect: { id: brute.id } },
          brutes: { connect: { id: brute.id } },
        },
        select: { id: true, name: true },
      });

      res.status(200).send(clan);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response<ClanGetResponse>,
  ) => {
    try {
      if (!req.params.id || Number.isNaN(+req.params.id)) {
        throw new ExpectedError('Missing clan id');
      }

      const id = +req.params.id;

      const clan = await prisma.clan.findFirst({
        where: { id },
        include: {
          brutes: {
            include: {
              body: true,
              colors: true,
            },
          },
          joinRequests: {
            include: {
              body: true,
              colors: true,
            },
          },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound'));
      }

      res.status(200).send(clan);
    } catch (error) {
      sendError(res, error);
    }
  },
  request: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || Number.isNaN(+req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const id = +req.params.id;

      const clan = await prisma.clan.findFirst({
        where: { id },
        select: {
          id: true,
          limit: true,
          brutes: { select: { id: true } },
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const brute = user.brutes.find((b) => b.name === req.params.brute);
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is already in clan
      if (brute.clanId) {
        throw new ExpectedError(translate('alreadyInClan', user));
      }

      // Check if clan is full
      if (clan.brutes.length >= clan.limit) {
        throw new ExpectedError(translate('clanFull', user));
      }

      // Check if brute already sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (request) {
        throw new ExpectedError(translate('alreadyRequested', user));
      }

      // Create request
      await prisma.clan.update({
        where: { id },
        data: { joinRequests: { connect: { id: brute.id } } },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  cancelRequest: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || Number.isNaN(+req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const id = +req.params.id;

      const clan = await prisma.clan.findFirst({
        where: { id },
        select: {
          id: true,
          limit: true,
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const brute = user.brutes.find((b) => b.name === req.params.brute);
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (!request) {
        throw new ExpectedError(translate('noRequestFound', user));
      }

      // Delete request
      await prisma.clan.update({
        where: { id },
        data: { joinRequests: { disconnect: { id: brute.id } } },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  accept: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || Number.isNaN(+req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const id = +req.params.id;

      const clan = await prisma.clan.findFirst({
        where: { id },
        select: {
          id: true,
          limit: true,
          brutes: { select: { id: true } },
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Check if one of the user brutes is the clan master
      if (!clan.brutes.some((b) => b.id === user.brutes[0].id)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.brute,
          deletedAt: null,
        },
        select: { id: true, clanId: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is already in clan
      if (brute.clanId) {
        throw new ExpectedError(translate('alreadyInClan', user));
      }

      // Check if clan is full
      if (clan.brutes.length >= clan.limit) {
        throw new ExpectedError(translate('clanFull', user));
      }

      // Check if brute sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (!request) {
        throw new ExpectedError(translate('noRequestFound', user));
      }

      // Update clan
      await prisma.clan.update({
        where: { id },
        data: {
          brutes: { connect: { id: brute.id } },
          joinRequests: { disconnect: { id: brute.id } },
        },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  reject: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || Number.isNaN(+req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const id = +req.params.id;

      const clan = await prisma.clan.findFirst({
        where: { id },
        select: {
          id: true,
          joinRequests: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.brute,
          deletedAt: null,
        },
        select: { id: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute sent a request
      const request = clan.joinRequests.find((r) => r.id === brute.id);

      if (!request) {
        throw new ExpectedError(translate('noRequestFound', user));
      }

      // Delete request
      await prisma.clan.update({
        where: { id },
        data: { joinRequests: { disconnect: { id: brute.id } } },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
  remove: (prisma: PrismaClient) => async (
    req: Request<{ id: string; brute: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id || Number.isNaN(+req.params.id)) {
        throw new ExpectedError(translate('missingClanId', user));
      }

      const id = +req.params.id;

      const clan = await prisma.clan.findFirst({
        where: { id },
        select: {
          id: true,
          brutes: { select: { id: true } },
        },
      });

      if (!clan) {
        throw new ExpectedError(translate('clanNotFound', user));
      }

      // Check if one of the user brutes is the clan master
      if (!clan.brutes.some((b) => b.id === user.brutes[0].id)) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.brute,
          deletedAt: null,
        },
        select: { id: true },
      });
      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if brute is in clan
      if (!clan.brutes.some((b) => b.id === brute.id)) {
        throw new ExpectedError(translate('bruteNotInClan', user));
      }

      // Update clan
      await prisma.clan.update({
        where: { id },
        data: { brutes: { disconnect: { id: brute.id } } },
      });

      res.status(200).send({ message: 'ok' });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Clans;
