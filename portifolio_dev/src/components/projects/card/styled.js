import styled from "styled-components";

export const ContainerCard = styled.div`
height: 400px;
width: 400px;
cursor: pointer;
transition: transform 0.3s ease-in-out;
border: 1px solid #E6ECF8;
border-radius: 25px;
opacity: 1;
&:hover{
    transform: scale(calc(100 / 95));
}

img{
    height: auto;
    width: 100%;
    border-radius: 25px;

}
`

export const ContainerFront = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
h1{
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: 1000;
    color: ${props => props.theme.text.titleColor};
    text-transform: capitalize;
}
`

export const ContainerBack = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
flex-direction: column;
padding: 15px;
h1{
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: 1000;
    color: ${props => props.theme.text.titleColor};
    text-transform: capitalize;
}

`