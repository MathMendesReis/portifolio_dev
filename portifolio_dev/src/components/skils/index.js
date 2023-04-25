import React from 'react'
import { BoxSkill, ContainerCards } from './styled'
import { Card } from './card'

export function Skils(params) {
    const skils = [
        {
        name_skil:"Desenvolvedor front-end",
        description:"Eu amo o desenvolvimento frontend porque é a área que permite que eu transforme minha criatividade em interatividade. Ao desenvolver o frontend, estou construindo a interface que os usuários finais verão e com a qual interagirão.",
        staks:["Javascript","React JS"]
    },
        {
        name_skil:"Desenvolvedor Backend",
        description:"O desenvolvimento de um backend envolve a criação de um servidor que será responsável por gerenciar e entregar dados para a aplicação cliente, seja ela uma aplicação web ou mobile.",
        staks:["Javascript","React JS"]
    },
        {
        name_skil:"Desenvolvedor Mobile",
        description:"O desenvolvimento mobile permite que eu crie aplicativos que oferecem experiências interativas e imersivas diretamente na palma da mão dos usuários. É incrível ver uma ideia tomar forma e ganhar vida em um dispositivo móvel, tornando-se acessível para milhões de pessoas em todo o mundo.",
        staks:["Javascript","React JS"]
    }
]
    return(
        <BoxSkill>
            <ContainerCards>
               {skils.map((skil)=>(
                <Card 
                name_skil = {skil.name_skil}
                description = {skil.description}
                staks = {skil.staks}
                />
               ))}
            </ContainerCards>
        </BoxSkill>
    )
}