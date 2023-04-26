import React from "react";
import { BoxProjects, ContainerProjects } from "./styled";
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
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"",
        link_projeto:""

    },
    {
        name: "Fabríca de monstros",
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"",
        link_projeto:""

    },
    {
        name: "astro match",
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"",
        link_projeto:""

    },
    {
        name: "poke API",
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"",
        link_projeto:""

    },
    {
        name: "projeto intro web",
        description: "Projeto front end React desenvolvido no bootcamp Labenu!",
        link_repositorio:"",
        link_projeto:""
        
    },
]


export function Projects(params) {
    return (
        <BoxProjects>
            <h1>Meus projetos</h1>
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