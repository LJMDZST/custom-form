import { createContext } from "react";


export const ContextFormulario = createContext ({
    lineas : {},
    handleLineaChange : ()=>{},
    formValido : ()=>{},
    reset: ()=>{}
});