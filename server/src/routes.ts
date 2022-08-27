/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express, Request, Response } from 'express';
import Animations from './endpoints/Animations.js';
import Brutes from './endpoints/Brutes.js';
import Fights from './endpoints/Fights.js';
import Logs from './endpoints/Logs.js';
import OAuth from './endpoints/OAuth.js';
import Users from './endpoints/Users.js';

const initRoutes = (app: Express) => {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // OAuth
  app.get('/api/oauth/redirect', OAuth.redirect);
  app.get('/api/oauth/token', OAuth.token);

  // User
  app.post('/api/user/authenticate', Users.authenticate);

  // Brute
  app.get('/api/brute/list', Brutes.list);
  app.get('/api/brute/:name', Brutes.get);
  app.get('/api/brute/:name/available', Brutes.isNameAvailable);
  app.post('/api/brute/create', Brutes.create);
  app.get('/api/brute/:name/level-up-choices', Brutes.getLevelUpChoices);
  app.post('/api/brute/:name/level-up', Brutes.levelUp);
  app.get('/api/brute/:name/get-opponents/:level', Brutes.getOpponents);
  app.get('/api/brute/:name/sacrifice', Brutes.sacrifice);

  // Log
  app.get('/api/log/list/:name', Logs.list);

  // Fight
  app.get('/api/fight/:name/:id', Fights.get);
  app.post('/api/fight/create', Fights.create);

  // Animations
  app.get('/api/animations/:model/:animation/frames', Animations.getFrames);
  app.get('/api/animations/:brute/:model/:animation/:frame', Animations.get);
};

export default initRoutes;
