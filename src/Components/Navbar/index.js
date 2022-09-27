import React from "react";
import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "Images/GitHub.svg";
import { ReactComponent as LinkedInLogo } from "Images/LinkedIn.svg";
import { Link } from "react-scroll";

const GitHub = styled(GitHubLogo)`
  fill: ${(props) => props.theme.white};
  width: auto;
  height: 1.5rem;
`;

const LinkedIn = styled(LinkedInLogo)`
  fill: ${(props) => props.theme.white};
  width: auto;
  height: 1.5rem;
`;

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.scrollPosition <= 0 ? "2.5rem 12rem" : "1rem 12rem;"};
  background-color: ${(props) => props.scrollPosition <= 0 ? "#0000" : props.theme.gray};
  z-index: 100;
  transition: all 0.5s;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

const NavbarButtonsContainer = styled.div`
display: flex;
`

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const LanguageButton = styled(Button)`
  font-size: 1rem;
  margin: 0.2rem;
`;

export default function Navbar(props) {
  return (
    <NavbarContainer scrollPosition = {props.scrollPosition}>
      <div>
        <LanguageButton as={"button"}>PL</LanguageButton>/<LanguageButton as={"button"}>EN</LanguageButton>
      </div>
      <NavbarButtonsContainer>
        <Button to="about" smooth="true" duration={600}>
          ABOUT
        </Button>
        <Button to="work" smooth="true" duration={600}>
          WORK
        </Button>
        <Button to="contact" smooth="true" duration={600}>
          CONTACT
        </Button>
        <Button as="a" href="https://github.com/Hoerrin" target="_blank" rel="noreferrer">
          <GitHub />
        </Button>
        <Button as="a" href="https://www.linkedin.com/in/patryk-dworakowski/" target="_blank" rel="noreferrer">
          <LinkedIn />
        </Button>
      </NavbarButtonsContainer>
    </NavbarContainer>
  );
}
