import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

function Logo(){
    return (
        <LogoContainer>
          <p><strong>INSSJUD</strong> Gerador</p>
        </LogoContainer>
    )
}

export default Logo