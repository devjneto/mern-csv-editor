import { createAsyncThunk } from '@reduxjs/toolkit';
import { setDocuments } from '../features/documentsSlice';
import { getDocuments, uploadDocument } from './fetch';

export const fetchAllDocuments = createAsyncThunk('documents/fetchAll', async () => {
  const documents = await getDocuments();
  return documents;
});

export const dispatchUploadDocument = (document) => async (dispatch) => {
  const uploadedDocument = await uploadDocument(document);
  console.log(uploadedDocument);
  dispatch(fetchAllDocuments());
};
