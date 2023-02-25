import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 443px;
  box-shadow: none;
  border-radius: 5px;

  transition-duration: 250ms;
  transition-property: box-shadow;

  &:hover{
    box-shadow: 5px 5px 10px black;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 495px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 634px;
  }
  & .imageThumb {
    height: 402px;
    overflow: hidden;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      height: 455px;
    }
    @media screen and (min-width: 1280px) {
      height: 574px;
    }
  }

  & h3 {
    margin-top: 10px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;

    color: #000000;

    @media screen and (min-width: 768px) {
      line-height: 16px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    color: #ff6b08;

    @media screen and (min-width: 768px) {
      line-height: 16px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
