import { createSlice } from '@reduxjs/toolkit';
import { fetchAllDocuments, fetchSingleDocument } from './documents';

const documentSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: [],
    currentDocument: null,
  },
  reducers: {
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
    setCurrentDocument: (state, action) => {
      state.currentDocument = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllDocuments.fulfilled, (state, action) => {
      state.documents = action.payload;
    });
    builder.addCase(fetchSingleDocument.fulfilled, (state, action) => {
      state.currentDocument = action.payload;
    });
  },
});

export const { setDocuments } = documentSlice.actions;

export const getAllDocuments = (state) => state.documents.documents;

export const currentDocument = (state) => state.documents.currentDocument;

export default documentSlice.reducer;
