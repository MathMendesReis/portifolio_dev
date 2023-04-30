import styled,{ keyframes } from "styled-components";



export const BoxHeader = styled.header`
width:100vw;
height: 70px;
padding: 1%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 75px;
padding-right: 60px;
background-color: ${props => props.theme.colors.background};
position: fixed;
top: 0;
z-index: 10;
img{
    height: 150px;
    width:auto;
}
div{
    display:flex;
    gap: 10px;
}
@media screen and (max-width: 765px) {
    padding: 0;
    align-items: center;
    div{
    display:flex;
    height: auto;
    flex-direction: column;
    background-color: aqua;
}
img{
    align-self: center;
}
div{
    display: none;
}
  }
`

export const ButtonStyled = styled.button`
    border: 2px solid ${props => props.theme.colors.backgroundSecundary};
    padding: 10px 25px 8px 25px;
    border-radius: 25px;
    min-width: 100px;
    text-transform: capitalize;
    font-size: ${props => props.theme.text.fontSizes.medium};
    cursor: pointer;
    color: ${props => props.theme.text.subTitleColor};
    background-color: ${props => props.theme.colors.background};
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    font-family: ${props=> props.theme.text.fonts.fontButton};
    
    &:hover {
     background-color: ${props => props.theme.colors.backgroundSecundary};
     color: ${props => props.theme.text.textWhite};
  }
`

export const ButtonHamburgue = styled.button`
    display: none;

    @media screen and (max-width: 765px) {
    /* display: block;
    height: 70px;
    width: 150px;
    border: none;
    cursor: pointer;
    color:transparent;
    span{
        height: 5px;
        width: 50px;
        background-color: black;
    } */
  }
`