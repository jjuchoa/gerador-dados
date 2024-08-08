import Header from './componentes/Header';
import Processo from './componentes/Processo';
import CPF from './componentes/CPF';
import styled from 'styled-components';


const AppContainer = styled.div`
      width: 100vw;
      height: 85vh;
      background-image: linear-gradient(90deg,#002F52 35%, #326589 165%);
`
const ContainerAgrupador = styled.div`
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100%;
`
const ConteudoContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100%;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <ContainerAgrupador>
        <ConteudoContainer>
          <Processo/>
        </ConteudoContainer>
        <ConteudoContainer>
          <CPF/>
        </ConteudoContainer>
      </ContainerAgrupador>
    </AppContainer>
  );
}

export default App
