import { ExpectedError } from '@labrute/core';
import { Request, Response, NextFunction } from 'express';
import sendError from '../sendError.js';

interface Locks {
  [key: string]: boolean | undefined
}

const locks: Locks = {};

export default function lockMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;

  const { headers: { authorization } } = req;

  if (authorization) {
    const [id] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');

    if (!id || id === 'null') {
      return sendError(res, new ExpectedError('Invalid authorization header content'));
    }

    const key = `${method}:${path}:${id}`;

    if (locks[key]) {
      return sendError(res, new ExpectedError('Too many requests'));
    }

    locks[key] = true;

    setTimeout(() => {
      delete locks[key];
    }, 60000);

    res.on('finish', () => {
      delete locks[key];
    });

    res.on('close', () => {
      delete locks[key];
    });
  }

  return next();
}
