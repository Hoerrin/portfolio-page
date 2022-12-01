import LanguageButtons from "Components/LanguageButtons";
import NavbarHamburger from "Components/NavbarHamburger";
import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const contentEN = {
  about: "ABOUT",
  portfolio: "PORTFOLIO",
  contact: "CONTACT",
};

const contentPL = {
  about: "O MNIE",
  portfolio: "PORTFOLIO",
  contact: "KONTAKT",
};

const DropdownMenuContainer = styled.nav`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(15px) grayscale(100%) brightness(50%);
  z-index: 100;
  transition: all ease-in-out 0.3s;
  transform: ${(props) => (props.isActive ? "translate(0)" : "translate(0,-100vh)")};
  @media screen and (max-width: 1024px) {
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
  transition: all ease-in-out 0.1s;
  &:active {
    color: ${(props) => props.theme.accent};
  }
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

export default function DropdownMenu({ handleSetLanguage, language }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => {
      !isActive
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
      return !isActive;
    });
  };

  return (
    <>
      <NavbarHamburger handleClick={handleClick} isActive={isActive} />
      <DropdownMenuContainer onClick={handleClick} isActive={isActive}>
        <LanguageButtonsStyled language={language} handleSetLanguage={handleSetLanguage} />
        <Button to="about" smooth="true" duration={600} onClick={handleClick}>
          {language === "EN" ? contentEN.about : contentPL.about}
        </Button>
        <Button to="portfolio" smooth="true" duration={600} onClick={handleClick}>
          {language === "EN" ? contentEN.portfolio : contentPL.portfolio}
        </Button>
        <Button to="contact" smooth="true" duration={600} onClick={handleClick}>
          {language === "EN" ? contentEN.contact : contentPL.contact}
        </Button>
      </DropdownMenuContainer>
    </>
  );
}
