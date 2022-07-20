import { Request, Response } from 'express';
import DB from '../db/connect.js';
import auth from '../utils/auth.js';

const Users = {
  list: async (req: Request, res: Response) => {
    try {
      await DB.connect();
      await auth(req);

      const result = await DB.query('select * from users');
      const { rows } = result;

      await DB.close();
      res.status(200).send(rows);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  authenticate: async (req: Request, res: Response) => {
    try {
      await DB.connect();
      const user = await auth(req);

      await DB.close();
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

export default Users;