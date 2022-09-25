import styled from "styled-components";
import Navbar from "Components/Navbar";
import Hero from "Pages/Hero";

const AppContainer = styled.main``;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
    </AppContainer>
  );
}

export default App;
