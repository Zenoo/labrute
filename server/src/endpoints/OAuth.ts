import { AuthType } from '@eternal-twin/core/auth/auth-type';
import { Url } from '@eternal-twin/core/core/url';
import { HttpEtwinClient } from '@eternal-twin/etwin-client-http';
import { RfcOauthClient } from '@eternal-twin/oauth-client-http/rfc-oauth-client';
import { Request, Response } from 'express';
import { URL } from 'url';
import DB from '../db/client.js';
import {
  BodyColors, BodyParts, Gender, User,
} from '../types/types.js';
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
      const { user: etwinUser } = self;
      const client = await DB.connect();

      const existingUser = await client.query<User>(
        'select * from users where id = $1',
        [etwinUser.id],
      );

      // If user does not exist, create it
      if (existingUser.rows?.length === 0) {
        await client.query(
          'INSERT INTO users(id, token, name) VALUES($1, $2, $3) RETURNING *',
          [etwinUser.id, token.accessToken, etwinUser.displayName.current.value],
        );
      } else {
        // If user exists, update it
        await client.query(
          'UPDATE users SET name = $1, token = $2 WHERE id = $3 RETURNING *',
          [etwinUser.displayName.current.value, token.accessToken, etwinUser.id],
        );
      }

      // Fetch user data
      const userQuery = await client.query<User>(
        'select * from users where id = $1 and token = $2::text',
        [etwinUser.id, token.accessToken],
      );
      const user = userQuery.rows[0];

      // Fetch brutes for user
      const brutes = await client.query<{
        id: number,
        name: string,
        gender: Gender,
        body: BodyParts,
        colors: BodyColors
      }>(
        `SELECT
          id,
          data->>'name' as name,
          data->>'gender' as gender,
          data->'body' as body,
          data->'colors' as colors
        FROM brutes WHERE data ->> 'user' = $1`,
        [user.id],
      );

      await client.end();

      res.status(200).send({
        ...user,
        brutes: brutes.rows.map((brute) => ({
          id: brute.id,
          data: {
            name: brute.name,
            gender: brute.gender,
            body: brute.body,
            colors: brute.colors,
          },
        })),
      } as User);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default OAuth;