import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from '@client/features/documentsSlice';

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
  },
});
