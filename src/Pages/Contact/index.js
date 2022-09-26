import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  &::after {
    position: absolute;
    content: "CONTACT";
    font-size: 30rem;
    color: #151515;
    left: 5rem;
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
    </ContactContainer>
  );
}
