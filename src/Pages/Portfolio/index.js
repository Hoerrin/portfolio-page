import ParallaxText from "Components/ParallaxText";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import portfolioPageSS from "Images/memoji.png";
import airportBoardSS from "Images/memoji.png";
import toDoSS from "Images/memoji.png";

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
  grid-template-columns: 1fr 1fr;
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
  padding: 1rem 0;
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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.black + "aa"};
  backdrop-filter: blur(5px);
  transition: all ease-out 0.3s;
  transform: ${(props) => (props.isHovering ? "scale(1)" : "scale(0.7)")};
  opacity: ${(props) => (props.isHovering ? "100%" : "0%")};
`;

const Screenshot = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0%;
  transition: all ease-in-out 0.6s;
  &[data-active="true"] {
    opacity: 100%;
    transform: scale(1.1);
  }
`;

export default function Portfolio({ language }) {
  let containerRef = useRef();
  const [isHovering, setIsHovering] = useState();

  const handleMouseEnter = (item) => {
    const element = document.querySelector(`img[data-title="${item.title}"]`);
    setIsHovering(true);
    element.setAttribute("data-active", "true");
  };

  const handleMouseLeave = (item) => {
    const element = document.querySelector(`img[data-title="${item.title}"]`);
    setIsHovering(false);
    element.setAttribute("data-active", "false");
  };

  const portfolioItems = [
    {
      title: "This site",
      description: "",
      GHPages: "https://hoerrin.github.io/portfolio-page/",
      screenshot: portfolioPageSS,
    },
    {
      title: "Airport Departure Board (data fetched from API)",
      description: "",
      GHPages: "https://hoerrin.github.io/airport_departures_board/",
      screenshot: airportBoardSS,
    },
    {
      title: "Yet another ToDo app",
      description: "",
      GHPages: "",
      screenshot: toDoSS,
    },
  ];

  return (
    <PortfolioContainer id="portfolio" language={language} ref={containerRef}>
      <ParallaxText
        parallaxText={language === "EN" ? contentEN.parallax : contentPL.parallax}
        containerRef={containerRef}
      />
      <List>
        {portfolioItems.map((item, index) => (
          <ListItem
            key={index}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={() => handleMouseLeave(item)}
          >
            {item.title}
          </ListItem>
        ))}
      </List>
      <DisplayContainer>
        <Display isHovering={isHovering}>
          {portfolioItems.map((item, index) => (
            <Screenshot
              key={index}
              data-title={item.title}
              data-active={false}
              src={item.screenshot}
              alt={item.title + " screenshot"}
            />
          ))}
        </Display>
      </DisplayContainer>
    </PortfolioContainer>
  );
}
