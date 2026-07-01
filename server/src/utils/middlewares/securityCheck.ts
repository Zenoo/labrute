import {
  checkPredictableHeaders,
  ExpectedError,
  FINGERPRINT_HEADER,
  ForbiddenError,
  VERSION_HEADER,
  Version,
  LANGUAGE_HEADER,
} from '@labrute/core';
import type {
  NextFunction, Request, Response
} from 'express';
import { sendError } from '../sendError.js';
import { translate } from '../translate.js';
import { Lang } from '@labrute/prisma';
import { isFingerprintFormatValid } from '../fingerprint.js';

/**
 * Check version, fingerprint, headers and browser ID to prevent unauthrized API calls
 */
export const securityCheck = (req: Request, res: Response, next: NextFunction) => {
  const hasAuthorization = typeof req.headers.authorization === 'string'
    && req.headers.authorization.length > 0;

  req.security = {};

  // Keep health/readiness endpoints callable from outside of the web client.
  if (req.path === '/api' || req.path === '/api/is-ready') {
    return next();
  }

  // Allow /api/user/:userId/done since it's called from external apps
  if (req.path.startsWith('/api/user/') && req.path.endsWith('/done')) {
    return next();
  }

  try {
    checkPredictableHeaders(req.headers);
    req.security.validHeaders = true;
  } catch (_error) {
    req.security.validHeaders = false;

    if (!hasAuthorization) {
      return sendError(res, new ForbiddenError('Invalid predictable headers'));
    }
  }

  // Don't check fingerprint or browserId for /fpe
  if (req.path === '/api/fpe') {
    return next();
  }

  if (req.headers[VERSION_HEADER] !== Version) {
    const lang = req.headers[LANGUAGE_HEADER];
    const error = new ForbiddenError(translate('outdatedVersion', { lang: lang?.toString() as Lang || Lang.en }));

    return sendError(res, error);
  }

  const browserId = req.cookies?.browserId;

  if (typeof browserId !== 'string' || !browserId.length) {
    if (!hasAuthorization) {
      return sendError(res, new ForbiddenError('Missing browser ID'));
    }
  } else {
    req.security.browserId = browserId;
  }

  const fingerprint = req.headers[FINGERPRINT_HEADER];

  if (typeof fingerprint !== 'string') {
    return sendError(res, new ExpectedError('Invalid fingerprint header'));
  }

  if (!fingerprint.length) {
    return sendError(res, new ExpectedError('Invalid fingerprint header length'));
  }

  if (!isFingerprintFormatValid(fingerprint)) {
    return sendError(res, new ExpectedError('Invalid fingerprint format'));
  }

  req.security.fingerprint = fingerprint;

  return next();
};
