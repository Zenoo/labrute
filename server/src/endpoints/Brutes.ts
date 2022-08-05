import { ARENA_OPPONENTS_COUNT, ARENA_OPPONENTS_MAX_GAP } from '@eternaltwin/labrute-core/constants';
import {
  Brute, Destiny, LevelUpChoice,
} from '@eternaltwin/labrute-core/types';
import accessDestinyLevel from '@eternaltwin/labrute-core/brute/accessDestinyLevel';
import { Request, Response } from 'express';
import DB from '../db/client.js';
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
        'select * from brutes where name = $1',
        [req.params.name],
      );

      await client.end();
      if (!brute) {
        res.status(404).send({ message: 'Brute not found' });
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
        'select count(*)::int from brutes where name = $1',
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
    req: Request<never, unknown, Brute>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      const requestBrute = req.body;

      // Create brute
      const result = await client.query<Brute>(
        'insert into brutes (name, data) values ($1, $2) returning *',
        [requestBrute.name, requestBrute.data],
      );

      const brute = result.rows[0];

      // Update master's pupils count
      if (requestBrute.data.master) {
        await client.query(
          `update brutes set data = data
          || ('{"pupils": ' || ((data->>'pupils')::int + 1) || '}')::jsonb
          where name = $1`,
          [requestBrute.data.master],
        );

        // Add log
        await client.query(
          'insert into logs (current_brute, type, brute) values ($1, $2, $3)',
          [requestBrute.data.master, 'child', brute.name],
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
        'select * from brutes where name = $1 and data ->> \'user\' = $2',
        [req.params.name, user.id],
      );
      if (!brute) {
        await client.end();
        throw new Error('brute not found');
      }

      // Get level up choices
      const { rows: { 0: destiny } } = await client.query<Destiny>(
        'select * from destinies where brute = $1',
        [brute.name],
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
      const { rows: { 0: brute } } = await client.query<{ name: string, level: number }>(
        'select name, data->\'level\' as level from brutes where name = $1 and data ->> \'user\' = $2',
        [req.params.name, user.id],
      );
      if (!brute) {
        await client.end();
        throw new Error('brute not found');
      }

      // Get destiny
      let { rows: { 0: destiny } } = await client.query<Destiny>(
        'select id, choices from destinies where brute = $1',
        [brute.name],
      );

      if (!destiny) {
        // Create destiny
        const { rows: { 0: newDestiny } } = await client.query<Destiny>(
          'insert into destinies (brute, choices) values ($1, $2) returning *',
          [brute.name, JSON.stringify(req.body.choices)],
        );
        destiny = newDestiny;
      } else {
        // Update destiny
        const choices = accessDestinyLevel(destiny, brute.level);

        const destinyBranch = choices?.find((choice) => choice.chosen);
        if (!destinyBranch) {
          throw new Error('destiny branch not found');
        }
        destinyBranch.nextChoices = req.body.choices;

        await client.query<Destiny>(
          'update destinies set choices = $1 where id = $2',
          [JSON.stringify(destiny.choices), destiny.id],
        );
      }

      await client.end();
      res.status(200).send(destiny);
    } catch (error) {
      sendError(res, error);
    }
  },
  levelUp: async (
    req: Request<{ name: string }, unknown, { data: Brute['data'], choice: number, destiny: number }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      const bruteData = req.body.data;

      // Update brute
      await client.query<Brute>(
        'update brutes set data = $1 where name = $2 and data ->> \'user\' = $3',
        [req.body.data, req.params.name, user.id],
      );

      // Get destiny
      const { rows: { 0: destiny } } = await client.query<Destiny>(
        'select id, choices from destinies where brute = $1',
        [req.params.name],
      );

      if (!destiny) {
        throw new Error('destiny not found');
      }

      // Update destiny tree
      const choices = accessDestinyLevel(destiny, bruteData.level);

      if (!choices) {
        throw new Error('destiny branch not found');
      }

      choices[req.body.choice].chosen = true;

      // Update destiny
      await client.query<Destiny>(
        'update destinies set choices = $1 where id = $2',
        [JSON.stringify(destiny.choices), destiny.id],
      );

      // Add log
      await client.query(
        'insert into logs (current_brute, type) values ($1, $2)',
        [req.params.name, 'up'],
      );

      // Add log to master
      if (req.body.data.master) {
        await client.query(
          'insert into logs (current_brute, type, brute) values ($1, $2, $3)',
          [req.body.data.master, 'childup', req.params.name],
        );
      }

      await client.end();
      res.status(200).send({});
    } catch (error) {
      sendError(res, error);
    }
  },
  getOpponents: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      // Get same level random opponents
      const { rows: opponents } = await client.query<Brute>(
        `select * from brutes where 
          name != $1
          and data -> 'level' = $2
        order by random() limit $3`,
        [req.params.name, +req.params.level, ARENA_OPPONENTS_COUNT],
      );

      // Complete with lower levels if not enough
      if (opponents.length < ARENA_OPPONENTS_COUNT) {
        const { rows: opponents2 } = await client.query<Brute>(
          `select * from brutes where 
            name != $1
            and data -> 'level' < $2
            and data -> 'level' >= $3
          order by random() limit $4`,
          [
            req.params.name,
            +req.params.level,
            +req.params.level - ARENA_OPPONENTS_MAX_GAP,
            ARENA_OPPONENTS_COUNT - opponents.length,
          ],
        );
        opponents.push(...opponents2);
      }

      await client.end();
      res.status(200).send(opponents);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;
