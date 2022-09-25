import React from "react";
import memoji from "Images/memoji.png";
import styled from "styled-components";

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function index() {
  return (
    <AvatarContainer>
      <img src={memoji} alt="Memoji" />
    </AvatarContainer>
  );
}
