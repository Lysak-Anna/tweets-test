import { User } from "@/types";

export const filterUsersByCategory = (users: User[], category: string) => {
  if (category === "show all") {
    return users;
  } else if (category === "followings") {
    return users.filter((user) => user.checked === true);
  } else {
    return users.filter((user) => !user.checked);
  }
};
