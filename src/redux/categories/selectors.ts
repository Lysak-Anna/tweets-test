import { RootState } from "@/types";

export const selectCategoryFromState = (state: RootState) =>
  state.category.category;
