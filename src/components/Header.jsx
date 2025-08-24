// src/components/Header.jsx
import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  height: 80px;         // ajusta conforme o design
  width: 100%;
  background: rgba(100, 159, 207, 0.77);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  z-index: 1000;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  max-width: 80%;           /* limita a largura do nav */
  flex-wrap: wrap;           /* quebra linhas se necessário */
  overflow-x: auto;          /* scroll horizontal se necessário */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    white-space: nowrap;     /* evita quebra de palavra */
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover {
    color: #144631ff;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    gap: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;          /* espaço entre a imagem e o texto */
`;

const LogoImage = styled.img`
  width: 80px;     
  height: 80px;
  object-fit: contain;
`;


export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src="/save.svg" alt="Logo ONG Ambiental" />
        <Logo>ONG Ambiental</Logo>
      </LogoContainer>
      <Nav>
        <a href="#hero">Início</a>
        <a href="#about">Sobre</a>
        <a href="#form">Voluntários</a>
        <a href="#contact">Contato</a>
      </Nav>
    </HeaderContainer>
  );
}

