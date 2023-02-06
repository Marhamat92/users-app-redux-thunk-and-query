import { createAsyncThunk } from "@reduxjs/toolkit";  //! we use createAsyncThunk instead of createSlice here because we are not creating a slice, we are creating a thunk for fetching users
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3004/users')
  return response.data;
})

//! when we create async thunk, fetchUsers.pending, fetchUsers.fulfilled, fetchUsers.rejected are automatically created and we can use them inside extraReducers in src/store/slices/usersSlice.js 
//so fetchUsers.pending === 'users/fetch/pending', fetchUsers.fulfilled === 'users/fetch/fulfilled', fetchUsers.rejected === 'users/fetch/rejected'

export { fetchUsers };