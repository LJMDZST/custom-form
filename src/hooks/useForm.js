import  { useState } from 'react';
import { armarEstructuraDataForm } from '../helpers/armarEstructuraDataForm';

export const useForm = ( _estadoInicial = {} ) => {
    
    const [campos, setCampos] = useState( armarEstructuraDataForm ( _estadoInicial) );

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
                value : value,
                valido : validarCampo(validity) 
            }
        })
    }


    const reset = ()=>{ setCampos(_estadoInicial) }


    return [campos,handleCampoChange,reset];
}
