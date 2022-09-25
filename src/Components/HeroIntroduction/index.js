import React from "react";
import styled from "styled-components";

const HeroIntroduction = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
  margin-left: 10rem;
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    content: "HI";
    font-size: 30rem;
    color: #151515;
    z-index: -1;
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  color: #3de0f2;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 3rem;
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  padding-top: 1rem;
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
  color: #0d0d0d;
`;

export default function index() {
  return (
    <HeroIntroduction>
      <H2>My name is</H2>
      <H1>
        Patryk <br /> Dworakowski
      </H1>
      <H3>Front-End Developer</H3>
      <Button>Contact me</Button>
    </HeroIntroduction>
  );
}
