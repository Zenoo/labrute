import { NextFunction, Request, Response } from 'express';
import { GLOBAL } from '../../context.js';
import ServerState from '../ServerState.js';

export const readyCheck = async (req: Request, res: Response, next: NextFunction) => {
  const { prisma } = GLOBAL;
  const isReady = await ServerState.isReady(prisma);

  if (req.path !== '/api/is-ready' && !isReady) {
    res.status(999).send('Server is not ready');
    return;
  }

  next();
};
