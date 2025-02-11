import styled from 'styled-components'

const Opcoes = styled.ul`
  display: flex;
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

//const textoOpcoes = ['PROCESSO', 'CPF']

function OpcoesHeader({ onProcessoClick, onCPFClick }) {
    return (
        <Opcoes>
          <Opcao onClick={onProcessoClick}>PROCESSOS</Opcao>
          <Opcao onClick={onCPFClick}>CPF</Opcao>          
        </Opcoes>
    )
}

export default OpcoesHeader