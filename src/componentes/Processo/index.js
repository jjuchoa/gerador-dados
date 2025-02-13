import Input from '../Input'
import styled from 'styled-components'
import GeraProcesso from '../GeraProcesso'
import { useState } from 'react'

const ProcessoContainer = styled.section`
    background-image: ${({ theme }) => theme.colors.background};
    color: #FFF;
    text-align: center;
    padding: 20px 0;
    width: ${({ theme }) => theme.sizes.width};
    height: ${({ theme }) => theme.sizes.height};
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: ${({ theme }) => theme.sizes.width};
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`;

const validar = require('../../validarNumeroProcesso');

function Processo() {
    const [resultadoValidacao, setresultadoValidacao] = useState('')

    return (
        <ProcessoContainer>
            <Titulo>Gerar e validar número do processo</Titulo>
            <Subtitulo>Validar número do processo</Subtitulo>
            <Input type='text' minLength={10} maxLength={25} required="required" 
                placeholder="Escreva aqui o número do processo"
                onInput={evento => setresultadoValidacao(validar(evento.target.value))}
            />
        <section className='resultado'>
            <Paragrafo>{ resultadoValidacao }</Paragrafo>
        </section>
        <section className='gerar'>
            <GeraProcesso />
        </section>
        </ProcessoContainer>

    )    
}

export default Processo