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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    margin-bottom: 20px;

    p {
        width: 200px;
    }
    
    img {
        width: 100px;
    }
`
const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`

const validar = require('../../ValidarNumeroProcesso');

function Pesquisa() {
    const [resultadoValidacao, setresultadoValidacao] = useState('')
    //let resposta = validar('1807400-65.2024.4.03.6301');
    //let resposta = validar(processo);

    return (
        <PesquisaContainer>
            <Titulo>Gerar e validar número do processo</Titulo>
            <Subtitulo>Validar número do processo</Subtitulo>
            <Input 
                placeholder="Escreva aqui o número do processo"
                onBlur={evento => setresultadoValidacao(validar(evento.target.value))}
            />
        <section>
            <Paragrafo>{ resultadoValidacao }</Paragrafo>
        </section>
        </PesquisaContainer>

    )    
}

export default Pesquisa