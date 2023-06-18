import { createSlice } from "@reduxjs/toolkit";

type UsersState = {
  users: string[];
};
const usersInitialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    changeStatus(state, { payload }) {
      if (state.users.includes(payload)) {
        state.users = state.users.filter((user) => user !== payload);
      } else {
        state.users.push(payload);
      }
    },
  },
});

export const { changeStatus } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
