import { createContext } from "react";


export const ContextLineaForm = createContext({
    campos : {},
    lineaValida : ()=>{},
    handleCampoChange : ()=>{}
})