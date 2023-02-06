import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null

  },
  reducers: {}, // we don't need reducers here because we are not creating a slice, we are creating a slice for fetching users in src/store/thunks/fetchUsers.js
  extraReducers: (builder) => {

  }

})

//pending means that we are waiting for the response from the server
//fulfilled means that we got the response from the server
//rejected means that we got an error from the server

export const usersReducer = usersSlice.reducer;