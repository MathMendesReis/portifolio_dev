import React from 'react'
import { BoxSkill, ContainerCards } from './styled'
import { Card } from './card'
import code from '../../assets/code.jpeg'
import simbolAndroid from '../../assets/simbolAndroid.jpeg'
import simbolNode from '../../assets/simbolNode.jpeg'
import simbolReact from '../../assets/simbolReact.jpeg'

export function Skils(params) {
    const skils = [
        {
            name_skil: "Desenvolvedor front-end",
            description: "Eu amo o desenvolvimento frontend porque é a área que permite que eu transforme minha criatividade em interatividade. Ao desenvolver o frontend, estou construindo a interface que os usuários finais verão e com a qual interagirão.",
            staks: ["Axios",
                "Bootstrap",
                "CSS",
                "HTML",
                "JavaScript",
                "React.js",
                "React Router",
                "Styled Components"],
            img:simbolReact
        },
        {
            name_skil: "Desenvolvedor Backend",
            description: "O desenvolvimento de um backend envolve a criação de um servidor que será responsável por gerenciar e entregar dados para a aplicação cliente, seja ela uma aplicação web ou mobile.",
            staks: ["Node.js",
                "MySQL",
                "SQL",
                "REST",
                "Restful",
                "Git",
                "Github",
                "Kanban",
                "Scrum",
                "Python",
                "TypeScript",
                "Knex"],
            img:simbolNode

        },
        
        {
            name_skil: "Desenvolvedor Mobile",
            description: "O desenvolvimento mobile permite que eu crie aplicativos que oferecem experiências interativas e imersivas diretamente na palma da mão dos usuários. É incrível ver uma ideia tomar forma e ganhar vida em um dispositivo móvel, tornando-se acessível para milhões de pessoas em todo o mundo.",
            staks: [
                "React Native",
                "Expo",
                "Flexbox",
                // "Redux",
                "TypeScript",
                // "Testes automatizados",
            ],
            img:simbolAndroid

        }
    ]
    return (
        <BoxSkill>
            <ContainerCards>
                {skils.map((skil, index) => (
                    <Card
                        key={index}
                        border={index === 1?"1px solid #E6ECF8":"none"}
                        borderRadius={index === 1?"0":"25"}
                        name_skil={skil.name_skil}
                        description={skil.description}
                        staks={skil.staks}
                        img={skil.img}
                    />
                ))}
            </ContainerCards>
        </BoxSkill>
    )
}