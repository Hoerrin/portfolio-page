import React from "react";
import styled from "styled-components";

const AboutParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 12rem;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  line-height: 1.7rem;
`;

export default function AboutParagraph() {
  return (
    <AboutParagraphContainer>
      <Paragraph>
        Już w dzieciństwie gdy pierwszy komputer pojawił się w moim domu wieczorami próbowałem pisać
        pierwszy kod...
        <br />
        Nie.
        <br />
        Oczywiście, że nie. Na początku były gry.
        <br />
        Jednak z biegiem lat gdy zagłębiałem się w świat komputerów i programowania, wiedziałem, że
        to jest to co chcę robić w życiu.
        <br />
        <br />
        Ukończyłem technikum i studia wyższe o profilu informatycznym. Już przy pierwszym kontakcie
        z Front End Developmentem pokochałem tę dziedzinę, że względu na to, że jest połączeniem
        mojego zamiłowania do programowania i estetyki.
        <br />
        <br />
        Jestem w trakcie nauki takich technologii jak React, lorem ipsum dolor sid amet, lorem ipsum
        dolor sid amet, lorem ipsum dolor sid amet
      </Paragraph>
    </AboutParagraphContainer>
  );
}
