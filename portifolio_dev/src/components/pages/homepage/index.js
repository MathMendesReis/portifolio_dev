import React from "react";
import { Home } from "../../home";
import { About_me } from "../../about_me";
import { Skils } from "../../skils";

export function Homepage(){
    return(
        <div>
            <Home/>
            <About_me/>
            <Skils/>
        </div>
    )
}