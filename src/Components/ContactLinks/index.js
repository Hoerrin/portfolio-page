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

const Link = styled.a`
padding: 0.5rem;
`

export default function ContactLinks() {
  return (
    <ContactLinksContainer>
      <Link href="mailto:patrykd0604@gmail.com">patrykd0604@gmail.com</Link>
      <Link href="https://www.linkedin.com/in/patryk-dworakowski/" target="_blank" rel="noreferrer">LinkedIn</Link>
      <Link href="https://github.com/Hoerrin" target="_blank" rel="noreferrer">GitHub</Link>
    </ContactLinksContainer>
  );
}
