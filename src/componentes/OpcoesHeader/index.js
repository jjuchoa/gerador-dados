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

function OpcoesHeader() {
    return (
        <Opcoes>
          <Opcao><p>PROCESSOS</p></Opcao>
          <Opcao><p>CPF</p></Opcao>          
        </Opcoes>
    )
}

export default OpcoesHeader