import {
  Animation, BodyColors,
  BodyParts,
} from '@eternaltwin/labrute-core/types';
import { Request, Response } from 'express';
import getFrame from '../animations/getFrame.js';
import DB from '../db/client.js';
import FRAMES from '../utils/animationFrames.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Animations = {
  getFrames: async (req: Request<{
    animation: Animation,
    model: 'male' | 'female',
  }>, res: Response) => {
    try {
      const client = await DB.connect();
      // Auth to limit access to this endpoint
      await auth(client, req);
      await client.end();

      const {
        params: {
          animation,
          model,
        },
      } = req;

      const frames = FRAMES[model][animation];

      res.status(200).send({
        frames,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  get: async (req: Request<{
    animation: Animation,
    model: 'male' | 'female',
    frame: string,
    brute: string,
  }>, res: Response) => {
    try {
      const client = await DB.connect();
      // Auth to limit access to this endpoint
      // await auth(client, req);

      // Get brute colors and body
      const { rows: { 0: brute } } = await client.query<{
        colors: BodyColors,
        body: BodyParts,
      }>(
        'select data->\'body\' as body, data->\'colors\' as colors from brutes where name = $1',
        [req.params.brute],
      );

      if (!brute) {
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
      const frameGetter = getFrame(animation, model, frame);

      if (!frameGetter) {
        throw new Error(`No frame for ${animation} ${model} ${frame}`);
      }

      res.status(200).header('Content-Type', 'image/svg+xml').send(frameGetter({
        body: brute.body,
        colors: brute.colors,
      }));
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Animations;
