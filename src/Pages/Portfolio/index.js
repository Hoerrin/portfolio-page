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
  display: grid;
  grid-template-columns: 2fr 3fr;
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
    padding: 1rem;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  list-style: none;
  line-height: 2rem;
  padding-right: 2rem;
`;

const ListItem = styled.li`
  position: relative;
  font-size: 1.6rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: translate(1rem);
  }
  &::before {
    position: absolute;
    content: "»";
    transition: all ease-in-out 0.3s;
    left: -2rem;
    opacity: 0%;
  }
  &:hover::before {
    opacity: 100%;
    left: -1.5rem;
  }
`;

const DisplayContainer = styled.div`
  padding: 13rem 0;
`;

const Display = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.black + "aa"};
  backdrop-filter: blur(5px);
`;

export default function Portfolio({ language }) {
  let containerRef = useRef();
  return (
    <PortfolioContainer id="portfolio" language={language} ref={containerRef}>
      <ParallaxText
        parallaxText={language === "EN" ? contentEN.parallax : contentPL.parallax}
        containerRef={containerRef}
      />
      <List>
        <ListItem>This site</ListItem>
        <ListItem>Airport Departure Board (data fetched from API)</ListItem>
        <ListItem>Yet another ToDo app </ListItem>
      </List>
      <DisplayContainer>
        <Display />
      </DisplayContainer>
    </PortfolioContainer>
  );
}
