import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import path from 'path';
import initRoutes from './routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
const REPO_ROOT = path.join(fileURLToPath(import.meta.url), '..', '..', '..');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static(path.join(REPO_ROOT, 'client', 'build')));
app.listen(port, () => {
    console.log(`App running: http://localhost:${port}/`);
});
initRoutes(app);
//# sourceMappingURL=server.js.map