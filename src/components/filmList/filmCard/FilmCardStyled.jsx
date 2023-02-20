import styled from "styled-components";

export const Card = styled.div`
  outline: 2px solid red;
  width: 280px;
  height: 443px;

  & .imageThumb {
    height: 402px;
    overflow: hidden;
    border-radius: 5px;
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
  }

  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    color: #ff6b08;
  }
`;
