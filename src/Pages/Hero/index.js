import React from "react";
import styled from "styled-components";
import HeroIntroduction from "Components/HeroIntroduction";
import HeroAvatar from "Components/HeroAvatar";

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #101010 0%, #0d0d0d 100%);
`;

export default function index() {
  return (
    <HeroContainer>
      <HeroIntroduction />
      <HeroAvatar/>
    </HeroContainer>
  );
}
