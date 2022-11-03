import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocuments, uploadDocument as uploadDocToServer } from '../api/fetch';

export const fetchAllDocuments = createAsyncThunk('documents/fetchAll', async () => {
  const documents = await getDocuments();
  return documents;
});

export const fetchSingleDocument = createAsyncThunk(
  'documents/fetchSingle',
  async (id: string) => {
    const document = await getDocuments(id);
    return document;
  },
);

export const uploadDocument = (document) => async (dispatch) => {
  await uploadDocToServer(document);
  dispatch(fetchAllDocuments());
};
