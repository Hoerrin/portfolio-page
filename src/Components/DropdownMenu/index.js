import LanguageButtons from "Components/LanguageButtons";
import NavbarHamburger from "Components/NavbarHamburger";
import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const DropdownMenuContainer = styled.nav`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(15px) grayscale(100%) brightness(40%);
  z-index: 100;
  transition: all ease-in-out 0.3s;
  transform: ${(props) => (props.isActive ? "translate(0)" : "translate(0,-100vh)")};
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Button = styled(Link)`
  margin: 1rem;
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 2.5rem;
`;

const LanguageButtonsStyled = styled(LanguageButtons)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  top: 0;
  left: 0;
  & button {
    height: 2rem;
  }
`;

export default function DropdownMenu() {
  const [isActive, setIsActive] = useState("false");

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <>
      <NavbarHamburger handleClick={handleClick} isActive={isActive} />
      <DropdownMenuContainer onClick={handleClick} isActive={isActive}>
        <LanguageButtonsStyled />
        <Button to="about" smooth="true" duration={600} onClick={handleClick}>
          ABOUT
        </Button>
        <Button to="work" smooth="true" duration={600} onClick={handleClick}>
          WORK
        </Button>
        <Button to="contact" smooth="true" duration={600} onClick={handleClick}>
          CONTACT
        </Button>
      </DropdownMenuContainer>
    </>
  );
}
