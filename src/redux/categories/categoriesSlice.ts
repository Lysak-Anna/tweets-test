import { createSlice } from "@reduxjs/toolkit";

const categoriesInitialState = {
  category: "show all",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesInitialState,
  reducers: {
    setCategory(state, { payload }) {
      state.category = payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
