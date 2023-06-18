import { RootState } from "@/types";

export const selectUsersFromState = (state: RootState) => state.users.users;
