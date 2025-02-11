import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: left;
`

function Header({ onProcessoClick, onCPFClick  }) {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader onProcessoClick={onProcessoClick} onCPFClick={onCPFClick} />   
        </HeaderContainer>
    )
}

export default Header