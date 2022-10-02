import styled, { ThemeProvider } from "styled-components";
import Navbar from "Components/Navbar";
import NavDots from "Components/NavDots";
import DropdownMenu from "Components/DropdownMenu";
import Hero from "Pages/Hero";
import About from "Pages/About";
import Work from "Pages/Work";
import Contact from "Pages/Contact";
import { useEffect, useState } from "react";
import _ from "lodash";


const AppContainer = styled.main``;

const theme = {
  black: "#0D0D0D",
  white: "#d9d9d9",
  gray: "#101010",
  lightGray: "#171717",
  accent: "#3babb9",
};

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener("scroll", _.throttle(handleScroll, 100));

    return () => {
      document.removeEventListener("scroll", _.throttle(handleScroll, 100));
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
      <DropdownMenu />
        <Navbar scrollPosition={scrollPosition} />
        <NavDots />
        <Hero />
        <About />
        <Work />
        <Contact />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
