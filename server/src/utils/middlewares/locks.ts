import { ForbiddenError, LimitError } from '@labrute/core';
import type { NextFunction, Request, Response } from 'express';
import { sendError } from '../sendError.js';

const allowedRoutes = [
  '/api/user/authenticate',
];

const locks = new Map<string, NodeJS.Timeout>();

const deleteLock = (key: string) => {
  if (locks.has(key)) {
    clearTimeout(locks.get(key));
    locks.delete(key);
  }
};

export const lockMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { method, path } = req;

  const { headers: { authorization } } = req;

  if (authorization) {
    const [id] = Buffer.from(authorization.split(' ')[1] || '', 'base64').toString().split(':');

    if (!id || id === 'null') {
      return sendError(res, new ForbiddenError('Invalid authorization header content'));
    }

    if (allowedRoutes.includes(path)) {
      return next();
    }

    const key = `${method}:${path.toLowerCase().replace(/\//g, '')}:${id}`;

    if (locks.has(key)) {
      return sendError(res, new LimitError('Too many requests'));
    }

    locks.set(key, setTimeout(() => {
      deleteLock(key);
    }, 10000));

    res.on('close', () => {
      deleteLock(key);
    });

    res.on('error', () => {
      deleteLock(key);
    });

    res.on('finish', () => {
      deleteLock(key);
    });
  }

  return next();
};
