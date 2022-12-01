import AboutParagraph from "Components/AboutParagraph";
import AboutTechCloud from "Components/AboutTechCloud";
import ParallaxText from "Components/ParallaxText";
import React, { useRef } from "react";
import styled from "styled-components";

const contentEN = {
  parallax: "About",
};

const contentPL = {
  parallax: "O mnie",
};

const AboutContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  padding: 0 12rem;
  z-index: 10;

  @media screen and (max-width: 1280px) {
    padding: 0 8rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 1rem;
    height: auto;
  }
`;

export default function About({ language }) {
  let containerRef = useRef()
  return (
    <AboutContainer id="about" language={language} ref={containerRef}>
      <ParallaxText parallaxText={language === "EN" ? contentEN.parallax : contentPL.parallax} containerRef={containerRef} />
      <AboutParagraph />
      <AboutTechCloud />
    </AboutContainer>
  );
}
