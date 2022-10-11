import React from "react";
import styled from "styled-components";

let Text = styled.p`
  position: absolute;
  font-size: 20rem;
  color: ${(props) => props.theme.lightGray};
  left: 7rem;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 12rem;
  z-index: -1;
  @media screen and (max-width: 768px) {
    left: 0;
    right: 0;
    margin: auto;
    font-size: 8rem;
    text-align: center;
  }
`;

export default function ParallaxText({ parallaxText, containerRef }) {
  return <Text>{parallaxText}</Text>;
}
