import styled, { ThemeProvider } from "styled-components";
import Navbar from "Components/Navbar";
import NavDots from "Components/NavDots";
import DropdownMenu from "Components/DropdownMenu";
import Hero from "Pages/Hero";
import About from "Pages/About";
import Portfolio from "Pages/Portfolio";
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
  //Store scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  //Store language choice
  let [language, setLanguage] = useState();

  const handleSetLanguage = (languageToSet) => {
    setLanguage(languageToSet)
    localStorage.setItem(language, languageToSet)
  }

  useEffect(() => {
    //On first render check if language is in localStorage and set state. If not, set default EN.
    setLanguage(localStorage.getItem("language") || "EN");

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
        <DropdownMenu language={language} handleSetLanguage={handleSetLanguage} />
        <Navbar language={language} handleSetLanguage={handleSetLanguage} scrollPosition={scrollPosition} />
        <NavDots />
        <Hero language={language}/>
        <About language={language}/>
        <Portfolio language={language}/>
        <Contact language={language} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
