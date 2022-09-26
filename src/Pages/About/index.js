import AboutParagraph from "Components/AboutParagraph";
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  &::after {
    position: absolute;
    content: "ABOUT";
    font-size: 30rem;
    color: ${(props) => props.theme.gray};
    left: 5rem;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutParagraph></AboutParagraph>
    </AboutContainer>
  );
}
