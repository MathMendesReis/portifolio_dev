import React from "react";
import logotipo from '../../assets/logotipo.png'
import { BoxHeader, ButtonStyled } from "./styled";

export function Header(params) {
    return(
        <BoxHeader>
            <img src={logotipo} alt="logotipo"/>
            <div>
                <ButtonStyled>???</ButtonStyled>
            </div>
        </BoxHeader>
    )
}