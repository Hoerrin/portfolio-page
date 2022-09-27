import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const FormContainer = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    z-index: 5;
    width: 100%;
  `;

  const Input = styled.input`
    font-size: 1.5rem;
    height: 3rem;
    width: 100%;
    padding-left: 1rem;
    border: 1px solid ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.black};
    z-index: 50;
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

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_78zm6q9", "template_tpmjmpd", form.current, "4Lq2udnxc7jHSykJb").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <NameInput type="text" name="from_name" placeholder="Your name" required />
      <EmailInput type="email" name="from_email" placeholder="Your email" required />
      <SubjectInput type="text" name="subject" placeholder="Subject" required />
      <MessageInput as={"textarea"} type="text" name="message" placeholder="Message" maxLength={500} required />
      <SubmitContainer>
        <Submit type="submit" value="Send!" />
      </SubmitContainer>
    </FormContainer>
  );
}