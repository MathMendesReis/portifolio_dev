import styled from 'styled-components'

export const BoxAbout_me = styled.div`
background-color: ${props => props.theme.colors.backgroundSecundary};
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
color: ${props => props.theme.text.textWhite};
padding-top: 110px;
p{
    width: 50vw;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.7;

}
h1{
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: 1000;

}
`