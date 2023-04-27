import React, { useState } from "react";
import { ContainerBack, ContainerCard, ContainerFront } from "./styled";

export function CardProjects({ name,description,link_repositorio,link_projeto }) {
    const [detailsProjects, setDetailsProjects] = useState(false)

    function showDetails(params) {
        setDetailsProjects(true)
    }
    function notShowDetails(params) {
        setDetailsProjects(false)
    }

    return (
        <ContainerCard 
        onClick={()=>{showDetails()}} 
        onMouseLeave={()=>{notShowDetails()}}
        >
            {detailsProjects === false ? 
            <ContainerFront>
                <h1>{name}</h1>
            </ContainerFront> 
            : 
            <ContainerBack>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>  <a href={link_projeto} target="blanck">Link de demonstração do projeto</a></p>
                <p>  <a href={link_repositorio} target="blanck">Link do repositorio</a></p>
            </ContainerBack>}
        </ContainerCard>
    )
}