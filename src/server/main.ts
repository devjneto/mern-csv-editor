import * as express from 'express';
import { envs } from '@server/envs';
import * as cors from 'cors';
import { documentRoutes } from './controller/document';

const app = express();

app.use(cors());

documentRoutes(app);

app.listen(envs.PORT, () => {
  console.log(`MERN Backend app listening on port ${envs.PORT}!`);
});
