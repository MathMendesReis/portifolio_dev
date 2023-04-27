import React from "react";
import logotipo from '../../assets/logotipo.png'
import { BoxHeader, ButtonStyled } from "./styled";

export function Header() {
    const handleClick = (posicao) => {
        window.scrollTo({
          top: posicao,
          behavior: 'smooth'
        });
      };

    
    return (
        <BoxHeader>
            <img src={logotipo} alt="logotipo" />
            <div>
                <ButtonStyled onClick={()=>handleClick(0)}>home</ButtonStyled>
                <ButtonStyled onClick={()=>handleClick(600)}>sobre mim</ButtonStyled>
                <ButtonStyled onClick={()=>handleClick(1900)}>projetos</ButtonStyled>
                {/* <ButtonStyled onClick={()=>handleClick(3000)}>contatos</ButtonStyled> */}
            </div>
        </BoxHeader>
    )
}