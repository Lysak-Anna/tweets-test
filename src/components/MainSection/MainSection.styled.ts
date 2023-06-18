import styled from "@emotion/styled";

import { Link } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";

export const Main = styled.main`
  padding: 40px;

  height: 100%;

  background-color: #4b2a99;
  background-image: url("background/bg-img.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  color: #ebd8ff;

  font-size: 22px;
  text-transform: uppercase;
  text-decoration: underline;

  :hover {
    color: #5cd3a8;
  }
`;

export const Icon = styled(ImArrowRight)`
  margin-left: 12px;

  width: 30px;

  color: currentColor;
`;
