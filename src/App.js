import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import GeraProcesso from './componentes/GeraProcesso';
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
        <Pesquisa/>
        <GeraProcesso />
      </ConteudoContainer>
    </AppContainer>
  );
}

export default App
