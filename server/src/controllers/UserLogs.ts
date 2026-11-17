import {
  InvalidAPIUseError, isUuid,
  UserLogsListRequest,
  UserLogsListResponse,
} from '@labrute/core';
import { PrismaClient, UserLogType } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { auth } from '../utils/auth.js';
import { sendError } from '../utils/sendError.js';
import { translate } from '../utils/translate.js';
import { traced } from '../utils/trace.js';
import { adminGridQuery } from '../utils/adminGridQuery.js';

const pageSize = 20;

export const UserLogs = {
  list: (prisma: PrismaClient) => async (
    req: Request<never, unknown, UserLogsListRequest>,
    res: Response<UserLogsListResponse>,
  ) => {
    try {
      const user = await auth(prisma, req, { admin: true });
      const { userIds, type } = req.body;
      const page = Number(req.body.page);
      const skip = (page - 1) * pageSize;

      if (!Array.isArray(userIds)
        || userIds.some((id) => typeof id !== 'string' || !isUuid(id))
        || !Number.isSafeInteger(page) || page < 1 || skip >= 2 ** 31
        || (type !== undefined && !Object.values(UserLogType).includes(type))) {
        throw new InvalidAPIUseError(user, translate('invalidParameters', user));
      }

      const grid = adminGridQuery(req.body.grid, {
        date: 'date',
        type: Object.values(UserLogType),
      });

      const logs = await traced('userLogs.list.findLogs', () => prisma.userLog.findMany({
        where: {
          userId: { in: userIds },
          type,
          ...(grid.filter ? { AND: grid.where } : {}),
        },
        orderBy: grid.orderBy ?? [{ date: 'desc' }, { id: 'desc' }],
        take: pageSize + 1,
        skip,
        include: {
          user: {
            select: { name: true },
          },
          brute: {
            select: { name: true },
          },
        },
      }));

      res.status(200).send({
        logs: logs.slice(0, pageSize),
        hasNext: logs.length > pageSize,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};
