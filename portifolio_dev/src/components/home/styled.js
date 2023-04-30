import styled, { keyframes } from 'styled-components'

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width:60%;
  }
`;

export const BoxSection = styled.section`
height: 100vh;
max-width:100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
    font-size: calc( 16px + (24 - 16) * (110vw - 400px) / (800 - 400) );
    font-weight: 800;
    font-family: ${props => props.theme.text.fonts.heading};
    color: ${props => props.theme.text.titleColor};
    margin-top: 75px;
    overflow: hidden;
    white-space: nowrap;
    /* animation: ${typing} 4s steps(40, end) both; */
    text-align: center;
    margin-bottom: 50px;
}
p{
    font-size: ${props => props.theme.text.fontSizes.mediumParagraph};
    width:40vw;
    text-align: center;
    margin-bottom: 150px;
}
`

export const ImgComputer = styled.img`
height: auto;
width:40%;
z-index: 1;
`