import { NotificationListResponse } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

export const Notifications = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<NotificationListResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Get notifications
      const notifications = await prisma.notification.findMany({
        where: {
          userId: user.id,
          read: false,
        },
        orderBy: { date: 'desc' },
      });

      res.status(200).send(notifications);
    } catch (error) {
      sendError(res, error);
    }
  },
  setRead: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      await prisma.notification.update({
        where: { id: req.params.id, userId: user.id },
        data: { read: true },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  setAllRead: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      await prisma.notification.updateMany({
        where: { userId: user.id, read: false },
        data: { read: true },
      });

      res.status(200).send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};
