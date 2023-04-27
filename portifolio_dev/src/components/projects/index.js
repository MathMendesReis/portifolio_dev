import React from "react";
import { BoxProjects, ContainerProjects, TitleCard } from "./styled";
import { CardProjects } from "./card";
import code from '../../assets/code.jpeg'
import logoLabecommerce from '../../assets/logoLabecommerce.png'
import Palavrasecretas from '../../assets/Palavrasecretas.png'

const projects = [
    {
        name: "labe-eccomerc",
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"https://github.com/MathMendesReis/projeto-frontendreact",
        link_projeto:"https://projeto-frontendreact-ctip-gq1ru7k7x-mathmendesreis.vercel.app/"
    },
    {
        name: "palavras secretas",
        description: "Aplicação que reproduz um joguinho de acertar palavras.",
        link_repositorio:"https://github.com/MathMendesReis/SecretWorlds",
        link_projeto:"https://loja-virtual-zqvn-git-master-mathmendesreis.vercel.app/"

    },
    {
        name: "Fabríca de monstros",
        description: "Projeto que visa criar uma pagina de uma academia. ",
        link_repositorio:"https://github.com/MathMendesReis/loja-virtual",
        link_projeto:"https://loja-virtual-git-main-mathmendesreis.vercel.app/"

    },
    {
        name: "astro match",
        description: "Um clone do Tinder!",
        link_repositorio:"https://github.com/MathMendesReis/AstroMath",
        link_projeto:"https://astromatchmatheusmendes.surge.sh/"

    },
    {
        name: "poke API",
        description: "Uma pagina que mostra dados de alguns Pokemons.",
        link_repositorio:"https://github.com/MathMendesReis/projeto-react-apis",
        link_projeto:"https://poke-api-matheus-mendes.surge.sh/"

    },
    {
        name: "projeto intro web",
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"https://github.com/MathMendesReis/projeto-intro-web",
        link_projeto:""
        
    },
]


export function Projects(params) {
    return (
        <BoxProjects>
            <TitleCard>Meus projetos</TitleCard>
            <ContainerProjects>
                {projects.map((project) => (
                    <CardProjects 
                    name={project.name} 
                    description={project.description}
                    link_repositorio={project.link_repositorio}
                    link_projeto={project.link_projeto}
                    />
                ))}

            </ContainerProjects>

        </BoxProjects>
    )
}