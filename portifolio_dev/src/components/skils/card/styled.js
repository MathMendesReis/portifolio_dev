import styled from "styled-components";

export const CardStyled = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
/* border: 2px solid blue; */
border-left: 1px solid #E6ECF8;
padding: 15px;
align-items: center;
justify-content: space-around;

h1{
    font-size: calc( 16px + (24 - 16) * (50vw - 400px) / (800 - 400) );
    width: 100%;
    text-align: center;
    color: ${props => props.theme.text.titleColor};
    height: 5vh;
}
p{
    font-size: calc( 16px + (24 - 16) * (30vw - 400px) / (800 - 400) );
    width: 85%;
    text-align: center;
    height: 25vh;
}
ul{
    height: 25vh;

}
img{
    height: 5vh;

}
`