import React from "react";
import styled from "styled-components";

const LanguageButtonsContainer = styled.div``;

const Button = styled.button`
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.2rem;
  transition: all 0.3s;
  color: ${(props) => (props.active ? props.theme.accent : props.theme.white)};
`;

export default function LanguageButtons({ className, language, handleSetLanguage }) {
  return (
    <LanguageButtonsContainer className={className}>
      <Button active={language === "PL" && true} onClick={() => handleSetLanguage("PL")}>
        PL
      </Button>
      /
      <Button active={language === "EN" && true} onClick={() => handleSetLanguage("EN")}>
        EN
      </Button>
    </LanguageButtonsContainer>
  );
}
