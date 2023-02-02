import { AuthType } from '@eternal-twin/core/auth/auth-type';
import { Url } from '@eternal-twin/core/core/url';
import { HttpEtwinClient } from '@eternal-twin/etwin-client-http';
import { RfcOauthClient } from '@eternal-twin/oauth-client-http/rfc-oauth-client';
import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import { URL } from 'url';
import Env from '../utils/Env.js';
import sendError from '../utils/sendError.js';

const oauthClient = new RfcOauthClient({
  authorizationEndpoint: new Url(`${Env.ETWIN_URL}oauth/authorize`),
  tokenEndpoint: new Url(`${Env.ETWIN_URL}oauth/token`),
  callbackEndpoint: new Url(`${Env.SELF_URL}/oauth/callback`),
  clientId: Env.ETWIN_CLIENT_ID,
  clientSecret: Env.ETWIN_CLIENT_SECRET,
});

const OAuth = {
  redirect: (req: Request, res: Response) => {
    try {
      res.send({
        url: oauthClient.getAuthorizationUri('base', ''),
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  token: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.query.code || typeof req.query.code !== 'string') {
        throw new Error('Invalid code');
      }

      // ETwin Token
      const token = await oauthClient.getAccessToken(req.query.code);

      // ETWin User
      const etwinClient = new HttpEtwinClient(new URL(Env.ETWIN_URL));
      const self = await etwinClient.getAuthSelf(token.accessToken);

      if (self.type !== AuthType.AccessToken) {
        throw new Error('Invalid auth type');
      }

      // Update or store user
      const { user: etwinUser } = self;

      const existingUser = await prisma.user.findFirst({
        where: { id: etwinUser.id },
      });

      // If user does not exist, create it
      if (!existingUser) {
        await prisma.user.create({
          data: {
            id: etwinUser.id,
            connexionToken: token.accessToken,
            name: etwinUser.displayName.current.value,
          },
        });
      } else {
        // If user exists, update it
        await prisma.user.update({
          where: { id: etwinUser.id },
          data: {
            name: etwinUser.displayName.current.value,
            connexionToken: token.accessToken,
          },
        });
      }

      // Fetch user data
      const user = await prisma.user.findFirst({
        where: { id: etwinUser.id, connexionToken: token.accessToken },
        include: {
          brutes: {
            where: { deletedAt: null },
            include: { body: true, colors: true },
          },
        },
      });

      res.send(user);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default OAuth;
