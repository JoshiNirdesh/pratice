import { createContext } from "react";

export const AppContext = createContext();


export const AppProvider = ({children})=>{

    const values = {}
    return(
        <AppContext.Provider value={values}>
                {children}
        </AppContext.Provider>
    )
}

