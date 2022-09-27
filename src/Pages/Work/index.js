import React from "react";
import styled from "styled-components";

const WorkContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  padding: 0 12rem;
  z-index: 10;
  &::after {
    position: absolute;
    content: "WORK";
    font-size: 20rem;
    color: ${(props) => props.theme.lightGray};
    left: 7rem;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 12rem;
    z-index: -1;
    @media screen and (max-width: 768px) {
      left: 0;
      right: 0;
      margin: auto;
      font-size: 8rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

const TempDiv = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.gray};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 0.2rem;
  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;

export default function Work() {
  return (
    <WorkContainer id="work">
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
      <TempDiv>test</TempDiv>
    </WorkContainer>
  );
}
