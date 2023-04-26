import React from "react";
import { Home } from "../../home";
import { About_me } from "../../about_me";
import { Skils } from "../../skils";
import { Projects } from "../../projects";

export function Homepage(){
    return(
        <body>
            <Home/>
            <About_me/>
            <Skils/>
            <Projects/>
        </body>
    )
}