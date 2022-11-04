import { createSlice } from '@reduxjs/toolkit';
import { addDocumentUpdate, fetchAllDocuments, fetchSingleDocument } from './documents';

const documentSlice = createSlice({
  name: 'documentEditor',
  initialState: {
    documents: [],
  },
  reducers: {
    addDocumentUpdate: (state, action) => {
      state.documents.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addDocumentUpdate, (state, action: any) => {
      const currArray = state.documents[action.payload.document.id];

      if (currArray) {
        state.documents[action.payload.document.id] = [
          ...currArray,
          action.payload.document];
      } else {
        state.documents = {
          ...state.documents,
          [action.payload.document.id]: [action.payload.document],
        };
      }
    });
  }
});

export const getDocumentEditions = (id: string) => async (state) => {
  if (!id) {
    return;
  }
  console.log(state.documents);

  return state || null
};

export default documentSlice.reducer;