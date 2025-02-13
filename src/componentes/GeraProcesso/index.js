import styled from 'styled-components'
import Input from '../Input'
import Botao from '../Botao'
import { useState } from 'react'

const GerarContainer = styled.section`
    background-image: ${({ theme }) => theme.colors.background};
    color: #FFF;
    text-align: center;
    padding: 20px 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction:column;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const Resultado = styled.div`
    justify-content: center;
    align-itens: center;
    margin-bottom: 20px;
    width: 100vw;
    height: 0vh;

    p {
        width: 1000px;
        display: contents;
    }
`;

const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`;

const SectionOption = styled.section`
    display: flex!important;
    flex-direction:row;
    width: 100%;
    justify-content: center;
`;

const gerar = require('../../gerarNumeroProcesso');

function VerificaValor(valor) {
    console.log(valor);
    if (valor < 1) {
        valor = 1;
        return valor;
    } else {
        return valor;
    }
}

function GeraProcesso() {
    const [numeroGerado, setnumeroGerado] = useState([]);

    return (        
        <GerarContainer>
            <Subtitulo>Gerar número do processo</Subtitulo>
            <SectionOption>            
                <Input 
                    id='faixa' 
                    maxLength={3} 
                    required="required" 
                    tamanho="200px"
                    placeholder="Faixa"
                />
                <Input 
                    id='quantidade'
                    type='number' 
                    maxLength={3} 
                    required="required"
                    tamanho="200px"
                    placeholder="Quantidade"
                    margem= "0px 20px 10px 20px"
                />
                <Botao 
                    class='br-button primary'
                    type='button'
                    onClick = {evento => 
                        setnumeroGerado(
                            gerar(
                                VerificaValor(document.getElementById('faixa').value), 
                                VerificaValor(document.getElementById('quantidade').value)
                                ))}>
                    Gerar
                </Botao>
            </SectionOption>
            { numeroGerado.map( numero => (
                <Resultado>
                    <p>{ numero}</p>
                </Resultado>                
            ) ) }            
        </GerarContainer>

    )    
}

export default GeraProcesso