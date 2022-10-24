import { useState } from "react"

export const useLineaForm = (_defaultCampos = {}) => {
    
    const [campos, setCampos] = useState(_defaultCampos);

    const validarCampo = ({
        patternMismatch,
        rangeOverflow,
        rangeUnderflow,
        stepMismatch,
        tooLong,
        tooShort,
        typeMismatch,
        valid,
        valueMissing,
    })=>{
        let error = '';
        error += patternMismatch ? 'Caracteres no válidos' : ''; 
        error += rangeOverflow ? 'Valor muy alto': '';
        error += rangeUnderflow ? 'Valor muy bajo': '';
        error += (typeMismatch || stepMismatch) ? 'valor inválido': '';
        error += tooLong ? 'demasiados caracteres': '';
        error += tooShort ? 'faltan caracteres': '';
        error += valueMissing ? 'campo obligatorio': '' ;
      
        return ({
            valido : valid,
            msgError : error 
        })
    }

    const handleCampoChange = ({name,value,validity})=>{
        setCampos({
            ...campos,
            [name] : {
                value ,
                valido : validarCampo(validity) 
            }
        })
    }

    const lineaValida = ()=>Object.values(campos).reduce((estado,campo)=>estado || campo.valido,false);


    const reset = ()=>{ setCampos(_defaultCampos) }


    return [campos,lineaValida,handleCampoChange,reset];
}
