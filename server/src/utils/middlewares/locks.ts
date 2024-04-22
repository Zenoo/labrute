import { ExpectedError } from '@labrute/core';
import { Request, Response, NextFunction } from 'express';
import sendError from '../sendError.js';

interface Locks {
  [key: string]: boolean
}

const locks: Locks = {};

export default function lockMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;

  const { headers: { authorization } } = req;

  if (authorization) {
    const [id, token] = Buffer.from(authorization.split(' ')[1], 'base64')
      .toString()
      .split(':');

    if (!id || !token || id === 'null' || token === 'null') {
      return sendError(res, new ExpectedError('Invalid authorization header content'));
    }

    const key: string = `${method}:${path}:${id}:${token}`;

    if (locks[key]) {
      return sendError(res, new ExpectedError('Too many requests'));
    }

    locks[key] = true;

    res.on('finish', () => {
      delete locks[key];
    });
  }
  next();
}
