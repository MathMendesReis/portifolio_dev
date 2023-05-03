import styled from 'styled-components'

export const FooterBox = styled.footer`
    height: 350px;
    /* margin-top: 550px; */
    background-color: ${props => props.theme.colors.backgroundSecundary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 60vh;
    @media screen and (max-width: 963px) {
        margin-top: 0.5vh;
}
    
    div{
        display: flex;
        a{
            text-decoration: none;
            color: white;
        }
    }

    img{
        height: auto;
        width: 170px;
        mix-blend-mode: multiply;

    }

    button{
        background-color: transparent;
        color: white;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 15px 5px 15px;
        font-weight: 800;
        border: none;
        margin: 7px;
        font-size: ${props => props.theme.text.fontSizes.medium};
        cursor: pointer;
        text-transform:capitalize;
    }

    @media screen and (max-width: 904px) {
    position: absolute;
    top: 5500px;
  }
`

export const BoxTitle = styled.div`
    background-color: transparent;
    height: 25vh;
    width: 100vw;
    
    div{
    background: ${props => props.theme.text.titleColor};
    height: 30vh;
    width: 60%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    top: -150px;
    h1{
    text-transform: capitalize;
    }
    }
`