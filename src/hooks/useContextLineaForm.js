import { useContext } from "react";
import { ContextLineaForm } from "../contexts/ContextLineaForm";

export const useContextLineaForm = ()=>{
    const {
       campos,
       lineaValida,
       handleCampoChange
    } = useContext(ContextLineaForm);

    return  {
        campos,
        lineaValida,
        handleCampoChange
     };
}