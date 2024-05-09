import { AuthType } from '@eternaltwin/core/auth/auth-type';
import { EternaltwinNodeClient } from '@eternaltwin/client-node';
import { RfcOauthClient } from '@eternaltwin/oauth-client-http/rfc-oauth-client';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { ExpectedError } from '@labrute/core';
import urlJoin from 'url-join';
import { trace } from '@opentelemetry/api';
import sendError from '../utils/sendError.js';
import { Config } from '../config.js';

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

  public redirect(req: Request, res: Response): void {
    try {
      res.send({
        url: this.#oauthClient.getAuthorizationUri('base', ''),
      });
    } catch (error) {
      sendError(res, error);
    }
  }

  public async token(req: Request, res: Response): Promise<void> {
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

      // Update or store user
      const { user: etwinUser } = self;

      const existingUser = await this.#prisma.user.findFirst({
        where: { id: etwinUser.id },
      });

      // If user does not exist, create it
      if (!existingUser) {
        await this.#prisma.user.create({
          data: {
            id: etwinUser.id,
            connexionToken: token.accessToken,
            name: etwinUser.displayName.current.value,
          },
          select: { id: true },
        });
      } else {
        // If user exists, update it
        await this.#prisma.user.update({
          where: { id: etwinUser.id },
          data: {
            name: etwinUser.displayName.current.value,
            connexionToken: token.accessToken,
          },
          select: { id: true },
        });
      }

      // Fetch user data
      const user = await this.#prisma.user.findFirst({
        where: { id: etwinUser.id, connexionToken: token.accessToken },
        include: {
          brutes: {
            where: { deletedAt: null },
          },
        },
      });

      res.send(user);
    } catch (error) {
      sendError(res, error);
    }
  }
}
