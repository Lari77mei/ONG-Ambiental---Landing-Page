import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 0.5rem 0; /* mais fino */
  font-size: 0.8rem;
  z-index: 1000; /* sempre acima do conteúdo */
`;

export default function Footer() {
  return (
    <FooterContainer>
      ONG Ambiente © 2025 | contato: @ongambiente.org
    </FooterContainer>
  );
}
