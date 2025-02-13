import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'

const PesquisaContainer = styled.section`
    background-image: ${({ theme }) => theme.colors.background};
    color: #FFF;
    text-align: center;
    padding: 20px 0;
    width: ${({ theme }) => theme.sizes.width};
    height: ${({ theme }) => theme.sizes.height};
`;

const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`;

const validar = require('../../validarNumeroProcesso');

function Pesquisa() {
    const [resultadoValidacao, setresultadoValidacao] = useState('')

    return (
        <PesquisaContainer>
            <Input type='text' minLength={10} maxLength={25} required="required"
                onInput={evento => setresultadoValidacao(validar(evento.target.value))}
            />
        <section>
            <Paragrafo>{ resultadoValidacao }</Paragrafo>
        </section>
        </PesquisaContainer>

    )    
}

export default Pesquisa