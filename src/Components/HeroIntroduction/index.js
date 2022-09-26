import React from "react";
import styled from "styled-components";

const HeroIntroductionContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
  margin-left: 12rem;
  z-index: 1;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  color: ${(props) => props.theme.accent};
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  color: ${(props) => props.theme.white};
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  padding-top: 1rem;
  color: ${(props) => props.theme.white};
`;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  align-self: flex-start;
  padding: 1rem;
  margin-top: 2rem;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};
`;

export default function HeroIntroduction() {
  return (
    <HeroIntroductionContainer>
      <H2>My name is</H2>
      <H1>
        Patryk <br /> Dworakowski
      </H1>
      <H3>Front-End Developer</H3>
      <Button>Contact me</Button>
    </HeroIntroductionContainer>
  );
}
