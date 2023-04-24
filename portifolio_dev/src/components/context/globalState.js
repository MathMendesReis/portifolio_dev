import React from "react";
import { GlobalContext} from "./context";

export function GlobalState({children}) {
    const data={}
    return(
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    )
}