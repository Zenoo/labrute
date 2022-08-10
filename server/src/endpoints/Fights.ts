import { Brute, Fight } from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import {
  checkDeaths, isSomeoneDead, orderFighters, playFighterTurn, saboteur,
} from '../utils/fight/fightMethods.js';
import getFighters from '../utils/fight/getFighters.js';
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
        const { rows: { 0: fight } } = await client.query<Fight>(
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
  create: async (
    req: Request<never, unknown, { brute1: string, brute2: string }>,
    res: Response,
  ) => {
    try {
      const client = await DB.connect();
      await auth(client, req);

      if (!req.body.brute1 || !req.body.brute2) {
        await client.end();
        throw new Error('Invalid parameters');
      }

      // Get brutes
      const { rows: { 0: brute1 } } = await client.query<Brute>(
        'select * from brutes where name = $1',
        [req.body.brute1],
      );
      if (!brute1) {
        await client.end();
        throw new Error('Brute 1 not found');
      }
      const { rows: { 0: brute2 } } = await client.query<Brute>(
        'select * from brutes where name = $1',
        [req.body.brute2],
      );
      if (!brute2) {
        await client.end();
        throw new Error('Brute 2 not found');
      }

      // Get brute backups
      const { rows: brute1Backups } = await client.query<Brute>(
        'select * from brutes where name in ($1)',
        [brute1.data.backups || []],
      );
      const { rows: brute2Backups } = await client.query<Brute>(
        'select * from brutes where name in ($1)',
        [brute2.data.backups || []],
      );

      // Global fight data
      const fightData: Fight['data'] = {
        fighters: getFighters([brute1, brute2], [brute1Backups, brute2Backups]),
        steps: [],
        initiative: 0,
        winner: '',
        loser: '',
      };

      // Pre-fight saboteur
      saboteur(fightData);

      // Fight loop
      while (!isSomeoneDead(fightData)) {
        // Order fighters by initiative (random if equal)
        orderFighters(fightData);

        // Set current initiative to first fighter
        fightData.initiative = fightData.fighters[0].initiative;

        // Play fighter turn
        playFighterTurn(fightData);

        // Check deaths
        const possibleDead = checkDeaths(fightData);

        // Combat ends if someone is dead
        if (possibleDead) {
          // Get winner
          const winner = fightData.fighters.find((fighter) => fighter.name !== possibleDead.name
            && fighter.type === 'brute'
            && !fighter.master);

          if (!winner) {
            throw new Error('No winner found');
          }

          // Set fight winner and loser
          fightData.winner = winner.name;
          fightData.loser = possibleDead.name;

          // Add end step
          fightData.steps.push({
            action: 'end',
            winner: winner.name,
            loser: possibleDead.name,
          });
        }
      }

      // Save fight
      const { rows: { 0: { id: fightId } } } = await client.query<Fight>(
        'INSERT INTO fights(brute_1, brute_2, data) VALUES($1, $2, $3) RETURNING id',
        [req.body.brute1, req.body.brute2, JSON.stringify(fightData)],
      );

      await client.end();

      // Send fight to client
      const fight: Fight = {
        id: fightId,
        brute_1: req.body.brute1,
        brute_2: req.body.brute2,
        data: fightData,
      };

      res.status(200).send(fight);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Fights;
