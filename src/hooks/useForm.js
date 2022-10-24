import React, { useState } from 'react'

export const useForm = ( _defaultLineas = {} ) => {
    
    const [lineas, setLineas] = useState(_defaultLineas)

    const formValido = ()=> lineas.reduce( 
            (estado,linea) => estado || linea.esValida , 
            false
        );

    const handleLineaChange = ({idLinea , esValida , camposLinea  })=>{
        if( esValida ){
            setLineas({
                ...lineas,
                [idLinea] : {
                    ...camposLinea
                }
            })
        }
    }

    const reset = ()=>{
        setLineas(_defaultLineas);
    }


    return [lineas,handleLineaChange,formValido,reset];
}
