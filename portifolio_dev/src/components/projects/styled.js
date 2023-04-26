import styled from "styled-components"




export const BoxProjects = styled.div`
    height: 100vh;
    padding: 50px;
    margin-top: 50px;
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    background-color: yellow;
    margin-bottom: 50px;
    background-color: ${props => props.theme.colors.backgroundSecundary};


h1{
    margin-bottom: 100px;
    color: ${props => props.theme.text.textWhite};
    font-weight: 1000;
    font-size: calc( 16px + (24 - 16) * (50vw - 400px) / (800 - 400) );
}

`
export const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-left: 1px solid #E6ECF8;
    margin-bottom: 50px;
    border-radius: 25px;
    justify-content: center;
    
`
