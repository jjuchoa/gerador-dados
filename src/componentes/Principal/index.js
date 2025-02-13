import styled from 'styled-components';
import Processo from '../Principal';
import CPF from '../CPF';

const ConteudoContainer = styled.div`
    display: flex flex-colum;
    flex-direction: column;
    width: ${({ theme }) => theme.sizes.width};
    height: ${({ theme }) => theme.sizes.height};
`;

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