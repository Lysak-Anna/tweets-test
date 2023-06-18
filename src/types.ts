export type Color = {
  color: string;
};

export type User = {
  id: string;
  avatar: string;
  user: string;
  tweets: number;
  followers: number;
  checked?: boolean;
};

export type RootState = {
  users: {
    users: string[];
  };
  category: {
    category: string;
  };
};
