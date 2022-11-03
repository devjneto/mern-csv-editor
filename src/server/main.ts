import * as express from 'express';
import { envs } from '@server/envs';
import { DocumentModel } from '@server/models/document';
import * as cors from 'cors';
import { parseCsvUploaded } from './actions/upload-csv';

const app = express();

app.use(cors());

app.get('/documents', async (req, res) => {
  const docs = await DocumentModel.aggregate([
    {
      $project: {
        id: '$_id',
        filename: 1,
        numLines: { $size: '$lines' },
        columns: 1,
        upload_at: 1,
      },
    },
  ]);

  res.json(docs);
});

app.get('/documents/:id', async (req, res) => {
  const doc = await DocumentModel.findById(req.params.id);
  res.json(doc);
});

app.post('/documents', express.json(), async (req, res) => {
  const csvFile = await parseCsvUploaded(req.body.document);

  const randomDoc = () => ({
    filename: req.body.name,
    columns: csvFile.columns,
    lines: csvFile.lines,
    upload_at: new Date(),
  });
  const ress = await (await DocumentModel.create(randomDoc())).save();

  res.json({ message: 'Document uploaded', csvFile });
});

app.listen(envs.PORT, () => {
  console.log(`Example app listening on port ${envs.PORT}!`);
});
