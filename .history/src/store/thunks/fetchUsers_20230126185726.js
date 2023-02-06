import { createAsyncThunk } from "@reduxjs/toolkit";  //! we use createAsyncThunk instead of createSlice here because we are not creating a slice, we are creating a thunk for fetching users
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3004/users')
  return response.data;
})

export { fetchUsers };