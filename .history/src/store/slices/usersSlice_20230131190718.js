import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    // isLoading: false,
    // error: null,

  },
  reducers: {},// we don't need reducers here because we are not creating a slice, we are creating a slice for fetching users in src/store/thunks/fetchUsers.//js
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => { state.isLoading = true });
    builder.addCase(fetchUsers.fulfilled, (state, action) => { state.isLoading = false; state.data = action.payload; });
    builder.addCase(fetchUsers.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; });
    builder.addCase(addUser.pending, (state, action) => { state.isLoading = true; })
    builder.addCase(addUser.fulfilled, (state, action) => { state.isLoading = false; state.data.push(action.payload) });
    builder.addCase(addUser.rejected, (state, action) => { state.isLoading = false; state.error = action.error });
    builder.addCase(removeUser.pending, (state, action) => { state.isLoading = true })
    builder.addCase(removeUser.fulfilled, (state, action) => { state.isLoading = false; console.log(action) })
    builder.addCase(removeUser.rejected, (state, action) => { state.isLoading = false; state.error = action.error })
  }

});


//pending means that we are waiting for the response from the server
//fulfilled means that we got the response from the server
//rejected means that we got an error from the server

export const usersReducer = usersSlice.reducer;