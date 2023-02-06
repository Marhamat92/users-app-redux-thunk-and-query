import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: "cars",
  initialState: {
    data: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }]
  },
  reducers: {

  }
})

export const usersReducer = usersSlice.reducer;