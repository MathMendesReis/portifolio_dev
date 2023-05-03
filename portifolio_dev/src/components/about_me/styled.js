import styled from 'styled-components'

export const BoxAbout_me = styled.div`
background-color: ${props => props.theme.colors.backgroundSecundary};
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
color: ${props => props.theme.text.textWhite};
padding-top: 110px;
width: 100%;
width: 100%;
p{
    width: 50vw;
    text-align: center;
    line-height: 1.7;
    margin-bottom: 80px;
    font-size: calc( 16px + (24 - 16) * (40vw - 400px) / (800 - 400) );
}
h1{
    font-size: calc( 16px + (24 - 16) * (70vw - 400px) / (800 - 400) );
    margin-bottom: 40px;
    font-weight: 1000;
}
`