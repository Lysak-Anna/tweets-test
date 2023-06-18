import styled from "@emotion/styled";

export const FilterWrapper = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 12px 40px;

  background-color: #471ca9;
`;

export const Button = styled.button`
  padding: 10px 12px;

  color: #373737;
  background-color: #ebd8ff;

  border-radius: 10px;

  :hover {
    opacity: 0.8;
  }
`;

export const StyledSelect = styled.select`
  color: #ebd8ff;
  background-color: transparent;

  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const StyledOption = styled.option`
  background-color: #471ca9;
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: 12px;
`;
