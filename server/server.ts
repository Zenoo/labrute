import express from 'express';
import bodyParser from 'body-parser';
import { initRoutes } from './routes';
import path from 'path';
const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

initRoutes(app);