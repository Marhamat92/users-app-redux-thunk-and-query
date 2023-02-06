import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});


export * from './thunks/fetchUsers'; // we export fetchUsers from here so we can use it in App.js

