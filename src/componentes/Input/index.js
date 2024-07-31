import styled from "styled-components"

const Input = styled.input`
    order: 1px solide #FFF;
    background: #FFF;
    border: 2px solid #FFF;
    padding: 20px 0px;
    border-radius: 10px;
    width: ${props => props.tamanho || '500px;'};
    height: 0px;
    color: #000;
    font-size: 16px;
    margin: ${props => props.margem || '0px 0px 10px 0px;'};
    text-align: center;

    &:invalid {
        border-color: red !important;
    }
    &:valid {
    border-color: green !important;
    }

    &::placeholder {
        color: #000;
        font-size: 16px
    }

    & { 
        -moz-appearance: textfield;
        appearance: textfield;

    }
`

export default Input