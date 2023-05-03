import styled from "styled-components"




export const BoxProjects = styled.div`
    height: 100vh;
    padding: 50px;
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-wrap: nowrap;
    gap: 20%;
    flex-direction: column;
    align-items: center;
    background-color: yellow;
    margin-bottom: 50px;
    background-color: ${props => props.theme.colors.backgroundSecundary};
`
export const ContainerProjects = styled.div`
    display: flex;
    height: auto;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    background-color:#F8F8FF;
    border-left: 1px solid #E6ECF8;
    border-radius: 25px;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 25px;
    padding-right: 25px;
    width: 80vw;
    h1{
    margin-bottom: 100px;
    color: ${props => props.theme.text.textWhite};
    font-weight: 1000;
    font-size: calc( 16px + (24 - 16) * (70vw - 400px) / (800 - 400) );
}
    
`
export const TitleCard = styled.h1`
    /* margin-bottom: 100px; */
    color: ${props => props.theme.text.textWhite};
    font-weight: 1000;
    font-size: calc( 16px + (24 - 16) * (70vw - 400px) / (800 - 400) );
    
`