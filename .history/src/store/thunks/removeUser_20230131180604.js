import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk(
  'users/remove', async (user) => {
    const response = axios.delete(`https://localhost:3004/users/${user.id}`);
    return response.data;
  });

export { removeUser }