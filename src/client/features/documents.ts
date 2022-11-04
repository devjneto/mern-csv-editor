import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocuments, saveDocumentUpdates as saveDoc, uploadDocument as uploadDocToServer } from '../api/fetch';
import { setAlertAction } from './alertsSlice';

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

export const addDocumentUpdate = createAction('documents/addUpdateToDocument', ( document ) => ({
  payload: {
    document,
  },
}));

export const saveDocumentUpdates = createAsyncThunk(
  'documents/saveDocumentUpdate',
  async (document: any, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const changes = (getState() as any).documentEditor.documents[document.id];

    await saveDoc({
      id: document.id,
      changes,
    })
      .then((res) => {
        if (res.status === 500) {
          throw new Error('Server error');
        }
        dispatch(setAlertAction({
          title: 'Success',
          type: 'success',
          message: 'Document saved successfully',
        }));
      })
      .catch((err) => {
      dispatch(setAlertAction({
        message: err.message,
        type: 'error',
        title: 'Error',
      }));
    });
    return document;
  }
);