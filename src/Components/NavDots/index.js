import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavDotsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 2rem;
  z-index: 50;
`;

const NavDot = styled(Link)`
  top: 1vh/2;
  background-color: ${(props) => props.theme.white};
  border-radius: 50%;
  height: 0.8rem;
  width: 0.8rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  opacity: 0.3;
  &.active {
    background-color: ${(props) => props.theme.accent};
    transform: scale(1.2);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function NavDots() {
  return (
    <NavDotsContainer>
      <NavDot to="hero" spy={true} offset={-200} smooth="true" duration={600} />
      <NavDot to="about" spy={true} offset={-200} smooth="true" duration={600} />
      <NavDot to="portfolio" spy={true} offset={-200} smooth="true" duration={600} />
      <NavDot to="contact" spy={true} offset={-200} smooth="true" duration={600} />
    </NavDotsContainer>
  );
}
