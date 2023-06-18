import styled from "@emotion/styled";

import { Color } from "@/types";

export const CardWrapper = styled.div`
  position: relative;

  width: 380px;
  height: 460px;

  padding-top: 178px;

  overflow: hidden;

  background-image: url("background/goit-logo.svg"),
    url("background/bg-img.svg"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px, 308px, cover;
  background-repeat: no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  ::after {
    position: absolute;
    display: block;
    content: "";
    top: -160px;

    width: 8px;
    height: 756px;

    background: #ebd8ff;

    transform: rotate(90deg);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    z-index: 1;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto 26px;

  width: 80px;
  height: 80px;

  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;

  ::after {
    position: absolute;
    content: "";

    width: 80px;
    height: 80px;

    background-image: url("background/border.svg");
    background-repeat: no-repeat;
    background-position: top;
    z-index: 2;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 8px;
  z-index: 2;
`;

export const Text = styled.p`
  margin-bottom: 16px;

  color: #ebd8ff;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const Button = styled.button<Color>`
  display: block;

  padding: 14px 28px;
  margin: 26px auto 0;

  width: 196px;

  color: #373737;
  background-color: ${({ color }) => color};

  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  :hover {
    opacity: 0.8;
  }
`;
