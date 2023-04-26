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
        // onMouseOut={()=>{notShowDetails()}}
        >
            {detailsProjects === false ? 
            <ContainerFront>
                <h1>{name}</h1>
            </ContainerFront> 
            : 
            <ContainerBack>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{link_repositorio}</p>
                <p>{link_projeto}</p>
            </ContainerBack>}
        </ContainerCard>
    )
}