import { Request, Response } from 'express';
import DB from '../db/client.js';
import { Brute } from '../types/types.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Brutes = {
  list: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      const result = await client.query<Brute>('select * from brutes');
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

      const result = await client.query<Brute>(
        'select * from brutes where data ->> \'name\' like $1',
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
  isNameAvailable: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      const result = await client.query<{ count: number }>(
        'select count(*)::int from brutes where data ->> \'name\' = $1',
        [req.params.name],
      );
      const { rows } = result;

      await client.end();
      if (rows[0].count === 0) {
        res.status(200).send(true);
      } else {
        res.status(200).send(false);
      }
    } catch (error) {
      sendError(res, error);
    }
  },
  create: async (
    req: Request<never, unknown, { data: Brute['data'] }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      // Get brute master
      if (req.body.data.master.name) {
        // TODO
      }

      const result = await client.query(
        'insert into brutes (data) values ($1)',
        [req.body.data],
      );

      await client.end();
      res.status(200).send(result);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;