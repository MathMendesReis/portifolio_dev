import styled,{ keyframes } from "styled-components";



export const BoxHeader = styled.header`
width:100vw;
height: auto;
padding: 1%;
display: flex;
justify-content: space-between;
align-items: center;
img{
    height: 120px;
    width:auto;
}
`

export const ButtonStyled = styled.button`
    border: 2px solid ${props => props.theme.colors.backgroundSecundary};
    padding: 10px 25px 8px 25px;
    border-radius: 25px;
    width: 100px;
    text-transform: capitalize;
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.text.subTitleColor};
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    &:hover {
     background-color: ${props => props.theme.colors.backgroundSecundary};
     color: ${props => props.theme.text.textWhite};
  }
`