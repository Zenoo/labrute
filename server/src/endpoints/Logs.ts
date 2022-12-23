import { Log } from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import DB from '../db/client.js';
import sendError from '../utils/sendError.js';

const Logs = {
  list: async (req: Request, res: Response) => {
    let client;
    try {
      client = await DB.connect();

      if (!req.params.name) {
        await client.end();
        res.status(200).send([]);
      } else {
        // Get brute id
        const { rows: { 0: brute } } = await client.query<{ id: number }>(
          'select id from brutes where name = $1 and deleted = false',
          [req.params.name],
        );

        if (!brute) {
          throw new Error('Brute not found');
        }

        const result = await client.query<Log>(
          'select * from logs WHERE current_brute = $1 ORDER BY id DESC LIMIT 7',
          [brute.id],
        );
        const { rows } = result;

        await client.end();
        res.status(200).send(rows);
      }
    } catch (error) {
      await sendError(res, error, client);
    }
  },
};

export default Logs;
