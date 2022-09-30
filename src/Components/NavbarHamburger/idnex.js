import React, { useState } from "react";
import styled from "styled-components";

const NavbarHamburgerContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  display: none;
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
`;

const HambrgerButtonBarTop = styled(HambrgerButtonBar)``;

const HambrgerButtonBarMid = styled(HambrgerButtonBar)``;

const HambrgerButtonBarLow = styled(HambrgerButtonBar)``;

export default function NavbarHamburger() {
  const [isActive, setisActive] = useState();

  return (
    <NavbarHamburgerContainer>
      <HambrgerButton>
        <HambrgerButtonBarTop />
        <HambrgerButtonBarMid />
        <HambrgerButtonBarLow />
      </HambrgerButton>
    </NavbarHamburgerContainer>
  );
}
