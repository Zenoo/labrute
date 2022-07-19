import { Url } from '@eternal-twin/core/core/url';
import { RfcOauthClient } from '@eternal-twin/oauth-client-http/rfc-oauth-client';
import { Request, Response } from 'express';
import url from '../utils/url.js';

export const OAuth = {
  redirect: (req: Request, res: Response) => {
    try {
      const oauthClient = new RfcOauthClient({
        authorizationEndpoint: new Url(`${url.etwin}/oauth/authorize`),
        tokenEndpoint: new Url(`${url.etwin}/oauth/token`),
        callbackEndpoint: new Url(`${url.self}/oauth/callback`),
        clientId: 'labrute@clients',
        clientSecret: '^&Ai$6T3^^#7rN',
      });
      // res.status(200).send(...);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};