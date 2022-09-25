import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background-color: #101010;
`;

const Button = styled.button`
  margin: 0 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const LanguageContainer = styled.div`
  font-size: 1.5rem;
`;

const NavButtonsContainer = styled.div``;

export default function Navbar() {
  return (
    <NavbarContainer>
      <LanguageContainer>
        <Button>PL</Button>/<Button>EN</Button>
      </LanguageContainer>
      <NavButtonsContainer>
        <Button as="a" href="#">
          ABOUT
        </Button>
        <Button as="a" href="#">
          WORK
        </Button>
        <Button as="a" href="#">
          CONTACT
        </Button>
      </NavButtonsContainer>
    </NavbarContainer>
  );
}
