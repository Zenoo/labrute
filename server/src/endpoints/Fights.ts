import { Brute, Fight } from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import getBruteFightStats from '../utils/fight/getFightersStats.js';
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

      // Global fight data
      const fightData: Fight['data'] = {
        fighters: getBruteFightStats([brute1, brute2]),
        steps: [],
      };

      // Sabotage weapons
      fightData.fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master).forEach((brute) => {
        if (brute.sabotage) {
          const opponent = fightData.fighters.find(
            (fighter) => fighter.type === 'brute'
              && !fighter.master
              && fighter.name !== brute.name,
          );

          if (opponent && opponent.weapons.length > 0) {
            const sabotagedWeapon = opponent.weapons[randomBetween(0, opponent.weapons.length - 1)];
            opponent.sabotagedWeapon = sabotagedWeapon;

            fightData.steps.push({
              action: 'sabotage',
              brute: brute.name,
              target: opponent.name,
              weapon: sabotagedWeapon.name,
            });
          }
        }
      });

      let turn = 0;

      // Fight loop
      while (fightData.fighters.find((fighter) => fighter.type === 'brute'
        && !fighter.master
        && fighter.hp > 0)) {
        // Order fighters by initiative (random if equal)
        const fighters = fightData.fighters.sort((a, b) => {
          if (a.initiative === b.initiative) {
            return Math.random() > 0.5 ? 1 : -1;
          }
          return a.initiative - b.initiative;
        });

        console.log(fighters);

        // TODO

        turn += 1;

        // Failsafe until the loop is completely coded
        if (turn > 10) {
          break;
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
