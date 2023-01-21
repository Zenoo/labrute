/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@labrute/prisma';
import { Express, Request, Response } from 'express';
import path from 'path';
import Brutes from './controllers/Brutes';
import Fights from './controllers/Fights';
import Logs from './controllers/Logs';
import OAuth from './controllers/OAuth';
import Spritesheets from './controllers/Spritesheets';
import Users from './controllers/Users';

// Get client index.html
const CLIENT_INDEX = path.join(__dirname, '..', '..', 'client', 'build', 'index.html');

const initRoutes = (app: Express, prisma: PrismaClient) => {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // OAuth
  app.get('/api/oauth/redirect', OAuth.redirect);
  app.get('/api/oauth/token', OAuth.token(prisma));

  // User
  app.post('/api/user/authenticate', Users.authenticate(prisma));

  // Brute
  app.get('/api/brute/list', Brutes.list(prisma));
  app.post('/api/brute/:name', Brutes.get(prisma));
  app.get('/api/brute/:name/available', Brutes.isNameAvailable(prisma));
  app.get('/api/brute/:name/ready', Brutes.isReadyToFight(prisma));
  app.post('/api/brute/create', Brutes.create(prisma));
  app.get('/api/brute/:name/level-up-choices', Brutes.getLevelUpChoices(prisma));
  app.post('/api/brute/:name/level-up', Brutes.levelUp(prisma));
  app.get('/api/brute/:name/get-opponents/:level', Brutes.getOpponents(prisma));
  app.get('/api/brute/:name/sacrifice', Brutes.sacrifice(prisma));

  // Log
  app.get('/api/log/list/:name', Logs.list(prisma));

  // Fight
  app.get('/api/fight/:name/:id', Fights.get(prisma));
  app.post('/api/fight/create', Fights.create(prisma));

  // Spritesheet
  app.get('/api/spritesheet/:brute/image', Spritesheets.getImage(prisma));
  app.get('/api/spritesheet/:brute/json', Spritesheets.getJson(prisma));
  app.get('/api/spritesheet/:brute/:model/:animation/:frame', Spritesheets.getFrame(prisma));
  app.get('/api/spritesheet/:brute/:model/:animation', Spritesheets.getAnimation(prisma));

  // Client index
  app.get('*', (req, res) => {
    res.sendFile(CLIENT_INDEX);
  });
};

export default initRoutes;
