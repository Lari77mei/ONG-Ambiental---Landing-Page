import React from "react";
import styled from "styled-components";
import heroBg from "../assets/images/city.jpg";

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-top: 100px; // espaço suficiente para o Header fixo
  height: calc(100vh - 100px); // altura total da tela menos header
  background: url(${heroBg}) no-repeat center/cover;

 @media (max-width: 1024px) {
    flex-direction: row;             // mantém horizontal
  }

  @media (max-width: 768px) {
    flex-direction: column;        // empilha quando for muito pequeno
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: auto;                // permite empilhar verticalmente no mobile

  }
`;

const HeroContent = styled.div`
  flex: 1;
  color: white;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  max-width: 600px;
  margin-left: 2rem;         // margem suave à esquerda 

  @media (max-width: 1024px) {
    text-align: center;
    margin: 0 0 0;     //  centraliza no tablet 
  }

    @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'BDScript';
  font-size: 6rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  margin-bottom: 1rem;

  @media (max-width: 1024px) { font-size: 4.5rem; }
  @media (max-width: 768px) { font-size: 3.5rem; }
  @media (max-width: 480px) { font-size: 2.5rem; }
`;

const H2 = styled.p`
  font-family: 'HattonUltralight';

  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) { font-size: 2em; }
  @media (max-width: 768px) { font-size: 2rem; }
  @media (max-width: 480px) { font-size: 2.5rem; }
`;

const HeroSubtitle = styled.p`
  font-family: 'HattonMedium', sans-serif;
  font-size: 1.5rem;
  max-width: 600px;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);

  @media (max-width: 768px) { font-size: 1.2rem; }
  @media (max-width: 480px) { font-size: 1rem; }
`;

const ButtonPrimary = styled.button`
  font-family: 'HattonMedium', sans-serif;
  background-color: #2b9286ff;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover { background-color: #25887cff; }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const HeroFormBox = styled.div`
  flex: 1;
  background: rgba(255,255,255,0.9);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  max-width: 400px;
  margin-right: 2rem;         // margem suave à direita 

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 0 0;             // remove margem lateral no tablet
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 90%;            // ocupa a maior parte da tela no mobile
 
  }
`;

const HeroInput = styled.input`
  width: 93%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const HeroButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #2a9d8f;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #3fa89cff;
  }
`;



const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle>Plante o Futuro</HeroTitle>
      <HeroSubtitle>Transformando áreas urbanas em espaços verdes e saudáveis.</HeroSubtitle>
      <ButtonPrimary>Doe Aqui! </ButtonPrimary>
    </HeroContent>

      <HeroFormBox>
      <H2>Seja Voluntário</H2>
       <form>
        <HeroInput type="text" placeholder="Nome" required />
        <HeroInput type="email" placeholder="E-mail" required />
        <HeroInput type="tel" placeholder="Telefone" required />
        <HeroButton type="submit">Quero Ajudar</HeroButton>
       </form>
      </HeroFormBox>
  </HeroSection>
);

export default Hero;
