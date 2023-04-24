import React from "react";
import logotipo from '../../assets/logotipo.png'
import { BoxHeader, ButtonStyled } from "./styled";

export function Header(params) {
    const buttons = [{
        text: "home",
    },
    {
        text: "projetos",
    },
    {
        text: "sobre mim",
    },
    {
        text: "contatos",
    }
    ]
    return (
        <BoxHeader>
            <img src={logotipo} alt="logotipo" />
            <div>
                {buttons.map((button) => (
                    <ButtonStyled>{button.text}</ButtonStyled>
                ))}
            </div>
        </BoxHeader>
    )
}