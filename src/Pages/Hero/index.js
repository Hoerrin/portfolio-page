import React, { useRef } from "react";
import styled from "styled-components";
import HeroIntroduction from "Components/HeroIntroduction";
import HeroAvatar from "Components/HeroAvatar";
import ParallaxText from "Components/ParallaxText";

const contentEN = {
  parallax: "Hello",
};

const contentPL = {
  parallax: "Cześć",
};

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  padding: 0 12rem;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.gray} 0%,
    ${(props) => props.theme.black} 100%
  );
  z-index: 10;

  @media screen and (max-width: 1280px) {
    padding: 0 8rem;
  }
  @media screen and (max-width: 930px) {
    padding: 0 6rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export default function Hero({ language }) {
  let containerRef = useRef();

  return (
    <HeroContainer id="hero" language={language} ref={containerRef}>
      <ParallaxText
        parallaxText={language === "EN" ? contentEN.parallax : contentPL.parallax}
        containerRef={containerRef}
      />
      <HeroIntroduction language={language} />
      <HeroAvatar />
    </HeroContainer>
  );
}
