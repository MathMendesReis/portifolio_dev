import React, { useState } from "react";
import logotipo from '../../assets/logotipo.png'
import { BoxHeader, ButtonHamburgue, ButtonStyled } from "./styled";

export function Header() {
    const handleClick = (posicao) => {
        window.scrollTo({
          top: posicao,
          behavior: 'smooth'
        });
      };

const [displayButton , setDisplayButton] = useState(true)
    return (
        <BoxHeader>
            <img src={logotipo} alt="logotipo" />
            <div>
                {displayButton === true?
                    <ButtonHamburgue>
                      <span></span>
                      <span></span>
                      <span></span>
                    </ButtonHamburgue>
                    :
                    <ButtonHamburgue >
                        X
                    </ButtonHamburgue>
                }
                <ButtonStyled onClick={()=>handleClick(0)} >home</ButtonStyled>
                <ButtonStyled onClick={()=>handleClick(600)}>sobre mim</ButtonStyled>
                <ButtonStyled onClick={()=>handleClick(1900)}>projetos</ButtonStyled>
            </div>
        </BoxHeader>
    )
}