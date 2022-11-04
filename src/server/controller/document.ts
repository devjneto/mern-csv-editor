import * as express from 'express';
import { parseCsvUploaded } from '../actions/upload-csv';

import { DocumentModel } from '../models/document';

export const documentRoutes = (app) => {
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

  app.put('/documents/:id', express.json(), async (req, res) => {
    const doc = await DocumentModel.findById(req.params.id);

    if (!doc) {
      res.status(404).send('Not found');
      return;
    }

    const changes = req.body.changes;
    if (!changes || !changes.length) {
      res.status(500).json('No changes');
      return;
    }
    changes.forEach((change) => {
      const lineSplitted = doc.lines[change.row].split(',');

      lineSplitted[change.col] = change.value;
      doc.lines[change.row] = lineSplitted.join(',');
    });

    const docSaved = await doc.save();
    res.json(docSaved);
  });

  app.post('/documents', express.json(), async (req, res) => {
    const csvFile: any = await parseCsvUploaded(req.body.document);

    const randomDoc = () => ({
      filename: req.body.name,
      columns: csvFile.columns,
      lines: csvFile.lines,
      upload_at: new Date(),
    });
    const ress = await (await DocumentModel.create(randomDoc())).save();

    res.json({ message: 'Document uploaded', csvFile });
  });
};
