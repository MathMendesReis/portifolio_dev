import React from "react";
import { BoxTitle, FooterBox } from "./styled";
import Button from 'react-bootstrap/Button';
import { FaGithub, FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import logotipo from '../../assets/logotipoWhite.png'


export function Footer(params) {
    return (
        <FooterBox>
            {/* <BoxTitle>
                <div>
                    <h1>de uma olhada nas minhas redes-sociais </h1>
                </div>
            </BoxTitle> */}
            {/* <img src={logotipo} alt="logotipo" /> */}
            <div>
                <button >
                    <FaGithub color="white" fontSize={35} />
                    <a href="https://github.com/MathMendesReis" target="blank">
                        GitHub
                    </a>
                </button>


                <button >
                    <FaInstagram color="white" fontSize={35} />
                    <a href="https://www.instagram.com/matheusmendesreis/?next=%2F" target="blank">
                        instagram
                    </a>
                </button>
                <button >
                    <FaLinkedinIn color="white" fontSize={35} />
                    <a href="https://www.linkedin.com/in/matheus-mendes-reis/" target="blank">
                    linkedin
                    </a>
                </button>
            </div>

        </FooterBox>
    )
}