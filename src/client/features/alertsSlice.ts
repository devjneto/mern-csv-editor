import { createAction, createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    currentAlert: {},
  },
  reducers: {
    setAlert: (state, action) => {
      state.currentAlert = action.payload;
    },
  },
  extraReducers: {
    'setAlert': (state, payload) => {
      state.currentAlert = payload.payload;
    }
  },
});

export const { } = alertSlice.actions;

export const setAlertAction = createAction('setAlert', (alert) => ({ payload: alert }));
export default alertSlice.reducer;
