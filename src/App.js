import React from "react";
import styled from "styled-components";
import { GlobalStyle } from './styles/StyledComponents';
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
        <Hero /> 
        <Container>
       </Container>      
      <Footer />

    </>
  );
}

export default App;
