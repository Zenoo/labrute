/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@labrute/prisma';
import { Express, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Brutes from './controllers/Brutes.js';
import Fights from './controllers/Fights.js';
import Logs from './controllers/Logs.js';
import OAuth from './controllers/OAuth.js';
import Spritesheets from './controllers/Spritesheets.js';
import Tournaments from './controllers/Tournaments.js';
import Users from './controllers/Users.js';

// Get client index.html
const REPO_ROOT = path.join(fileURLToPath(import.meta.url), '..', '..', '..');
const CLIENT_INDEX = path.join(REPO_ROOT, 'client', 'build', 'index.html');

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
  app.post('/api/brute/:name/get', Brutes.get(prisma));
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
  app.get('/api/spritesheet/male-brute.png', Spritesheets.getDefaultMaleImage);
  app.get('/api/spritesheet/male-brute.json', Spritesheets.getDefaultMaleJson);
  app.get('/api/spritesheet/female-brute.png', Spritesheets.getDefaultFemaleImage);
  app.get('/api/spritesheet/female-brute.json', Spritesheets.getDefaultFemaleJson);
  app.get('/api/spritesheet/:brute.png', Spritesheets.getImage(prisma));
  app.get('/api/spritesheet/:brute.json', Spritesheets.getJson(prisma));
  app.get('/api/spritesheet/:brute/:model/:animation/:frame', Spritesheets.getFrame(prisma));
  app.get('/api/spritesheet/:brute/:model/:animation', Spritesheets.getAnimation(prisma));

  // Tournament
  app.get('/api/tournament/:name/register', Tournaments.registerDaily(prisma));
  app.get('/api/tournament/:name/:date', Tournaments.getDaily(prisma));

  // Client index
  app.get('*', (req, res) => {
    res.sendFile(CLIENT_INDEX);
  });
};

export default initRoutes;
