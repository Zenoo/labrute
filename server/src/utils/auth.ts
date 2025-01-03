import {
  ExpectedError, ForbiddenError, isUuid, NotFoundError,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request } from 'express';
import moment from 'moment';
import ServerState from './ServerState.js';
import translate from './translate.js';

const auth = async (prisma: PrismaClient, request: Request) => {
  const { headers: { authorization } } = request;

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

  const user = await prisma.user.findFirst({
    where: {
      id,
      connexionToken: token,
    },
    select: {
      id: true,
      lang: true,
      bannedAt: true,
      banReason: true,
      ips: true,
      lastSeen: true,
    },
  });

  if (!user) {
    throw new NotFoundError('User not found');
  }

  if (user.bannedAt) {
    throw new ForbiddenError(translate('bannedAccount', user, { reason: translate(`banReason.${user.banReason || ''}`, user) }));
  }

  // Update user's IP
  const ip = request.headers['x-forwarded-for']?.toString().split(', ')[0] || request.headers['x-real-ip']?.toString().split(', ')[0] || request.socket.remoteAddress;

  if (ip) {
    // Check if the IP is banned
    const bannedIp = await ServerState.isIpBanned(prisma, ip);

    if (bannedIp) {
      throw new ForbiddenError(translate('ipBanned', null));
    }
  }

  if (ip && !user.ips.includes(ip)) {
    await prisma.user.update({
      where: { id },
      data: {
        ips: {
          push: ip,
        },
      },
    });
  }

  // Update last seen
  if (!moment.utc(user.lastSeen).isSame(moment.utc(), 'day')) {
    await prisma.user.update({
      where: { id },
      data: {
        lastSeen: new Date(),
      },
    });
  }

  return {
    id: user.id,
    lang: user.lang,
  };
};

export default auth;
