import React, { useEffect, useState } from "react";
import styled from "styled-components";

let Text = styled.p.attrs((props) => ({
  style: {
    transform: `translate(0, ${props.transformMult*window.innerHeight*0.2 + "px"})`,
  },
}))`
  position: absolute;
  font-size: 20rem;
  color: ${(props) => props.theme.lightGray};
  left: 7rem;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 12rem;
  z-index: -1;
  /* transition: all 0.1s; */

  @media screen and (max-width: 768px) {
    left: 0;
    right: 0;
    margin: auto;
    font-size: 6rem;
    text-align: center;
  }
`;

export default function ParallaxText({ parallaxText, containerRef }) {
  const [transformMult, setTransformMult] = useState(0);

  const handleScroll = () => {
    let formula =
      window.scrollY / (containerRef.current.offsetTop + containerRef.current.scrollHeight);
    setTransformMult(formula);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return <Text transformMult={transformMult}>{parallaxText}</Text>;
}
