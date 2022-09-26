import React from "react";
import styled from "styled-components";

const ContactLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 1.5rem;
  height: 100%;
  width: 100%;
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};
  z-index: 50;
  height: 27rem;
`;

export default function ContactLinks() {
  return (
    <ContactLinksContainer>
      <a href="mailto:patrykd0604@gmail.com">patrykd0604@gmail.com</a>
      <a href="https://www.linkedin.com/in/patryk-dworakowski/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/Hoerrin" target="_blank" rel="noreferrer">GitHub</a>
    </ContactLinksContainer>
  );
}
