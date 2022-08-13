import { Brute, DetailedFight, Fight } from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import DB from '../db/client.js';
import auth from '../utils/auth.js';
import {
  checkDeaths, getOpponents, orderFighters, playFighterTurn, saboteur, stepFighter,
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
      }

      const { rows: { 0: fight } } = await client.query<Fight>(
        'select * from fights WHERE id = $1 AND (brute_1 = $2 OR brute_2 = $2)',
        [req.params.id, req.params.name],
      );

      if (!fight) {
        throw new Error('Fight not found');
      }

      // Get fight brutes names
      const bruteNames = fight.data.fighters.filter((f) => f.type === 'brute').map((fighter) => fighter.name);

      // Get brutes
      const { rows: brutes } = await client.query<Brute>(
        'select * from brutes where name = ANY ($1)',
        [bruteNames],
      );

      await client.end();
      res.status(200).send({ fight, brutes });
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
        `select * from brutes where
          (data->'skills')::jsonb ? 'backup'
          and data->'level' < $1
          and data->>'user' = $2`,
        [brute1.data.level, brute1.data.user],
      );
      const { rows: brute2Backups } = await client.query<Brute>(
        `select * from brutes where
          (data->'skills')::jsonb ? 'backup'
          and data->'level' < $1
          and data->>'user' = $2`,
        [brute2.data.level, brute2.data.user],
      );

      // Global fight data
      const fightData: DetailedFight['data'] = {
        fighters: getFighters([brute1, brute2], [brute1Backups, brute2Backups]),
        initialFighters: getFighters([brute1, brute2], [brute1Backups, brute2Backups]),
        steps: [],
        initiative: 0,
        winner: null,
        loser: null,
      };

      // Pre-fight saboteur
      saboteur(fightData);

      // Poison fighters
      [brute1, brute2].forEach((brute) => {
        if (brute.data.skills.includes('chef')) {
          const fighter = fightData.fighters.find(({ type, name }) => type === 'brute' && name === brute.name);

          if (!fighter) {
            throw new Error('Fighter 1 not found');
          }
          getOpponents(fightData, fighter).forEach((opponent) => {
            // eslint-disable-next-line no-param-reassign
            opponent.poisoned = true;
          });
        }
      });

      const mainFighters = fightData.fighters.filter(({ master }) => !master);
      const petFighters = fightData.fighters.filter(({ type }) => type === 'pet');

      if (mainFighters.length !== 2) {
        throw new Error('Invalid number of fighters');
      }

      // Add arrive step for all fighters
      [...mainFighters, ...petFighters].forEach((fighter) => {
        fightData.steps.push({
          action: 'arrive',
          fighter: stepFighter(fighter),
        });
      });

      // Fight loop
      while (!fightData.loser) {
        if (!fightData.fighters.length) {
          // No fighters left
          return;
        }

        // Order fighters by initiative (random if equal)
        orderFighters(fightData);

        // Set current initiative to first fighter
        fightData.initiative = fightData.fighters[0].initiative;

        // Play fighter turn
        playFighterTurn(fightData);

        // Check deaths
        checkDeaths(fightData);
      }

      if (!fightData.loser) {
        throw new Error('Fight not finished');
      }

      const { loser } = fightData;

      // Get winner
      const winner = fightData.fighters.find((fighter) => fighter.name !== loser.name
        && fighter.type === 'brute'
        && !fighter.master);

      if (!winner) {
        throw new Error('No winner found');
      }

      // Set fight winner and loser
      fightData.winner = stepFighter(winner);

      // Add end step
      fightData.steps.push({
        action: 'end',
        winner: fightData.winner,
        loser: fightData.loser,
      });

      // Save important fight data
      const { rows: { 0: { id: fightId } } } = await client.query<{ id: number }>(
        'INSERT INTO fights(brute_1, brute_2, data) VALUES($1, $2, $3) RETURNING id',
        [req.body.brute1, req.body.brute2, JSON.stringify({
          fighters: fightData.initialFighters.map((fighter) => ({
            name: fighter.name,
            type: fighter.type,
            master: fighter.master,
            maxHp: fighter.maxHp,
            hp: fighter.hp,
            weapons: fighter.weapons,
            shield: fighter.shield,
          })),
          steps: fightData.steps,
          winner: fightData.winner,
          loser: fightData.loser,
        })],
      );

      // Get XP gained
      // (+2 for a win against a brute at least 2 level below you)
      // (+1 otherwise)
      const xpGained = winner.name === brute1.name
        ? brute1.data.level - 2 > brute2.data.level
          ? 1 : 2
        : 1;

      // Update brute XP
      await client.query(
        `UPDATE brutes SET data =
          data || ('{"xp": ' || ((data->>'xp')::int + $1) || '}')::jsonb WHERE name = $2`,
        [xpGained, brute1.name],
      );

      // Add fighter log
      await client.query(
        'INSERT INTO logs(current_brute, type, brute, fight, xp) VALUES($1, $2, $3, $4, $5)',
        [
          brute1.name,
          winner.name === brute1.name ? 'win' : 'lose',
          brute2.name,
          fightId,
          xpGained,
        ],
      );

      // Add opponent log
      await client.query(
        'INSERT INTO logs(current_brute, type, brute, fight) VALUES($1, $2, $3, $4)',
        [
          brute2.name,
          winner.name === brute2.name ? 'survive' : 'lose',
          brute1.name,
          fightId,
        ],
      );

      await client.end();
      // Send fight id to client
      res.status(200).send({ id: fightId });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Fights;
