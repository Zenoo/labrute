import { AuthType } from '@eternal-twin/core/auth/auth-type';
import { Url } from '@eternal-twin/core/core/url';
import { HttpEtwinClient } from '@eternal-twin/etwin-client-http';
import { RfcOauthClient } from '@eternal-twin/oauth-client-http/rfc-oauth-client';
import { Request, Response } from 'express';
import { URL } from 'url';
import DB from '../db/connect.js';
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
      res.status(500).send(error);
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

      // ETwin Token
      const token = await oauthClient.getAccessToken(req.params.code);

      // ETWin User
      const client = new HttpEtwinClient(new URL(URLHelper.etwin));
      const self = await client.getAuthSelf(token.accessToken);

      if (self.type === AuthType.User) {
        // Update or store user
        const { user } = self;
        await DB.connect();

        const existingUser = await DB.query(
          'select * from users where id = $1',
          { params: [user.id] },
        );

        // If user does not exist, create it
        if (existingUser.rows?.length === 0) {
          const result = await DB.query(
            'INSERT INTO users(id, token, name) VALUES($1, $2, $3) RETURNING *',
            { params: [user.id, token.accessToken, user.displayName.current.value] },
          );

          res.status(200).send(result.rows?.[0]);
        } else {
          // If user exists, update it
          const result = await DB.query(
            'UPDATE users SET name = $1 WHERE id = $2 RETURNING *',
            { params: [user.displayName.current.value, user.id] },
          );

          res.status(200).send(result.rows?.[0]);
        }
      } else {
        res.status(400).send('User is not a user');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

export default OAuth;