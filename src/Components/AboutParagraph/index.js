import React from "react";
import styled from "styled-components";

const contentEN = {
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.`,
};

const contentPL = {
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.`,
};

const AboutParagraphContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  z-index: 2;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  line-height: 1.5rem;
  @media screen and (max-width: 768px) {
    line-height: 1.2rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    text-align: center;
  }
`;

export default function AboutParagraph({ language }) {
  return (
    <AboutParagraphContainer>
      <Paragraph>{language === "EN" ? contentEN.paragraph : contentPL.paragraph}</Paragraph>
    </AboutParagraphContainer>
  );
}
