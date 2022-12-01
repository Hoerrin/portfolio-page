import React, { useEffect } from "react";
import styled from "styled-components";
import TagCloud from "TagCloud";

const TechCloudList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "styled-components",
  "Git",
  "Figma",
  "Wordpress",
  "GraphQL",
  "WooCommerce",
  "npm",
  "JSON",
  "BEM",
  "_lodash",
  "ES6",
  "REST",
  "JQuery",
  "API",
];

const AboutTechCloudContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > div > span {
    font-size: 2rem;
    color: ${(props) => props.theme.accent};
    cursor: default;
  }

  & > div {
    width: 100% !important;
    height: 100% !important;
  }

  @media screen and (max-width: 1024px) {
    height: 400px;
  }
`;

export default function AboutTechCloud() {
  useEffect(() => {
    const techCloud = TagCloud("#aboutTechCloudContainer", TechCloudList, {
      keep: true,
      radius: 200,
      maxSpeed: "slow",
      initSpeed: "slow",
    });

    return function cleanup() {
      techCloud.destroy();
    };
  }, []);

  return <AboutTechCloudContainer id="aboutTechCloudContainer" />;
}
