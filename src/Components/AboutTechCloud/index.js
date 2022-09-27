import React from "react";
import styled, { keyframes } from "styled-components";

const TechCloudList = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sid",
  "Amet",
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sid",
  "Amet",
  "Lorem",
  "Ipsum",
];

const rotate = (props) => keyframes`
  from {
    transform: rotate(${props.index * 30 + 0 + "deg"}) translate(0, ${
  props.index % 2 ? 10 + "rem" : 15 + "rem"
}) rotate(180deg);
  }

  to {
    transform: rotate(${props.index * 30 + 360 + "deg"}) translate(0, ${
  props.index % 2 ? 10 + "rem" : 15 + "rem"
}) rotate(180deg);
  }
`;

const AboutTechCloudContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechCloudElement = styled.p`
  position: absolute;
  font-size: 2rem;
  color: ${(props) => props.theme.accent};
  animation: ${(props) => rotate(props)} 60s linear infinite;
  z-index: 1;
`;

export default function AboutTechCloud() {
  return (
    <AboutTechCloudContainer>
      {TechCloudList.map((item, index) => {
        return (
          <TechCloudElement index={index} key={index}>
            {item}
          </TechCloudElement>
        );
      })}
    </AboutTechCloudContainer>
  );
}
