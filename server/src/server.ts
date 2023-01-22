import express from 'express';

import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { PrismaClient } from '@labrute/prisma';
import path from 'path';
import initRoutes from './routes.js';
import './i18n.js';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 9000;
const REPO_ROOT = path.join(fileURLToPath(import.meta.url), '..', '..');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Get client build
app.use(express.static(path.join(REPO_ROOT, 'client', 'build')));

app.listen(port, () => {
  console.warn(`App running: http://localhost:${port}/`);
});

initRoutes(app, prisma);
