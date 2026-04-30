import {
  BruteDeletionReason,
  BruteReportsListRequest, BruteReportsListResponse, BruteReportsSendRequest,
  ExpectedError,
  LimitError,
  MissingElementError,
  NotFoundError,
} from '@labrute/core';
import {
  BruteReportReason, BruteReportStatus, InventoryItemType, NotificationSeverity, PrismaClient,
} from '@labrute/prisma';
import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import { LOGGER } from '../context.js';
import { auth } from '../utils/auth.js';
import { ilike } from '../utils/ilike.js';
import { sendError } from '../utils/sendError.js';
import { translate } from '../utils/translate.js';
import { traced } from '../utils/trace.js';

export const BruteReports = {
  list: (prisma: PrismaClient) => async (
    req: Request<BruteReportsListRequest>,
    res: Response<BruteReportsListResponse>,
  ) => {
    try {
      await auth(prisma, req, { moderator: true });

      // Get reports
      const reports = await traced('bruteReports.list.getReports', () => prisma.bruteReport.findMany({
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
        // Order by count for pending, by handledAt for others
        orderBy: req.params.status === BruteReportStatus.pending
          ? [{ count: 'desc' }, { date: 'desc' }]
          : { handledAt: { sort: 'desc', nulls: 'last' } },
      }));

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
        throw new MissingElementError(translate('missingParameters', user));
      }

      if (!BruteReportReason[reason]) {
        throw new ExpectedError(translate('invalidReason', user));
      }

      // Get brute
      const brute = await traced('bruteReports.send.getBrute', () => prisma.brute.findFirst({
        where: {
          name: ilike(name),
          deletedAt: null,
        },
        select: { id: true, name: true, deletionReason: true },
      }));

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', user));
      }

      if (brute.deletionReason) {
        res.status(200).send({
          success: true,
        });
        return;
      }

      // Check if an existing report exists
      const existingReport = await traced('bruteReports.send.getExistingReport', () => prisma.bruteReport.findFirst({
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
      }));

      // Check if user already reported this brute
      if (existingReport && existingReport.users.some((u) => u.id === user.id)) {
        throw new LimitError(translate('bruteAlreadyReported', user));
      }

      if (existingReport) {
        // Increment count and add user
        await traced('bruteReports.send.updateExistingReport', () => prisma.bruteReport.update({
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
        }));
      } else {
        // Create report
        await traced('bruteReports.send.createReport', () => prisma.bruteReport.create({
          data: {
            brute: {
              connect: {
                id: brute.id,
              },
            },
            bruteName: brute.name,
            users: {
              connect: {
                id: user.id,
              },
            },
          },
          select: { id: true },
        }));
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
      const user = await auth(prisma, req, { moderator: true });

      const report = await traced('bruteReports.accept.getReport', () => prisma.bruteReport.findFirst({
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
      }));

      if (!report) {
        throw new NotFoundError(translate('reportNotFound', user));
      }

      if (report.handledAt) {
        throw new LimitError(translate('reportAlreadyHandled', user));
      }

      await traced('bruteReports.accept.updateReport', () => prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.accepted,
          handlerId: user.id,
          handledAt: new Date(),
        },
        select: { id: true },
      }));

      // Add name to banned words
      await traced('bruteReports.accept.addBannedWord', () => prisma.bannedWord.create({
        data: {
          word: report.brute?.name.toLowerCase() ?? report.bruteName.toLowerCase(),
        },
        select: { id: true },
      }));

      const reportBruteId = report.bruteId;
      if (reportBruteId) {
        // Tag brute for deletion
        await traced('bruteReports.accept.tagBruteForDeletion', () => prisma.brute.update({
          where: {
            id: reportBruteId,
          },
          data: {
            willBeDeletedAt: dayjs.utc().add(3, 'day').toDate(),
            deletionReason: BruteDeletionReason.INNAPROPRIATE_NAME,
          },
          select: { id: true },
        }));
      }

      const reportBrute = report.brute;
      const reportBruteUserId = reportBrute?.userId;
      if (!reportBruteUserId) {
        res.status(200).send({
          success: true,
        });
        return;
      }

      // Send notification to user
      await traced('bruteReports.accept.sendNotification', () => prisma.notification.create({
        data: {
          userId: reportBruteUserId,
          message: 'bruteSetForDeletion',
          severity: NotificationSeverity.error,
          link: `/${reportBrute.name}/cell`,
        },
        select: { id: true },
      }));

      // Add 1 free name change
      const nameChange = reportBrute.inventory[0];

      if (nameChange) {
        await traced('bruteReports.accept.updateNameChange', () => prisma.inventoryItem.update({
          where: {
            id: nameChange.id,
          },
          data: {
            count: {
              increment: 1,
            },
          },
          select: { id: true },
        }));
      } else {
        await traced('bruteReports.accept.createNameChange', () => prisma.inventoryItem.create({
          data: {
            type: InventoryItemType.nameChange,
            bruteId: reportBrute.id,
          },
          select: { id: true },
        }));
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
      const user = await auth(prisma, req, { moderator: true });

      const report = await traced('bruteReports.reject.findReport', () => prisma.bruteReport.findFirst({
        where: {
          id: req.params.id,
        },
      }));

      if (!report) {
        throw new NotFoundError(translate('reportNotFound', user));
      }

      if (report.handledAt) {
        throw new LimitError(translate('reportAlreadyHandled', user));
      }

      await traced('bruteReports.reject.updateReport', () => prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.rejected,
          handlerId: user.id,
          handledAt: new Date(),
        },
        select: { id: true },
      }));

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  cancel: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      const report = await traced('bruteReports.cancel.findReport', () => prisma.bruteReport.findFirst({
        where: {
          id: req.params.id,
          status: BruteReportStatus.accepted,
        },
        select: {
          id: true,
          brute: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }));

      const reportBrute = report?.brute;

      if (!report || !reportBrute) {
        throw new NotFoundError(translate('reportNotFound', user));
      }

      // Revert report status to rejected
      await traced('bruteReports.cancel.updateReport', () => prisma.bruteReport.update({
        where: {
          id: report.id,
        },
        data: {
          status: BruteReportStatus.rejected,
          handledAt: new Date(),
          handlerId: user.id,
        },
        select: { id: true },
      }));

      // Remove brute from deletion queue
      await traced('bruteReports.cancel.updateBrute', () => prisma.brute.update({
        where: {
          id: reportBrute.id,
        },
        data: {
          willBeDeletedAt: null,
          deletionReason: null,
        },
        select: { id: true },
      }));

      // Remove name from banned words
      await traced('bruteReports.cancel.deleteBannedWords', () => prisma.bannedWord.deleteMany({
        where: {
          word: reportBrute.name.toLowerCase(),
        },
      }));

      LOGGER.log(`Report for brute ${reportBrute.name} cancelled by ${user.id}`);

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
      const user = await auth(prisma, req, { admin: true });

      const { word } = req.params;

      if (!word) {
        throw new MissingElementError(translate('missingParameters', user));
      }

      // Delete banned words containing this word
      await traced('bruteReports.addBannedWord.deleteBannedWords', () => prisma.bannedWord.deleteMany({
        where: {
          word: {
            contains: word,
            mode: 'insensitive',
          },
        },
      }));

      // Add banned word
      await traced('bruteReports.addBannedWord.createBannedWord', () => prisma.bannedWord.create({
        data: {
          word: word.toLowerCase(),
        },
        select: { id: true },
      }));

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};
