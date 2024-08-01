import Header from './componentes/Header';
import Processo from './componentes/Processo';
import CPF from './componentes/CPF';
import styled from 'styled-components';


const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg,#002F52 35%, #326589 165%);
`
const ConteudoContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 50vh;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <ConteudoContainer>
        <Processo/>
      </ConteudoContainer>
      <ConteudoContainer>
        <CPF/>
      </ConteudoContainer>
    </AppContainer>
  );
}

export default App
