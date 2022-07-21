import { AuthType } from '@eternal-twin/core/auth/auth-type';
import { Url } from '@eternal-twin/core/core/url';
import { HttpEtwinClient } from '@eternal-twin/etwin-client-http';
import { RfcOauthClient } from '@eternal-twin/oauth-client-http/rfc-oauth-client';
import { Request, Response } from 'express';
import { URL } from 'url';
import DB from '../db/client.js';
import { User } from '../types/types.js';
import sendError from '../utils/sendError.js';
import URLHelper from '../utils/URLHelper.js';

const OAuth = {
  redirect: (req: Request, res: Response) => {
    try {
      const oauthClient = new RfcOauthClient({
        authorizationEndpoint: new Url(`${URLHelper.etwin}/oauth/authorize`),
        tokenEndpoint: new Url(`${URLHelper.etwin}/oauth/token`),
        callbackEndpoint: new Url(`${URLHelper.self}/oauth/callback`),
        clientId: 'labrute@clients',
        clientSecret: '^&Ai$6T3^^#7rN',
      });

      res.status(200).send(oauthClient.getAuthorizationUri('base', ''));
    } catch (error) {
      sendError(res, error);
    }
  },
  token: async (req: Request, res: Response) => {
    try {
      const oauthClient = new RfcOauthClient({
        authorizationEndpoint: new Url(`${URLHelper.etwin}/oauth/authorize`),
        tokenEndpoint: new Url(`${URLHelper.etwin}/oauth/token`),
        callbackEndpoint: new Url(`${URLHelper.self}/oauth/callback`),
        clientId: 'labrute@clients',
        clientSecret: '^&Ai$6T3^^#7rN',
      });

      if (!req.query.code || typeof req.query.code !== 'string') {
        throw new Error('Invalid code');
      }

      // ETwin Token
      const token = await oauthClient.getAccessToken(req.query.code);

      // ETWin User
      const etwinClient = new HttpEtwinClient(new URL(URLHelper.etwin));
      const self = await etwinClient.getAuthSelf(token.accessToken);

      if (self.type !== AuthType.AccessToken) {
        throw new Error('Invalid auth type');
      }
      // Update or store user
      const { user } = self;
      const client = await DB.connect();

      const existingUser = await client.query<User>(
        'select * from users where id = $1',
        [user.id],
      );

      // If user does not exist, create it
      if (existingUser.rows?.length === 0) {
        await client.query(
          'INSERT INTO users(id, token, name) VALUES($1, $2, $3) RETURNING *',
          [user.id, token.accessToken, user.displayName.current.value],
        );
      } else {
        // If user exists, update it
        await client.query(
          'UPDATE users SET name = $1, token = $2 WHERE id = $3 RETURNING *',
          [user.displayName.current.value, token.accessToken, user.id],
        );
      }

      // TODO: Fetch brutes for user

      await client.end();
      res.status(200).send({
        id: user.id,
        token: token.accessToken,
        name: user.displayName.current.value,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default OAuth;