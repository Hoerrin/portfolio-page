import styled from "styled-components";
import Navbar from "Components/Navbar";
import NavDots from "Components/NavDots";
import Hero from "Pages/Hero";

const AppContainer = styled.main``;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <NavDots />
      <Hero />
    </AppContainer>
  );
}

export default App;
