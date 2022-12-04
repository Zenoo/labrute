import createRandomBruteStats from '@eternaltwin/labrute-core/brute/createRandomBruteStats';
import getLevelUpChoices from '@eternaltwin/labrute-core/brute/getLevelUpChoices';
import updateBruteData from '@eternaltwin/labrute-core/brute/updateBruteData';
import getSacriPoints from '@eternaltwin/labrute-core/brute/getSacriPoints';
import { ARENA_OPPONENTS_COUNT, ARENA_OPPONENTS_MAX_GAP, FIGHTS_PER_DAY } from '@eternaltwin/labrute-core/constants';
import {
  BodyColors,
  BodyParts,
  Brute, DestinyChoice, Gender,
} from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import moment from 'moment';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import createSpritesheet from '../utils/createSpritesheet.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';

const Brutes = {
  list: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      const result = await client.query<Brute>('select id, data, name from brutes where deleted = false');
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

      const { rows: { 0: brute } } = await client.query<Brute>(
        'select data, name from brutes where name = $1 and deleted = false',
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
        'select count(*)::int from brutes where name = $1 and deleted = false',
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
    req: Request<never, unknown, {
      name: string,
      user: string,
      gender: Gender,
      body: BodyParts,
      colors: BodyColors,
      master: string | null,
    }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Get brute amount for user
      const { rows: { 0: { count: bruteCount } } } = await client.query<{ count: number }>(
        'select count(*) from brutes where data->>\'user\' = $1 and deleted = false',
        [user.id],
      );

      let pointsLost = 0;
      // Refuse if user has too many brutes and not enough points
      if (bruteCount >= user.brute_limit) {
        if (user.sacrifice_points < 500) {
          await client.end();
          throw new Error('You have reached your brute limit. You need 500 Sacripoints to unlock a new brute.');
        } else {
          // Remove 500 sacrifice points
          await client.query('update users set sacrifice_points = sacrifice_points - 500 where id = $1', [user.id]);
          pointsLost = 500;
          // Update user brute limit
          await client.query('update users set brute_limit = brute_limit + 1 where id = $1', [user.id]);
        }
      }

      // Create brute data
      const bruteData: Brute['data'] = {
        ...createRandomBruteStats(),
        user: req.body.user,
        gender: req.body.gender,
        body: req.body.body,
        colors: req.body.colors,
        master: req.body.master || '',
        victories: 0,
        pupils: 0,
        lastFight: moment().format('DD/MM/YYYY'),
        fightsLeft: FIGHTS_PER_DAY,
      };

      // Create brute
      const { rows: { 0: brute } } = await client.query<Brute>(
        'insert into brutes (name, destiny_path, data) values ($1, $2, $3) returning id, name, data',
        [req.body.name, [], bruteData],
      );

      // Update master's pupils count
      if (bruteData.master) {
        await client.query(
          `update brutes set data = data
          || ('{"pupils": ' || ((data->>'pupils')::int + 1) || '}')::jsonb
          where name = $1 and deleted = false`,
          [bruteData.master],
        );

        // Add log
        await client.query(
          'insert into logs (current_brute, type, brute) values ($1, $2, $3)',
          [brute.id, 'child', brute.name],
        );
      }

      res.status(200).send({ brute, pointsLost });

      // Create animations spritesheet after response to avoid blocking the request
      const spritesheet = await createSpritesheet(brute);

      // Store spritesheet image in database as blob
      await client.query(
        'update brutes set spritesheet = $1 where name = $2 and deleted = false',
        [spritesheet.image, brute.name],
      );

      // Store spritesheet data in database as json
      await client.query(
        'update brutes set spritesheet_json = $1 where name = $2 and deleted = false',
        [formatSpritesheet(spritesheet, brute), brute.name],
      );

      await client.end();
    } catch (error) {
      sendError(res, error);
    }
  },
  getLevelUpChoices: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Get brute
      const { rows: { 0: brute } } = await client.query<Brute>(
        'select id, data, destiny_path, name from brutes where name = $1 and data ->> \'user\' = $2 and deleted = false',
        [req.params.name, user.id],
      );
      if (!brute) {
        await client.end();
        throw new Error('brute not found');
      }

      const firstChoicePath = [...brute.destiny_path, 0];
      const secondChoicePath = [...brute.destiny_path, 1];

      // Get destiny choices
      let { rows: { 0: firstDestinyChoice } } = await client.query<DestinyChoice>(
        'select * from destiny_choices where brute = $1 and path = $2',
        [brute.id, firstChoicePath],
      );
      let { rows: { 0: secondDestinyChoice } } = await client.query<DestinyChoice>(
        'select * from destiny_choices where brute = $1 and path = $2',
        [brute.id, secondChoicePath],
      );

      if (!firstDestinyChoice || !secondDestinyChoice) {
        const newChoices = getLevelUpChoices(brute);

        // Create destiny choices
        const { rows: { 0: newFirstDestinyChoice } } = await client.query<DestinyChoice>(
          'insert into destiny_choices (brute, path, choice) values ($1, $2, $3) returning *',
          [brute.id, firstChoicePath, newChoices[0]],
        );
        firstDestinyChoice = newFirstDestinyChoice;

        const { rows: { 0: newSecondDestinyChoice } } = await client.query<DestinyChoice>(
          'insert into destiny_choices (brute, path, choice) values ($1, $2, $3) returning *',
          [brute.id, secondChoicePath, newChoices[1]],
        );
        secondDestinyChoice = newSecondDestinyChoice;
      }

      await client.end();
      res.status(200).send({
        brute,
        choices: [firstDestinyChoice, secondDestinyChoice],
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  levelUp: async (
    req: Request<{ name: string }, unknown, { choice: number }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Get brute
      const { rows: { 0: brute } } = await client.query<Brute>(
        'select id, data, name, destiny_path from brutes where name = $1 and data ->> \'user\' = $2 and deleted = false',
        [req.params.name, user.id],
      );

      if (!brute) {
        await client.end();
        throw new Error('brute not found');
      }

      // Get destiny choice
      const { rows: { 0: destinyChoice } } = await client.query<DestinyChoice>(
        'select * from destiny_choices where brute = $1 and path = $2',
        [brute.id, [...brute.destiny_path, req.body.choice]],
      );

      if (!destinyChoice) {
        await client.end();
        throw new Error('destiny choice not found');
      }

      // Update brute data
      const updatedBruteData = updateBruteData(brute, destinyChoice.choice);

      // Update brute
      await client.query<Brute>(
        'update brutes set data = $1, destiny_path = array_append(destiny_path, $2) where name = $3 and data ->> \'user\' = $4 and deleted = false',
        [updatedBruteData, req.body.choice, req.params.name, user.id],
      );

      // Add log
      await client.query(
        'insert into logs (current_brute, type) values ($1, $2)',
        [brute.id, 'up'],
      );

      if (brute.data.master) {
        // Get master id
        const { rows: { 0: master } } = await client.query<Brute>(
          'select id from brutes where name = $1 and deleted = false',
          [brute.data.master],
        );

        if (master) {
          // Add log to master
          await client.query(
            'insert into logs (current_brute, type, brute) values ($1, $2, $3)',
            [master.id, 'childup', req.params.name],
          );
        }
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
        `select data, name from brutes where 
          name != $1
          and data -> 'level' = $2
          and deleted = false
        order by random() limit $3`,
        [req.params.name, +req.params.level, ARENA_OPPONENTS_COUNT],
      );

      // Complete with lower levels if not enough
      if (opponents.length < ARENA_OPPONENTS_COUNT) {
        const { rows: opponents2 } = await client.query<Brute>(
          `select data, name from brutes where 
            name != $1
            and data -> 'level' < $2
            and data -> 'level' >= $3
            and deleted = false
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
  sacrifice: async (req: Request, res: Response) => {
    try {
      const client = await DB.connect();
      const user = await auth(client, req);

      // Get brute
      const { rows: { 0: brute } } = await client.query<Brute>(
        'select data, name from brutes where name = $1 and data ->> \'user\' = $2 and deleted = false',
        [req.params.name, user.id],
      );
      if (!brute) {
        await client.end();
        throw new Error('Brute not found');
      }

      // Add SacriPoints to user
      const { rows: { 0: { sacrifice_points: sacriPoints } } } = await client.query<
        { sacrifice_points: number }
      >(
        'update users set sacrifice_points = sacrifice_points + $1 where id = $2 returning sacrifice_points',
        [getSacriPoints(brute.data.level), user.id],
      );

      // Set brute as deleted
      await client.query('update brutes set deleted = true where id = $1', [brute.id]);

      await client.end();
      res.status(200).send({ points: sacriPoints });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;
