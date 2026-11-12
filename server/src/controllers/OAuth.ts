import { EternaltwinNodeClient } from '@eternaltwin/client-node';
import { ErrorCode } from '@eternaltwin/client-node/error';
import { AuthType } from '@eternaltwin/core/auth/auth-type';
import { GetAccessTokenError, RfcOauthClient } from '@eternaltwin/oauth-client-http/rfc-oauth-client';
import {
  checkPredictableHeaders,
  ExpectedError,
  ForbiddenError,
  OAuthTokenRequest,
  UsersAuthenticateResponse,
  UserWithBrutesBodyColor,
  Version,
} from '@labrute/core';
import {
  InventoryItemType, Prisma, PrismaClient, UserLogType,
} from '@labrute/prisma';
import { trace } from '@opentelemetry/api';
import type { Request, Response } from 'express';
import urlJoin from 'url-join';
import { Config } from '../config.js';
import { createUserLog } from '../utils/createUserLog.js';
import { sendError } from '../utils/sendError.js';
import { ServerState } from '../utils/ServerState.js';
import { translate } from '../utils/translate.js';
import { verifyFingerprintEvent, registerFingerprintIdentity } from '../utils/fingerprintEvent.js';
import { getIdentifierRestrictions } from '../utils/identifierSanctions.js';
import { getBrowserId } from '../utils/browserId.js';
import { traced } from '../utils/trace.js';
import { recordAccountObservation } from '../utils/accountObservations.js';
import { getClientIp } from '../utils/clientIp.js';
import { bannedAccountMessage } from '../utils/user/bannedAccountMessage.js';

export class OAuth {
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

  public redirect(_req: Request, res: Response) {
    // Disable CORS
    res.header('Access-Control-Allow-Origin', '*');

    try {
      res.send({
        url: this.#oauthClient.getAuthorizationUri('base', ''),
      });
    } catch (error) {
      sendError(res, error);
    }
  }

  public async token(
    req: Request<never, never, OAuthTokenRequest>,
    res: Response<UsersAuthenticateResponse>,
  ) {
    // Disable CORS
    res.header('Access-Control-Allow-Origin', '*');

    let oauthUserId: string | undefined;

    try {
      if (!req.body?.code || typeof req.body.code !== 'string') {
        throw new ExpectedError('Invalid code');
      }

      // Validate the receipt, verified browser, header binding and purpose before any account writes.
      const { fingerprint } = verifyFingerprintEvent(req.body.eventId, req);
      const browserId = getBrowserId(req);

      if (!browserId) {
        throw new ForbiddenError('Missing or invalid browser ID. Reload the page.');
      }

      try {
        checkPredictableHeaders(req.headers);
      } catch {
        throw new ForbiddenError('Invalid predictable headers');
      }

      // ETwin Token
      const token = await this.#oauthClient.getAccessToken(req.body.code);

      // ETWin User
      const self = await this.#eternaltwinClient.getAuthSelf({ auth: token.accessToken });

      if (self.type !== AuthType.AccessToken) {
        throw new Error('Invalid auth type');
      }

      oauthUserId = self.user.id;
      trace.getActiveSpan()?.addEvent('getAuthSelf', { 'user.id': self.user.id });

      // Get user's IP
      const ip = getClientIp(req);

      if (ip) {
        // Check if the IP is banned
        const bannedIp = await ServerState.isIpBanned(this.#prisma, ip);

        if (bannedIp) {
          throw new ForbiddenError(translate('ipBanned', null));
        }
      }

      const restrictions = await traced('oauth.token.getIdentifierRestrictions', () => getIdentifierRestrictions(
        this.#prisma, self.user.id, browserId, fingerprint,
      ));

      if (restrictions.browserRestricted) {
        throw new ForbiddenError(translate('banned', null));
      }

      if (restrictions.fingerprintRestricted) {
        throw new ForbiddenError(translate('fingerprintBanned', null));
      }

      // Update or store user
      const { user: etwinUser } = self;
      let user: UserWithBrutesBodyColor | null = null;

      try {
        user = await traced('oauth.token.upsertUser', () => this.#prisma.user.upsert({
          where: {
            id: etwinUser.id,
            bannedAt: null,
          },
          update: {
            connexionToken: token.accessToken,
            name: etwinUser.displayName.current.value,
          },
          create: {
            id: etwinUser.id,
            connexionToken: token.accessToken,
            name: etwinUser.displayName.current.value,
            fingerprints: [fingerprint],
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
        }));
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          switch (error.code) {
            case 'P2002': {
              // Upsert race condition, update the user
              user = await traced('oauth.token.updateUser', () => this.#prisma.user.update({
                where: {
                  id: etwinUser.id,
                  bannedAt: null,
                },
                data: {
                  connexionToken: token.accessToken,
                  name: etwinUser.displayName.current.value,
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
              }));
              break;
            }

            default: {
              throw error;
            }
          }
        } else {
          throw error;
        }
      }

      // Check if user is banned
      if (user.bannedAt) {
        if (user.banReason === 'account_deleted') {
          throw new ForbiddenError(translate('deletedAccount', user));
        } else {
          throw new ForbiddenError(bannedAccountMessage(user));
        }
      }

      if (!user.fingerprints.includes(fingerprint)) {
        await registerFingerprintIdentity(this.#prisma, user.id, fingerprint);
        user.fingerprints.push(fingerprint);
      }

      await recordAccountObservation(this.#prisma, user.id, req);

      // Connect log
      createUserLog(this.#prisma, {
        type: UserLogType.CONNECT,
        userId: user.id,
      });

      res.send({
        user,
        modifiers: await ServerState.getModifiers(this.#prisma),
        currentEvent: await ServerState.getCurrentEvent(this.#prisma),
        version: Version,
      });
    } catch (error: unknown) {
      // A conditional write can reject a banned account or a ban committed during login.
      // Fetch the explanation only on this failure path, never before a successful upsert.
      if (oauthUserId && error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        const rejected = await this.#prisma.user.findUnique({
          where: { id: oauthUserId },
          select: {
            id: true,
            bannedAt: true,
            banReason: true,
            lang: true,
            banAppealCode: true,
          },
        });

        if (rejected?.bannedAt) {
          const message = rejected.banReason === 'account_deleted'
            ? translate('deletedAccount', rejected)
            : bannedAccountMessage(rejected);

          sendError(res, new ForbiddenError(message));

          return;
        }
      }

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
