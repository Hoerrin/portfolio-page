import React from "react";
import styled from "styled-components";

const AboutParagraphContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  z-index: 1;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  line-height: 1.5rem;
`;

export default function AboutParagraph() {
  return (
    <AboutParagraphContainer>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
        <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
    </AboutParagraphContainer>
  );
}
