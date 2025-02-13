import React, { useState } from 'react';
import Header from './componentes/Header';
import Processo from './componentes/Processo';
import CPF from './componentes/CPF';
import styled from 'styled-components';
import '@govbr-ds/core/dist/core.min.css';


const AppContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width};
  height: ${({ theme }) => theme.sizes.height};
  background-image: ${({ theme }) => theme.colors.background};
`;
const ContainerAgrupador = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({ theme }) => theme.sizes.width};
  height: 100%;
`;
const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.width};
  height: 100%;
`;

function App() {
  const [mostrarProcesso, setMostrarProcesso] = useState(false);
  const [mostrarCPF, setMostrarCPF] = useState(false);

  return (
    <AppContainer>
      <Header 
        onProcessoClick={() => {
          setMostrarProcesso(true);
          setMostrarCPF(false);
        }} 
        onCPFClick={() => {
          setMostrarProcesso(false);
          setMostrarCPF(true);
        }} 
      />
      {mostrarProcesso && (
        <ContainerAgrupador>
          <ConteudoContainer>
            <Processo />
          </ConteudoContainer>
        </ContainerAgrupador>
      )}
      {mostrarCPF && (
        <ContainerAgrupador>
          <ConteudoContainer>
            <CPF />
          </ConteudoContainer>
        </ContainerAgrupador>
      )}
      {!mostrarProcesso && !mostrarCPF && (
        <ContainerAgrupador>
          <ConteudoContainer>
            <Processo />
          </ConteudoContainer>          
        </ContainerAgrupador>
      )}
    </AppContainer>
  );
}

export default App
