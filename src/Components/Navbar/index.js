import React from "react";
import styled from "styled-components";
import { ReactComponent as GitHubLogo } from "Images/GitHub.svg";
import { ReactComponent as LinkedInLogo } from "Images/LinkedIn.svg";

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
  padding: 2rem 15rem;
  background-color: ${(props) => props.theme.navbar};
`;

const Button = styled.button`
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
        <Button as="a" href="#">
          ABOUT
        </Button>
        <Button as="a" href="#">
          WORK
        </Button>
        <Button as="a" href="#">
          CONTACT
        </Button>
        <Button as="a" href="#">
          <GitHub />
        </Button>
        <Button as="a" href="#">
          <LinkedIn />
        </Button>
      </nav>
    </NavbarContainer>
  );
}
