import styled, { createGlobalStyle } from "styled-components";
import heroBg from "../assets/images/city.jpg"; 

export const GlobalStyle = createGlobalStyle`
/* Fontes personalizadas */
@font-face {
  font-family: 'BDScript';
  src: url('/fonts/BDScript-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Beaumaris';
  src: url('/fonts/BeaumarisDemo-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'BDScript-Bold';
  src: url('/fonts/BDScript-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'HattonMedium';
  src: url('/fonts/PP_Hatton_Medium_500.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'HattonUltralight';
  src: url('/fonts/PP_Hatton_Ultralight_200.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}

/* Tipografia base */
body {
  margin: 0;
  font-family: 'Beaumaris', sans-serif;
  background-color: #fff;
}
`;


export const HeroSection = styled.section`
  background: url(${heroBg}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

// Conteúdo do lado esquerdo
export const HeroContent = styled.div`
  flex: 1;
  color: white;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
  margin-left: 2rem;          /* aumenta espaço do lado esquerdo */
`;

// Título estilizado
export const HeroTitle = styled.h1`
  font-family: 'BDScript';
  font-size: 4rem;
  font-weight: normal;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
`;


// Subtítulo
export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
`;

// Caixa do formulário lado direito
export const HeroFormBox = styled.div`
  flex: 1;
  background: rgba(255,255,255,0.85);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  margin-right: 2rem;      /* aumenta espaço do lado direito */
`;
// Input do formulário
export const HeroInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

// Botão do formulário
export const HeroButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;
