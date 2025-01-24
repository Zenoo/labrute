import {
  ExpectedError, isUuid,
  UserLogsListRequest,
  UserLogsListResponse,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { auth } from '../utils/auth.js';
import { sendError } from '../utils/sendError.js';
import { translate } from '../utils/translate.js';

export const UserLogs = {
  list: (prisma: PrismaClient) => async (
    req: Request<never, unknown, UserLogsListRequest>,
    res: Response<UserLogsListResponse>,
  ) => {
    try {
      const user = await auth(prisma, req, { admin: true });

      if (!req.body.userIds
        || !Array.isArray(req.body.userIds)
        || req.body.userIds.some((id) => !isUuid(id))
        || Number.isNaN(req.body.page)) {
        throw new ExpectedError(translate('invalidParameters', user));
      }

      // Get user logs
      const logs = await prisma.userLog.findMany({
        where: {
          userId: { in: req.body.userIds },
        },
        orderBy: { date: 'desc' },
        take: 20,
        skip: (+req.body.page - 1) * 20,
        include: {
          user: {
            select: { name: true },
          },
          brute: {
            select: { name: true },
          },
        },
      });

      res.status(200).send(logs);
    } catch (error) {
      sendError(res, error);
    }
  },
};
