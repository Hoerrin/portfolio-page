import React from "react";
import styled from "styled-components";
import HeroIntroduction from "Components/HeroIntroduction";
import HeroAvatar from "Components/HeroAvatar";

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
  &::after {
    position: absolute;
    content: "HI";
    font-size: 20rem;
    color: ${(props) => props.theme.lightGray};
    left: 7rem;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 12rem;
    z-index: -1;
    @media screen and (max-width: 1280px) {
      left: 5rem;
    }
    @media screen and (max-width: 768px) {
      left: 0;
      right: 0;
      margin: auto;
      font-size: 8rem;
      text-align: center;
    }
  }

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

export default function Hero() {
  return (
    <HeroContainer id="hero">
      <HeroIntroduction />
      <HeroAvatar />
    </HeroContainer>
  );
}
