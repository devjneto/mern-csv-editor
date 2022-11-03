import { Schema } from 'mongoose';
import connection from './index';

const documentSchema = new Schema({
  title: String,
  content: String,
});

export const DocumentModel = connection.model('Document', documentSchema);
