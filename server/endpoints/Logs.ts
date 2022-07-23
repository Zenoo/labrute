import { Request, Response } from 'express';
import DB from '../db/client.js';
import { Log } from '../types/types.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Logs = {
  list: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      if (!req.params.id) {
        await client.end();
        res.status(200).send([]);
      } else {
        const result = await client.query<Log>(
          'select * from logs WHERE current_brute = $1 ORDER BY id DESC LIMIT 7',
          [req.params.id],
        );
        const { rows } = result;

        await client.end();
        res.status(200).send(rows);
      }
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Logs;