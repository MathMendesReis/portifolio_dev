import React from 'react'
import { CardStyled } from './styled'

export function Card({name_skil,description,staks,img,border}) {
    return (
        <CardStyled border = {border}>
            <img src={img}/>
            <h1>{name_skil}</h1>
            <p>{description}</p>
            <ul>
                {staks.sort().map((stak)=>(
                    <li>{stak}</li>
                ))}
            </ul>
        </CardStyled>
    )
}