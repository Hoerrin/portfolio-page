import React from "react";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.black};
  &::after {
    position: absolute;
    content: "PORTFOLIO";
    font-size: 12rem;
    color: ${(props) => props.theme.lightGray};
    left: 5rem;
  }
`;

export default function Portfolio() {
  return <PortfolioContainer id="portfolio"></PortfolioContainer>;
}
