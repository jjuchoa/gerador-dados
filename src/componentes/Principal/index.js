import styled from 'styled-components';
import Processo from '../Principal';
import CPF from '../CPF';

const ConteudoContainer = styled.div`
      display: flex flex-colum;
      flex-direction: column;
      width: 100vw;
      height: 50vh;
`

function Principal() {
    return (
        <ConteudoContainer>
            <section>
                <CPF/>
            </section>
            <section>
            <   Processo/> 
            </section>
        </ConteudoContainer> 
    )    
}

export default Principal