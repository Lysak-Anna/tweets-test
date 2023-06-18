import axios, { AxiosResponse } from "axios";

import { User } from "@/types";

axios.defaults.baseURL = "https://63c3da798067b6bef6cf4e47.mockapi.io/users";

export const getUsers = async (): Promise<User[]> => {
  const { data }: AxiosResponse<User[]> = await axios.get("/");
  return data;
};

export const updateFollowers = async (id: string, followers: number) => {
  const response = await axios.put(`/${id}`, { followers: followers });
  return response;
};
