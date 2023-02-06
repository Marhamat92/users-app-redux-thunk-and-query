import { createAsyncThunk } from "@reduxjs/toolkit";  // we use createAsyncThunk instead of createSlice here because we are not creating a slice, we are creating a thunk for fetching users
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3004/users')

  //!lets add short pause for development test to see if loading works or not (we will remove it later)
  await pause(5000) //! we are using await here because we want to wait for the pause to finish before we return the response.data
  return response.data;
})


//!lets add short pause for development test to see if loading works or not (we will remove it later)
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(
      resolve, duration)
  })
}


// when we create async thunk, fetchUsers.pending, fetchUsers.fulfilled, fetchUsers.rejected are automatically created and we can use them inside extraReducers in src/store/slices/usersSlice.js 
//so fetchUsers.pending === 'users/fetch/pending', fetchUsers.fulfilled === 'users/fetch/fulfilled', fetchUsers.rejected === 'users/fetch/rejected'

//pending means that we are waiting for the response from the server
//fulfilled means that we got the response from the server
//rejected means that we got an error from the server

export { fetchUsers };