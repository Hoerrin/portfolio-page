import ContactForm from "Components/ContactForm";
import ContactLinks from "Components/ContactLinks";
import ParallaxText from "Components/ParallaxText";
import React, { useRef } from "react";
import styled from "styled-components";

const contentEN = {
  formHeader: "Use this form",
  separator: "Or",
  linksHeader: "Find me on",
  parallax: "CONTACT",
};

const contentPL = {
  formHeader: "Użyj tego formularza",
  separator: "Lub",
  linksHeader: "Znajdż mnie tutaj",
  parallax: "KONTAKT",
};

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
  z-index: 10;
  @media screen and (max-width: 1280px) {
    padding: 0 8rem;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

const H2 = styled.h2`
  margin-bottom: 1rem;
`;

const ContactInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

const Separator = styled.p`
  font-size: 1.5rem;
  margin: 2rem;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export default function Contact({ language }) {
  let containerRef = useRef();

  return (
    <ContactContainer id="contact" language={language} ref={containerRef}>
      <ParallaxText parallaxText={language === "EN" ? contentEN.parallax : contentPL.parallax} containerRef={containerRef}/>
      <ContactInnerContainer>
        <H2>{language === "EN" ? contentEN.formHeader : contentPL.formHeader}</H2>
        <ContactForm language={language} />
      </ContactInnerContainer>
      <Separator>{language === "EN" ? contentEN.separator : contentPL.separator}</Separator>
      <ContactInnerContainer>
        <H2>{language === "EN" ? contentEN.linksHeader : contentPL.linksHeader}</H2>
        <ContactLinks />
      </ContactInnerContainer>
    </ContactContainer>
  );
}
