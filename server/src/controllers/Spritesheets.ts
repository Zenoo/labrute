import {
  Animation,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Resvg } from '@resvg/resvg-js';
import { Request, Response } from 'express';
import fetch from 'node-fetch';
import Spritesmith from 'spritesmith';
import Vynil from 'vinyl';
import getFrame, { FRAMES } from '../animations/getFrame.js';
import sendError from '../utils/sendError.js';

const Spritesheets = {
  getDefaultMaleImage: async (req: Request, res: Response) => {
    try {
      // Load default spritesheet
      const defaultSpritesheet = await fetch(`${process.env.SELF_URL || ''}/images/game/male-brute.png`);

      // Send default spritesheet
      res.header('Content-Type', 'image/png').send(await defaultSpritesheet.buffer());
    } catch (error) {
      sendError(res, error);
    }
  },
  getDefaultFemaleImage: async (req: Request, res: Response) => {
    try {
      // Load default spritesheet
      const defaultSpritesheet = await fetch(`${process.env.SELF_URL || ''}/images/game/female-brute.png`);

      // Send default spritesheet
      res.header('Content-Type', 'image/png').send(await defaultSpritesheet.buffer());
    } catch (error) {
      sendError(res, error);
    }
  },
  getImage: (prisma: PrismaClient) => async (req: Request<{
    brute: string,
  }>, res: Response) => {
    try {
      // Get brute spritesheet
      const spritesheet = await prisma.bruteSpritesheet.findFirst({
        where: { brute: { name: req.params.brute, deleted: false } },
        select: { image: true },
      });

      if (spritesheet) {
        res.header('Content-Type', 'image/png').send(spritesheet.image);
      } else {
        // Get brute gender
        const { gender } = await prisma.brute.findFirstOrThrow({
          where: { name: req.params.brute, deleted: false },
          select: { gender: true },
        });

        // Load default spritesheet
        const defaultSpritesheet = await fetch(`${process.env.SELF_URL || ''}/images/game/${gender}-brute.png`);

        // Send default spritesheet
        res.header('Content-Type', 'image/png').send(await defaultSpritesheet.buffer());
      }
    } catch (error) {
      sendError(res, error);
    }
  },
  getDefaultMaleJson: async (req: Request, res: Response) => {
    try {
      // Load default spritesheet json
      const defaultSpritesheet = await fetch(`${process.env.SELF_URL || ''}/images/game/male-brute.json`);

      // Send default spritesheet
      res.header('Content-Type', 'application/json').send(await defaultSpritesheet.buffer());
    } catch (error) {
      sendError(res, error);
    }
  },
  getDefaultFemaleJson: async (req: Request, res: Response) => {
    try {
      // Load default spritesheet json
      const defaultSpritesheet = await fetch(`${process.env.SELF_URL || ''}/images/game/female-brute.json`);

      // Send default spritesheet
      res.header('Content-Type', 'application/json').send(await defaultSpritesheet.buffer());
    } catch (error) {
      sendError(res, error);
    }
  },
  getJson: (prisma: PrismaClient) => async (req: Request<{
    brute: string,
  }>, res: Response) => {
    try {
      // Get brute spritesheet json
      const spritesheet = await prisma.bruteSpritesheet.findFirst({
        where: { brute: { name: req.params.brute, deleted: false } },
        select: { json: true },
      });

      if (spritesheet) {
        res.header('Content-Type', 'application/json').send(spritesheet.json);
      } else {
        // Get brute gender
        const { gender } = await prisma.brute.findFirstOrThrow({
          where: { name: req.params.brute, deleted: false },
          select: { gender: true },
        });

        // Load default spritesheet json
        const defaultSpritesheet = await fetch(`${process.env.SELF_URL || ''}/images/game/${gender}-brute.json`);

        // Send default spritesheet
        res.header('Content-Type', 'application/json').send(await defaultSpritesheet.buffer());
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
          deleted: false,
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
          deleted: false,
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
};

export default Spritesheets;
