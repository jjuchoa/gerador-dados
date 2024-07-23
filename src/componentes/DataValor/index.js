import styled from 'styled-components';
import validarProcesso from '../Validacao'

const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`


let dataAtual = new Date().getTime();
let resposta = validarProcesso('1807400-65.2024.4.03.6301');

function DataValor() {
    return (
        <section>
            <Paragrafo>{dataAtual}</Paragrafo>
            <Paragrafo>{resposta}</Paragrafo>
        </section>
    )
}

export default DataValor