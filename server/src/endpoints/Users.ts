import { Request, Response } from 'express';
import { User } from '@eternaltwin/labrute-core/types';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Users = {
  list: async (req: Request, res: Response) => {
    let client;
    try {
      client = await DB.connect();
      await auth(client, req);

      const result = await client.query<User>('select * from users');
      const { rows } = result;

      await client.end();
      res.status(200).send(rows);
    } catch (error) {
      await sendError(res, error, client);
    }
  },
  authenticate: async (req: Request, res: Response) => {
    let client;
    try {
      client = await DB.connect();
      const user = await auth(client, req);

      await client.end();
      res.status(200).send(user);
    } catch (error) {
      await sendError(res, error, client);
    }
  },
};

export default Users;
