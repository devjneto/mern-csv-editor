import { createSlice } from '@reduxjs/toolkit';
import { fetchAllDocuments } from '../api/documents';

const documentSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: [
      {
        id: 1,
        title: 'Document 1',
        content: 'Content 1',
      },
    ],
    currentDocument: null,
  },
  reducers: {
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllDocuments.fulfilled, (state, action) => {
      state.documents = action.payload;
    });
  },
});

export const { setDocuments } = documentSlice.actions;

export const getAllDocuments = (state) => state.documents.documents;

export default documentSlice.reducer;
