import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Button = styled.button`
  display: block;

  padding: 14px 18px;
  margin: 40px auto 0;

  color: #ebd8ff;
  background-color: #5736a3;

  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  :hover {
    opacity: 0.8;
  }
`;

export const Text = styled.p`
  margin-top: 40px;
  color: #5736a3;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
`;
