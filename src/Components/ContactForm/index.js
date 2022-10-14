import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const contentEN = {
  namePlaceholder: "Name",
  emailPlaceholder: "E-mail",
  subjectPlaceholder: "Subject",
  messagePlaceholder: "Message",
  submitButton: "Send!",
  confirmationMessageL1: "Message sent",
  confirmationMessageL2: "I'll respond as fast as i can!",
};

const contentPL = {
  namePlaceholder: "Imię i nazwisko",
  emailPlaceholder: "E-mail",
  subjectPlaceholder: "Temat",
  messagePlaceholder: "Treść wiadomości",
  submitButton: "Wyślij!",
  confirmationMessageL1: "Wiadomość wysłana",
  confirmationMessageL2: "Odpowiem naszybciej jak się da!",
};

const FormContainer = styled.form`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  z-index: 5;
  width: 100%;
`;

const ConfirmationWindow = styled.div`
  position: absolute;
  display: ${(props) => (props.isSent ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 1.5rem;
  line-height: 2rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.white};
  z-index: 100;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  font-size: 1.5rem;
  height: 3rem;
  width: 100%;
  padding-left: 1rem;
  border-radius: 0.2rem;
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};
  z-index: 50;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    height: 2rem;
  }
`;

const NameInput = styled(Input)`
  grid-area: 1 / 1 / 2 / 2;
`;

const EmailInput = styled(Input)`
  grid-area: 1 / 2 / 2 / 3;
`;

const SubjectInput = styled(Input)`
  grid-area: 2 / 1 / 3 / 3;
`;

const MessageInput = styled(Input)`
  padding-top: 0.6rem;
  resize: none;
  grid-area: 3 / 1 / 7 / 3;
  height: 100%;
  width: 100%;
`;

const Submit = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.2rem;
  padding: 0 3rem;
  height: 100%;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.black};
`;

const SubmitContainer = styled.div`
  grid-area: 7 / 1 / 8 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ContactForm(props) {
  const form = useRef();
  const [isSent, setisSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isSent) {
      emailjs
        .sendForm("service_78zm6q9", "template_tpmjmpd", form.current, "4Lq2udnxc7jHSykJb")
        .then(
          (result) => {
            setisSent(true);
            console.log(result.text);
          },
          (error) => {
            alert(error.text);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <ConfirmationWindow isSent={isSent}>
        <p>
          {props.language === "EN"
            ? contentEN.confirmationMessageL1
            : contentPL.confirmationMessageL1}
        </p>
        <p>
          {props.language === "EN"
            ? contentEN.confirmationMessageL2
            : contentPL.confirmationMessageL2}
        </p>
      </ConfirmationWindow>
      <NameInput
        type="text"
        name="from_name"
        placeholder={
          props.language === "EN" ? contentEN.namePlaceholder : contentPL.namePlaceholder
        }
        required
      />
      <EmailInput
        type="email"
        name="from_email"
        placeholder={
          props.language === "EN" ? contentEN.emailPlaceholder : contentPL.emailPlaceholder
        }
        required
      />
      <SubjectInput
        type="text"
        name="subject"
        placeholder={
          props.language === "EN" ? contentEN.subjectPlaceholder : contentPL.subjectPlaceholder
        }
        required
      />
      <MessageInput
        as={"textarea"}
        type="text"
        name="message"
        placeholder={
          props.language === "EN" ? contentEN.messagePlaceholder : contentPL.messagePlaceholder
        }
        maxLength={500}
        required
      />
      <SubmitContainer>
        <Submit
          type="submit"
          value={props.language === "EN" ? contentEN.submitButton : contentPL.submitButton}
        />
      </SubmitContainer>
    </FormContainer>
  );
}
