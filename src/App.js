import styled, { ThemeProvider } from "styled-components";
import Navbar from "Components/Navbar";
import NavDots from "Components/NavDots";
import DropdownMenu from "Components/DropdownMenu";
import Hero from "Pages/Hero";
import About from "Pages/About";
import Portfolio from "Pages/Portfolio";
import Contact from "Pages/Contact";
import { useState } from "react";


const AppContainer = styled.main``;

const theme = {
  black: "#0D0D0D",
  white: "#d9d9d9",
  gray: "#101010",
  lightGray: "#171717",
  accent: "#3babb9",
};

function App() {
  
  //Store language choice
  let [language, setLanguage] = useState(localStorage.getItem("language") || "EN");

  const handleSetLanguage = (languageToSet) => {
    setLanguage(languageToSet);
    localStorage.setItem("language", languageToSet);
  };

  

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <DropdownMenu language={language} handleSetLanguage={handleSetLanguage} />
        <Navbar
          language={language}
          handleSetLanguage={handleSetLanguage}
        />
        <NavDots />
        <Hero language={language} />
        <About language={language} />
        <Portfolio language={language} />
        <Contact language={language} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
