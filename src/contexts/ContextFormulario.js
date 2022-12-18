import { createContext } from "react";


export const ContextFormulario = createContext ({
    campos : {},
    handleCampoChange: ()=>{},
    reset : ()=>{}
});