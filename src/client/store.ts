import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from '@client/features/documentsSlice';
import documentEditorReducer from '@client/features/documentEditorSlice';
import alertsSlice from './features/alertsSlice';
export const store = configureStore({
  reducer: {
    alert: alertsSlice,
    documents: documentsReducer,
    documentEditor: documentEditorReducer
  },
});
