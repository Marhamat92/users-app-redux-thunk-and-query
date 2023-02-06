import { createAsyncThunk } from "@reduxjs/toolkit";  //! we use createAsyncThunk instead of createSlice here because we are not creating a slice, we are creating a thunk for fetching users
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3004/users')
  return response.data;
})

//! when we create async thunk, fetchUsers.pending, fetchUsers.fulfilled, fetchUsers.rejected are automatically created and we can use them inside extraReducers in src/store/slices/usersSlice.js

export { fetchUsers };