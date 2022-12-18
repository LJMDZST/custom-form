import { useContext } from "react"
import { ContextFormulario } from "../contexts/ContextFormulario"

export const useContextForm = ()=>{
    const {
        campos,
        handleCampoChange,
        reset 
    } = useContext(ContextFormulario);

    return {
        campos,
        handleCampoChange,
        reset 
    };
}