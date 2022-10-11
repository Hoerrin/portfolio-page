import ParallaxText from "Components/ParallaxText";
import React, { useRef } from "react";
import styled from "styled-components";

const contentEN = {
  parallax: "Portfolio",
};

const contentPL = {
  parallax: "Portfolio",
};

const PortfolioContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  padding: 0 12rem;
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

const TempDiv = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.gray};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 0.2rem;
  @media screen and (max-width: 930px) {
    width: 11rem;
    height: 11rem;
  }
  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;

export default function Portfolio({ language }) {
  let containerRef = useRef();
  return (
    <PortfolioContainer id="portfolio" language={language} ref={containerRef}>
      <ParallaxText parallaxText={language === "EN" ? contentEN.parallax : contentPL.parallax} containerRef={containerRef}/>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
    </PortfolioContainer>
  );
}
