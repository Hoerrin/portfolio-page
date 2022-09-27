import React from "react";
import styled from "styled-components";

const WorkContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  padding: 0 12rem;
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
    @media screen and (max-width: 768px) {
      left: 0;
      right: 0;
      margin: auto;
      font-size: 8rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export default function Work() {
  return <WorkContainer id="work"></WorkContainer>;
}
