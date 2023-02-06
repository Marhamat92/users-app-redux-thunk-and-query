import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});


export * from './thunks/fetchUsers'; //  We are importing this here and exporting it from here so we can use it in App.js

