import React from "react";
import memoji from "Images/memoji.png";
import styled, { keyframes } from "styled-components";

const floatingCodeList = [
  "<div>",
  "<article>",
  "<h1>",
  "<section>",
  "<img>",
  "<h2>",
  "<span>",
  "<main>",
  "<head>",
  "<h3>",
  "<aside>",
  "<ol>",
];

const rotate = (props) => keyframes`
  from {
    transform: rotate(${props.index * 30 + 0 + "deg"}) translate(0, ${
  props.index % 2 ? 17 + "rem" : 25 + "rem"
}) rotate(180deg);
  }

  to {
    transform: rotate(${props.index * 30 + 360 + "deg"}) translate(0, ${
  props.index % 2 ? 17 + "rem" : 25 + "rem"
}) rotate(180deg);
  }
`;

const FloatingCode = styled.p`
  position: absolute;
  font-size: 2rem;
  color: ${(props) => props.theme.accent};
  opacity: 0.1;
  animation: ${(props) => rotate(props)} 60s linear infinite;
  z-index: 10;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 5rem;
  }
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 400px;
  z-index: 100;
`;

export default function HeroAvatar() {
  return (
    <AvatarContainer>
      <Avatar src={memoji} alt="Memoji" />
      {floatingCodeList.map((item, index) => {
        return (
          <FloatingCode index={index} key={index}>
            {item}
          </FloatingCode>
        );
      })}
    </AvatarContainer>
  );
}
