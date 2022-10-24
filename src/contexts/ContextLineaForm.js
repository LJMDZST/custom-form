import { createContext } from "react";


export const ContextLineaForm = createContext({
    campos : {},
    lineaValida : ()=>{},
    reset : ()=>{},
    handleCampoChange : ()=>{}
})