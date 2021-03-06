import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  //reducers are different functions that we can call
  //to provide actions to our state
  reducers: {
    addUser: (state, action) => {
      //write code for adding a user
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
