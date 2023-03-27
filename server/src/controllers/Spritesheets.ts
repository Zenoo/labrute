import {
  Animation,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Resvg } from '@resvg/resvg-js';
import { Request, Response } from 'express';
import fetch from 'node-fetch';
import Spritesmith from 'spritesmith';
import Vynil from 'vinyl';
import { Worker } from 'worker_threads';
import getFrame, { FRAMES } from '../animations/getFrame.js';
import auth from '../utils/auth.js';
import Env from '../utils/Env.js';
import sendError from '../utils/sendError.js';

const Spritesheets = {
  getImage: (prisma: PrismaClient) => async (req: Request<{
    brute: string,
  }>, res: Response) => {
    try {
      if (!req.params.brute) {
        throw new Error('Invalid parameters');
      }

      let bruteId = +req.params.brute;

      // Handle old getter with name instead of id
      if (Number.isNaN(bruteId)) {
        const brute = await prisma.brute.findFirst({
          where: { name: req.params.brute, deletedAt: null },
          select: { id: true },
        });

        if (!brute) {
          // Brute was probably deleted
          const deletedBrute = await prisma.brute.findFirst({
            where: { name: req.params.brute },
            select: { id: true },
          });

          if (!deletedBrute) {
            throw new Error('Brute not found');
          }

          bruteId = deletedBrute.id;
        } else {
          bruteId = brute.id;
        }
      }

      // Get brute spritesheet
      const spritesheet = await prisma.bruteSpritesheet.findFirst({
        where: { bruteId },
        select: { image: true },
      });

      if (spritesheet) {
        res.header('Content-Type', 'image/png').send(spritesheet.image);
      } else {
        // Get brute gender
        const brute = await prisma.brute.findFirst({
          where: { id: bruteId },
          select: { gender: true },
        });

        if (!brute) {
          throw new Error('Brute not found');
        }

        // Load default spritesheet
        const defaultSpritesheet = await fetch(`${Env.SELF_URL}/images/game/${brute.gender}-brute.png`);

        // Send default spritesheet
        res.header('Content-Type', 'image/png').send(Buffer.from(await defaultSpritesheet.arrayBuffer()));
      }
    } catch (error) {
      sendError(res, error);
    }
  },
  getJson: (prisma: PrismaClient) => async (req: Request<{
    brute: string,
  }>, res: Response) => {
    try {
      if (!req.params.brute) {
        throw new Error('Invalid parameters');
      }

      // Get brute spritesheet json
      const spritesheet = await prisma.bruteSpritesheet.findFirst({
        where: { bruteId: +req.params.brute },
        select: { json: true },
      });

      if (spritesheet) {
        res.header('Content-Type', 'application/json').send(spritesheet.json);
      } else {
        // Get brute gender
        const brute = await prisma.brute.findFirst({
          where: { id: +req.params.brute },
          select: { gender: true },
        });

        if (!brute) {
          throw new Error('Brute not found');
        }

        // Load default spritesheet json
        const defaultSpritesheet = await fetch(`${Env.SELF_URL}/images/game/${brute.gender}-brute.json`);

        // Send default spritesheet
        res.header('Content-Type', 'application/json').send(Buffer.from(await defaultSpritesheet.arrayBuffer()));
      }
    } catch (error) {
      sendError(res, error);
    }
  },
  getAnimation: (prisma: PrismaClient) => async (req: Request<{
    animation: Animation,
    model: 'male' | 'female',
    brute: string,
  }>, res: Response) => {
    try {
      // Get brute colors and body
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.brute,
          deletedAt: null,
        },
        include: {
          body: true,
          colors: true,
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
      }

      if (!brute.body || !brute.colors) {
        throw new Error('Brute body or colors not found');
      }

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
        const resvg = new Resvg(frameGetter({
          body: brute.body,
          colors: brute.colors,
        }));
        const pngData = resvg.render();
        const png = pngData.asPng();

        // Create vinyl
        const frame = new Vynil({
          contents: png,
          path: `${animation}-${model}-${i + 1}.png`,
        });

        frames.push(frame);
      }

      // Create spritesheet
      Spritesmith.run({ src: frames }, (err, result) => {
        if (err) {
          throw err;
        }
        res.header('Content-Type', 'image/png').send(result.image);
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  getFrame: (prisma: PrismaClient) => async (req: Request<{
    animation: Animation,
    model: 'male' | 'female',
    brute: string,
    frame: string,
  }>, res: Response) => {
    try {
      // Auth to limit access to this endpoint
      // await auth(prisma, req);

      // Get brute colors and body
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.brute,
          deletedAt: null,
        },
        include: {
          body: true,
          colors: true,
        },
      });
      if (!brute) {
        throw new Error('Brute not found');
      }

      if (!brute.body || !brute.colors) {
        throw new Error('Brute body or colors not found');
      }

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
        throw new Error(`No frame for ${animation} ${model} ${frame}`);
      }

      res.header('Content-Type', 'image/svg+xml').send(frameGetter({
        body: brute.body,
        colors: brute.colors,
      }));
    } catch (error) {
      sendError(res, error);
    }
  },
  regenerate: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new Error('Unauthorized');
      }

      // Get all brutes
      const brutes = await prisma.brute.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          body: true,
          colors: true,
        },
      });

      // Regenerate spritesheets
      // eslint-disable-next-line no-new
      new Worker('./lib/workers/regenerateSpritesheets.js', {
        workerData: brutes,
      });

      res.send({
        message: 'Regeneration started',
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Spritesheets;
