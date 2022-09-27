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
  &.active{
    background-color: red;
    transform: scale(1.2);
  }
`;

export default function NavDots() {
  return (
    <NavDotsContainer>
      <NavDot to="hero" spy={true} disabled={true} offset={-200}/>
      <NavDot to="about" spy={true} offset={-200}/>
      <NavDot to="work" spy={true} offset={-200}/>
      <NavDot to="contact" spy={true} offset={-200}/>
    </NavDotsContainer>
  );
}
