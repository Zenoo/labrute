import { AuthType } from '@eternaltwin/core/auth/auth-type';
import { EternaltwinNodeClient } from '@eternaltwin/client-node';
import { ErrorCode } from '@eternaltwin/client-node/error';
import { GetAccessTokenError, RfcOauthClient } from '@eternaltwin/oauth-client-http/rfc-oauth-client';
import { InventoryItemType, PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { ExpectedError, UserWithBrutesBodyColor } from '@labrute/core';
import urlJoin from 'url-join';
import { trace } from '@opentelemetry/api';
import sendError from '../utils/sendError.js';
import { Config } from '../config.js';
import translate from '../utils/translate.js';
import ServerState from '../utils/ServerState.js';

export default class OAuth {
  #oauthClient: RfcOauthClient;

  #eternaltwinClient: EternaltwinNodeClient;

  #prisma: PrismaClient;

  public constructor(config: Config, prisma: PrismaClient) {
    this.#oauthClient = new RfcOauthClient({
      authorizationEndpoint: new URL(urlJoin(config.eternaltwin.url, 'oauth/authorize')),
      tokenEndpoint: new URL(urlJoin(config.eternaltwin.url, 'oauth/token')),
      callbackEndpoint: new URL(urlJoin(config.selfUrl.toString(), 'oauth/callback')),
      clientId: config.eternaltwin.clientRef,
      clientSecret: config.eternaltwin.secret,
    });
    this.#eternaltwinClient = new EternaltwinNodeClient(new URL(config.eternaltwin.url));
    this.#prisma = prisma;
  }

  public redirect(_req: Request, res: Response): void {
    try {
      res.send({
        url: this.#oauthClient.getAuthorizationUri('base', ''),
      });
    } catch (error) {
      sendError(res, error);
    }
  }

  public async token(
    req: Request,
    res: Response<UserWithBrutesBodyColor>,
  ): Promise<void> {
    try {
      if (!req.query.code || typeof req.query.code !== 'string') {
        throw new ExpectedError('Invalid code');
      }

      // ETwin Token
      const token = await this.#oauthClient.getAccessToken(req.query.code);

      // ETWin User
      const self = await this.#eternaltwinClient.getAuthSelf({ auth: token.accessToken });

      if (self.type !== AuthType.AccessToken) {
        throw new Error('Invalid auth type');
      }
      trace.getActiveSpan()?.addEvent('getAuthSelf', { 'user.id': self.user.id });

      // Get user's IP
      const ip = req.headers['x-forwarded-for']?.toString().split(', ')[0] || req.headers['x-real-ip']?.toString().split(', ')[0] || req.socket.remoteAddress;

      if (ip) {
        // Check if the IP is banned
        const bannedIp = await ServerState.isIpBanned(this.#prisma, ip);

        if (bannedIp) {
          throw new ExpectedError(translate('ipBanned', null));
        }
      }

      // Update or store user
      const { user: etwinUser } = self;

      const user = await this.#prisma.user.upsert({
        where: { id: etwinUser.id },
        update: {
          connexionToken: token.accessToken,
          name: etwinUser.displayName.current.value,
        },
        create: {
          id: etwinUser.id,
          connexionToken: token.accessToken,
          name: etwinUser.displayName.current.value,
          // 5 free favorite fights
          inventory: {
            create: {
              type: InventoryItemType.favoriteFight,
              count: 5,
            },
          },
        },
        include: {
          brutes: {
            where: { deletedAt: null },
            orderBy: [
              { favorite: 'desc' },
              { createdAt: 'asc' },
            ],
          },
          following: {
            select: { id: true },
          },
          notifications: {
            where: { read: false },
          },
        },
      });

      // Check if user is banned
      if (user.bannedAt) {
        throw new ExpectedError(translate('bannedAccount', user, { reason: translate(`banReason.${user.banReason || ''}`, user) }));
      }

      res.send(user);
    } catch (error: unknown) {
      if (error instanceof GetAccessTokenError) {
        switch (error?.eternaltwin?.code) {
          case ErrorCode.OauthCodeTimeError:
          case ErrorCode.OauthCodeFormatError:
            // Skip logging the error when the token is expired or the format
            // is invalid. This can happen if an old token is reused. This
            // usually happens when the JS redirects fails and the original
            // URL with the token remains in the browser history.
            break;
          default:
            sendError(res, error);
        }
      } else {
        sendError(res, error);
      }
    }
  }
}
