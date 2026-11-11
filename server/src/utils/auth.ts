import {
  ExpectedError, ForbiddenError,
  isUuid, NotFoundError,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import dayjs from 'dayjs';
import type { Request } from 'express';
import { ServerState } from './ServerState.js';
import { translate } from './translate.js';
import { findUserForAuthentication } from './identifierSanctions.js';
import { traced } from './trace.js';
import { increaseStats } from './stats/updateStats.js';
import { recordAccountObservation } from './accountObservations.js';
import { logSecurityRejection } from './securityRejectionLog.js';
import { getClientIp } from './clientIp.js';

export const auth = async (prisma: PrismaClient, request: Request, options?: {
  admin?: boolean;
  moderator?: boolean;
  skipFingerprintCheck?: boolean;
}) => {
  const {
    authorization,
  } = request.headers;

  const fingerprint = request.security?.fingerprint;
  const browserId = request.security?.browserId;

  if (!authorization) {
    throw new ForbiddenError('You are not logged in');
  }
  if (typeof authorization !== 'string') {
    throw new ExpectedError('Invalid authorization header');
  }

  const [id, token] = Buffer.from(authorization.split(' ')[1] || '', 'base64')
    .toString().split(':');

  if (!id || !token || id === 'null' || token === 'null') {
    throw new ExpectedError('Invalid authorization header content');
  }

  if (!isUuid(id)) {
    throw new ExpectedError('Invalid user ID');
  }

  const user = await traced('auth.findUser', () => findUserForAuthentication(
    prisma, id, token, browserId ?? '', fingerprint ?? '',
  ));

  if (!user) {
    throw new NotFoundError('User not found');
  }

  if (user.bannedAt) {
    throw new ForbiddenError(translate('bannedAccount', user, { reason: translate(`banReason.${user.banReason || ''}`, user) }));
  }

  // Update user's IP
  const ip = getClientIp(request);

  if (ip) {
    // Check if the IP is banned
    const bannedIp = await ServerState.isIpBanned(prisma, ip);

    if (bannedIp) {
      throw new ForbiddenError(translate('ipBanned', user));
    }
  }

  // Check if the user is an admin
  if (options?.admin && !user.admin) {
    throw new ForbiddenError(translate('unauthorized', user));
  }

  // Check if the user is a moderator
  if (options?.moderator && (!user.moderator && !user.admin)) {
    throw new ForbiddenError(translate('unauthorized', user));
  }

  if (typeof browserId !== 'string' || browserId.length !== 36 || !isUuid(browserId)) {
    throw new ForbiddenError('Missing or invalid browser ID. Reload the page to refresh it.');
  }

  // Retain browser history for investigations; identifier matches never ban this account.
  if (!user.browserIds.includes(browserId)) {
    await traced('auth.updateUserBrowserIds', () => prisma.user.update({
      where: { id },
      data: { browserIds: { push: browserId } },
    }));
  }

  // Check if the sent fingerprint is valid
  // (if the user doesn't have this fingerprint in database,
  // it means it was tampered with, as fingerprints can only
  // be added by the server after verification)
  if (!options?.skipFingerprintCheck && !user.fingerprints.includes(fingerprint ?? '')) {
    logSecurityRejection(user.id, 'unrecognized-fingerprint', request);
    throw new ForbiddenError('Unrecognized fingerprint');
  }

  if (user.browserRestricted) throw new ForbiddenError(translate('banned', user));
  if (user.fingerprintRestricted) throw new ForbiddenError(translate('fingerprintBanned', user));

  // Check expected headers
  if (!request.security?.validHeaders) {
    logSecurityRejection(user.id, 'headers-tampering', request);
    throw new ForbiddenError(translate('banReason.headers_tampering', user));
  }

  // Reauthentication records after the newly verified fingerprint has been registered.
  if (!options?.skipFingerprintCheck) {
    await recordAccountObservation(prisma, user.id, request);
  }

  if (ip && !user.ips.includes(ip)) {
    await traced('auth.updateUserIps', () => prisma.user.update({
      where: { id },
      data: {
        ips: {
          push: ip,
        },
      },
    }));
  }

  // Update last seen
  if (!dayjs.utc(user.lastSeen).isSame(dayjs.utc(), 'day')) {
    await traced('auth.updateUserLastSeen', () => prisma.user.update({
      where: { id },
      data: {
        lastSeen: new Date(),
      },
    }));

    increaseStats({ prisma, user, stats: ['connectedDays'] });
  }

  return {
    id: user.id,
    lang: user.lang,
    fingerprints: user.fingerprints,
    admin: user.admin,
  };
};

export type AuthedUser = Awaited<ReturnType<typeof auth>>;
