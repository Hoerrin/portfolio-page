import React from "react";
import styled from "styled-components";

const NavbarHamburgerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  align-items: center;
  justify-content: flex-end;
  display: none;
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const HambrgerButton = styled.div`
  width: 2.5rem;
  height: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const HambrgerButtonBar = styled.div`
  background-color: ${(props) => props.theme.accent};
  width: 100%;
  height: 0.4rem;
  border-radius: 0.25rem;
  transition: all ease-in-out 0.3s;
`;

const HambrgerButtonBarTop = styled(HambrgerButtonBar)`
  transform-origin: left top;
  transform: ${(props) =>
    props.isActive && "translate(0.46rem, 0) translate(0.03rem, -0.03rem) rotate(45deg)"};
`;

const HambrgerButtonBarMid = styled(HambrgerButtonBar)`
  transform: ${(props) => props.isActive && "translate(2.5rem)"};
  opacity: ${(props) => props.isActive && "0"};
`;

const HambrgerButtonBarLow = styled(HambrgerButtonBar)`
  transform-origin: left bottom;
  transform: ${(props) =>
    props.isActive && "translate(0.46rem, 0) translate(0.03rem,0.03rem) rotate(-45deg)"};
`;

export default function NavbarHamburger({ handleClick, isActive }) {
  return (
    <NavbarHamburgerContainer>
      <HambrgerButton onClick={handleClick}>
        <HambrgerButtonBarTop isActive={isActive} />
        <HambrgerButtonBarMid isActive={isActive} />
        <HambrgerButtonBarLow isActive={isActive} />
      </HambrgerButton>
    </NavbarHamburgerContainer>
  );
}
