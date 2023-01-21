import { Request, Response } from 'express';
import { URL } from 'url';
import { env } from 'process';
import { PrismaClient } from '@labrute/prisma';
import fetch from 'node-fetch';
import sendError from '../utils/sendError';

interface OauthAccessToken {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  tokenType: 0;
}

interface SelfAuthContext {
  type: 1,
  scope: 0,
  user: {
    type: 12,
    id: string,
    displayName: {
      current: {
        value: string,
      }
    },
  },
  isAdministrator: boolean,
}

const MOCK_HttpEtwinClient = {
  api: env.ETWIN_URL || '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAuthSelf: (accessToken: string) => Promise.resolve({} as SelfAuthContext),
};

const authorizationEndpoint = `${env.ETWIN_URL || ''}oauth/authorize`;
const callbackEndpoint = `${env.SELF_URL || ''}/oauth/callback`;
const clientId = env.ETWIN_CLIENT_ID || '';
const clientSecret = env.ETWIN_CLIENT_SECRET || '';
const tokenEndpoint = `${env.ETWIN_URL || ''}oauth/token`;

const getAuthorizationHeader = () => {
  const credentials = `${clientId}:${clientSecret}`;
  const token = Buffer.from(credentials).toString('base64');

  return `Basic ${token}`;
};

const getAccessToken = async (code: string) => {
  const requestBody = {
    clientId,
    clientSecret,
    redirectUri: callbackEndpoint,
    code,
    grantType: '0',
  };

  return fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      Authorization: getAuthorizationHeader(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(requestBody),
  }).then((res) => {
    if (res.status === 404) {
      throw new Error(`Resource not found: ${tokenEndpoint}`);
    } else if (res.status === 500) {
      throw new Error('Authorization server error');
    }

    return res.json() as Promise<OauthAccessToken>;
  });
};

const OAuth = {
  redirect: (req: Request, res: Response) => {
    try {
      const url = new URL(authorizationEndpoint);
      url.searchParams.append('access_type', 'offline');
      url.searchParams.append('response_type', 'code');
      url.searchParams.append('redirect_uri', callbackEndpoint);
      url.searchParams.append('client_id', clientId);
      url.searchParams.append('scope', 'base');
      url.searchParams.append('state', '');

      res.status(200).send(url.toString());
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
      const token = await getAccessToken(req.query.code);

      // ETWin User
      const self = await MOCK_HttpEtwinClient.getAuthSelf(token.accessToken);

      if (self.type !== 1) {
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
            where: { deleted: false },
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
