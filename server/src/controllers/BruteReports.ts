import {
  BruteDeletionReason,
  BruteReportsListRequest, BruteReportsListResponse, BruteReportsSendRequest,
  ExpectedError,
} from '@labrute/core';
import {
  BruteReportReason, BruteReportStatus, InventoryItemType, NotificationSeverity, PrismaClient,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import { LOGGER } from '../context.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';
import { ilike } from '../utils/ilike.js';

const BruteReports = {
  list: (prisma: PrismaClient) => async (
    req: Request<BruteReportsListRequest>,
    res: Response<BruteReportsListResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin or moderator only
      if (!user?.admin && !user?.moderator) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      // Order by count for pending, by handledAt for others
      const orderBy = req.params.status === BruteReportStatus.pending
        ? { count: 'desc' } as const
        : { handledAt: 'desc' } as const;

      // Get reports
      const reports = await prisma.bruteReport.findMany({
        where: {
          status: req.params.status,
        },
        take: 20,
        skip: +req.params.page * 20,
        include: {
          brute: {
            select: {
              id: true,
              name: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
            },
          },
          handler: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy,
      });

      res.status(200).send(reports);
    } catch (error) {
      sendError(res, error);
    }
  },
  send: (prisma: PrismaClient) => async (
    req: Request<BruteReportsSendRequest>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      const { name, reason } = req.params;

      if (!name || !reason) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      if (!BruteReportReason[reason]) {
        throw new ExpectedError(translate('invalidReason', user));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(name),
          deletedAt: null,
        },
        select: { id: true, name: true, deletionReason: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      if (brute.deletionReason) {
        res.status(200).send({
          success: true,
        });
        return;
      }

      // Check if an existing report exists
      const existingReport = await prisma.bruteReport.findFirst({
        where: {
          bruteId: brute.id,
          reason,
          status: BruteReportStatus.pending,
        },
        include: {
          users: {
            select: {
              id: true,
            },
          },
        },
      });

      // Check if user already reported this brute
      if (existingReport && existingReport.users.some((u) => u.id === user.id)) {
        throw new ExpectedError(translate('bruteAlreadyReported', user));
      }

      if (existingReport) {
        // Increment count and add user
        await prisma.bruteReport.update({
          where: {
            id: existingReport.id,
          },
          data: {
            count: {
              increment: 1,
            },
            users: {
              connect: {
                id: user.id,
              },
            },
          },
          select: { id: true },
        });
      } else {
        // Create report
        await prisma.bruteReport.create({
          data: {
            brute: {
              connect: {
                id: brute.id,
              },
            },
            users: {
              connect: {
                id: user.id,
              },
            },
          },
          select: { id: true },
        });
      }

      LOGGER.log(`New report for ${brute.name} by ${user.id}`);

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  accept: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin or moderator only
      if (!user?.admin && !user?.moderator) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const report = await prisma.bruteReport.findFirst({
        where: {
          id: req.params.id,
        },
        include: {
          brute: {
            select: {
              id: true,
              name: true,
              clanId: true,
              level: true,
              ranking: true,
              userId: true,
              inventory: {
                select: {
                  id: true,
                  type: true,
                  count: true,
                },
                where: {
                  type: InventoryItemType.nameChange,
                },
              },
            },
          },
        },
      });

      if (!report) {
        throw new ExpectedError(translate('reportNotFound', authed));
      }

      if (report.handledAt) {
        throw new ExpectedError(translate('reportAlreadyHandled', authed));
      }

      await prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.accepted,
          handlerId: authed.id,
          handledAt: new Date(),
        },
        select: { id: true },
      });

      // Add name to banned words
      await prisma.bannedWord.create({
        data: {
          word: report.brute.name.toLowerCase(),
        },
        select: { id: true },
      });

      // Tag brute for deletion
      await prisma.brute.update({
        where: {
          id: report.bruteId,
        },
        data: {
          willBeDeletedAt: moment.utc().add(3, 'day').toDate(),
          deletionReason: BruteDeletionReason.INNAPROPRIATE_NAME,
        },
        select: { id: true },
      });

      // Send notification to user
      if (!report.brute.userId) {
        throw new Error(translate('userNotFound', authed));
      }

      await prisma.notification.create({
        data: {
          userId: report.brute.userId,
          message: 'bruteSetForDeletion',
          severity: NotificationSeverity.error,
          link: `/${report.brute.name}/cell`,
        },
        select: { id: true },
      });

      // Add 1 free name change
      const nameChange = report.brute.inventory[0];

      if (nameChange) {
        await prisma.inventoryItem.update({
          where: {
            id: nameChange.id,
          },
          data: {
            count: {
              increment: 1,
            },
          },
          select: { id: true },
        });
      } else {
        await prisma.inventoryItem.create({
          data: {
            type: InventoryItemType.nameChange,
            bruteId: report.brute.id,
          },
          select: { id: true },
        });
      }

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  reject: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true, moderator: true },
      });

      // Admin or moderator only
      if (!user?.admin && !user?.moderator) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const report = await prisma.bruteReport.findFirst({
        where: {
          id: req.params.id,
        },
      });

      if (!report) {
        throw new ExpectedError(translate('reportNotFound', authed));
      }

      if (report.handledAt) {
        throw new ExpectedError(translate('reportAlreadyHandled', authed));
      }

      await prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.rejected,
          handlerId: authed.id,
          handledAt: new Date(),
        },
        select: { id: true },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  addBannedWord: (prisma: PrismaClient) => async (
    req: Request<{ word: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      // Admin only
      if (!user?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const { word } = req.params;

      if (!word) {
        throw new ExpectedError(translate('missingParameters', authed));
      }

      // Delete banned words containing this word
      await prisma.bannedWord.deleteMany({
        where: {
          word: {
            contains: word,
            mode: 'insensitive',
          },
        },
      });

      // Add banned word
      await prisma.bannedWord.create({
        data: {
          word: word.toLowerCase(),
        },
        select: { id: true },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default BruteReports;
