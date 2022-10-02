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
`;

export default function LanguageButtons({ className, children }) {
  return (
    <LanguageButtonsContainer className={className}>
      {children}
      <Button>PL</Button>/<Button>EN</Button>
    </LanguageButtonsContainer>
  );
}
