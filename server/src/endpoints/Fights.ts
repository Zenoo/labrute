import { Request, Response } from 'express';
import { Log } from '@eternaltwin/labrute-core/types';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Fights = {
  get: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      if (!req.params.name || !req.params.id) {
        await client.end();
        throw new Error('Invalid parameters');
      } else {
        const { rows: { 0: fight } } = await client.query<Log>(
          'select * from fights WHERE id = $1 AND brute_1 = $2 OR brute_2 = $2',
          [req.params.id, req.params.name],
        );

        await client.end();

        if (!fight) {
          throw new Error('Fight not found');
        }

        res.status(200).send(fight);
      }
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Fights;
