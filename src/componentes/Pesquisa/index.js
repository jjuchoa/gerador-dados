import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'

const PesquisaContainer = styled.section`
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