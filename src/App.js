import Header from './componentes/Header';
import DataValor from './componentes/DataValor'
import styled from 'styled-components'


const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg,#002F52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <DataValor />
    </AppContainer>
  );
}

export default App
