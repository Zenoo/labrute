import { Request, Response } from 'express';
import DB from '../db/client.js';
import { Brute, Destiny, LevelUpChoice } from '../types/types.js';
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

      const { rows: { 0: brute } } = await client.query<Brute>(
        'select * from brutes where data ->> \'name\' like $1',
        [req.params.name],
      );

      await client.end();
      if (!brute) {
        res.status(404).send({ message: 'brute not found' });
      } else {
        res.status(200).send(brute);
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
      let master = null;
      if (req.body.data.master.name) {
        const masterQuery = await client.query<Brute>(
          'select id, data from brutes where data ->> \'name\' = $1',
          [req.body.data.master.name],
        );
        [master] = masterQuery.rows;

        if (!master) {
          throw new Error('master not found');
        }

        req.body.data.master.id = master.id;
      }

      // Create brute
      const result = await client.query<Brute>(
        'insert into brutes (data) values ($1) returning *',
        [req.body.data],
      );

      const brute = result.rows[0];

      // Update master's pupils count
      if (master) {
        master.data.pupils += 1;
        await client.query(
          'update brutes set data = $1 where id = $2',
          [master.data, master.id],
        );
      }

      await client.end();
      res.status(200).send(brute);
    } catch (error) {
      sendError(res, error);
    }
  },
  startLevelUp: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Get brute
      const { rows: { 0: brute } } = await client.query<Brute>(
        'select * from brutes where data ->> \'name\' = $1 and data ->> \'user\' = $2',
        [req.params.name, user.id],
      );
      if (!brute) throw new Error('brute not found');

      // Get level up choices
      const { rows: { 0: destiny } } = await client.query<Destiny>(
        'select * from destinies where brute = $1',
        [brute.id],
      );

      await client.end();
      res.status(200).send({
        brute,
        destiny,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  saveDestinyChoices: async (
    req: Request<{ name: string }, unknown, { choices: [LevelUpChoice, LevelUpChoice] }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Get brute
      const { rows: { 0: brute } } = await client.query<Brute>(
        'select id from brutes where data ->> \'name\' = $1 and data ->> \'user\' = $2',
        [req.params.name, user.id],
      );
      if (!brute) throw new Error('brute not found');

      // Get destiny
      let { rows: { 0: destiny } } = await client.query<Destiny>(
        'select id from destinies where brute = $1',
        [brute.id],
      );

      if (!destiny) {
        // Create destiny
        const { rows: { 0: newDestiny } } = await client.query<Destiny>(
          'insert into destinies (brute, choices) values ($1, $2) returning *',
          [brute.id, JSON.stringify(req.body.choices)],
        );
        destiny = newDestiny;
      } else {
        // Update destiny
        const { rows: { 0: updatedDestiny } } = await client.query<Destiny>(
          'update destinies set choices = $1 where id = $2 returning *',
          [JSON.stringify(req.body.choices), destiny.id],
        );
        destiny = updatedDestiny;
      }

      await client.end();
      res.status(200).send(destiny);
    } catch (error) {
      sendError(res, error);
    }
  },
  levelUp: async (
    req: Request<{ name: string }, unknown, { data: Brute['data'], choices: [LevelUpChoice, LevelUpChoice], destiny: number }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Update brute
      await client.query<Brute>(
        'update brutes set data = $1 where data ->> \'name\' = $2 and data ->> \'user\' = $3',
        [req.body.data, req.params.name, user.id],
      );

      // Update destiny
      await client.query<Destiny>(
        'update destinies set choices = $1 where id = $2',
        [JSON.stringify(req.body.choices), req.body.destiny],
      );

      await client.end();
      res.status(200).send({});
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;