import * as express from 'express';
import { envs } from '@server/envs';
import { DocumentModel } from '@server/models/document';
import * as cors from 'cors';
import { parseCsvUploaded } from './actions/upload-csv';
import bodyParser, { urlencoded } from 'body-parser';

const app = express();

app.use(cors());

app.get('/documents', async (req, res) => {
  const docs = await DocumentModel.find().exec();

  res.json(docs);
});

app.post('/documents', express.json(), async (req, res) => {
  const csvFile = parseCsvUploaded(req.body.document);

  const randomDoc = () => ({
    title: `Document ${Math.floor(Math.random() * 100)}`,
    content: `Content ${Math.floor(Math.random() * 100)}`,
  });
  const ress = await (await DocumentModel.create(randomDoc())).save();

  res.json({ message: 'Document uploaded', csvFile });
});

app.listen(envs.PORT, () => {
  console.log(`Example app listening on port ${envs.PORT}!`);
});
