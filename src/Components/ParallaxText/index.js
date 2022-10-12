import React, { useEffect } from "react";
import styled from "styled-components";
import _ from "lodash"

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
  
  const handleScroll = () => {
   // console.log(containerRef)
  };

  useEffect(() => {
    document.addEventListener("scroll", _.throttle(handleScroll, 100));

    return () => {
      document.removeEventListener("scroll", _.throttle(handleScroll, 100));
    };
  }, []);
  
  return <Text>{parallaxText}</Text>;
}
