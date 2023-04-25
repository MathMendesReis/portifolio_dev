import React from 'react'
import { CardStyled } from './styled'

export function Card({name_skil,description,staks}) {
    return (
        <CardStyled>
            <img/>
            <h1>{name_skil}</h1>
            <p>{description}</p>
            <ul>
                {staks.map((stak)=>(
                    <li>{stak}</li>
                ))}
            </ul>
        </CardStyled>
    )
}