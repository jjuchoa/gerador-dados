import styled from 'styled-components'

const Paragrafo = styled.p`
    color: #FFF;
    font-size: 16px;
`


let dataAtual = new Date().getTime();

function DataValor() {
    return (
        <section>
            <Paragrafo>{dataAtual}</Paragrafo>
        </section>
    )
}

export default DataValor