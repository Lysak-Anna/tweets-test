import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { filterUsersByCategory } from "@/helpers/filterUsersByCategory";
import { selectUsersFromState } from "@/redux/users/selectors";
import { selectCategoryFromState } from "@/redux/categories/selectors";
import { getUsers } from "@/services/usersData";
import { User } from "@/types";

import { Button, List, Section, Text } from "./CardsList.styled";
import Card from "../Card";
import TweetsHeader from "../TweetsHeader";

export default function CardsList() {
  const followedUsers = useSelector(selectUsersFromState);
  const category = useSelector(selectCategoryFromState);

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  const getUsersList = useCallback(async () => {
    try {
      const usersList = await getUsers();
      const checkedUsers = usersList.map((user) =>
        followedUsers.includes(user.id) ? { ...user, checked: true } : user
      );
      setUsers(filterUsersByCategory(checkedUsers, category));
    } catch (error) {
      return toast.error(
        "Something went wrong... Please, check your internet connection and try again later"
      );
    }
  }, [category, followedUsers]);

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  const onClickHandler = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <TweetsHeader />
      <Section>
        {users && users.length > 0 ? (
          <List>
            {users
              .slice(0, page * 3)
              .map(({ id, avatar, tweets, followers, checked, user }) => (
                <li key={id}>
                  <Card
                    avatar={avatar}
                    tweets={tweets}
                    followers={followers}
                    id={id}
                    checked={checked}
                    user={user}
                  />
                </li>
              ))}
          </List>
        ) : (
          <Text>There are no available tweets here</Text>
        )}
        {users.length > 3 && page * 3 < users.length && (
          <Button type="button" onClick={onClickHandler}>
            Load more
          </Button>
        )}
      </Section>
    </>
  );
}
