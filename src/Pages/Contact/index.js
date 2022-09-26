import ContactForm from "Components/ContactForm";
import ContactLinks from "Components/ContactLinks";
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  padding: 0 12rem;
  &::after {
    position: absolute;
    content: "CONTACT";
    font-size: 12rem;
    color: ${(props) => props.theme.lightGray};
    left: 7rem;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 12rem;
  }
`;

const H2 = styled.h2`
margin-bottom: 1rem;
`

const ContactInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const Separator = styled.p`
font-size: 1.5rem;
margin: 2rem;
`

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactInnerContainer>
        <H2>Use this form</H2>
        <ContactForm />
      </ContactInnerContainer>
      <Separator>Or</Separator>
      <ContactInnerContainer>
        <H2>Find me on</H2>
        <ContactLinks />
      </ContactInnerContainer>
    </ContactContainer>
  );
}
