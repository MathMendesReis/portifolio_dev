import styled from "styled-components";

export const ContainerCard = styled.div`
height: 350px;
width: 350px;
cursor: pointer;
transition: transform 0.3s ease-in-out;
border: 1px solid #E6ECF8;
border-radius: 25px;
opacity: 1;
@media screen and (max-width: 535px) {
    height: 350px;
    width: 350px;
}
h1{
    font-size: calc( 16px + (24 - 16) * (70vw - 400px) / (800 - 400) );

}

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
background: ${props => props.theme.text.titleColor};
border-radius: 5%;

h1{
    font-size: calc( 16px + (24 - 16) * (60vw - 400px) / (800 - 400) );
    margin-bottom: 40px;
    font-weight: 1000;
    color: white;
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
gap:25px;
background: ${props => props.theme.text.titleColor};
border-radius: 5%;

h1{
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: 1000;
    color: white;
    text-transform: capitalize;
}
P{
    font-size: calc( 16px + (24 - 16) * (30vw - 400px) / (800 - 400) );
    width: 85%;
    text-align: center;
    height: 25vh;
    color: white;
}
a{
color: white;
    
}

button{
    position:relative;
    left:180px;
    padding: 3px;
    border: none;
    background-color: transparent;
    
}



`