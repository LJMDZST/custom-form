import { useContext } from "react";
import { ContextLineaForm } from "../contexts/ContextLineaForm";

export const useContextLineaForm = ()=>{
    const {
       campos,
       lineaValida,
       handleCampoChange,
       reset
    } = useContext(ContextLineaForm);

    return  ({
        campos,
        lineaValida,
        reset,
        handleCampoChange
     });
}