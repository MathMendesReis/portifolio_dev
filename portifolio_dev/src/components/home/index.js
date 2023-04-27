import { BoxSection, ImgComputer } from "./styled";
import myFace from '../../assets/myFace.png'
import computers from '../../assets/computers.jpeg'


export function Home(params) {
    return (
        <BoxSection>
            <h1>Desenvolvedor Web Full Stack</h1>
            <p>Sou apaixonado por criar sites e aplicativos e me sinto muito realizado com o que faço!

</p>
            {/* <ImgComputer src={computers} alt="" /> */}

        </BoxSection>
    )
}