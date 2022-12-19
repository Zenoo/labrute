import {
  Animation, BodyColors,
  BodyParts,
} from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import Vynil from 'vinyl';
import SpriteSmith from 'spritesmith';
import convertSvgToPng from 'convert-svg-to-png';
import getFrame, { FRAMES } from '../animations/getFrame.js';
import DB from '../db/client.js';
import sendError from '../utils/sendError.js';
import { SpritesheetJson } from '../utils/formatSpritesheet.js';

const Spritesheets = {
  getImage: async (req: Request<{
    brute: string,
  }>, res: Response) => {
    let client;
    try {
      client = await DB.connect();

      // Get brute spritesheet
      const { rows: { 0: brute } } = await client.query<{
        spritesheet: Buffer,
      }>(
        'select spritesheet from brutes where name = $1 and deleted = false',
        [req.params.brute],
      );

      if (!brute) {
        await client.end();
        throw new Error('Brute not found');
      }

      await client.end();
      res.status(200).header('Content-Type', 'image/png').send(brute.spritesheet);
    } catch (error) {
      await sendError(res, error, client);
    }
  },
  getJson: async (req: Request<{
    brute: string,
  }>, res: Response) => {
    let client;
    try {
      client = await DB.connect();

      // Get brute spritesheet_json
      const { rows: { 0: brute } } = await client.query<{
        spritesheet_json: SpritesheetJson,
      }>(
        'select spritesheet_json from brutes where name = $1 and deleted = false',
        [req.params.brute],
      );

      if (!brute) {
        await client.end();
        throw new Error('Brute not found');
      }

      await client.end();
      res.status(200).header('Content-Type', 'application/json').send(brute.spritesheet_json);
    } catch (error) {
      await sendError(res, error, client);
    }
  },
  getAnimation: async (req: Request<{
    animation: Animation,
    model: 'male' | 'female',
    brute: string,
  }>, res: Response) => {
    let client;
    try {
      client = await DB.connect();

      // Get brute colors and body
      const { rows: { 0: brute } } = await client.query<{
        colors: BodyColors,
        body: BodyParts,
      }>(
        'select data->\'body\' as body, data->\'colors\' as colors from brutes where name = $1 and deleted = false',
        [req.params.brute],
      );

      if (!brute) {
        await client.end();
        throw new Error('Brute not found');
      }

      await client.end();

      const {
        params: {
          animation,
          model,
        },
      } = req;

      const frames: Vynil.BufferFile[] = [];

      for (let i = 0; i < FRAMES[model][animation].length; i += 1) {
        // Get frame getter
        const frameGetter = getFrame(animation, model, i);

        if (!frameGetter) {
          throw new Error(`No frame for ${animation} ${model} ${i}`);
        }

        // Convert SVG to PNG
        // eslint-disable-next-line no-await-in-loop
        const png = await convertSvgToPng.convert(frameGetter({
          body: brute.body,
          colors: brute.colors,
        }));

        // Create vinyl
        const frame = new Vynil({
          contents: png,
          path: `${animation}-${model}-${i + 1}.png`,
        });

        frames.push(frame);
      }

      // Create spritesheet
      SpriteSmith.run({ src: frames }, (err, result) => {
        if (err) {
          throw err;
        }
        res.status(200).header('Content-Type', 'image/png').send(result.image);
      });
    } catch (error) {
      await sendError(res, error, client);
    }
  },
  getFrame: async (req: Request<{
    animation: Animation,
    model: 'male' | 'female',
    brute: string,
    frame: string,
  }>, res: Response) => {
    let client;
    try {
      client = await DB.connect();
      // Auth to limit access to this endpoint
      // await auth(client, req);

      // Get brute colors and body
      const { rows: { 0: brute } } = await client.query<{
        colors: BodyColors,
        body: BodyParts,
      }>(
        'select data->\'body\' as body, data->\'colors\' as colors from brutes where name = $1 and deleted = false',
        [req.params.brute],
      );

      if (!brute) {
        await client.end();
        throw new Error('Brute not found');
      }

      await client.end();

      const {
        params: {
          animation,
          model,
          frame,
        },
      } = req;

      // Get frame getter
      const frameGetter = getFrame(animation, model, +frame - 1);

      if (!frameGetter) {
        await client.end();
        throw new Error(`No frame for ${animation} ${model} ${frame}`);
      }

      res.status(200).header('Content-Type', 'image/svg+xml').send(frameGetter({
        body: brute.body,
        colors: brute.colors,
      }));
    } catch (error) {
      await sendError(res, error, client);
    }
  },
};

export default Spritesheets;
