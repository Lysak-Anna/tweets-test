import styled from "@emotion/styled";

export const Image = styled.img`
  margin-bottom: 12px;

  border-radius: 8px;
  scale: 1;
  transition: scale ease-in-out 250ms;
  cursor: pointer;

  :hover {
    scale: 1.2;
    transition: scale ease-in-out 250ms;
  }
`;

export const Name = styled.figcaption`
  font-size: 18px;

  color: #ebd8ff;
`;
