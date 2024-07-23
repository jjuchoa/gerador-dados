import styled from "styled-components"

const Input = styled.input`
    order: 1px solide #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 0px;
    border-radius: 10px;
    width: 500px;
    height: 0px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &::placeholder {
        color: #FFF;
        font-size: 16px
    }
`

export default Input