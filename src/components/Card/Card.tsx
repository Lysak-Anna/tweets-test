import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { User } from "@/types";
import { updateFollowers } from "@/services/usersData";
import { changeStatus } from "@/redux/users/usersSlice";
import { selectUsersFromState } from "@/redux/users/selectors";

import { Button, CardWrapper, Image, ImageWrapper, Text } from "./Card.styled";

export default function Card({
  avatar,
  tweets,
  followers,
  id,
  checked,
  user,
}: User) {
  const users = useSelector(selectUsersFromState);
  const dispatch = useDispatch();

  const onClickHandler = async (userId: string) => {
    try {
      const follower = users.includes(userId)
        ? (followers -= 1)
        : (followers += 1);

      await updateFollowers(userId, follower);

      dispatch(changeStatus(userId));
    } catch (error) {
      return toast.error(
        "Something went wrong... Please, check your internet connection and try again later"
      );
    }
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={avatar} alt={user} />
      </ImageWrapper>
      <Text>{tweets} tweets</Text>
      <Text>{followers.toLocaleString("en-US")} followers</Text>
      <Button
        color={checked ? "#5CD3A8" : "#EBD8FF"}
        onClick={() => onClickHandler(id)}
      >
        {checked ? "following" : "follow"}
      </Button>
    </CardWrapper>
  );
}
