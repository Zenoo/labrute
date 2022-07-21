import { Request, Response } from 'express';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Brutes = {
  list: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      const result = await client.query('select * from brutes');
      const { rows } = result;

      await client.end();
      res.status(200).send(rows);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      const result = await client.query(
        'select * from brutes where name like $1',
        [req.params.name],
      );
      const { rows } = result;

      await client.end();
      if (!rows || rows.length === 0) {
        res.status(404).send({ message: 'brute not found' });
      } else {
        res.status(200).send(rows[0]);
      }
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;