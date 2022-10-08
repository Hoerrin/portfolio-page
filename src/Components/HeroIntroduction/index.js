import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const contentEN = {
  h2: "My name is",
  button: "Contact me!",
};

const contentPL = {
  h2: "Nazywam się",
  button: "Skontaktuj się!",
};

const HeroIntroductionContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
  z-index: 1;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  color: ${(props) => props.theme.accent};

  @media screen and (max-width: 1280px) {
    font-size: 5.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 4.5rem;
  }
  @media screen and (max-width: 930px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1280px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 930px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  padding-top: 1rem;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1280px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled(Link)`
  align-self: flex-start;
  padding: 1rem;
  margin-top: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #d9d9d9;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export default function HeroIntroduction({language}) {
  return (
    <HeroIntroductionContainer>
      <H2>{language === "EN" ? contentEN.h2 : contentPL.h2}</H2>
      <H1>
        Patryk
        <br />
        Dworakowski
      </H1>
      <H3>Front-End Developer</H3>
      <Button to="contact" smooth="true" duration={600}>
        {language === "EN" ? contentEN.button : contentPL.button}
      </Button>
    </HeroIntroductionContainer>
  );
}
