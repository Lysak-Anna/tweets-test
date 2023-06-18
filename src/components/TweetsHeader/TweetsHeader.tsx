import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCategory } from "@/redux/categories/categoriesSlice";

import {
  Button,
  FilterWrapper,
  StyledOption,
  StyledSelect,
  Text,
} from "./TweetsHeader.styled";

export default function TweetsHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigate("/");
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    dispatch(setCategory(category));
  };

  return (
    <FilterWrapper>
      <Button onClick={onClickHandler} type="button">
        Back
      </Button>

      <Text>Filter tweets by category: </Text>

      <StyledSelect onChange={(e) => handleChange(e)}>
        <StyledOption value="show all">show all</StyledOption>
        <StyledOption value="follow">follow</StyledOption>
        <StyledOption value="followings">followings</StyledOption>
      </StyledSelect>
    </FilterWrapper>
  );
}
