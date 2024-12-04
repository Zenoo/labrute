import {
  ConfigsDecryptRequest,
  ConfigsDecryptResponse,
  ConfigsListResponse,
  ConfigsSetRequest,
  ConfigsSetResponse,
  ExpectedError,
} from '@labrute/core';
import {
  PrismaClient,
} from '@labrute/prisma';
import Cryptr from 'cryptr';
import type { Request, Response } from 'express';
import { GLOBAL } from '../context.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

export const Configs = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<ConfigsListResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin only
      if (!user?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      // Get configs
      const configs = await prisma.config.findMany({
        where: {
          key: {
            not: 'CRYPTR_SECRET',
          },
        },
      });

      res.status(200).send(configs);
    } catch (error) {
      sendError(res, error);
    }
  },
  set: (prisma: PrismaClient) => async (
    req: Request<never, unknown, ConfigsSetRequest>,
    res: Response<ConfigsSetResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin only
      if (!user?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const { key, value } = req.body;

      if (!key || !value) {
        throw new ExpectedError('Missing key or value');
      }

      // Get CRYPTR_SECRET
      const cryptrSecret = await prisma.config.findFirst({
        where: { key: 'CRYPTR_SECRET' },
      });

      if (key === 'CRYPTR_SECRET' && cryptrSecret) {
        throw new ExpectedError('CRYPTR_SECRET already exists');
      }

      if (key !== 'CRYPTR_SECRET' && !cryptrSecret) {
        throw new ExpectedError('CRYPTR_SECRET is missing');
      }

      const cryptr = new Cryptr(cryptrSecret?.value ?? 'dev');
      const encryptedValue = key === 'CRYPTR_SECRET' ? value : cryptr.encrypt(value);

      // Update config
      const config = await prisma.config.upsert({
        where: { key },
        update: {
          value: encryptedValue,
          updatedAt: new Date(),
        },
        create: { key, value: encryptedValue },
      });

      // Re-init global context
      await GLOBAL.init();

      res.status(200).send(config);
    } catch (error) {
      sendError(res, error);
    }
  },
  decrypt: (prisma: PrismaClient) => async (
    req: Request<never, unknown, ConfigsDecryptRequest>,
    res: Response<ConfigsDecryptResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin only
      if (!user?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const { value } = req.body;

      if (!value) {
        throw new ExpectedError('Missing value');
      }

      // Get CRYPTR_SECRET
      const cryptrSecret = await prisma.config.findFirst({
        where: { key: 'CRYPTR_SECRET' },
      });

      if (!cryptrSecret) {
        throw new ExpectedError('CRYPTR_SECRET is missing');
      }

      const cryptr = new Cryptr(cryptrSecret.value);
      const decrypted = cryptr.decrypt(value);

      res.status(200).send({ decrypted });
    } catch (error) {
      sendError(res, error);
    }
  },
  delete: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { key: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin only
      if (!user?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const { key } = req.body;

      if (!key) {
        throw new ExpectedError('Missing key');
      }

      if (key === 'CRYPTR_SECRET') {
        throw new ExpectedError('CRYPTR_SECRET cannot be deleted');
      }

      // Delete config
      await prisma.config.delete({ where: { key } });

      // Re-init global context
      await GLOBAL.init();

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};
