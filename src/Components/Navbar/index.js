import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "Images/GitHub.svg";
import { ReactComponent as LinkedInLogo } from "Images/LinkedIn.svg";
import { Link } from "react-scroll";
import LanguageButtons from "Components/LanguageButtons";
import _ from "lodash";

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

const GitHub = styled(GitHubLogo)`
  fill: ${(props) => props.theme.white};
  transition: all 0.3s;
  width: auto;
  height: 1.5rem;
`;

const LinkedIn = styled(LinkedInLogo)`
  fill: ${(props) => props.theme.white};
  transition: all 0.3s;
  width: auto;
  height: 1.5rem;
`;

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12rem;
  padding-right: 12rem;
  padding-top: ${(props) => (props.isNavbarShrinked ? "1rem" : "2.5rem")};
  padding-bottom: ${(props) => (props.isNavbarShrinked ? "1rem" : "2.5rem")};
  background-color: ${(props) => (props.isNavbarShrinked ? props.theme.gray : "#0000")};
  z-index: 100;
  transition: all 0.5s;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  @media screen and (max-width: 1024px) {
    display: none;
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

const NavbarButtonsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Button = styled(Link)`
  color: ${(props) => props.theme.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  padding: 0.2rem 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s;
  will-change: transform;
  overflow: hidden;
  &:hover {
    transform: scale(1.05) translate(0, -0.05rem);
  }
  &::after {
    position: absolute;
    top: 1.5rem;
    left: -100%;
    width: 100%;
    height: 0.2rem;
    background-color: ${(props) => props.theme.accent};
    transition: all 0.3s;
    content: "";
  }
  &:hover::after {
    left: 0;
  }
`;

const ButtonSocial = styled(Button)`
  &::after {
    display: none;
  }
`;

export default function Navbar({ language, handleSetLanguage }) {
  //Store scroll position
  const [isNavbarShrinked, setIsNavbarShrinked] = useState(false);

  const handleScroll = () => {
    window.scrollY === 0 ? setIsNavbarShrinked(false) : setIsNavbarShrinked(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", _.throttle(handleScroll, 100));
    return () => {
      document.removeEventListener("scroll", _.throttle(handleScroll, 100));
    };
  }, []);

  return (
    <NavbarContainer isNavbarShrinked={isNavbarShrinked}>
      <LanguageButtons language={language} handleSetLanguage={handleSetLanguage} />
      <NavbarButtonsContainer>
        <Button to="about" smooth="true" duration={600}>
          {language === "EN" ? contentEN.about : contentPL.about}
        </Button>
        <Button to="portfolio" smooth="true" duration={600}>
          {language === "EN" ? contentEN.portfolio : contentPL.portfolio}
        </Button>
        <Button to="contact" smooth="true" duration={600}>
          {language === "EN" ? contentEN.contact : contentPL.contact}
        </Button>
        <ButtonSocial as="a" href="https://github.com/Hoerrin" target="_blank" rel="noreferrer">
          <GitHub />
        </ButtonSocial>
        <ButtonSocial
          as="a"
          href="https://www.linkedin.com/in/patryk-dworakowski/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </ButtonSocial>
      </NavbarButtonsContainer>
    </NavbarContainer>
  );
}
