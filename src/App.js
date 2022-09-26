import styled, { ThemeProvider } from "styled-components";
import Navbar from "Components/Navbar";
import NavDots from "Components/NavDots";
import Hero from "Pages/Hero";
import About from "Pages/About";
import Portfolio from "Pages/Portfolio";
import Contact from "Pages/Contact";

const AppContainer = styled.main``;

const theme = {
  black: "#0D0D0D",
  white: "#d9d9d9",
  gray: "#101010",
  accent: "#3de0f2",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <NavDots />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;