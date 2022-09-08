import { useContext } from "react"
import { ContextFormulario } from "../contexts/ContextFormulario"

export const useContextForm = ()=>{
    const {
        lineas,
        handleLineaChange,
        formValido,
        reset 
    } = useContext(ContextFormulario);

    return {
        lineas,
        handleLineaChange,
        formValido,
        reset
    };
}