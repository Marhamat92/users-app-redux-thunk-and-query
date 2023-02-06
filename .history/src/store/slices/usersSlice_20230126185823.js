import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null

  },
  reducers: {}, // we don't need reducers here because we are not creating a slice, we are creating a slice for fetching users in src/store/thunks/fetchUsers.js
  extraReducers: (builder) => { }

})

export const usersReducer = usersSlice.reducer;