import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: "cars",
  initialState: {
    data: []
  },
  reducers: {

  }
})

export const usersReducer = usersSlice.reducer;