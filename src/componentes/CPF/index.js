import Input from '../Input';
import styled from 'styled-components';
import GeraCPF from '../GeraCPF';
import { useState } from 'react';

const ProcessoContainer = styled.section`
    background-image: linear-gradient(90deg,#002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 20px 0;
    height: 2701px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`

const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`

const validar = require('../../validarCPF');

function CPF() {
    const [resultadoValidacao, setresultadoValidacao] = useState('')

    return (
        <ProcessoContainer>
            <Titulo>Gerar e validar número do CPF</Titulo>
            <Subtitulo>Validar número do CPF</Subtitulo>
            <Input type='text' minLength={11} maxLength={14} required="required" 
                placeholder="Escreva aqui o número do CPF"
                onInput={evento => setresultadoValidacao(validar(evento.target.value))}
            />
        <section className='resultado'>
            <Paragrafo>{ resultadoValidacao }</Paragrafo>
        </section>
        <section className='gerar'>
            <GeraCPF />
        </section>
        </ProcessoContainer>

    )    
}

export default CPF