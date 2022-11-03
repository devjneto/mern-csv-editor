import { Schema } from 'mongoose';
import connection from './index';

const documentSchema = new Schema({
  filename: String,
  columns: Array,
  lines: Array,
  upload_at: Date,
});

export const DocumentModel = connection.model('Document', documentSchema);
