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
  padding: 2rem 12rem;
  background-color: ${(props) => props.theme.gray};
  z-index: 100;
`;

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

export default function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <LanguageButton>PL</LanguageButton>/<LanguageButton>EN</LanguageButton>
      </div>
      <nav>
        <Button to="about" smooth="true" duration={600}>
          ABOUT
        </Button>
        <Button to="portfolio" smooth="true" duration={600}>
          PORTFOLIO
        </Button>
        <Button to="contact" smooth="true" duration={600}>
          CONTACT
        </Button>
        <Button as="a" href="https://github.com/Hoerrin" target="_blank">
          <GitHub />
        </Button>
        <Button as="a" href="https://www.linkedin.com/in/patryk-dworakowski/" target="_blank">
          <LinkedIn />
        </Button>
      </nav>
    </NavbarContainer>
  );
}
