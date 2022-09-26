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
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.gray} 0%,
    ${(props) => props.theme.black} 100%
  );
  &::after {
    position: absolute;
    content: "HI";
    font-size: 12rem;
    color: ${(props) => props.theme.lightGray};
    left: 7rem;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 12rem;
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
